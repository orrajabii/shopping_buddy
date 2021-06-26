import config from '../config.js'
import db from '../Services/userService.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
// import Address from '../Services/Address.service.js'
const User = db.user;
const Role = db.role;

export function signup(req, res) {
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	});

	user.save(async (err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		// if (req.body.address) {
		// 	const address = await Address.add(req.body.address, {})
		// 	console.log(address._id);
		// 	if (address._id) {
		// 		const userAddresses = user.addresses ? user.addresses : []
		// 		user.addresses = [...userAddresses, address._id]
		// 		user.save(err => {
		// 			if(err) {
		// 				res.status(500).json({message: "Address adding problem"})
		// 				console.log(err.message);
		// 				return;
		// 			}
		// 		})
		// 	}
		// }

		if (req.body.roles) {
			Role.find(
				{
					name: { $in: req.body.roles }
				},
				(err, roles) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					user.roles = roles.map(role => role._id);
					user.save(err => {
						if (err) {
							res.status(500).send({ message: err });
							return;
						}

						res.send({ message: "User was registered successfully!" });
						return;
					});
				}
			);
		} else {
			Role.findOne({ name: "user" }, (err, role) => {
				if (err) {
					res.status(500).send({ message: err });
					return;
				}

				user.roles = [role._id];
				user.save(err => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					res.send({ message: "User was registered successfully!" });
					return
				});
			});
		}
	});
};

export function signin(req, res) {
	User.findOne({
		username: req.body.username
	})
		.populate("roles", "-__v")
		.exec((err, user) => {
			if (err) {
				res.status(500).send({ message: err });
				return;
			}

			if (!user) {
				return res.status(404).send({ message: "User Not found." });
			}

			var passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid Password!"
				});
			}

			var token = jwt.sign({ id: user.id }, config.secret, {
				expiresIn: 86400 // 24 hours
			});

			var authorities = [];

			for (let i = 0; i < user.roles.length; i++) {
				authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
			}
			res.status(200).send({
				id: user._id,
				username: user.username,
				email: user.email,
				roles: authorities,
				accessToken: token
			});
		});
};
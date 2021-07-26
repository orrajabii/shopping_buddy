import config from '../config.js'
import db from '../Services/userService.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { sendOtp, verify } from './twoFactorAuth.js';
const User = db.user;
const Role = db.role;

export function signup(req, res) {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	});

	user.save(async (err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

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
}

export function signin(req, res) {
	User.findOne({
		email: req.body.email,
	})
		.populate("roles", "-__v")
		.exec(async (err, user) => {
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
			await sendOtp(user.email, user._id);
			return res.status(200).json({ msg: `Otp Sent to your mail address : ${user.email}` })
		});
}

export const verifyOtp = async (req,res) => {
	const user = await User.findOne({email:  req.body.email }).populate("roles", "-__v")
	const isVerified = await verify(user._id, req.body.code);
	if(!isVerified) return res.status(400).json({ accessToken: null, msg : 'Code not matched! try again or try login again!' })
	var token = jwt.sign({ id: user.id }, config.secret, {
		expiresIn: 86400 // 24 hours
	});

	var authorities = [];

	for (let i = 0; i < user.roles.length; i++) {
		authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
	}

	res.status(200).json({
		id: user._id,
		authorities,
		email: user.email,
		accessToken: token,
	})
}
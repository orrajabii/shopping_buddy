import User from '../models/user.js';

const updateOne = async (id, updates, opt) => await User.updateOne(id, updates, opt);

export default {
    updateOne,
}
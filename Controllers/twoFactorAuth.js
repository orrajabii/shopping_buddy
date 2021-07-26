import { getOne, addOne, updateOne } from '../services/TwoFactorAuth.Service'
import sendMailOtp from '../services/Mailing.Service'

export const sendOtp = async (email, userId) => {
    const code = Math.floor(100000 + Math.random() * 900000)
    const data = {
        userId,
        code,
    }

    var auth = await getOne(userId)
    if (!auth) {
        auth = await addOne(data)
    }
    else auth = await updateOne(userId, code)
    await sendMailOtp(email, code)
    return;
}

export const verify = async (userId, code) => {
    const auth = await getOne(userId)
    if (!auth) return false
    if (auth.code != code) return false
    return true;
}
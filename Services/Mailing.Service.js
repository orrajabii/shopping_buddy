"use strict";
import { createTransport } from "nodemailer";

// eslint-disable-next-line no-undef
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

async function sendMailOtp(email, otp) {
    let transporter = createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: SMTP_USER, // generated ethereal user
            pass: SMTP_PASS, // generated ethereal password
        },
    });

    // send mail with defined transport object
    await transporter.sendMail({
        from: `"Shopping Buddy" ${SMTP_USER}`,
        to: email,
        subject: "Two Factor Authentication - OTP",
        text: `Your Otp is ${otp}`,
    });
}

export default sendMailOtp
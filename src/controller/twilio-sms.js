const { request } = require('express');

const {TWILIO_SERVICE_SID , TWILIO_ACCOUNT_SID ,TWILIO_AUTH_TOKEN } = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID , TWILIO_AUTH_TOKEN ,{
    lazyLoading: true
})


/**
 * send OTP
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const sendOTP = async(req, res, next) => {
    const {countryCode, phoneNumber} = req.body;

    try{

        const otpResponse = await client.verify._v2
        .services(TWILIO_SERVICE_SID )
        .verifications.create({
            to: `+${countryCode}${phoneNumber}`,
            Channel : "sms",
        });

        res.status(200).send(`OTP Sent SUcessfully !: ${json.stringify(otpResponse)}`);
    }catch(error) {
        res.status(error?.status || 400).send(error?.message || 'Something Went Wrong !');
    }
};

/**
 * verify OTP
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

const VerifyOTP = async(req, res, next) => {
    const {countryCode, phoneNumber, otp} = req.body;

    try{

        const verifiedResponse = await client.verify._v2
        .services(TWILIO_SERVICE_SID )
        .verificationChecks.create({
            to: `+${countryCode}${phoneNumber}`,
            code : otp,
        });
        res.status(200).send(`OTP Verified SUcessfully !: ${json.stringify(verifiedResponse)}`);
    }catch(error) {
        res.status(error?.status || 400).send(error?.message || 'Something Went Wrong !');
    }
}

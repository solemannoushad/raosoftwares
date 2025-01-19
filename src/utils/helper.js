// import { FROM_EMAIL, FROM_NAME, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from "@/constants/config";
// import nodemailer from "nodemailer";
export const removeHyphens = (input) => {
    return input.replace(/-/g, '');
  }


// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: SMTP_HOST,
//     port: SMTP_PORT,
//     auth: {
//       user: SMTP_USER,
//       pass: SMTP_PASS
//     }
//   });

//   const message = {
//     from: `${FROM_NAME} <${FROM_EMAIL}>`,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(message);
// };

// export default sendEmail;

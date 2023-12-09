// app/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const nodemailer = require('nodemailer');
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 25,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  });
}

// export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;
//     console.log(name, email, message);
//     // Configure Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: 'localhost',
//       port: 25,
//       secure: false,
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: email,
//       to: 'info@gasgolder.ee',
//       subject: `New Message from ${name}`,
//       text: message,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Error sending email' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end('Method Not Allowed');
//   }
// }

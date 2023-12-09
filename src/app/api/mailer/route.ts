const nodemailer = require('nodemailer');
import { NextRequest, NextResponse } from '../../../../node_modules/next/server';

export async function POST(req: NextRequest) {
  const json = await req.json();
  const { name, email, message } = json;

  const transporter = nodemailer.createTransport(
    {
      host: 'smtp.zone.eu',
      port: 465,
      secure: true,
      auth: {
        user: 'info@gasgolder.ee',
        pass: 'fudpex-johHo6-zikqem',
      },
    },
    { from: 'Test gasgolder.ee <info@gasgolder.ee>' }
  );

  const mailOptionsGasgolder = {
    // from: email,
    to: 'info@gasgolder.ee',
    subject: `New Test Message from ${name} ${email}`,
    text: message,
  };

  const mailOptionsCustomer = {
    from: 'info@gasgolder.ee',
    to: email,
    subject: `New Test Message from ${name} ${email}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptionsGasgolder);
    await transporter.sendMail(mailOptionsCustomer);
    return new NextResponse(JSON.stringify({ message: 'Success sending email' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

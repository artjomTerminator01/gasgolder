const nodemailer = require('nodemailer');
import { NextRequest, NextResponse } from '../../../../node_modules/next/server';

export async function POST(req: NextRequest) {
  // TODO
  // style form inputs - 1 DONE
  // customer and gasgolder email texts, product info - 1 - DONE
  // email just to contact - 1 DONE
  // services style - 2 - DONE
  // add texts - 2 - WHAIT for ezen
  // locals - 2
  // static images - 3
  // add products - 3
  // mobile - 3

  // in plans
  // fetch google sheet data for products

  //service description

  const json = await req.json();
  const { name, email, message, lang, productTitle } = json;

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
    { from: 'gasgolder.ee <info@gasgolder.ee>' }
  );

  const mailOptionsGasgolder = {
    // from: email,
    to: 'info@gasgolder.ee',
    subject: `UUS päring kasutajalt ${name},  ${email}`,
    text: message,
  };

  const mailOptionsCustomer = {
    from: 'info@gasgolder.ee',
    to: email,
    subject: `Järgmine sõnum oli eedukalt saadetud GasGolder-ile`,
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

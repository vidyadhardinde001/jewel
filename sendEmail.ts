import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, phone, message } = req.body;

    // Configure the nodemailer transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or app password
      },
    });

    // Email content
    const mailOptions = {
        from: process.env.GMAIL_USER, // Sender's email (your Gmail)
        to: 'siddhivinayakengineers19@gmail.com', // Recipient email
        subject: `Contact form submission from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      };
      

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

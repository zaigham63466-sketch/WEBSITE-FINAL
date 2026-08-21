import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendAdminNotification = async (leadData) => {
  try {
    const sourceLabel = leadData.source === 'inquiry' ? 'Inquiry' : 'Contact';
    const textBody = `New ${sourceLabel} Lead Received!

Name: ${leadData.name}
Email: ${leadData.email}
Phone: ${leadData.phone || 'N/A'}
Tour Interested: ${leadData.tour_interested || 'N/A'}
Group Size: ${leadData.group_size || 'N/A'}
Travel Dates: ${leadData.travel_dates || 'N/A'}
Message: ${leadData.message || 'N/A'}
`;

    await transporter.sendMail({
      from: `"K2 Adventure Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New ${sourceLabel} Lead: ${leadData.name}`,
      text: textBody
    });
  } catch (error) {
    console.error('Failed to send admin notification email:', error);
  }
};

export const sendCustomerConfirmation = async (leadData) => {
  try {
    const tourText = leadData.tour_interested ? ` regarding the ${leadData.tour_interested}` : '';
    const textBody = `Dear ${leadData.name},

Thank you for reaching out to K2 Adventure Pakistan! 

We have successfully received your inquiry${tourText}. Our team is currently reviewing your details and will get back to you within 24 hours (though usually much faster).

If you have any immediate questions, feel free to reply directly to this email or reach us on WhatsApp at +92 355 542 7999.

We look forward to adventuring with you!

Warm regards,
The K2 Adventure Team
Gilgit-Baltistan, Pakistan
`;

    await transporter.sendMail({
      from: `"K2 Adventure Pakistan" <${process.env.EMAIL_USER}>`,
      to: leadData.email,
      subject: `We've received your inquiry — K2 Adventure`,
      text: textBody
    });
  } catch (error) {
    console.error('Failed to send customer confirmation email:', error);
  }
};

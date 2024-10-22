import emailjs from "@emailjs/browser";

interface formDataInrFace {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  refFirstName?: string;
  refLastName?: string;
  [key: string]: any;
}

const sendEmail = async (serviceId : string, templateId : string, publicKey : string,  templateParams:formDataInrFace) => {
  try {
    emailjs.init(publicKey);
    const response = await emailjs.send(serviceId, templateId, templateParams);
    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email sending failed");
  }
};


export default sendEmail;

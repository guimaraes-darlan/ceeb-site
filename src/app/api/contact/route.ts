import { SendMailProps, ServiceMailService } from "../../../service/mail"
import { templateEmail } from "../../../service/template";

export async function POST(request: Request) {
  const formData = await request.json()

  const html = templateEmail({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    subject: formData.subject,
  });

  const mailProps: SendMailProps = {
    to: 'ceeuripedesbarsanulphosj@gmail.com',
    subject: `CEEB - Contato - ${formData.subject}`,
    data: {
      html,
    }
  }

  const mail = new ServiceMailService();
  await mail.send(mailProps)

  return Response.json({ message: 'success' })
}
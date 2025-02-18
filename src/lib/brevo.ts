import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.NEXT_PUBLIC_BREVO as string,
);

const smtpEmail = new brevo.SendSmtpEmail();

export async function sendEmail(data: contactType) {
  try {
    smtpEmail.subject = "Centro de Atención Estilo Sumaq";
    smtpEmail.to = [
      { email: "brayancclindo@gmail.com" },
      { email: "anyelaga19@gmail.com" },
    ];
    smtpEmail.htmlContent = `<html>
    <body>
    <h3>
Nuevo mensaje en la pagina de: ${data.firstName} - ${data.lastName}
    </h3>
    <p>mensaje: ${data.message}</p>
     <p>correo: ${data.email}</p>
    <a href='https://estilo-sumaq.vercel.app/'>
    Ir a la pagina web
    </a>
    </body>
    </html>`;
    // smtpEmail.cc = [{ email: "brayancclindo@gmail.com", name: "Brayan 2" }];
    smtpEmail.sender = {
      name: "Gracias por contactar a Estilo Sumaq",
      email: "brayancclindo@gmail.com",
    };
    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.log(error, "error");
  }
}

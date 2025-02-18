"use server";

import { sendEmail } from "@/lib/brevo";

// export const onSubmit = async (data: contactType) => {
//   await sendEmail(data);
// };

export async function onSubmit(data: contactType) {
  try {
    await sendEmail(data);
    return { success: true, message: "Mensaje enviado exitosamente" };
  } catch {
    return { success: false, message: "Error al enviar el mensaje" };
  }
}

export function generateWhatsAppMessage(cartItems: Product[]): string {
  let message =
    "Hola, me gustaría hacer un pedido con los siguientes productos:\n\n";
  let total = 0;

  cartItems.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    message += `${item.title} x${item.quantity} - S/. ${itemTotal.toFixed(2)}\n`;
    total += itemTotal;
  });

  message += `\nTotal: $${total.toFixed(2)}`;

  return encodeURIComponent(message);
}

export function getWhatsAppLink(message: string, phoneNumber: string): string {
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

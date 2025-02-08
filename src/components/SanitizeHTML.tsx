import { createElement, HtmlHTMLAttributes } from "react";
import sanitizeHtml from "sanitize-html";

type SanitizeHTMLProps = {
  tag: string;
  children: string;
} & HtmlHTMLAttributes<HTMLElement>;

function SanitizeHTML({ tag, children, ...rest }: SanitizeHTMLProps) {
  const sanitizedContent = sanitizeHtml(children, {
    allowedTags: ["b", "i", "em", "strong", "a", "li", "ul"], // Agrega "li" y "ul" a las etiquetas permitidas
    allowedAttributes: {
      a: ["href", "target", "rel"],
    },
    allowedClasses: {
      p: ["fancy", "simple"],
    },
  });

  return createElement(tag, { ...rest }, sanitizedContent);
}

export default SanitizeHTML;

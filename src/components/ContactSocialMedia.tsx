import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

function ContactCard({ icon, title, value, href }: ContactCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <Button
        asChild
        variant="default"
        className="h-auto w-full border-none bg-gray-100 p-4 shadow-lg transition-colors hover:bg-gray-200 hover:no-underline"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-left"
        >
          <div className="rounded-full bg-gray-200 p-2 transition-colors group-hover:bg-gray-100">
            {icon}
          </div>
          <div>
            <div className="font-medium text-slate-900">{title}</div>
            <div className="text-sm text-gray-500 group-hover:text-gray-600">
              {value}
            </div>
          </div>
          <Send className="ml-auto h-4 w-4 text-zinc-600 transition-colors group-hover:text-zinc-400" />
        </a>
      </Button>
    </Card>
  );
}
export default ContactCard;

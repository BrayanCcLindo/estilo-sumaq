import Link from "next/link";
import SocialShare from "./socialShare";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 md:flex-row">
        <div className="mb-4 md:mb-0">
          <Link
            href="/"
            className="mr-6 flex items-center justify-center space-x-2"
          >
            <Image
              alt="logo-footer"
              src={"/logo-sumaq.png"}
              width={300}
              height={300}
            />
          </Link>
          <p className="text-center text-gray-600 md:text-left">
            Artesanía y elegancia desde 2023
          </p>
        </div>
        <div className="flex space-x-4">
          <SocialShare />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

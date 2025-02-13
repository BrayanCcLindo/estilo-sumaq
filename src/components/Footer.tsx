import Link from "next/link";
import SocialShare from "./socialShare";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-start justify-between px-4 md:flex-row">
        <div className="mb-4 md:mb-0">
          <Link
            href="/"
            className="mr-6 flex items-center justify-start space-x-2"
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-xl font-bold text-transparent">
              SUMAQ
            </span>
          </Link>
          <p className="text-gray-600">Artesanía y elegancia desde 2023</p>
        </div>
        <div className="flex space-x-4">
          <SocialShare />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

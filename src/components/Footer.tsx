function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="mb-4 md:mb-0">
          <h4 className="mb-2 font-serif text-xl font-bold text-gray-800">
            Élégance
          </h4>
          <p className="text-gray-600">Artesanía y elegancia desde 2023</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-800"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-800"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-600 transition-colors hover:text-gray-800"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

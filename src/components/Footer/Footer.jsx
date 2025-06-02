import FooterLinks from "./FooterLinks";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <FooterLinks />

          <div
            
            className="mt-12 w-full border-t border-gray-800 pt-8 text-center"
          />
        </div>
      </div>

      <Footer2 />
    </footer>
  );
};

export default Footer;

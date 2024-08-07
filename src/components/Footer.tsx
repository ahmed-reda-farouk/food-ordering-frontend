import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 py-8 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-6">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <span className="text-2xl text-white font-extrabold tracking-wider">
            Foodo.com
          </span>
          <p className="text-sm text-white opacity-75 mt-2">
            Your go-to destination for delicious food.
          </p>
        </div>

        {/* About Us */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <h4 className="text-md text-white font-bold mb-2">About Us</h4>
          <p className="text-sm text-white opacity-75">
            We are committed to bringing you the best food experience with a variety of dishes to choose from.<br />Our mission is to make every meal a delightful experience.
          </p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <h4 className="text-md text-white font-bold mb-2">Contact Us</h4>
          <p className="text-sm text-white opacity-75">
            Phone: <a href="tel:+2014821864" className="hover:text-gray-200 transition-colors">+20 10 1482-1864</a>
          </p>
          <p className="text-sm text-white opacity-75">
            Email: <a href="mailto:info@foodo.com" className="hover:text-gray-200 transition-colors">info@foodo.com</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start flex-grow">
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/a7med.rf/" aria-label="Facebook" className="text-white hover:text-gray-200 transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-gray-200 transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-gray-200 transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/a7med-rf/" aria-label="LinkedIn" className="text-white hover:text-gray-200 transition-colors">
              <FaLinkedinIn size={18} />
            </a>
          </div>
          <div className="text-white text-sm text-center md:text-left">
            &copy; 2024 Foodo.com.<br />All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

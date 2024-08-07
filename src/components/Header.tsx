import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white via-orange-50 to-white shadow-md py-2">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center p-1 bg-white border border-orange-300 rounded-full shadow-sm transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="/images/logo.png"
            alt="Foodo Logo"
            className="h-10 w-auto"
          />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

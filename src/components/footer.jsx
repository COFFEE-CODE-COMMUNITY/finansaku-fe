import { NavLink } from "react-router-dom";
import Finansaku from "../assets/finanSaku-logo.svg";

function Footer() {
  return (
    <footer className="text-white px-20 py-10">
      <div className="w-[1200px] mx-auto flex flex-wrap justify-between gap-12 border-b border-gray-700 pb-10">
        <div className="flex flex-col items-start min-w-[280px] overflow-hidden">
          <div className="flex items-center justify-center w-[220px] h-[120px]">
            <img
              src={Finansaku}
              alt="Logo Finansaku"
              className="h-[32rem] w-auto object-contain"
            />
          </div>
        </div>

        <div className="min-w-[150px]">
          <h2 className="font-semibold text-lg mb-3">Navigasi</h2>
          <ul className="space-y-2 text-gray-300 list-disc">
            <li>
              <NavLink to="/" className="hover:text-white transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition-colors">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="hover:text-white transition-colors">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/article" className="hover:text-white transition-colors">
                Articles
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="min-w-[150px]">
          <h2 className="font-semibold text-lg mb-3">Informasi</h2>
          <ul className="space-y-2 text-gray-300 list-disc">
            <li>Finansaku@gmail.com</li>
            <li>0812 3456 7890</li>
          </ul>
        </div>

        <div className="min-w-[150px]">
          <h2 className="font-semibold text-lg mb-3">Kebijakan</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              Kebijakan Privasi
            </li>
            <li>
              Syarat Layanan
            </li>
            <li>
              Finansaku
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 text-center text-sm text-white">
        <p className="font-bold">© 2025 Finansaku Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;

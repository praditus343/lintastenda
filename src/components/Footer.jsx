import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiInstagram } from "react-icons/fi";
import bannerImage from "../assets/logo-ruang-project.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col space-y-2">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center space-x-3"
          >
            <img
              src={bannerImage}
              alt="Keunggulan Ruang Project"
              className="w-[45px] h-[45px] object-contain"
            />
            <span className="text-2xl font-serif text-[#C58F61]">Ruang Project</span>
          </Link>
          <div className="text-gray-400 text-sm">&copy; 2025 Ruang Project. All rights reserved.</div>
        </div>
        <div className="flex space-x-16 mt-8 md:mt-0">
          <div>
            <h3 className="text-lg font-medium mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[{ id: "hero", name: "Beranda" }, { id: "about", name: "Tentang" }, { id: "pricing", name: "Paket" }, { id: "testimonials", name: "Testimoni" }].map((section, idx) => (
                <li key={idx}>
                  <Link
                    to={section.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="text-gray-400 hover:text-white font-medium cursor-pointer transition-colors"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Sosial Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/ruang_projectt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white font-medium flex items-center space-x-2 transition-colors"
                >
                  <FiInstagram className="text-xl" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

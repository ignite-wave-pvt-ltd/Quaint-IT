import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Services",
      to: "/services",
      submenu: [
        { name: "Corporate Compliance", to: "/services/corporate-compliance" },
        { name: "Business Advisory", to: "/services/business-advisory" },
        { name: "HR & Payroll", to: "/services/hr-payroll" },
      ],
    },
    { name: "Why Choose Us", to: "/why-choose-us" },
    { name: "Industries", to: "/industries" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Quaint IT"
            className="h-10 w-auto rounded"
          />
          <span className="text-xl font-display font-bold text-primary dark:text-white">
            Quaint IT
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.to}
                className="text-sm font-medium hover:text-accent transition-colors text-slate-700 dark:text-slate-300 flex items-center gap-1"
              >
                {link.name}
                {link.submenu && <ChevronDown size={16} />}
              </Link>
              {link.submenu && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-0 w-48 glass rounded-lg py-2 shadow-lg"
                >
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.to}
                      className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-primary" />
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-accent"
                  >
                    {link.name}
                  </Link>
                  {link.submenu &&
                    link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.to}
                        onClick={() => setIsOpen(false)}
                        className="ml-4 text-base hover:text-accent"
                      >
                        {sub.name}
                      </Link>
                    ))}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

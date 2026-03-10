import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  X,
  Facebook,
  Instagram,
  ChevronRight,
  Send,
  Share2,
} from "lucide-react";
import { TwitterIcon } from "../utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Why Choose Us", to: "/why-choose-us" },
    { name: "Industries", to: "/industries" },
    { name: "Contact", to: "/contact" },
  ];

  const services = [
    { name: "Corporate Compliance", to: "/services/corporate-compliance" },
    { name: "Business Advisory", to: "/services/business-advisory" },
    { name: "HR & Payroll", to: "/services/hr-payroll" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 8247508468", href: "tel:+918247508468" },
    { icon: Mail, text: "info@quaintit.com", href: "mailto:info@quaintit.com" },
    {
      icon: MapPin,
      text: "Hyderabad, Telangana, India",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: TwitterIcon, href: "#", label: "X" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-mid" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 dark:bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Large Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Quaint IT"
                className="h-12 w-auto rounded-lg"
              />
              <span className="text-2xl font-display font-bold text-primary dark:text-white">
                Quaint IT
              </span>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering businesses with innovative corporate solutions and
              expert advisory services. Your trusted partner in navigating the
              complexities of modern business.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group"
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm">{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group"
                  >
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.to}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group"
                  >
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-accent dark:focus:border-accent text-slate-900 dark:text-white placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400">
                GDPR Compliant
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400">
                Trusted Partner
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Quaint IT Consulting. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 text-sm text-accent hover:text-primary dark:hover:text-white transition-colors"
            >
              Back to Top <ArrowRight size={16} className="rotate-[-90deg]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm">
            Expert Corporate Advisory
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-primary dark:text-white">
            Modern Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
              Global Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            End-to-end corporate services including business advisory,
            compliance management, financial consulting, and operational
            support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-white dark:bg-accent dark:text-primary font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Get Consultation <ArrowRight size={20} />
            </Link>
            <a
              href="#services"
              className="px-8 py-4 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 p-8 rounded-3xl glass shadow-2xl overflow-hidden group">
            <img
                src= "https://unsplash.com/photos/woman-using-macbook-pro-with-person-in-white-top-bPVM4nOy0Rg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
              alt="Quaint IT"
              className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-2xl rotate-12 blur-sm" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mid/20 rounded-full blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

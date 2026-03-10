import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* <img 
            src="/clients.png" 
            alt="Client Logos" 
            className="w-full max-w-4xl opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" 
          /> */}
          Client Logos Places here
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

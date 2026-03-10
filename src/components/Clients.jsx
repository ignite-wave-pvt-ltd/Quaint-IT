import React from "react";
import { motion } from "framer-motion";

const c1 = "/clients/c1.jpeg";
const c2 = "/clients/c2.jpeg";
const c3 = "/clients/c3.jpeg";
const c4 = "/clients/c4.jpeg";
const c5 = "/clients/c5.jpeg";
const c6 = "/clients/c6.jpeg";
const c7 = "/clients/c7.jpeg";

const Clients = () => {
  // Duplicate logos array to create seamless infinite scroll
  const logos = [
    { id: 1, name: "Company 1", img: "https://res.cloudinary.com/dzrc9ejln/image/upload/v1773125875/c3_whdrwl.jpg" },
    { id: 2, name: "Company 2", img: "https://res.cloudinary.com/dzrc9ejln/image/upload/v1773125875/c4_lhshdj.jpg" },
    { id: 3, name: "Company 3", img: "https://res.cloudinary.com/dzrc9ejln/image/upload/v1773125875/c5_h8k8a5.jpg" },
    { id: 4, name: "Company 4", img: "https://res.cloudinary.com/dzrc9ejln/image/upload/v1773125875/c2_tak4z4.jpg" },
    { id: 5, name: "Company 5", img: "https://res.cloudinary.com/dzrc9ejln/image/upload/v1773125875/c6_u3wrzd.jpg" },
    { id: 6, name: "Company 6", img: "https://res.cloudinary.com/dzrc9ejln/image/upload/v1773125875/c7_mr74bi.jpg" },
    { id: 7, name: "Company 7", img: "https://res.cloudinary.com/dzrc9ejln/image/upload/v1773125875/c1_dvdbhv.jpg" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-4">
            Trusted Partners
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Companies We've Worked With
          </h3>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}

          {/* Scrolling Track */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-12 md:gap-16 items-center whitespace-nowrap"
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 transition-all duration-300 cursor-pointer"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

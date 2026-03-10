import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Corporate Compliance",
      desc: "Regulatory frameworks, statutory requirements, documentation, and compliance advisory.",
      icon: <FileText size={40} />
    },
    {
      title: "Business Advisory",
      desc: "Informed decisions on structure, growth strategies, and operational efficiency.",
      icon: <TrendingUp size={40} />
    },
    {
      title: "HR & Payroll",
      desc: "Payroll processing, employee compliance, and strategic HR management.",
      icon: <Users size={40} />
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 text-primary dark:text-white">Our Services</h2>
          <p className="text-slate-600 dark:text-slate-400">Comprehensive solutions designed to simplify your business operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

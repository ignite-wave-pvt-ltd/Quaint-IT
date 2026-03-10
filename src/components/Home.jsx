import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Industries from "./Industries";
import Clients from "./Clients";
import Contact from "./Contact";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FileText, TrendingUp, Users } from "lucide-react";
import { ShieldCheck, Target, HeartHandshake, Gem } from "lucide-react";
import {
  Mail,
  PhoneCall,
  MapPin,
  Calendar,
  ArrowRight,
  Clock,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Corporate Compliance",
      desc: "Regulatory frameworks, statutory requirements, documentation, and compliance advisory.",
      icon: <FileText size={40} />,
    },
    {
      title: "Business Advisory",
      desc: "Informed decisions on structure, growth strategies, and operational efficiency.",
      icon: <TrendingUp size={40} />,
    },
    {
      title: "HR & Payroll",
      desc: "Payroll processing, employee compliance, and strategic HR management.",
      icon: <Users size={40} />,
    },
  ];

  const points = [
    {
      title: "Expert Team",
      icon: <ShieldCheck size={32} />,
      desc: "Extensive experience in corporate advisory and finance.",
    },
    {
      title: "Client-Focused",
      icon: <Target size={32} />,
      desc: "Personalized solutions tailored to your unique needs.",
    },
    {
      title: "Reliable Support",
      icon: <HeartHandshake size={32} />,
      desc: "Proactive compliance and timely assistance.",
    },
    {
      title: "Transparency",
      icon: <Gem size={32} />,
      desc: "Clear communication and honest business processes.",
    },
  ];

  const industries = [
    "Information Technology",
    "Financial Services",
    "Real Estate",
    "E-commerce",
    "Manufacturing",
    "Healthcare",
    "Hospitality",
    "Automotive",
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      value: "info@quaintit.com",
      link: "mailto:info@quaintit.com",
      description: "Drop us a line anytime",
    },
    {
      icon: <PhoneCall size={20} />,
      title: "Call Us",
      value: "+91 82475 08468",
      link: "tel:+918247508468",
      description: "Mon-Fri, 9am-6pm IST",
    },
    {
      icon: <MapPin size={20} />,
      title: "Visit Us",
      value: "Hyderabad, India",
      link: "#",
      description: "Our headquarters",
    },
  ];
  return (
    <main>
      <Hero />
      {/* About Section */}
      <section
        id="about"
        className="section-padding bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-display font-bold text-primary dark:text-white">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                We are a professional corporate services company dedicated to
                supporting businesses with reliable advisory, compliance, and
                operational solutions.
              </p>
              <div className="space-y-4">
                {[
                  "Simplifying complex regulatory processes",
                  "Ensuring total compliance for long-term growth",
                  "Providing expert guidance at every step",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl glass border-primary/20 mt-8"
              >
                <h3 className="text-2xl font-bold mb-3 text-accent dark:text-mid">
                  Vision
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  To be a leading partner in corporate advisory helping
                  businesses thrive.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl glass border-primary/20 mt-8"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary dark:text-mid">
                  Mission
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Supporting companies with expert operational solutions and
                  guidance.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <Services /> */}
      <section id="services" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-primary dark:text-white">
              Our Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Comprehensive solutions designed to simplify your business
              operations.
            </p>
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
                <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <WhyChooseUs /> */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto border border-white/10 hover:bg-accent transition-colors duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <Industries /> */}
      <section
        id="industries"
        className="section-padding dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-primary dark:text-white">
              Industries We Serve
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Expertise across diverse sectors ensuring compliance and growth
              for every business type.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, opacity: 0 }}
                whileInView={{ opacity: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-medium text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white dark:hover:bg-accent transition-all cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
      <Clients />
      {/* <Contact /> */}
      <section
        id="contact"
        className="relative section-padding bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900/50 overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 dark:bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-block px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
              Ready to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
                Journey?
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Have questions about our services? Our team is here to help you
              navigate compliance, strategy, and growth for your business.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Business Hours Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8"
          >
            <Clock size={16} className="text-accent" />
            <span>24/7 emergency support available for existing clients</span>
          </motion.div>

          {/* CTA Button to Contact Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group text-lg"
            >
              Get in Touch
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
              We typically respond within 24 hours
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-6 items-center"
          >
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Confidential</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;

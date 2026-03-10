import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  HeartHandshake,
  Gem,
  Award,
  Clock,
  Users,
  TrendingUp,
  CheckCircle2,
  Star,
  Sparkles,
  Zap,
  BarChart3,
} from "lucide-react";

const WhyChooseUs = () => {
  const corePillars = [
    {
      title: "Expert Team",
      icon: <ShieldCheck size={32} />,
      desc: "Seasoned professionals with decades of combined experience in corporate advisory, compliance, and financial consulting.",
      stats: "50+ Expert Consultants",
      color: "accent",
    },
    {
      title: "Client-Focused",
      icon: <Target size={32} />,
      desc: "We don't believe in one-size-fits-all. Every solution is customized to address your specific business challenges and goals.",
      stats: "98% Client Satisfaction",
      color: "primary",
    },
    {
      title: "Reliable Support",
      icon: <HeartHandshake size={32} />,
      desc: "Round-the-clock assistance and proactive compliance monitoring to keep your business running smoothly.",
      stats: "24/7 Support Available",
      color: "accent",
    },
    {
      title: "Transparency",
      icon: <Gem size={32} />,
      desc: "Clear communication, honest pricing, and no hidden surprises. We build trust through transparency.",
      stats: "100% Transparent Process",
      color: "primary",
    },
  ];

  const advantages = [
    {
      icon: <Award className="text-accent" size={20} />,
      text: "ISO 9001:2024 Certified",
    },
    {
      icon: <Clock className="text-accent" size={20} />,
      text: "15+ Years Industry Experience",
    },
    {
      icon: <Users className="text-accent" size={20} />,
      text: "500+ Businesses Served",
    },
    {
      icon: <TrendingUp className="text-accent" size={20} />,
      text: "98% Client Retention Rate",
    },
    {
      icon: <Star className="text-accent" size={20} />,
      text: "4.9/5 Client Rating",
    },
    {
      icon: <Zap className="text-accent" size={20} />,
      text: "Average 3-day Response Time",
    },
  ];

  const testimonials = [
    {
      quote:
        "Quaint IT has been instrumental in our company's growth. Their expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      position: "CEO, TechGrowth Inc.",
      rating: 5,
    },
    {
      quote:
        "The team's proactive approach to compliance has saved us from potential issues multiple times.",
      author: "Michael Chen",
      position: "Director, Global Manufacturing",
      rating: 5,
    },
  ];

  const differentiators = [
    {
      title: "Industry-Specific Expertise",
      desc: "Deep knowledge across multiple sectors including tech, healthcare, finance, and manufacturing.",
    },
    {
      title: "Technology-Driven Solutions",
      desc: "Leveraging cutting-edge tools and platforms for efficient service delivery.",
    },
    {
      title: "Proactive Partnership",
      desc: "We don't just respond to issues; we anticipate and prevent them.",
    },
    {
      title: "Global Reach",
      desc: "International expertise with presence in 15+ countries worldwide.",
    },
  ];

  return (
    <section className="relative section-padding bg-gradient-to-br from-slate-50 to-slate-100 dark:from-primary dark:to-primary/95 text-slate-900 dark:text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 dark:bg-white/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-slate-900/10 dark:bg-white/10 border border-slate-900/20 dark:border-white/20 rounded-full text-slate-900/90 dark:text-white/90 font-medium text-sm backdrop-blur-sm">
            Why Businesses Trust Us
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
              Quaint IT
            </span>{" "}
            Advantage
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/80 leading-relaxed">
            We combine expertise, innovation, and dedication to deliver
            exceptional value to our clients. Here's why hundreds of businesses
            choose us as their trusted partner.
          </p>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {corePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-2xl bg-slate-100/5 dark:bg-white/5 backdrop-blur-sm border border-slate-900/10 dark:border-white/10 hover:bg-slate-200/10 dark:hover:bg-white/10 transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 bg-${pillar.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${pillar.color} group-hover:scale-110 transition-all duration-300`}
                >
                  <div
                    className={`text-${pillar.color} group-hover:text-white transition-colors`}
                  >
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-center mb-3 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600/70 dark:text-white/70 text-sm text-center leading-relaxed mb-4">
                  {pillar.desc}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-medium text-accent text-center">
                    {pillar.stats}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats & Advantages Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Key Advantages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Sparkles className="text-accent" />
              Key Advantages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10"
                >
                  {advantage.icon}
                  <span className="text-sm font-medium">{advantage.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Star className="text-accent fill-accent" />
              What Our Clients Say
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-100/5 dark:bg-white/5 backdrop-blur-sm border border-slate-900/10 dark:border-white/10"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600/80 dark:text-white/80 text-sm italic mb-3">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-slate-500/60 dark:text-white/60">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-12">
            What Makes Us Different
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-accent" />
                </div>
                <h4 className="font-display font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600/70 dark:text-white/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-90" />
          <div className="relative p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of satisfied businesses that trust us with their
              corporate advisory needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 items-center"
        >
          <div className="flex items-center gap-2 text-slate-500/60 dark:text-white/60">
            <ShieldCheck size={20} />
            <span className="text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500/60 dark:text-white/60">
            <BarChart3 size={20} />
            <span className="text-sm">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500/60 dark:text-white/60">
            <Users size={20} />
            <span className="text-sm">500+ Trusted Partners</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

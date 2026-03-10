import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Lightbulb,
  LineChart,
  Rocket,
  Users,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  BarChart3,
  PieChart,
  Globe,
  Network,
  Zap,
} from "lucide-react";

const BusinessAdvisory = () => {
  const advisoryServices = [
    {
      title: "Strategic Planning",
      desc: "Develop comprehensive strategies aligned with your business goals and market opportunities.",
      icon: <Target size={24} />,
      features: [
        "Business strategy development",
        "Market analysis & positioning",
        "Growth strategy planning",
        "Competitive analysis",
      ],
    },
    {
      title: "Operational Excellence",
      desc: "Optimize your operations for maximum efficiency and profitability.",
      icon: <Zap size={24} />,
      features: [
        "Process optimization",
        "Cost reduction strategies",
        "Supply chain optimization",
        "Quality management systems",
      ],
    },
    {
      title: "Growth & Expansion",
      desc: "Identify and capitalize on opportunities for business growth and market expansion.",
      icon: <Rocket size={24} />,
      features: [
        "Market entry strategies",
        "Mergers & acquisitions",
        "Partnership development",
        "International expansion",
      ],
    },
    {
      title: "Performance Management",
      desc: "Monitor, measure, and improve business performance across all departments.",
      icon: <BarChart3 size={24} />,
      features: [
        "KPI development & tracking",
        "Performance dashboards",
        "Benchmarking analysis",
        "Continuous improvement programs",
      ],
    },
  ];

  const expertiseAreas = [
    {
      title: "Market Entry Strategy",
      desc: "Comprehensive market analysis and entry strategies for new markets",
      icon: <Globe size={20} />,
    },
    {
      title: "Business Restructuring",
      desc: "Strategic restructuring for improved efficiency and profitability",
      icon: <Network size={20} />,
    },
    {
      title: "Financial Advisory",
      desc: "Expert financial guidance for strategic decision-making",
      icon: <PieChart size={20} />,
    },
    {
      title: "Digital Transformation",
      desc: "Leverage technology for competitive advantage",
      icon: <Lightbulb size={20} />,
    },
  ];

  const successStories = [
    {
      company: "TechStart Inc.",
      result: "300% revenue growth in 2 years",
      description: "Strategic pivot and market expansion advisory",
    },
    {
      company: "Global Manufacturing Co.",
      result: "45% operational cost reduction",
      description: "Process optimization and supply chain restructuring",
    },
    {
      company: "HealthCare Plus",
      result: "Expanded to 5 new markets",
      description: "Market entry strategy and partnership development",
    },
  ];

  return (
    <section
      id="business-advisory"
      className="relative section-padding bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-primary font-medium text-sm">
              Business Advisory
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
            Strategic Guidance for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-mid">
              Sustainable Growth
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Expert advisory services to help you make informed decisions,
            optimize operations, and achieve your business objectives with
            confidence.
          </p>
        </motion.div>
        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {advisoryServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2
                            size={16}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          <span className="text-slate-600 dark:text-slate-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 text-center group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {area.icon}
                </div>
                <h4 className="font-display font-bold text-primary dark:text-white mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-accent hover:text-primary transition-all group"
          >
            Schedule a Consultation{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessAdvisory;

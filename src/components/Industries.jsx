import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  Stethoscope,
  Factory,
  ShoppingBag,
  Landmark,
  GraduationCap,
  UtensilsCrossed,
  Car,
  Cpu,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Briefcase,
  Rocket,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      name: "Information Technology",
      icon: <Cpu size={24} />,
      description:
        "Software companies, IT services, and digital innovation firms",
      opportunities: [
        "Cybersecurity compliance",
        "Data protection",
        "IP management",
      ],
      color: "accent",
    },
    {
      name: "Financial Services",
      icon: <Landmark size={24} />,
      description:
        "Banks, investment firms, insurance companies, and fintech startups",
      opportunities: [
        "Regulatory compliance",
        "Risk management",
        "Financial reporting",
      ],
      color: "primary",
    },
    {
      name: "Healthcare",
      icon: <Stethoscope size={24} />,
      description:
        "Hospitals, clinics, pharmaceutical companies, and healthcare providers",
      opportunities: [
        "HIPAA compliance",
        "Patient data security",
        "Healthcare regulations",
      ],
      color: "accent",
    },
    {
      name: "Manufacturing",
      icon: <Factory size={24} />,
      description:
        "Industrial manufacturing, production facilities, and supply chain operations",
      opportunities: [
        "Operational efficiency",
        "Quality control",
        "Safety compliance",
      ],
      color: "primary",
    },
    {
      name: "E-commerce",
      icon: <ShoppingBag size={24} />,
      description:
        "Online retailers, marketplaces, and direct-to-consumer brands",
      opportunities: [
        "Consumer protection",
        "Payment compliance",
        "Cross-border trade",
      ],
      color: "accent",
    },
    {
      name: "Real Estate",
      icon: <Building2 size={24} />,
      description:
        "Property developers, real estate agencies, and investment firms",
      opportunities: [
        "Property compliance",
        "Contract management",
        "Investment advisory",
      ],
      color: "primary",
    },
    {
      name: "Education",
      icon: <GraduationCap size={24} />,
      description:
        "Schools, universities, training institutions, and EdTech companies",
      opportunities: [
        "Educational regulations",
        "Accreditation support",
        "Institutional governance",
      ],
      color: "accent",
    },
    {
      name: "Hospitality",
      icon: <UtensilsCrossed size={24} />,
      description:
        "Hotels, restaurants, travel agencies, and tourism businesses",
      opportunities: [
        "Licensing & permits",
        "Health standards",
        "Customer service excellence",
      ],
      color: "primary",
    },
    {
      name: "Automotive",
      icon: <Car size={24} />,
      description:
        "Car manufacturers, dealerships, and automotive service providers",
      opportunities: [
        "Industry regulations",
        "Safety compliance",
        "Dealership management",
      ],
      color: "accent",
    },
    {
      name: "Professional Services",
      icon: <Briefcase size={24} />,
      description:
        "Consulting firms, legal practices, and professional agencies",
      opportunities: [
        "Practice management",
        "Client compliance",
        "Professional standards",
      ],
      color: "primary",
    },
  ];

  const successMetrics = [
    { value: "15+", label: "Industries Served" },
    { value: "500+", label: "Industry Projects" },
    { value: "98%", label: "Success Rate" },
    { value: "30+", label: "Countries" },
  ];

  const featuredCaseStudies = [
    {
      industry: "Financial Services",
      title: "Global Bank Compliance Transformation",
      result: "Reduced compliance violations by 95%",
    },
    {
      industry: "Healthcare",
      title: "Hospital Network Regulatory Compliance",
      result: "Achieved 100% HIPAA compliance",
    },
    {
      industry: "Manufacturing",
      title: "Supply Chain Optimization",
      result: "Increased efficiency by 40%",
    },
  ];

  return (
    <section
      id="industries"
      className="relative section-padding bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm">
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
            Solutions Tailored for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
              Every Industry
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We combine deep industry knowledge with regulatory expertise to
            deliver solutions that address the unique challenges of your sector.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 bg-${industry.color}/10 rounded-xl text-${industry.color} group-hover:bg-${industry.color} group-hover:text-white transition-colors`}
                  >
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {industry.description}
                    </p>
                    <div className="space-y-1">
                      {industry.opportunities.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs"
                        >
                          <CheckCircle2
                            size={12}
                            className={`text-${industry.color}`}
                          />
                          <span className="text-slate-600 dark:text-slate-400">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-display font-bold text-primary dark:text-white mb-4">
              Industry Success Stories
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              See how we've helped businesses across different sectors achieve
              their goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCaseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} className="text-accent" />
                    <span className="text-xs font-medium text-accent">
                      {study.industry}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-primary dark:text-white mb-2">
                    {study.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {study.result}
                  </p>
                  <a
                    href="#case-study"
                    className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
                  >
                    Read Case Study <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Industry Trends */}
          <div className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
              <TrendingUp className="text-accent" />
              Industry Trends
            </h3>
            <div className="space-y-4">
              {[
                "Digital transformation accelerating across all sectors",
                "Increasing regulatory complexity in financial services",
                "Healthcare compliance becoming more stringent",
                "Supply chain resilience top priority for manufacturing",
              ].map((trend, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {trend}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Industry Expertise Matters */}
          <div className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
              <Rocket className="text-accent" />
              Why Industry Expertise Matters
            </h3>
            <div className="space-y-4">
              {[
                "Navigate sector-specific regulations with confidence",
                "Leverage best practices from your industry",
                "Address unique operational challenges effectively",
                "Stay ahead of industry trends and changes",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-accent flex-shrink-0"
                  />
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
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
              Ready to Transform Your Industry Presence?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our industry-specific expertise can help your
              business thrive.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Schedule Industry Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;

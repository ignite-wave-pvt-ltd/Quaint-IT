import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  CheckCircle2,
  Scale,
  AlertCircle,
  FileCheck,
  ClipboardList,
  BookOpen,
  ArrowRight,
  Building2,
  Gavel,
  FileSignature,
  ScrollText,
} from "lucide-react";

const CorporateCompliance = () => {
  const complianceServices = [
    {
      title: "Regulatory Compliance",
      desc: "Stay compliant with local, state, and federal regulations across all jurisdictions.",
      icon: <Scale size={24} />,
      features: [
        "Regulatory framework analysis",
        "Compliance gap assessment",
        "Regulatory updates & monitoring",
        "License & permit management",
      ],
    },
    {
      title: "Statutory Compliance",
      desc: "Ensure adherence to all statutory requirements and filing obligations.",
      icon: <FileCheck size={24} />,
      features: [
        "ROC filings & returns",
        "Annual report preparation",
        "Board meeting documentation",
        "Statutory register maintenance",
      ],
    },
    {
      title: "Documentation Management",
      desc: "Comprehensive documentation and record-keeping for all compliance needs.",
      icon: <FileText size={24} />,
      features: [
        "Policy & procedure drafting",
        "Contract management",
        "Compliance manuals",
        "Digital document repository",
      ],
    },
    {
      title: "Compliance Audits",
      desc: "Regular audits to ensure ongoing compliance and identify potential risks.",
      icon: <ClipboardList size={24} />,
      features: [
        "Internal compliance audits",
        "Risk assessments",
        "Compliance health checks",
        "Remediation planning",
      ],
    },
  ];

  const keyBenefits = [
    "Minimize legal risks and penalties",
    "Stay updated with changing regulations",
    "Streamlined compliance processes",
    "Enhanced corporate governance",
    "Protected reputation and brand value",
    "Peace of mind for management",
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Technology",
    "Manufacturing",
    "Real Estate",
    "Retail",
    "Education",
    "Non-Profit",
  ];

  return (
    <section
      id="corporate-compliance"
      className="relative section-padding bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full">
            <Shield size={16} className="text-accent" />
            <span className="text-accent font-medium text-sm">
              Corporate Compliance
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
            Navigate Regulations with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
              Confidence
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive compliance solutions to keep your business aligned
            with regulatory requirements while minimizing risks and maximizing
            operational efficiency.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {complianceServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
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
                            className="text-accent flex-shrink-0 mt-0.5"
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

        {/* Key Benefits & Industries */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-accent" />
              Key Benefits
            </h3>
            <div className="grid gap-4">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
              <Building2 className="text-accent" />
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {industry}
                  </span>
                </div>
              ))}
            </div>

            {/* Compliance Stats */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-display font-bold text-accent">
                    100%
                  </div>
                  <div className="text-sm text-slate-600">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">
                    300+
                  </div>
                  <div className="text-sm text-slate-600">Audits Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all group"
          >
            Get Compliance Support{" "}
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

export default CorporateCompliance;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  DollarSign,
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  CheckCircle2,
  ArrowRight,
  Calendar,
  UserPlus,
  Award,
  FileText,
} from "lucide-react";

const HRPayroll = () => {
  const hrServices = [
    {
      title: "Payroll Management",
      desc: "Accurate and timely payroll processing with full compliance and reporting.",
      icon: <DollarSign size={24} />,
      features: [
        "Salary & wage processing",
        "Tax calculations & deductions",
        "Pay slip generation",
        "Year-end tax forms",
      ],
    },
    {
      title: "Employee Compliance",
      desc: "Ensure full compliance with labor laws and employment regulations.",
      icon: <FileText size={24} />,
      features: [
        "Labor law compliance",
        "Employment contracts",
        "Statutory registrations",
        "Compliance audits",
      ],
    },
    {
      title: "Strategic HR Management",
      desc: "Comprehensive HR strategies to attract, retain, and develop talent.",
      icon: <Users size={24} />,
      features: [
        "HR policy development",
        "Performance management",
        "Employee engagement",
        "Succession planning",
      ],
    },
    {
      title: "Benefits Administration",
      desc: "Manage employee benefits programs efficiently and effectively.",
      icon: <Heart size={24} />,
      features: [
        "Health insurance management",
        "Retirement benefits",
        "Leave management",
        "Wellness programs",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Recruitment & Staffing",
      icon: <UserPlus size={20} />,
      desc: "End-to-end recruitment services",
    },
    {
      title: "Training & Development",
      icon: <GraduationCap size={20} />,
      desc: "Skill enhancement programs",
    },
    {
      title: "Performance Management",
      icon: <Award size={20} />,
      desc: "360-degree performance reviews",
    },
    {
      title: "Time & Attendance",
      icon: <Clock size={20} />,
      desc: "Automated time tracking",
    },
  ];

  const benefits = [
    "Reduced administrative burden",
    "100% compliance assurance",
    "Cost-effective solutions",
    "Scalable for growing businesses",
    "Expert HR support",
    "Secure data management",
  ];

  return (
    <section
      id="hr-payroll"
      className="relative section-padding bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full">
            <Users size={16} className="text-accent" />
            <span className="text-accent font-medium text-sm">
              HR & Payroll Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
            Streamlined HR & Payroll{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive human resources and payroll management services that
            ensure compliance, accuracy, and employee satisfaction.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {hrServices.map((service, index) => (
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

        {/* Additional Services & Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">
              Additional HR Services
            </h3>
            <div className="space-y-4">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900"
                >
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">
              Key Benefits
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-accent flex-shrink-0"
                  />
                  <span className="text-slate-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-display font-bold text-accent">
                    1000+
                  </div>
                  <div className="text-sm text-slate-600">
                    Employees Managed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">
                    99.9%
                  </div>
                  <div className="text-sm text-slate-600">Payroll Accuracy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-8 text-center">
            How We Work
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "Assessment",
                desc: "Understand your HR needs",
              },
              {
                step: "2",
                title: "Setup",
                desc: "Configure systems & processes",
              },
              {
                step: "3",
                title: "Implementation",
                desc: "Execute HR operations",
              },
              { step: "4", title: "Support", desc: "Ongoing HR assistance" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-primary dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 text-accent">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all group"
          >
            Streamline Your HR{" "}
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

export default HRPayroll;

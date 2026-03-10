import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Star,
  ChevronRight,
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "6+", label: "Years Experience", icon: Clock },
    { value: "100+", label: "Happy Clients", icon: Users },
    { value: "98%", label: "Client Retention", icon: TrendingUp },
    { value: "24/7", label: "Support Available", icon: Globe },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description:
        "We uphold the highest standards of professional ethics and transparency in every interaction.",
      color: "accent",
    },
    {
      icon: Target,
      title: "Excellence Driven",
      description:
        "Committed to delivering exceptional quality and continuous improvement in all our services.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We tailor solutions to meet your unique business needs.",
      color: "accent",
    },
    {
      icon: Star,
      title: "Innovation Focused",
      description:
        "Embracing modern solutions and forward-thinking strategies for sustainable growth.",
      color: "primary",
    },
  ];

  const teamMembers = [
    {
      name: "Name Here",
      role: "CEO & Senior Advisor",
      image: "/team/sarah.jpg", // Add your team images
      expertise: "20+ years in corporate strategy",
    },
    {
      name: "Name Here",
      role: "Head of Compliance",
      image: "/team/michael.jpg",
      expertise: "Former regulatory authority expert",
    },
    {
      name: "Name Here",
      role: "Financial Consulting Director",
      image: "/team/emily.jpg",
      expertise: "CFA, 6+ years in finance",
    },
  ];

  const achievements = [
    "Best Corporate Advisory Firm 2023",
    "Trusted by Fortune 500 Companies",
    "Global Network in 30+ Countries",
  ];

  return (
    <section
      id="about"
      className="relative section-padding bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm">
            About Quaint IT
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
            Your Trusted Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
              Business Excellence
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            With over a 6+ years of experience, we've helped hundreds of
            businesses navigate complex regulatory landscapes, optimize
            operations, and achieve sustainable growth through our comprehensive
            corporate services.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
              <h3 className="relative text-3xl font-display font-bold text-primary dark:text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Founded in 2019, Quaint IT Consulting began with a simple
                  mission: to provide businesses with the expert guidance they
                  need to thrive in an increasingly complex corporate landscape.
                  What started as a small team of dedicated advisors has grown
                  into a comprehensive corporate services firm trusted by
                  companies worldwide.
                </p>
                <p>
                  Today, we combine deep industry expertise with innovative
                  approaches to help businesses of all sizes navigate
                  challenges, seize opportunities, and achieve their full
                  potential. Our success is measured by the success of our
                  clients.
                </p>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-4">
              <h4 className="text-xl font-display font-bold text-primary dark:text-white">
                Why Choose Us
              </h4>
              <div className="grid gap-3">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50"
                  >
                    <CheckCircle2
                      className="text-accent flex-shrink-0"
                      size={20}
                    />
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Vision & Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Vision Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-2xl">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-accent mb-2">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      To be the global benchmark for corporate advisory
                      excellence, empowering businesses to achieve unprecedented
                      growth while maintaining the highest standards of
                      compliance and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative group mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-mid/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-2xl">
                    <Target className="w-8 h-8 text-primary dark:text-mid" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary dark:text-mid mb-2">
                      Our Mission
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      To deliver exceptional corporate services that simplify
                      complexity, mitigate risks, and drive sustainable growth.
                      We're committed to being more than consultants—we're your
                      strategic partners in success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-display font-bold text-primary dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 text-center h-full">
                    <div
                      className={`p-3 rounded-xl bg-${value.color}/10 inline-block mb-4`}
                    >
                      <Icon className={`w-6 h-6 text-${value.color}`} />
                    </div>
                    <h4 className="text-lg font-display font-bold text-primary dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership Team Preview */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-display font-bold text-primary dark:text-white mb-4">
              Meet Our Leadership
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary dark:text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {member.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-accent hover:text-primary dark:hover:text-white font-medium transition-colors group"
            >
              View Full Team
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />

          <div className="relative p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our corporate advisory services can help you
              achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

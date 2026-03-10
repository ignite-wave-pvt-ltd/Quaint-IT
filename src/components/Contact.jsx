// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, PhoneCall, MapPin, Send, AlertCircle } from "lucide-react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     // Replace Estos placeholders with your actual EmailJS credentials
//     const SERVICE_ID = "YOUR_SERVICE_ID";
//     const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
//     const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

//     const templateParams = {
//       from_name: `${formData.firstName} ${formData.lastName}`,
//       from_email: formData.email,
//       message: formData.message,
//     };

//     emailjs
//       .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         setStatus("success");
//         setFormData({ firstName: "", lastName: "", email: "", message: "" });
//       })
//       .catch((err) => {
//         console.error("FAILED...", err);
//         setStatus("error");
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="section-padding bg-slate-50 dark:bg-slate-900/30"
//     >
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-display font-bold mb-6 text-primary dark:text-white">
//               Get in Touch
//             </h2>
//             <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
//               Ready to take your business to the next level? Our experts are
//               here to help you navigate compliance and strategy.
//             </p>

//             <div className="space-y-8">
//               {[
//                 { icon: <Mail />, title: "Email", value: "info@quaintcon.com" },
//                 {
//                   icon: <PhoneCall />,
//                   title: "Phone",
//                   value: "+91 8247508468",
//                 },
//                 {
//                   icon: <MapPin />,
//                   title: "Address",
//                   value: "Hyderabad, India",
//                 },
//               ].map((item, i) => (
//                 <div key={i} className="flex gap-6 items-start">
//                   <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-primary dark:text-white">
//                       {item.title}
//                     </h4>
//                     <p className="text-slate-600 dark:text-slate-400">
//                       {item.value}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="p-8 md:p-12 glass rounded-3xl shadow-xl"
//           >
//             {status === "success" ? (
//               <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
//                 <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
//                   <Send size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold">Message Sent!</h3>
//                 <p className="text-slate-600 dark:text-slate-400">
//                   Thank you for reaching out. We'll get back to you shortly.
//                 </p>
//                 <button
//                   onClick={() => setStatus("")}
//                   className="text-accent font-bold hover:underline"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-500">
//                       First Name
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-500">
//                       Last Name
//                     </label>
//                     <input
//                       required
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-500">
//                     Email Address
//                   </label>
//                   <input
//                     required
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-500">
//                     Message
//                   </label>
//                   <textarea
//                     required
//                     rows="4"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
//                   ></textarea>
//                 </div>

//                 {status === "error" && (
//                   <div className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
//                     <AlertCircle size={16} />
//                     <span>Something went wrong. Please try again.</span>
//                   </div>
//                 )}

//                 <button
//                   disabled={status === "sending"}
//                   className="w-full py-4 bg-primary dark:bg-accent text-white dark:text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50"
//                 >
//                   {status === "sending" ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  PhoneCall,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
  Clock,
  MessageSquare,
  User,
  Calendar,
  Globe,
  Linkedin,
  X,
  Facebook,
  Instagram,
  ArrowRight,
  Sparkles,
  Shield,
} from "lucide-react";
import emailjs from "emailjs-com";
import { TwitterIcon } from "../utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'
  const [newsletter, setNewsletter] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      newsletter: newsletter ? "Yes" : "No",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setNewsletter(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("error");
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "info@quaintcon.com",
      link: "mailto:info@quaintcon.com",
      description: "Drop us a line anytime",
    },
    {
      icon: <PhoneCall size={20} />,
      title: "Phone",
      value: "+91 82475 08468",
      link: "tel:+918247508468",
      description: "Mon-Fri, 9am-6pm IST",
    },
    {
      icon: <MapPin size={20} />,
      title: "Address",
      value: "Hyderabad, Telangana, India",
      link: "#",
      description: "Visit our headquarters",
    },
    {
      icon: <Clock size={20} />,
      title: "Business Hours",
      value: "24/7 Support Available",
      description: "Emergency assistance always online",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: "#",
      label: "LinkedIn",
      color: "bg-blue-600",
    },
    {
      icon: <TwitterIcon size={18} />,
      href: "#",
      label: "X",
      color: "bg-black",
    },
    {
      icon: <Facebook size={18} />,
      href: "#",
      label: "Facebook",
      color: "bg-blue-700",
    },
    {
      icon: <Instagram size={18} />,
      href: "#",
      label: "Instagram",
      color: "bg-pink-600",
    },
  ];

  const serviceOptions = [
    "Corporate Compliance",
    "Business Advisory",
    "HR & Payroll",
    "Financial Consulting",
    "Legal Advisory",
    "Tax Planning",
    "International Business",
    "Risk Management",
    "Digital Transformation",
    "Other",
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond within 24 hours during business days.",
    },
    {
      question: "Do you offer free initial consultations?",
      answer:
        "Yes, we offer a complimentary 30-minute consultation for new clients.",
    },
  ];

  return (
    <section
      id="contact"
      className="relative section-padding bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900/50 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 dark:bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "30px 30px",
            color: "currentColor",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
            Let's Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-mid">
              Conversation
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you have a question about our services, need consultation,
            or want to discuss your business needs, our team is ready to help.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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
              <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                <div className="w-10 h-10 mb-3 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-primary dark:text-white mb-1">
                  {item.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-10 glass rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-primary dark:text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md">
                      Thank you for reaching out. Our team will review your
                      message and get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("")}
                    className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                  >
                    Send another message <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        <User size={14} /> First Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        <User size={14} /> Last Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        <Mail size={14} /> Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        <PhoneCall size={14} /> Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        <Globe size={14} /> Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        <MessageSquare size={14} /> Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 flex items-center gap-1">
                      <MessageSquare size={14} /> Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-accent focus:ring-accent"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      Subscribe to our newsletter for updates and insights
                    </label>
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
                    >
                      <AlertCircle size={16} />
                      <span>
                        Something went wrong. Please try again or contact us
                        directly.
                      </span>
                    </motion.div>
                  )}

                  <button
                    disabled={status === "sending"}
                    className="w-full py-4 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message{" "}
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting this form, you agree to our privacy policy and
                    consent to being contacted.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-accent" />
                Connect With Us
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Follow us on social media for updates, insights, and industry
                news.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4">
                Quick Answers
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-200 dark:border-slate-700 last:border-0 pb-4 last:pb-0"
                  >
                    <h4 className="font-bold text-primary dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4 flex items-center gap-2">
                <Shield size={20} className="text-accent" />
                Our Commitment
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    24-hour response guarantee
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Free initial consultation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Confidentiality assured
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    No obligation quotes
                  </span>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="p-4 rounded-3xl glass border border-slate-200 dark:border-slate-800">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <MapPin size={32} className="text-accent" />
                <span className="ml-2 text-primary dark:text-white font-medium">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-3xl glass border border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-2">
            Need Immediate Assistance?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            For urgent matters, please call our emergency support line
          </p>
          <a
            href="tel:+918247508468"
            className="inline-flex items-center gap-2 text-2xl font-bold text-accent hover:text-primary transition-colors"
          >
            <PhoneCall size={24} />
            +91 82475 08468
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

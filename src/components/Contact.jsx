// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work or full-time
              opportunities. Feel free to reach out if you have a project or
              opportunity you'd like to discuss.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-medium">
                    qaziahmad1877@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mr-4">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-gray-400">LinkedIn</p>
                  <p className="text-white font-medium truncate max-w-xs">
                    linkedin.com/in/qazi-ahmad-b4124b203
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            {submitted ? (
              <motion.div
                className="bg-green-500/20 text-green-300 p-4 rounded-md mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Your message has been sent successfully! I'll get back to you
                soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center disabled:bg-indigo-800 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <motion.svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </motion.svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

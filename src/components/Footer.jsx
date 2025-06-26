// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 bg-gray-900 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.a
          href="#hero"
          className="text-white font-bold text-2xl mb-6 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-indigo-500">&lt;</span>
          Qazi Ahmad <span className="text-indigo-500">/&gt;</span>
        </motion.a>

        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/QaziAhmad77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ y: -5, color: '#FFFFFF' }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/qazi-ahmad-b4124b203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ y: -5, color: '#FFFFFF' }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:qaziahmad1877@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ y: -5, color: '#FFFFFF' }}
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>

        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          &copy; {currentYear} Qazi Ahmad. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;

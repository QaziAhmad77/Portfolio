import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import profilePic from '../assets/images/bannerImg.jpeg';

const Navigation = ({ isOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-50 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-gray-900 to-gray-800'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a
          href="#hero"
          className="text-white font-bold text-2xl transition-all duration-300 hover:text-indigo-400 flex items-center gap-3"
          variants={itemVariants}
        >
          <div>
            <span className="text-indigo-500">&lt;</span>
            Qazi Ahmad <span className="text-indigo-500">/&gt;</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                variants={itemVariants}
                custom={index}
              >
                {item}
              </motion.a>
            )
          )}
          {/* <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center"
            variants={itemVariants}
          >
            Resume <ArrowRight className="ml-1 h-4 w-4" />
          </motion.a> */}
          <img
            src={profilePic}
            alt="Qazi Ahmad"
            className="w-10 h-10 rounded-full border-2 border-indigo-500 object-cover"
          />
        </div>

        {/* Mobile Nav Toggle */}
        <motion.button
          className="md:hidden text-white"
          onClick={toggleMenu}
          variants={itemVariants}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 py-4 px-4 absolute w-full"
        >
          <div className="flex flex-col space-y-4">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              )
            )}
            {/* 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center"
              onClick={toggleMenu}
            >
              Resume <ArrowRight className="ml-1 h-4 w-4" />
            </a> */}
            {/* Add profile picture to navbar */}
            <img
              src={profilePic}
              alt="Qazi Ahmad"
              className="w-10 h-10 rounded-full border-2 border-indigo-500 object-cover"
            />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navigation;

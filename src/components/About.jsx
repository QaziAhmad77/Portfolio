// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import profilePic from '../assets/images/bannerImg.jpeg'; // Update this path to your actual image location

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          About Me
        </h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-lg transform rotate-3 scale-105 opacity-20"></div>
            <div className="relative h-auto rounded-lg bg-gradient-to-tr from-indigo-900 to-purple-900 shadow-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="h-full flex flex-col justify-center items-center py-4">
                {/* Replace the initials with your actual photo */}
                <img
                  src={profilePic}
                  alt="Qazi Ahmad"
                  className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-indigo-600 shadow-lg"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Qazi Ahmad
                  </h3>
                  <p className="text-indigo-300 mb-4">MERN Stack Engineer</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://github.com/QaziAhmad77"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/qazi-ahmad-b4124b203"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:qaziahmad1877@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer specializing in MERN
              technologies. With a strong foundation in JavaScript and modern
              web development, I create responsive, user-friendly applications
              that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development began 3 years ago, and I've since
              worked on various projects ranging from e-commerce platforms to
              real-time applications. I'm constantly learning and adapting to
              new technologies to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <span className="bg-indigo-500/20 text-indigo-300 rounded-full p-1 mr-2">
                  <ArrowRight size={16} />
                </span>
                <span className="text-gray-300">
                  React.js, Next.js & Vue.js
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-500/20 text-indigo-300 rounded-full p-1 mr-2">
                  <ArrowRight size={16} />
                </span>
                <span className="text-gray-300">Node.js & Express</span>
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-500/20 text-indigo-300 rounded-full p-1 mr-2">
                  <ArrowRight size={16} />
                </span>
                <span className="text-gray-300">MongoDB & Mongoose</span>
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-500/20 text-indigo-300 rounded-full p-1 mr-2">
                  <ArrowRight size={16} />
                </span>
                <span className="text-gray-300">REST APIs</span>
              </div>
            </div>
            <motion.a
              href="#contact"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

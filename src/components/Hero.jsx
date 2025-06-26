import { TypeAnimation } from 'react-type-animation';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
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
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center pt-16 pb-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4 py-10 md:py-20 flex-grow flex items-center">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.p
              className="text-indigo-400 font-medium mb-2 md:mb-4"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4"
              variants={itemVariants}
            >
              <span>Full Stack </span>
              <span className="text-indigo-500">MERN</span>
              <span> Developer</span>
            </motion.h1>
            <motion.div className="h-12 mb-6 md:mb-8" variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  'React.js Developer',
                  1500,
                  'Next.js Developer',
                  1500,
                  'Vue.js Developer',
                  1500,
                  'Node.js Developer',
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-xl sm:text-2xl md:text-3xl text-gray-300"
              />
            </motion.div>
            <motion.p
              className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg"
              variants={itemVariants}
            >
              I build exceptional and scalable web applications with modern
              technologies. Specialized in React.js, Next.js, Vue.js, Node.js,
              Express, MongoDB, MySQL.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch{' '}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="#projects"
                className="border border-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-indigo-600/10 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>

          <motion.div className="relative mt-6 md:mt-0" variants={itemVariants}>
            <div className="w-full h-60 sm:h-80 md:h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20 absolute -top-10 -left-10"></div>
            <motion.div
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-3 sm:p-6 rounded-lg shadow-xl z-10"
              initial={{ rotateY: 10 }}
              animate={{ rotateY: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              <pre className="text-gray-300 overflow-x-auto text-xs sm:text-sm md:text-base">
                <code>
                  <span className="text-pink-400">const</span>{' '}
                  <span className="text-green-400">developer</span>{' '}
                  <span className="text-pink-400">=</span> {`{`}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">name</span>:{' '}
                  <span className="text-yellow-300">'Qazi Ahmad'</span>,<br />
                  &nbsp;&nbsp;<span className="text-blue-400">title</span>:{' '}
                  <span className="text-yellow-300">
                    'MERN Stack Developer'
                  </span>
                  ,<br />
                  &nbsp;&nbsp;<span className="text-blue-400">skills</span>: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">'React.js'</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">'Next.js'</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">'Vue.js'</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">'Node.js'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">'Express.js'</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">'MongoDB'</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">
                    'Relational DBs'
                  </span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">'TailwindCSS'</span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">
                    status
                  </span>:{' '}
                  <span className="text-yellow-300">
                    'Open to opportunities'
                  </span>
                  <br />
                  {`}`};<br />
                  <br />
                  <span className="text-pink-400">console</span>.
                  <span className="text-blue-400">log</span>(
                  <span className="text-yellow-300">
                    'Let's build something amazing!'
                  </span>
                  );
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </motion.div>

      {/* Mobile scroll indicator (more compact) */}
      <motion.div
        className="sm:hidden flex justify-center mt-6 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

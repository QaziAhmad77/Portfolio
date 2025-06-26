import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import caregiver from '../assets/images/projects/caregiver.png';
import ecommerce from '../assets/images/projects/ecommerce.jpeg';
import passgeni from '../assets/images/projects/passgeni.webp';
import dashboard from '../assets/images/projects/dashboard.jpg';
import movie from '../assets/images/projects/movie.jpg';
import doctor from '../assets/images/projects/doctor.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Local Care Giver',
      description:
        'Local Care Giver is a comprehensive platform designed to connect care seekers with qualified care providers...',
      image: caregiver,
      url: 'https://localcaregiver.net/',
      isPrivate: true,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    },
    {
      title: 'Amazon Clone',
      description:
        'Dive into a feature-rich Amazon Clone eCommerce website, meticulously crafted with React.js...',
      image: ecommerce,
      link: 'https://github.com/QaziAhmad77/amazone_clone',
      url: 'https://amazone-clone-iota.vercel.app/',
      tech: ['React', 'Firebase', 'Stripe', 'CSS', 'Context API'],
    },
    {
      title: 'Passgeni',
      description:
        'Passgeni is a powerful password generator that creates secure and random passwords...',
      image: passgeni,
      url: 'https://passgeni.online/',
      isPrivate: true,
      tech: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    },
    {
      title: 'React Cars Dashboard',
      description:
        'Explore a dynamic "Cars Dashboard" built with React.js and Recharts...',
      image: dashboard,
      link: 'https://github.com/QaziAhmad77/react-cars-dashboard',
      url: 'https://react-cars-dashboard.vercel.app/dashboard',
      tech: ['React', 'Recharts', 'CSS', 'JavaScript'],
    },
    {
      title: 'Movie Site Using Next Js',
      description:
        "The 'Movie Site Using Next.js' is a modern web application designed for movie enthusiasts...",
      image: movie,
      link: 'https://github.com/QaziAhmad77/movie-app-Next-Js-',
      url: 'https://movie-app-next-js-theta.vercel.app/',
      tech: ['Next.js', 'React', 'API Integration', 'CSS'],
    },
    {
      title: 'Doctor Appointment System',
      description:
        'The Doctor Appointment System is built using the MERN technology stack...',
      image: doctor,
      link: 'https://github.com/QaziAhmad77/Doctor-Appointment-system',
      isPrivate: true,
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
    },
  ];

  const [activeProject, setActiveProject] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, projects.length]);

  const handleProjectClick = (index) => {
    setActiveProject(index);
    setAutoplay(false);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="grid md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.button
                key={index}
                className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => handleProjectClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <h3 className="font-medium">{project.title}</h3>
              </motion.button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${activeProject}`}
                className="relative overflow-hidden rounded-lg group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-indigo-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <motion.img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeProject}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {projects[activeProject].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {projects[activeProject].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].tech.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-gray-800 text-indigo-300 px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {projects[activeProject].url && (
                    <motion.a
                      href={projects[activeProject].url}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </motion.a>
                  )}
                  {projects[activeProject].link && (
                    <motion.a
                      href={projects[activeProject].link}
                      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Source Code <Github className="ml-2 h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/QaziAhmad77"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

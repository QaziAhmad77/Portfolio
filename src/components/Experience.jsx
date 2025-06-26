// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      position: 'Frontend Engineer',
      company: 'Times TX (Full Time Remote)',
      period: 'Dec 2024 – present',
      description:
        'Currently leading frontend development for multiple web applications using React.js and Next.js. Implementing responsive UI designs with Tailwind CSS, optimizing performance, and integrating with RESTful APIs. Working in an agile environment with cross-functional teams to deliver high-quality user experiences.',
    },
    {
      position: 'Frontend Engineer',
      company: '5.Y (Part Time Remote)',
      period: 'Oct 2024 – present',
      description:
        'Developing custom web solutions with React.js and Vue.js for various client projects. Implementing state management using Redux and Context API while ensuring cross-browser compatibility and accessibility standards. Collaborating with remote teams across different time zones to meet project deadlines.',
    },
    {
      position: 'Full Stack Developer',
      company: 'Apptex Software Solutions (Full Time Onsite)',
      period: 'Sep 2023 – Dec 2024',
      description:
        'Developed and maintained full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Created RESTful APIs, implemented authentication systems, and designed responsive interfaces. Collaborated with designers and product managers to deliver projects for clients across various industries including e-commerce and healthcare.',
    },
    {
      position: 'Full Stack Engineer',
      company: 'Giant Tech Solution (Full Time Onsite)',
      period: 'Feb 2023 – Sep 2023',
      description:
        'Built and maintained web applications using React.js frontend and Node.js backend with MySQL database. Implemented responsive designs using CSS frameworks and integrated third-party APIs. Participated in code reviews, troubleshooting, and performance optimization. Worked closely with the QA team to resolve bugs and improve application stability.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-500/30"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-8 md:w-1/2 ${
                index % 2 === 0
                  ? 'md:ml-auto md:pl-8'
                  : 'md:mr-auto md:pr-8 md:text-right'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 md:-left-4' : 'left-0 md:-right-4'
                } w-8 h-8 bg-indigo-600 rounded-full border-4 border-gray-800 z-10`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              ></motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.1)',
                }}
              >
                <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm mb-4">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.position}
                </h3>
                <h4 className="text-indigo-400 mb-4">{exp.company}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Database, Layers, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'Frontend',
      icon: <Layers />,
      items: [
        'React.js',
        'Next.js',
        'Vue.js',
        'Tailwind CSS',
        'Material UI',
        'Framer Motion',
      ],
    },
    {
      name: 'Backend',
      icon: <Server />,
      items: ['Node.js', 'Express.js', 'REST API', 'JWT'],
    },
    {
      name: 'Database',
      icon: <Database />,
      items: ['MongoDB', 'Mongoose', 'Firebase', 'PostgreSQL', 'MySQL'],
    },
    {
      name: 'Tools',
      icon: <Code />,
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-indigo-500 hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2"
              custom={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="text-indigo-500 mb-4"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">
                {skill.name}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <motion.span
                      className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    ></motion.span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

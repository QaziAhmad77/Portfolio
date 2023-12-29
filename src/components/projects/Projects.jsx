import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import {
  doctor,
  cart,
  movie,
  realEstate,
  todo,
  passgeni,
  amazon,
  dashboard,
  halloween,
  restaurant,
  photography,
} from '../../assets';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Passgeni"
          des="Passgeni is a powerful password generator that creates secure and random passwords. It's built using the MERN technology stack and is designed to help you generate strong passwords for your accounts and services."
          src={passgeni}
          url="https://passgeni.online/"
          isPrivate={true}
        />
        <ProjectCard
          title="React Cars dashboard"
          des='Explore a dynamic "Cars Dashboard" built with React.js and Recharts, offering an interactive data visualization experience. '
          src={dashboard}
          link="https://github.com/QaziAhmad77/react-cars-dashboard"
          url="https://lucky-pie-0ccd10.netlify.app/dashboard"
        />
        <ProjectCard
          title="Halloween Website"
          des='Discover the "Halloweeb Website," a captivating online platform that blends the essence of Halloween with anime culture. Powered by HTML, CSS and JavaScript this project delivers a visually engaging and festive user experience.'
          src={halloween}
          link="https://github.com/QaziAhmad77/Halloween"
          url="https://halloween-virid.vercel.app/"
        />
        <ProjectCard
          title="Restaurant Website"
          des="Explore the Restaurant Website – a tastefully designed online platform that showcases culinary delights. Developed using React.js, Bootstrap, HTML, and CSS, this project delivers an immersive and visually appealing experience for users, bringing the restaurant's offerings to life."
          src={restaurant}
          link="https://github.com/QaziAhmad77/Restaurant--Website"
          url="https://restaurant-website-gray-eight.vercel.app/"
        />
        <ProjectCard
          title="Photographer Website"
          des='Discover the "Photographer Website" – a captivating online portfolio showcasing the artistry of a photographer. Crafted with React.js, Bootstrap, HTML, and CSS, this project offers an immersive and visually stunning experience for visitors, highlighting the photographer’s creative work.'
          src={photography}
          link="https://github.com/QaziAhmad77/Photographer-Website"
          url="https://photographer-website-phi.vercel.app/"
        />
        <ProjectCard
          title="Doctor Appointment System"
          des="The Doctor Appointment System is built using the MERN technology stack,The app is a sophisticated and user-friendly application designed to streamline and enhance the process of scheduling medical appointments. "
          src={doctor}
          link="https://github.com/QaziAhmad77/Doctor-Appointment-system"
          url="https://github.com/QaziAhmad77/Portfolio"
          isLive={true}
        />
        <ProjectCard
          title="Shopping Cart"
          des='The "Shopping Cart" project is a user-friendly web application designed to provide a seamless and engaging online shopping experience. This application utilizes React.js, Bootstrap, HTML, and CSS to create an visually appealing platform for users '
          src={cart}
          link="https://github.com/QaziAhmad77/redux-cart"
          url="https://rtk-ecommerce-ten.vercel.app/"
        />
        <ProjectCard
          title="Real Estate Website"
          des="The 'Real Estate Website' is a visually appealing and user-centric web application designed to provide users with a seamless experience for exploring and discovering real estate properties. This project utilizes the Tailwind CSS framework and HTML to create a modern and responsive platform for users"
          src={realEstate}
          link="https://github.com/QaziAhmad77/tailwindCSS/tree/main/realEstateWebsite"
          url="https://tailwind-css-snowy.vercel.app/"
        />
        <ProjectCard
          title="Advance ToDo App"
          des="The 'Advanced ToDo App' is a feature-rich and interactive web application that takes task management to the next level. Built with React, Redux, and React Persist, this app offers users a powerful tool to organize their tasks, ensuring a seamless experience even across different sessions."
          src={todo}
          link="https://github.com/QaziAhmad77/toDoList"
          url="https://to-do-list-nine-woad.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;

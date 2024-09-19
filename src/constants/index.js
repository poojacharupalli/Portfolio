import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate web developer and Analyst with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate and versatile professional with expertise in both web development and data analysis. With a strong foundation in front-end development and extensive experience in creating dynamic dashboards for data-driven insights, I enjoy combining design, development, and analytical skills to deliver impactful solutions.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://github.com/poojacharupalli/ecommerce-website-using-mern-stack.git",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Bootstrap"],
  },
  {
    title: "Backend Routing for Blog Website using Express",
    image: project2,
    link:"https://github.com/poojacharupalli/Backend-routing-for-blog-website.git",
    description:
      "Developed a Backend Application to control routing preocess through Express for a blog website like creating post, comment, liking and unliking the posts",
    technologies: ["JavaScript", "MongoDB", "Express"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link:"https://poojaportfolio.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer-Motion"],
  },
  {
    title: "Netflix Movies and Tv Shows analysis",
    image: project4,
    link:"https://github.com/poojacharupalli/Netflix-movies-and-TV-Shows-Analysis.git",
    description:
      "Conducted analysis on Netflix’s content, visualizing trends in genres, ratings, and release patterns to identify audience preferences.",
    technologies: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Jupyter Notebook"],
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana",
  phoneNo: "+91 7995194651 ",
  email: "poojacharupalli@gmail.com",
};

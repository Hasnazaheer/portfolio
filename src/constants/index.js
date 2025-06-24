import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

// Technology Icons
import python from "../assets/python.png";
import cpp from "../assets/cpp.png";
import sqlite from "../assets/sqlite.png";
import powerbi from "../assets/powerbi.png";
import rag from "../assets/rag.jpg";
import regression from "../assets/regression.png";

// Company Icons

// Project Images
import HospitalManagement from "../assets/HospitalManagement.png";
import Thumbnail from "../assets/Thumbnail.png";
import AlliThumbnail from "../assets/AlliThumbnail.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Data Visualization", icon: web },
  { title: "AI/ML", icon: mobile },
  { title: "Database Management", icon: backend },
  { title: "UI/UX Designer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Python", icon: python },
  { name: "C++", icon: cpp },
  { name: "Sqlite", icon: sqlite },
  { name: "Power BI", icon: powerbi },
  { name: "Figma", icon: figma },
  { name: "MySql", icon: mysql },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "TechoHub",
    icon: "#000000",
    iconBg: "#383E56",
    date: "Jan 2024 - Mar 2024",
    points: [
      "Performed data analysis and visualization tasks using Python and Power BI.",
      "Built interactive dashboards for real-time business insights.",
      "Collaborated with teams on AI projects including model development and evaluation.",
      "Gained practical experience in data preprocessing, model deployment, and report generation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hasna's creativity and attention to user experience were evident throughout the competition. Her winning Plant Management App UI/UX design stood out for its clean layout and intuitive flow.",
    name: "Competition Judge",
    designation: "Senior Product Designer",
    company: "Forman Christian College",
    
  },
  {
    testimonial:
      "The RAG Chatbot developed by Hasna demonstrates her ability to integrate AI with practical problem-solving. It's a perfect example of applying cutting-edge technology to real-world challenges.",
    name: "Sir Nadeem Majeed",
    designation: "Lecturer",
    company: "Punjab University",
  
  },
  {
    testimonial:
      "Hasna consistently shows strong analytical thinking and technical skills. Her work in AI/ML projects reflects a solid foundation in both theoretical concepts and practical application.",
    name: "Sir Muhammad Ali",
    designation: "Lecturer",
    company: "Punjab University",
    
  },
];

const projects = [
  {
    name: "Hospital Database Management System",
    description:
      "A complete database management system for hospital operations, including patient records, billing, prescriptions, and department management, designed with clean UI and intuitive workflows.",
    tags: [
      { name: "MySQL", color: "green-text-gradient" },
      { name: "DBMS", color: "blue-text-gradient" },
      { name: "Figma", color: "pink-text-gradient" },
    ],
    image: HospitalManagement,
    source_code_link: "https://github.com/Hasnazaheer/Hospital-Database-Management-System",
  },
  {
    name: "Plant Management UI/UX Design",
    description:
      "A modern and user-friendly mobile application UI/UX design for a plant management app, focusing on task management, scheduling, and plant care reminders.",
    tags: [
      { name: "Figma", color: "pink-text-gradient" },
      { name: "UI/UX", color: "blue-text-gradient" },
    ],
    image: Thumbnail,
    source_code_link: "https://github.com/Hasnazaheer/Plant-Managemnet-App-Figma-Design",
  },
  {
    name: "Alli UI/UX Design",
    description:
      "A clean and responsive UI/UX design for a professional web application using Figma. The design emphasizes usability, accessibility, and modern aesthetics.",
    tags: [
      { name: "Figma", color: "pink-text-gradient" },
      { name: "UI/UX", color: "blue-text-gradient" },
    ],
    image: AlliThumbnail,
    source_code_link: "https://github.com/Hasnazaheer/Alli-Figma-Design-",
  },
  {
    name: "RAG Chatbot",
    description:
      "A Retrieval-Augmented Generation (RAG) chatbot that answers user queries by processing multiple PDF documents, leveraging Groq-powered LLMs and a custom Gradio-based interface.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Gradio", color: "blue-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
    ],
    image: rag, // Replace with actual chatbot image if available
    source_code_link: "https://github.com/Hasnazaheer/rag-chatbot",
  },
  {
    name: "Listings Dashboard",
    description:
      "A Python-powered interactive dashboard for analyzing job listings data, built with Pandas and Matplotlib, providing visual insights for better decision-making.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "pink-text-gradient" },
    ],
    image: regression, // Replace with actual dashboard image if available
    source_code_link: "https://github.com/Hasnazaheer/job-listings-dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };

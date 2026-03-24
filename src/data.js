import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

import City from "./images/CityFood.png";
import js from "./images/JS.png";
import bakery from "./images/BAKERY.png";
import beats from "./images/beats.png";
import video from "./images/video.png";
import social from "./images/social.png";
import iot from "./images/iot.png";
import img1 from "./images/pizza.jpg";
import img3 from "./images/store.jpg";
import img4 from "./images/portfolio.png";

export const Experience = [
  {
    id: 1,
    date: "2025 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "MS Data Science",
    place: "Luleå University of Technology",
    location: "Luleå, Sweden",
    description:
      "Analyzing large datasets to uncover patterns, solve complex problems, and generate actionable insights.",
  },
  {
    id: 2,
    date: "2024 - 2025",
    iconsSrc: <IoCodeWorking />,
    title: "Full Stack Developer",
    place: "WardLin",
    location: "Växjö, Sweden",
    description:
      "Fixed bugs in existing web applications and developed robust interfaces to integrate APIs and databases, improving performance and user experience.",
  },
  {
    id: 3,
    date: "2022 - 2024",
    iconsSrc: <IoCodeWorking />,
    title: "Full Stack Developer",
    place: "ATEA",
    location: "Växjö, Sweden",
    description:
      "Developed and maintained responsive web and desktop applications using HTML, CSS, JavaScript, and C# for warehouse management systems.",
  },
  {
    id: 4,
    date: "2021 - 2022",
    iconsSrc: <IoCodeWorking />,
    title: "IT Specialist",
    place: "ATEA",
    location: "Växjö, Sweden",
    description:
      "Network maintenance, troubleshooting, system testing, and IT support.",
  },
  {
    id: 5,
    date: "2018 - 2021",
    iconsSrc: <IoCodeWorking />,
    title: "BSc Software Technology",
    place: "Linnaeus University",
    location: "Växjö, Sweden",
    description:
      "Studied the software development lifecycle including requirements gathering, design patterns, development, testing, and project management.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "City Food",
    imageSrc: City,
    techs: "JavaScript, CSS, HTML, React.js, Tailwind CSS, Redux, Reducer, Firebase",
    github: "https://github.com/3BoOoD97/full_stack_food_delivery_app",
    website: "https://myrestaurant-7e860.web.app/",
  },
  {
    id: 2,
    name: "JavaScript Projects",
    imageSrc: js,
    techs: "JavaScript, CSS, HTML",
    github: "https://github.com/3BoOoD97/JavaScript_Exercises",
    website: "https://3boood97-js-projects.netlify.app/",
  },
  {
    id: 3,
    name: "Grandma's Bakery",
    imageSrc: bakery,
    techs: "JavaScript, CSS, HTML, Bootstrap",
    github: "https://github.com/3BoOoD97/Grandma-s-Bakery",
    website: "https://3boood97.github.io/Grandma-s-Bakery/",
  },
  {
    id: 4,
    name: "Food Delivery",
    imageSrc: img1,
    techs: "Laravel",
    github: "https://github.com/3BoOoD97/pizza-site",
  },
  {
    id: 5,
    name: "Electronics E-Store",
    imageSrc: img3,
    techs: "React.js, SCSS, CSS, EJS, JavaScript",
    github: "https://github.com/3BoOoD97/React-2",
  },

  {
    id: 6,
    name: "Beats Studio UI",
    imageSrc: beats,
    techs: "JavaScript, CSS, HTML, Tailwind CSS",
    github: "https://github.com/3BoOoD97/BEATS-STUDIO-UI",
    website: "https://3boood97.github.io/BEATS-STUDIO-UI/",
  },
  {
    id: 7,
    name: "Video Blog",
    imageSrc: video,
    techs: "TypeScript, JavaScript, Next.js, Tailwind CSS, Firebase, GSAP Animations",
    github: "https://github.com/3BoOoD97/Video-Blog/tree/main/videoblog-yt",
    website: "",
  },
  {
    id: 8,
    name: "Social Media App",
    imageSrc: social,
    techs: "HTML, CSS, JavaScript, Bootstrap, API",
    github: "https://github.com/3BoOoD97/social-media-app",
    website: "https://3boood97.github.io/social-media-app/",
  },
  {
    id: 9,
    name: "IoT Home Temperature & Humidity",
    imageSrc: iot,
    techs: "MQTT, Datacake, WLAN Network, API",
    github: "https://github.com/3BoOoD97/IoT_Home_Temperature_And_Humidity",
    website: "https://hackmd.io/yLvdeyJ_Sea2Z6ib5_B_yg?view",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/3BoOoD97?tab=repositories",
  },
  {
    id: 2,
    iconSrc: <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdalrhman-dabor-085219139",
  },
];
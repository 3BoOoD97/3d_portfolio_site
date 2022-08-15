import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
    IoLogoFacebook,
    IoLogoDiscord,
} from "react-icons/io5";
import img1 from "./images/pizza.jpg";
import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
import img3 from "./images/store.jpg";
import img4 from "./images/portfolio.png";
import img5 from "./images/music.png";

export const Experience = [{
        id: 1,
        date: "2021 - Present",
        iconsSrc: < IoCodeWorking / > ,
        title: "IT Technician",
        location: "Växjö, Sweden",
        description: "Creative Direction, Maintaining Networks, Testing, Troubleshooting, Supporting",
    },
    {
        id: 2,
        date: "2020 - Present",
        iconsSrc: < IoCodeWorking / > ,
        title: "Freelancer",
        location: "Växjö, Sweden",
        description: "Visual Design, User Experience, Project Management",
    },
    {
        id: 3,
        date: "2018 - 2021",
        iconsSrc: < IoCodeWorking / > ,
        title: "BSc Software Technology",
        location: "Växjö, Sweden",
        description: "",
    },
];

export const Projects = [{
        id: 1,
        name: "Food Delivery",
        imageSrc: img1,
        techs: "Laravel",
        github: "https://github.com/3BoOoD97/pizza-site",
    },
    {
        id: 2,
        name: "Comprehensive js projects",
        imageSrc: img2,
        techs: "JS, CSS, HTML",
        github: "https://github.com/3BoOoD97/JavaScript_Exercises",
    },
    {
        id: 3,
        name: "electronics e-store",
        imageSrc: img3,
        techs: "React Js,  SCSS, CSS, EJS, JS",
        github: "https://github.com/3BoOoD97/React-2",
    },
    {
        id: 4,
        name: "portfolio",
        imageSrc: img4,
        techs: "React Js, Tailwind CSS, JS, CSS, HTML ",
        github: "https://github.com/3BoOoD97/3d_portfolio_site",
    },
    {
        id: 5,
        name: "Whatsapp UI Clone (SOON)",
        imageSrc: img5,
        techs: "",
        github: "#",
    },

];

export const SocialLinks = [{
        id: 1,
        iconSrc: < IoLogoGithub className = "text-textBase text-3xl cursor-pointer" / > ,
        name: "GitHub",
        link: "https://github.com/3BoOoD97?tab=repositories",
    },
    {
        id: 1,
        iconSrc: < IoLogoYoutube className = "text-red-500 text-3xl cursor-pointer" / > ,
        name: "YouTube",
        link: "#",
    },
    {
        id: 1,
        iconSrc: ( <
            IoLogoFacebook className = "text-blue-500 text-3xl cursor-pointer" / >
        ),
        name: "Facebook",
        link: "https://www.facebook.com/abdalrhman.dabour",
    },
    {
        id: 1,
        iconSrc: ( <
            IoLogoLinkedin className = "text-blue-800 text-3xl cursor-pointer" / >
        ),
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/abdalrhman-dabour-085219139/",
    },
    {
        id: 1,
        iconSrc: ( <
            IoLogoDiscord className = "text-purple-500 text-3xl cursor-pointer" / >
        ),
        name: "Discord",
        link: "https://discordapp.com/users/805579387881652264/",
    },
];
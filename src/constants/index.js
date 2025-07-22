const tagline = {
  tag: "#full-stack #software-dev #graphic-designer #computer-science-graduate",
};

const scope = {};

const person = {
  name: {
    fname: "FORD BRYANT",
    lname: "SADIO",
    get fullname() {
      return `${this.fname} ${this.lname}`;
    },
  },
  photo: {
    img: "../src/assets/bg1.jpg",
    border: "../src/assets/border.gif",
  },
  bio: {
    birth: "September 22, 2002",
    citizenship: "Filipino",
    location: {
      country: "Philippines",
      province: "South Cotabato",
      city: "Koronadal City",
      get loc() {
        return `${this.city} , ${this.province} , ${this.country}`;
      },
    },
  },
  socials: {
    github: {
      name: "github",
      label: "Github",
      title: "Github Profile",
      icon: "fab fa-github",
      url: "https://github.com/Aizen4rdy",
    },
    facebook: {
      name: "facebook",
      label: "Facebook",
      title: "Facebook Profile",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/Aizen4rdy",
    },
    linkedin: {
      name: "linkedin",
      label: "LinkedIn",
      title: "LinkedIn Profile",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/ford-bryant-sadio-6aa619316/",
    },
  },
};

const info = {
  titleDesc:
    "A passionate and creative Junior Full-Stack Developer with a strong foundation in software engineering, design, and innovation. Dedicated to building responsive, user-focused web solutions with clean code and thoughtful design.",
};

const typedTitle = {
  title: [
    { text: "JUNIOR FULL-STACK DEVELOPER", color: "text-amber-400" },
    { text: "SOFTWARE DEVELOPER", color: "text-blue-400" },
    { text: "GRAPHIC DESIGNER", color: "text-pink-400" },
    { text: "COM SCI GRADUATE", color: "text-green-400" },
  ],
};

const navLink = [
  { id: "about", name: "About" },
  { id: "certificates", name: "Certificates" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

const about = {
  bio: {
    aboutme: `Hi! I'm Ford Bryant Sadio, a 22-year-old Computer Science graduated from Notre Dame of Marbel University Koronadal,South Cotabato, Philippines. I have a passion for creating websites and giving them the best design possible, making sure they’re both beautiful and functional.

I also enjoy building systems that solve real-world problems. Outside of coding, I'm a very approachable and easy-to-talk-to person. I love playing both sports and esports, which keep me competitive and team-oriented.

Design. Code. Play. Repeat. That’s me in a nutshell!
`,
    objective:
      "Entry-level full-stack developer passionate about using the MERN stack (MongoDB, Express.js, React, and Node.js) to build dynamic and responsive web applications. Very comfortable with HTML, CSS, and vanilla JavaScript, and also experienced with Java and Flutter for cross-platform and mobile development. I have a strong eye for UI/UX design and frontend styling, with proficiency in design tools like Figma and Canva. Eager to grow in roles that blend software engineering, user interface development, and modern design frameworks.",
    scopes: [
      { text: "Full Stack Developer" },
      { text: "(Entry) Mobile App Developer" },
      { text: "Frontend Developer/UI UX Designer" },
      { text: "Graphic Designer" },
      { text: "2D assets Designer" },
    ],
  },
};

// Utility logos
import cLogo from "../assets/utilities/c.png";
import cppLogo from "../assets/utilities/c++.png";
import dartLogo from "../assets/utilities/dart.png";
import javaLogo from "../assets/utilities/java.png";
import jsLogo from "../assets/utilities/js.png";
import pythonLogo from "../assets/utilities/python.png";
import figmaLogo from "../assets/utilities/figma.png";
import canvaLogo from "../assets/utilities/canva.png";
import tailwindLogo from "../assets/utilities/tailwind.png";
import mongoLogo from "../assets/utilities/mongodb.png";
import nodeLogo from "../assets/utilities/nodejs.png";
import bootstrapLogo from "../assets/utilities/bootstrap.png";

import vscodeLogo from "../assets/utilities/vscode.png";
import dockerLogo from "../assets/utilities/docker.png";
import postmanLogo from "../assets/utilities/postman.png";
import blenderLogo from "../assets/utilities/blender.png";
import flutterLogo from "../assets/utilities/flutter.png";
import cssLogo from "../assets/utilities/css.png";
import htmlLogo from "../assets/utilities/html.png";

const logos = [
  cLogo,
  cppLogo,
  dartLogo,
  javaLogo,
  jsLogo,
  pythonLogo,
  figmaLogo,
  canvaLogo,
  tailwindLogo,
  mongoLogo,
  nodeLogo,
  bootstrapLogo,
  vscodeLogo,
  dockerLogo,
  postmanLogo,
  blenderLogo,
  flutterLogo,
  cssLogo,
  htmlLogo,
];

// Certificate logos
import crimshieldLogo from "../assets/certificates/crimshield.jpg";
import resilienceLogo from "../assets/certificates/resilience.png";
import visionLogo from "../assets/certificates/vision.png";
import pyDataLogo from "../assets/certificates/python.png";

const certificates = [
  {
    title: "On-the-Job Training Completion",
    issuer: "Crimshield, Inc.",
    date: "July 12, 2024",
    description:
      "Completed 200 hours of on-the-job training at Crimshield, Inc. as part of BSIT program requirements.",
    logo: crimshieldLogo,
  },
  {
    title: "IT Resilience & Disaster Recovery",
    issuer: "West Visayas State University",
    date: "October 26, 2024",
    description:
      "Participated in the webinar on IT Infrastructure Management, Disaster Recovery, and Business Continuity Planning.",
    logo: resilienceLogo,
  },
  {
    title: "Computer Vision in Healthcare",
    issuer: "West Visayas State University",
    date: "October 25, 2024",
    description:
      "Joined the webinar on how computer vision is revolutionizing healthcare through automation and diagnostics.",
    logo: visionLogo,
  },
  {
    title: "Harnessing Python for Data Analysis",
    issuer: "West Visayas State University",
    date: "September 28, 2024",
    description:
      "Attended the seminar on Python-based data analysis tools, techniques, and industry best practices.",
    logo: pyDataLogo,
  },
];

// Projects
import lakbayImg from "../assets/projects/lakbaymarista.png";
import lakeSebuImg from "../assets/projects/lake-sebu-dashboard.png";
import googleAuthImg from "../assets/projects/Google-authenticator.png";
import weYouImg from "../assets/projects/we-you.png";

const projects = [
  {
    title: "Lakbay Marista",
    description:
      "Lakbay Marista is your one‑stop digital travel guide to the most captivating sights around the Mindanao region...",
    url: {
      github: "https://github.com/Aizen4rdy/lakbaymarista-tourist",
      live: "lakbaymarista.online",
    },
    image: lakbayImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "MySQL"],
    live: true,
  },
  {
    title: "Lake Sebu Collection System",
    description:
      "An ongoing responsive admin dashboard project built using AdminKit. It features sales tracking, graphs, and user analytics. Developed using HTML, CSS, Bootstrap, and JavaScript.",
    url: {
      github: "https://github.com/Aizen4rdy/adminkit-main",
      live: false,
    },
    image: lakeSebuImg,
    languages: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "MYSQL", "SPRINGBOOT"],
    live: false,
  },
  {
    title: "Google Authenticator",
    description:
      "A secure Google sign-in clone app built using Flutter, Firebase Auth, and Dart. Implements Google OAuth and user verification on Android platform.",
    url: {
      github: "https://github.com/Aizen4rdy/google-sign-in",
    },
    image: googleAuthImg,
    languages: ["FLUTTER", "FIREBASE", "DART", "C++", "HTML", "CMAKE", "SWIFT", "C"],
    live: false,
  },
  {
    title: "WE YOU (UI/UX Prototype)",
    description:
      "A Figma-based mobile UI/UX design concept for young adults, focusing on productivity and mental wellness. Customized from an existing template as part of a UI/UX course requirement.",
    url: {
      figma: "https://www.figma.com/proto/Eql0AAPnXEJo8PVMNPkUgM/WE-YOU-SADIO-?node-id=290-1192&p=f&t=U9ymc7ftilY1qbM0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=40%3A23&show-proto-sidebar=1"
    },
    image: weYouImg,
    languages: ["FIGMA", "UI/UX DESIGN"],
    live: false,
  },
];

// Final Export
export {
  person,
  scope,
  tagline,
  typedTitle,
  info,
  navLink,
  about,
  logos,
  certificates,
  projects,
};
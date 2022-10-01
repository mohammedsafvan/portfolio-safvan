import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillMail,
} from "react-icons/ai";

export const techStacks = [
  {
    name: "Flutter",
    url: "https://flutter.dev/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg",
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
  },
  {
    name: "CSS",
    url: "https://www.w3.org/TR/CSS/#css",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  },
  {
    name: "NextJs",
    url: "https://nextjs.org/docs",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-dark.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
  },
  {
    name: "Express",
    url: "https://expressjs.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-dark.svg",
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
  },
  {
    name: "FireBase",
    url: "https://firebase.google.com/",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
  },
];

export const projects = [
  {
    name: "Todo Firebase",
    techStack: ["Flutter", "Firebase"],
    image: "../public/todo_firebase.png",
    description:
      "A todo Android app with firebase cloud firestore and authentication(Phone No, Google, Email) with persistant storage",
    url: "https://github.com/mohammedsafvan/todo_firebase",
  },
  
];

export const socials = [
  {
    name: "LinkedIn",
    Icon: <AiFillLinkedin className="hover:scale-125 duration-500" />,
    url: "https://www.linkedin.com/in/mohammed-safvan-7022b21a3/",
  },
  {
    name: "Github",
    Icon: <AiFillGithub className=" hover:scale-125 duration-500" />,
    url: "https://github.com/mohammedsafvan",
  },
  {
    name: "GoogleDev",
    Icon: <AiFillGoogleCircle className="   duration-500 hover:scale-125" />,
    url: "https://g.dev/mohammedsafvan",
  },
  {
    name: "Mail",
    Icon: <AiFillMail className="duration-500 hover:scale-125" />,
    url: "mailto:mohammedsafvan.me@gmail.com",
  },
];

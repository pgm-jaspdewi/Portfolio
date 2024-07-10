export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 2,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:min-h-64",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Do you want to contact me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Currently looking for a first job experience.",
    description: "Fresh out of college",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "TTRPG Companion App",
    des: "The final project for my graduate degree. A companion app for the tabletop roleplaying game 'Dungeons and Dragons'.",
    img: "/p1.png",
    iconLists: ["/vue.svg", "/ts.svg", "/pini.svg", "/tail.svg", "/supa.svg"],
    link: "https://ttrpgcompanion.netlify.app/",
    linkText: "Check Live Site",
  },
  {
    id: 2,
    title: "This Portfolio",
    des: "A portfolio website to showcase my projects. Made with Next.js and TailwindCSS.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://pgmgent-atwork-1.github.io/atwork-1-project-2-pgm-jaspdewi/",
    linkText: "Check Live Site",
  },
  {
    id: 3,
    title: "Mockup Gentse Feesten website",
    des: "A mockup of the website of the 'Gentse Feesten'. Made for the course '@work1'.",
    img: "/p3.png",
    iconLists: ["/js.svg", "/html.svg", "/css.svg"],
    link: "https://pgmgent-atwork-1.github.io/atwork-1-project-2-pgm-jaspdewi/",
    linkText: "Check Live Site",
  },
  {
    id: 4,
    title: "Partygram",
    des: "React Native app based on the concept of 'Instagram'. Made for the course 'PGM6'.",
    img: "/p4.jpg",
    iconLists: ["/re.svg", "/ts.svg", "/supa.svg"],
    link: "https://github.com/pgm-jaspdewi/partygram",
    linkText: "View code on Github",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Intern @ Brightest - Fullstack Development",
    desc: "Responsible for the development of an in-house multipurpose platform using React.js, Vite, Typescript, MongoDB, TailwindCSS, and Auth0.",
    className: "",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/pgm-jaspdewi",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jasper-de-wilde-333777221",
  },
];

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    bank,
    threejs,
    php,
    mysql,
    python,
    cicd,
    amici,
    fx,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Devops",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "CI-CD",
      icon: cicd,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Web Developer",
      company_name: "Amici Infotech",
      icon: amici,
      iconBg: "#383E56",
      date: "Jan 2020 - September 2022",
      points: [
        "Developing and maintaining web applications using Php and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality Websites.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Fx data lab",
      icon: fx,
      iconBg: "#383E56",
      date: "Aug 2022 - present",
      points: [
        "Developing and maintaining web applications using React.js, django, laravel and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },   
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "bank site",
      description:
        "Welcome to our bank's landing page. Discover a secure and intuitive interface designed for seamless navigation. Explore our range of financial services and access essential information with ease. Experience the convenience of modern banking at your fingertips.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://github.com/taher-k5/react-vite-tailwind",
    },
    {
      name: "Buy Porperty Online",
      description:
        "Web application that enables users to buy or rent property imn that selective area for their suitable price.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "craft-cms",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,      
    },
    {
      name: "Ask Anything",
      description:
        "The ultimate search engine powered by Bing and ChatGPT. Get accurate results from Bing's vast index and engage in conversational queries with ChatGPT for an interactive search experience. Find answers, recommendations, and explore topics like never before. Discover the power of AskJeeves today.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "chatgpt",
          color: "pink-text-gradient",
        },
        {
          name: "redis",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,      
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
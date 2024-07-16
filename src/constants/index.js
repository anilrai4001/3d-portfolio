import { codingBlocks, cuvette } from "../assets/images";
import {
    car,

    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
{
    title: "Frontend Developer Intern",
    company_name: "Cuvette",
    icon: cuvette,
    iconBg: "#89CFF0",
    date: "November 2023 - February 2023",
    points: [
        "Collaborated with frontend team to develop new website pages using reusable components.",
"Improved the design of existing website pages by rectifying layout inconsistencies and enhancing visual appeal.",
"Utilized state management tools to enhance user interactions on web pages.",
"Integrated frontend components with backend APIs to enable seamless data exchange and functionality.",
        ]
},
{
    title: "Fullstack Developer Intern",
    company_name: "Coding Blocks",
    icon: codingBlocks,
    iconBg: "#fbc3bc",
    date: "June 2023 - October 2023",
    points: [
        "Developed a cutting-edge e-commerce frontend using React, Redux, and Tailwind CSS for state  management and sleek design.",
        "Enhanced user interactions using React Hook Form for improved form handling.",
        "Utilized intuitive components from Headless UI and Heroicons to create a visually appealing and seamless shopping experience.", 
        "Architected a robust backend with Node.js and Express, implementing secure user authentication through Passport and JSON Web Tokens.", 
        "Managed data seamlessly with MongoDB through Mongoose within the database layer.", 
        "Seamlessly integrated Stripe for secure payments and Nodemailer for efficient email notifications."
    ]
}

];

export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/anilrai4001',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anilrai4001',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Developed a social media web application using React.js, TypeScript, Tailwind CSS, and Appwrite with React Query for efficient data fetching.',
        link: 'https://snapgram-indol.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Youtube Clone',
        description: 'Built a responsive webapp for searching and watching videos using React.js, Material-UI, and Axios, emphasizing seamless UX/UI design and efficient API integration',
        link: 'https://youtube-clone-five-jet.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'IMDB Clone',
        description: 'Developed a responsive website for finding movies and shows by leveraging React, Redux-Toolkit, and TMDB API, emphasizing efficient state management and refined SASS styling.',
        link: 'https://movix-anil.vercel.app/',
    },

    

];

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shivam Kedia',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hello World! My name is Shivam Kedia.I'm a competitive programmer and a full stack web developer with primary focus on React and Javascript.",
  paragraphTwo: "I'm proficient in various data structure and algorithms and has fair knowledge of OOPs.My primary coding language is C++.",
  paragraphThree: 'I go by the username "skshivamkedia" at various CP sites like codeforces,codechef..',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'forkify.jpg',
    title: 'Foodie-Recipe-Forkify',
    info: 'A web app to search for your favourite recipes.User can upload their own recipes and bookmark them.User can customize ingredients according to the servings.',
    info2: 'Languages and Technology: JavaScript, SCSS, HTML.',
    url: 'https://foodie-recipe-forkify.netlify.app/',
    repo: 'https://github.com/skshivamkedia/foodie-recipe-forkify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'whiteboard.jpg',
    title: 'Drawing Pen App',
    info: 'A web app to use whiteboard online.User can download the whiteboard as a image.Drawing pen can be customized to any color and stroke size.',
    info2: 'Languages and Technology: React, JavaScript, CSS, HTML.',
    url: 'https://drawing-pen.netlify.app/',
    repo: 'https://github.com/skshivamkedia/Drawing-Pen', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'Day Scheduler App',
    info: 'A web app to organize your daily tasks.',
    info2: 'Languages and Technology: Node.js, Express.js, MongoDB, Javascript.',
    url: 'https://day-scheduler-app.herokuapp.com/',
    repo: 'https://github.com/skshivamkedia/day-scheduler', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email : skshivamkedia96@gmail.com',
  btn: '',
  email: 'skshivamkedia96@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/skshivamkedia/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/skshivamkedia',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

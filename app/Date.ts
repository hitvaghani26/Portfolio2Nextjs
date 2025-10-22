import { StaticImageData } from 'next/image';
import {
  CSS3,
  gsapGreensock,
  Express,
  Git,
  GitHub,
  GraphQL,
  HTML5,
  JavaScript,
  MongoDB,
  Nextjs,
  NGINX,
  Nodejs,
  React,
  Sass,
  Swagger,
  TypeScript,
  VSCode,
  Vite,
  Webpack,
  Docker,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
} from './assets/photos/index';
type Skill = [string, StaticImageData, string];


 interface SkillCategory {
  skillTitle: string;
  skills: Skill[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; // or `StaticImageData` if using Next.js
  link: string;
  tags: string[];
}
const projectsData : Project[] = [
  {
    id: 1,
    title: 'Dynamic Content Management Website',
    description:
      'A fully dynamic website with an integrated admin panel. The admin can manage text size, colors, content, images, and carousels in real time. All updates made in the admin panel are instantly reflected on the user-facing site, ensuring seamless content control and flexibility.',
    image: thumbnail1,
    link: 'https://via.placeholder.com/150',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 2,
    title: 'Eevee Gold Wealth Platform',
    description:
      'A live gold trading platform where users can buy and withdraw gold at real-time market prices. The application ensures secure transactions and accurate price synchronization, providing a smooth and reliable experience for users.',
    image: thumbnail2,
    link: 'https://via.placeholder.com/150',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 3,
    title: 'Fashion Website Homepage',
    description:
      'Developed the homepage for a modern fashion website. The design focuses on clean layout, responsive styling, and engaging visuals to create an attractive first impression for visitors.',
    image: thumbnail3,
    link: 'https://via.placeholder.com/150',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 4,
    title: 'Online Gaming Website',
    description:
      'Built and managed the grid system for an online gaming website. The implementation focused on creating a responsive, structured layout to support smooth gameplay and user interaction.',
    image: thumbnail4,
    link: 'https://via.placeholder.com/150',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 5,
    title: 'Academic Website',
    description:
      'Contributed to the frontend development of an academic platform. Built key pages such as the homepage and authentication flow, ensuring usability, responsive design, and secure access for students and faculty.',
    image: thumbnail5,
    link: 'https://via.placeholder.com/150',
    tags: ['tag1', 'tag2', 'tag3'],
  }, {
    id: 6,
    title: 'E-Commerce Website',
    description:
      'Developed a full-featured e-commerce platform with dedicated user and admin panels. The system allows efficient product management, user handling, and administrative control, supporting a complete online shopping experience.',
    image: thumbnail6,
    link: 'https://via.placeholder.com/150',
    tags: ['tag1', 'tag2', 'tag3'],
  }
];
export const skills : SkillCategory[] = [
  {
    skillTitle: 'Frontend',
    skills: [
      ['HTML5', HTML5, 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
      ['CSS3', CSS3, 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
      [
        'JavaScript',
        JavaScript,
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      ],
      ['TypeScript', TypeScript, 'https://www.typescriptlang.org/'],
      ['React', React, 'https://react.dev/'],
      ['Next.js', Nextjs, 'https://nextjs.org/'],
      ['GSAP', gsapGreensock, 'https://gsap.com/'],
      ['Sass', Sass, 'https://sass-lang.com/'],
    ],
  },
  {
    skillTitle: 'Backend & Database',
    skills: [
      ['Node.js', Nodejs, 'https://nodejs.org/'],
      ['Express', Express, 'https://expressjs.com/'],
      ['MongoDB', MongoDB, 'https://www.mongodb.com/'],
      ['NGINX', NGINX, 'https://nginx.org/'],
    ],
  },
  {
    skillTitle: 'Tools & APIs',
    skills: [
      ['Git', Git, 'https://git-scm.com/'],
      ['GitHub', GitHub, 'https://github.com/'],
      ['GraphQL', GraphQL, 'https://graphql.org/'],
      ['Webpack', Webpack, 'https://webpack.js.org/'],
      ['Vite', Vite, 'https://vitejs.dev/'],
      ['Swagger', Swagger, 'https://swagger.io/'],
      ['VS Code', VSCode, 'https://code.visualstudio.com/'],
      ['Docker', Docker, 'https://www.docker.com/'],
    ],
  },
];

export default projectsData;

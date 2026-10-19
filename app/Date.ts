import type { StaticImageData } from 'next/image';
import {
  CSS3,
  gsapGreensock,
  Express,
  Git,
  GitHub,
  HTML5,
  JavaScript,
  MongoDB,
  Nextjs,
  NGINX,
  Nodejs,
  React,
  Swagger,
  TypeScript,
  VSCode,
  Vite,
  Docker,
} from './assets/photos/index';
type Skill = [string, StaticImageData | null, string];


 interface SkillCategory {
  skillTitle: string;
  description: string;
  relatedProject: string;
  relatedLabel: string;
  skills: Skill[];
}

export const skills : SkillCategory[] = [
  {
    skillTitle: 'Frontend',
    description: 'Customer websites, admin panels, and React Native screens.',
    relatedProject: '/projects/healthcare-booking-and-results',
    relatedLabel: 'Booking & results',
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
      ['Tailwind CSS', null, 'https://tailwindcss.com/'],
      ['React Native', null, 'https://reactnative.dev/'],
      ['GSAP', gsapGreensock, 'https://gsap.com/'],
    ],
  },
  {
    skillTitle: 'Backend',
    description: 'APIs for appointments, orders, test results, and partner systems.',
    relatedProject: '/projects/healthcare-partner-integration',
    relatedLabel: 'Partner integration',
    skills: [
      ['Node.js', Nodejs, 'https://nodejs.org/'],
      ['Express', Express, 'https://expressjs.com/'],
      ['NestJS', null, 'https://nestjs.com/'],
      ['REST APIs', null, 'https://developer.mozilla.org/en-US/docs/Glossary/REST'],
      ['Webhooks', null, 'https://docs.github.com/en/webhooks/about-webhooks'],
      ['Swagger', Swagger, 'https://swagger.io/'],
    ],
  },
  {
    skillTitle: 'Data',
    description: 'PostgreSQL and MongoDB models, query performance, and reliable updates.',
    relatedProject: '/projects/backend-order-performance',
    relatedLabel: 'Order query improvements',
    skills: [
      ['PostgreSQL', null, 'https://www.postgresql.org/'],
      ['TypeORM', null, 'https://typeorm.io/'],
      ['MongoDB', MongoDB, 'https://www.mongodb.com/'],
      ['Mongoose', null, 'https://mongoosejs.com/'],
      ['Idempotency', null, 'https://developer.mozilla.org/en-US/docs/Glossary/Idempotent'],
    ],
  },
  {
    skillTitle: 'Tools',
    description: 'Version control, local development, containers, and delivery.',
    relatedProject: '/#projects',
    relatedLabel: 'Selected work',
    skills: [
      ['Git', Git, 'https://git-scm.com/'],
      ['GitHub', GitHub, 'https://github.com/'],
      ['Vite', Vite, 'https://vitejs.dev/'],
      ['NGINX', NGINX, 'https://nginx.org/'],
      ['VS Code', VSCode, 'https://code.visualstudio.com/'],
      ['Docker', Docker, 'https://www.docker.com/'],
    ],
  },
];

export { default } from './data/projects';

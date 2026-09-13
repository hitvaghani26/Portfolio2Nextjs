import type { StaticImageData } from 'next/image';
import cmsImage from './assets/photos/thumbnail1.png';
import goldImage from './assets/photos/thumbnail2.png';
import fashionImage from './assets/photos/thumbnail3.png';
import gamingImage from './assets/photos/thumbnail4.png';
import academicImage from './assets/photos/thumbnail5.png';
import commerceImage from './assets/photos/thumbnail6.png';

export const profile = {
  email: 'hit.vaghani.dev@gmail.com',
  github: 'https://github.com/hitvaghani26',
  linkedin: 'https://www.linkedin.com/in/vaghani-hit-48487b235/',
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  role: string;
  context: string;
  image?: StaticImageData;
  imageAlt?: string;
  technologies: string[];
  challenge: string;
  contributions: { title: string; text: string }[];
  result: string;
};

// Descriptions use the existing portfolio and CV. Outcomes are qualitative until verified.
export const projects: Project[] = [
  {
    slug: 'healthcare-platform',
    name: 'Healthcare, across borders.',
    category: 'Production engineering',
    summary: 'Customer journeys, payments, and internal portals for a diagnostics platform operating in the US, Kazakhstan, and Vietnam.',
    role: 'Full-stack Software Engineer',
    context: 'Staycold Solution / Oct 2025 - present',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
    challenge: 'A diagnostics platform connects customers, labs, and operational teams. Each country version needs its own payment and communication flows, while the customer journey must stay connected from checkout through test results.',
    contributions: [
      { title: 'The customer journey', text: 'Worked on checkout, sample-kit registration, health questionnaires, order tracking, and consultation booking across three live country versions.' },
      { title: 'Payments and identity', text: 'Integrated Stripe, Kaspi, and OnePay payment flows, alongside email and phone OTP, JWT/session authentication, and OAuth.' },
      { title: 'Behind the customer interface', text: 'Built role-based portals for labs and phlebotomists, Node.js/Express APIs, validation, audit logging, cron jobs, and webhooks.' },
      { title: 'Delivery and communication', text: 'Worked on PDF result reports, English and Russian email notifications, and deployments using Ubuntu, Docker, AWS, and Cloudflare R2.' },
    ],
    result: 'Contributed production features across three live country versions, connecting customer-facing flows with the internal tools used to process diagnostic orders.',
  },
  {
    slug: 'content-management',
    name: 'A website the team can own.',
    category: 'Website + CMS',
    summary: 'A dynamic business website with an admin panel for managing content, imagery, carousels, and visual settings.',
    role: 'Frontend development',
    context: 'Selected client work',
    image: cmsImage,
    imageAlt: 'Existing migration and education website, showing its navigation, enquiry action, and introductory content.',
    technologies: ['React', 'Content management', 'Admin interfaces'],
    challenge: 'Business content changes regularly. A website needs a way for its team to update copy, images, and page presentation without making a code change for every edit.',
    contributions: [
      { title: 'Editable content', text: 'Developed the website with an integrated admin panel for managing text, images, and carousels.' },
      { title: 'Presentation controls', text: 'Added content controls for text sizing and colors, with changes reflected on the public-facing site.' },
      { title: 'Public-facing experience', text: 'Connected the managed content to the website so that the business could maintain its pages through the admin interface.' },
    ],
    result: 'Delivered a website with content and presentation controls in an integrated admin panel, giving the team a direct way to maintain the public site.',
  },
  {
    slug: 'eevee-gold',
    name: 'Eevee Gold.',
    category: 'Commerce + live data',
    summary: 'A gold platform connecting buying and withdrawal flows with real-time market pricing.',
    role: 'Web application development',
    context: 'Selected client work',
    image: goldImage,
    imageAlt: 'Eevee Gold website homepage with the gold purchase action and platform overview.',
    technologies: ['Web application', 'Live pricing', 'Transaction flows'],
    challenge: 'A gold purchase flow depends on changing market data. The interface has to connect current pricing with the actions customers use to buy and withdraw gold.',
    contributions: [
      { title: 'Live pricing', text: 'Worked on a platform that uses a real-time gold-price feed to display current market prices.' },
      { title: 'Customer transactions', text: 'Developed buying and withdrawal flows around the platform\'s market pricing.' },
      { title: 'A connected experience', text: 'Connected the user-facing experience with the platform\'s pricing and transaction functionality.' },
    ],
    result: 'Delivered a web experience where customers can buy and withdraw gold using real-time market prices.',
  },
  {
    slug: 'e-commerce',
    name: 'From storefront to operations.',
    category: 'Full-stack commerce',
    summary: 'An e-commerce application with customer and admin panels for shopping and product management.',
    role: 'Full-stack development',
    context: 'Selected project',
    image: commerceImage,
    imageAlt: 'Existing e-commerce project screenshot from the original portfolio.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    challenge: 'An online store needs both a customer experience and a practical way to manage products and users behind the scenes.',
    contributions: [
      { title: 'Customer experience', text: 'Developed the user-facing e-commerce experience and its dedicated customer panel.' },
      { title: 'Administrative tools', text: 'Built an admin panel for product management and user handling.' },
      { title: 'Full-stack implementation', text: 'Connected frontend interfaces to the application backend and database.' },
    ],
    result: 'Built customer and administrative experiences within one e-commerce application.',
  },
];

export const otherWork = [
  { name: 'Fashion homepage', image: fashionImage, scope: 'Homepage development, responsive layout, and styling.' },
  { name: 'Gaming interface', image: gamingImage, scope: 'Responsive grid implementation for a gaming website.' },
  { name: 'Academic platform', image: academicImage, scope: 'Frontend contributions to the homepage and authentication flow.' },
];

export const experience = [
  { company: 'Staycold Solution', role: 'Full-stack Software Engineer', date: 'Oct 2025 - present', text: 'Production healthcare software across three country versions. Customer flows, payments, role-based portals, APIs, and deployment.' },
  { company: 'CodeGravy Infotech', role: 'Frontend Developer', date: 'May 2024 - Jul 2025', text: 'React and Next.js products, reusable components, CMS and admin tools, payment integration, live pricing, and GSAP motion.' },
  { company: 'Semicolon Solution', role: 'MERN Stack Developer Intern', date: 'Jan - Apr 2024', text: 'E-commerce features spanning authentication, shopping, uploads, and administration.' },
  { company: 'Infolabz', role: 'Frontend Developer Intern', date: 'Jun - Jul 2023', text: 'React interfaces and REST API integration.' },
];

export const capabilities = [
  { number: '01', title: 'Websites with character', text: 'Responsive React and Next.js websites, editable content, and carefully timed GSAP motion.', items: 'Business websites / CMS / Creative frontend' },
  { number: '02', title: 'Products that do the work', text: 'Customer journeys, e-commerce, dashboards, and admin tools connected to the systems behind them.', items: 'Web applications / Admin portals / Payments' },
  { number: '03', title: 'Engineering beyond the UI', text: 'APIs, authentication, role-based access, databases, and deployment for production applications.', items: 'Node.js / Integrations / Full-stack delivery' },
];

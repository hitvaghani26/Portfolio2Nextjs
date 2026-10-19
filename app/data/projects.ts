import type { StaticImageData } from 'next/image';
import { thumbnail1 } from '../assets/photos';

export type ProjectVisualKind = 'workflow' | 'performance' | 'integration' | 'content' | 'mobile' | 'cms';

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  organization: string;
  role: string;
  period: string;
  status?: string;
  tags: string[];
  visual: ProjectVisualKind;
  image?: StaticImageData;
  overview: string;
  challenge: string;
  contributions: string[];
  decisions: { title: string; explanation: string }[];
  outcome: string;
  takeaway: string;
  metric?: { before: string; after: string; label: string; context: string };
}

const projects: Project[] = [
  {
    slug: 'healthcare-booking-and-results',
    title: 'Healthcare Booking & Lab Workflows',
    category: 'Full-stack development',
    description: 'Connecting appointment booking, laboratory tools, and test results. I worked across the customer interface and backend to keep the journey consistent for customers, administrators, and collection staff.',
    organization: 'OPEN-Healthcare project work',
    role: 'Full-stack contributor',
    period: '2026',
    tags: ['Next.js', 'TypeScript', 'Express', 'MongoDB'],
    visual: 'workflow',
    overview: 'A healthcare appointment is more than a date on a calendar. The customer needs an available slot, the laboratory needs the right test information, and collection staff need a clear next step. My contributions connected these parts of an existing healthcare platform.',
    challenge: 'Availability, registration, collection, and results involve different people and rules. A booking that looks valid in the interface can still conflict with laboratory capacity or an appointment already in progress. The challenge was to make these rules work consistently across the customer and internal tools.',
    contributions: [
      'Developed appointment availability and validation across customer-facing pages and backend services.',
      'Worked on temporary slot holds, laboratory scheduling, and explicit administrator overrides.',
      'Added kit-to-laboratory test mappings and normalization to keep test information consistent.',
      'Extended PDF result upload, retrieval, and management, alongside the customer-facing result views.',
    ],
    decisions: [
      { title: 'Validate the booking on the server', explanation: 'The interface helps a customer choose a slot, but the backend has to check whether that choice is still available. Keeping that check close to the booking rules reduces disagreement between what a page shows and what the system accepts.' },
      { title: 'Treat a slot hold as temporary', explanation: 'A customer may leave registration before finishing. A temporary hold can protect the slot during that process without treating every unfinished registration as a confirmed appointment.' },
      { title: 'Make exceptions explicit', explanation: 'Administrators sometimes need to override the normal schedule. I worked on a separate override path so the ordinary customer journey can keep its normal validation rules.' },
      { title: 'Connect results to the same journey', explanation: 'Result upload is useful only when the correct customer can find the correct document. I worked across the admin, laboratory, and customer parts of that flow.' },
    ],
    outcome: 'Implemented booking and result-management improvements across an existing platform, with shared rules supporting the customer journey and internal workflows. The work spans interface behavior, API validation, and the underlying data.',
    takeaway: 'I learned to follow the whole workflow before changing one screen. The most useful questions were about what happens before a booking, who acts next, and how the customer eventually receives the result.',
  },
  {
    slug: 'backend-order-performance',
    title: 'Making Order Workflows More Efficient',
    category: 'Backend & database engineering',
    description: 'Improving NestJS and PostgreSQL order workflows by reducing multiplied query results, batching database operations, and reusing data already available in a request.',
    organization: 'Healthcare order & collection platform',
    role: 'Backend contributor',
    period: '2026',
    tags: ['NestJS', 'PostgreSQL', 'TypeORM', 'Query optimization'],
    visual: 'performance',
    overview: 'Order and collection features depend on detailed data: patients, groups, assignments, and services. I worked on the NestJS backend to reduce unnecessary database work while preserving the behavior expected by the applications using it.',
    challenge: 'One order-detail query joined several one-to-many collections together. Those joins multiplied each other, creating many more result rows than the order actually needed. Other paths repeated lookups or wrote existing patients one at a time.',
    contributions: [
      'Separated row-multiplying TypeORM joins into focused queries and attached their results to the same order object.',
      'Batched writes for existing order patients instead of issuing a separate update for every patient.',
      'Batched order lookups used by collection and dashboard workflows.',
      'Reused authenticated profiles and previously loaded task data rather than reading the same records again.',
    ],
    decisions: [
      { title: 'Look beyond query count', explanation: 'A single query is not automatically cheaper than three queries. Joining sibling collections can create a large intermediate result that has to be transferred and rebuilt into objects. I separated those collections so each query retrieves the data it actually needs.' },
      { title: 'Preserve the object the caller expects', explanation: 'The queries changed internally, but downstream mapping still needed the same relationships. Attaching the separately loaded collections to the root order kept that contract intact, including the existing handling of deleted patients.' },
      { title: 'Batch work with the same purpose', explanation: 'Existing patients can be persisted together. Batching that operation reduces round trips without changing which patient fields are saved. New patients still need their generated identifiers handled correctly.' },
      { title: 'Keep the measurement specific', explanation: 'The documented comparison uses a 60-patient order. It demonstrates the join problem clearly, but it does not establish an average production latency improvement.' },
    ],
    outcome: 'A documented 60-patient test case reduced database result rows from 21,600 to 301 and database transfer volume from 32.5 MB to 194 KB. The change record also documents unchanged response bodies across 19 GET routes. These are historical test-case measurements, not a production-wide benchmark.',
    takeaway: 'The goal is to move and rebuild less unnecessary data. Understanding the shape of the relationships mattered more than simply trying to minimize the number of SQL statements.',
    metric: { before: '21,600', after: '301', label: 'database result rows', context: 'Documented 60-patient test case. Historical measurements; not a production-wide average.' },
  },
  {
    slug: 'healthcare-partner-integration',
    title: 'Reliable Healthcare Partner Integration',
    category: 'Systems integration',
    description: 'An integration layer for healthcare orders, with durable retries, signed webhooks, and reconciliation. Built to handle timeouts and repeated events without losing track of the order.',
    organization: 'OPEN-Healthcare project work',
    role: 'Full-stack integration contributor',
    period: '2026',
    status: 'Integration in development',
    tags: ['Node.js', 'MongoDB', 'Webhooks', 'Idempotency'],
    visual: 'integration',
    overview: 'I implemented an integration layer between a healthcare storefront and a partner order system. It connects order submission, booking information, customer and admin interfaces, incoming status updates, and reconciliation between the two systems.',
    challenge: 'Two systems do not always respond at the same time. A request can time out after the partner has accepted it, and a webhook can arrive more than once or out of order. The implementation needed to recover from those situations without creating duplicate orders or applying stale updates.',
    contributions: [
      'Implemented a durable MongoDB outbox with retry backoff and expiring worker leases.',
      'Added idempotent order submission, booking payload mapping, and customer/admin integration routes.',
      'Implemented HMAC-SHA256 verification over the raw webhook body, with duplicate and out-of-order event handling.',
      'Worked on order reconciliation, supporting automated tests, and mock API scenarios.',
    ],
    decisions: [
      { title: 'Save the intent before sending', explanation: 'An order submission should not depend on the partner responding during the customer’s click. A durable outbox records the work locally, allowing a worker to send it and retry when the partner becomes available.' },
      { title: 'Keep one identity across retries', explanation: 'A timeout does not tell us whether an order was created. Reusing the same idempotency key gives the partner a way to recognize a repeat request instead of creating a second order.' },
      { title: 'Expect events to repeat', explanation: 'Webhook delivery can be retried. Event identifiers and ordering checks let the receiver distinguish a new update from a duplicate or an older snapshot.' },
      { title: 'Roll out the new flow deliberately', explanation: 'The integration was introduced alongside existing flows with explicit enablement switches. That makes it possible to compare and enable the new behavior deliberately rather than assuming every connected screen is already live.' },
    ],
    outcome: 'Implemented the integration foundation, related customer/admin flows, and supporting test scenarios. The integration remains presented here as work in development; a full production rollout is not claimed.',
    takeaway: 'Reliability comes from designing for the awkward cases early: a lost response, a duplicate event, a worker stopping halfway through, or two systems temporarily disagreeing.',
  },
  {
    slug: 'multilingual-content-and-media',
    title: 'Multilingual Content & Media Tools',
    category: 'Web development & content management',
    description: 'Helping a healthcare content team manage multilingual pages, FAQs, and images. I connected admin editing tools, backend content models, and responsive customer-facing pages.',
    organization: 'OPEN-Healthcare · Kazakhstan website',
    role: 'Full-stack contributor',
    period: '2026',
    tags: ['React', 'Next.js', 'Internationalization', 'Media handling'],
    visual: 'content',
    overview: 'A multilingual website needs more than translated labels. Editors need tools for the content and images that belong to each language and screen size. I contributed features across the healthcare website, its admin tools, and the backend that connects them.',
    challenge: 'Blog posts, FAQs, and product information have different content needs, and a desktop image may not work well on a phone. The challenge was to give editors useful control while keeping content and media consistent between the admin panel and the public pages.',
    contributions: [
      'Extended blog and FAQ models and editing tools with multilingual and mobile-specific fields.',
      'Added support for mobile blog images and localized content.',
      'Implemented media management, media-listing permissions, and improvements to image URL handling.',
      'Worked on localized product-information pages and reusable article-cover handling.',
    ],
    decisions: [
      { title: 'Give mobile content its own place', explanation: 'Some content needs a different image or presentation on a smaller screen. Explicit mobile fields give editors control over that experience instead of relying on one asset to work in every layout.' },
      { title: 'Connect the editor to the final page', explanation: 'Adding an admin field is only one part of the work. The backend has to store it consistently, and the customer-facing page has to use the right value for the language and layout.' },
      { title: 'Handle media consistently', explanation: 'Uploads, stored paths, and generated URLs need to agree. I worked on that shared media behavior so pages can resolve the assets selected in the admin tools.' },
    ],
    outcome: 'Extended the content-management workflow with multilingual and mobile-specific editing, media support, and corresponding website updates. The result gives content teams more control over how information is presented.',
    takeaway: 'A good content feature serves two users: the person reading the page and the person maintaining it. I try to consider both when deciding how content should be modeled and displayed.',
  },
  {
    slug: 'collection-staff-mobile-app',
    title: 'A Clearer Collection Staff Experience',
    category: 'Mobile & backend contributions',
    description: 'React Native improvements for healthcare collection staff, including proof of visit, permission handling, collection feedback, and more predictable notification and navigation behavior.',
    organization: 'OPEN-Healthcare project work',
    role: 'React Native & backend contributor',
    period: '2026',
    tags: ['React Native', 'TypeScript', 'Location & photos', 'Notifications'],
    visual: 'mobile',
    overview: 'Collection staff need an app that supports what happens during a visit. I contributed to an existing React Native app and its backend, with a focus on recording visit evidence and making everyday appointment actions easier to follow.',
    challenge: 'Photo and location capture depend on device permissions, and a visit does not always produce a complete collection. Navigation and notifications also need to lead staff to the right place without leaving stale state behind.',
    contributions: [
      'Added proof of visit with photo and location capture, connected to multipart backend uploads.',
      'Worked on camera, photo-library, and location permission handling.',
      'Improved feedback for incomplete collections without treating every warning as a blocked action.',
      'Refined Android back navigation, notification-state cleanup, and English/Vietnamese messages.',
    ],
    decisions: [
      { title: 'Keep the real visit in view', explanation: 'A collection may be incomplete while the visit itself still needs to be recorded. Advisory warnings help staff understand missing information without making it impossible to report what actually happened.' },
      { title: 'Treat permissions as part of the feature', explanation: 'A photo or location feature is incomplete if the app cannot explain or handle the required device access. I worked on the permission behavior alongside the capture and upload flow.' },
      { title: 'Make returning to the app predictable', explanation: 'Back-button handling and notification cleanup affect repeated daily use. I worked on those transitions as part of the appointment experience rather than treating them as separate polish.' },
    ],
    outcome: 'Implemented focused improvements to visit evidence, collection feedback, permissions, and navigation in an existing mobile product, with corresponding backend support.',
    takeaway: 'The small transitions matter in a working app. A useful feature has to account for a permission being unavailable, an incomplete task, and the user coming back later.',
  },
  {
    slug: 'dynamic-content-management',
    title: 'Dynamic Content Management Website',
    category: 'Earlier selected work',
    description: 'A website and admin panel that let non-technical staff manage page content, images, typography, colors, and carousels without a developer making each change.',
    organization: 'Earlier agency work',
    role: 'Web development contributor',
    period: 'Earlier work',
    tags: ['React', 'Content management', 'Admin tools'],
    visual: 'cms',
    image: thumbnail1,
    overview: 'This earlier project focused on making a website easier to maintain. Instead of treating every text or visual update as a development task, the site included an admin panel for managing page content and presentation.',
    challenge: 'A content team needs enough control to keep a website current without having to ask a developer for each small change. The website and admin panel needed to work together so edits were reflected in the public experience.',
    contributions: [
      'Contributed to a dynamic website with an integrated admin panel.',
      'Enabled management of text, images, typography, colors, and carousel content.',
      'Connected the managed content to the customer-facing pages.',
    ],
    decisions: [
      { title: 'Start with the editor’s everyday changes', explanation: 'The useful controls were the ones a content team actually needed: updating copy, changing images, and adjusting presentation. The admin experience centered on those tasks.' },
      { title: 'Connect content and presentation', explanation: 'The website needed to use the values maintained in the admin panel so the team could see its changes reflected in the pages people visit.' },
    ],
    outcome: 'Delivered a CMS-driven editing experience that reduced the need for a developer to make routine page updates.',
    takeaway: 'This project helped me think beyond the public page. The tools used to maintain a website are part of the product experience too.',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export default projects;

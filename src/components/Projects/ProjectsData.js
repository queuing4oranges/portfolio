import portfolio from './images/portfolio.png';
import lesbotoc from './images/lesbotoc.png';
import altira from './images/altira.png';
import adminpanel from './images/adminpanel.png';
import apis from './images/apis.png';
import dacapo from './images/dacapo.webp';
import kvirt2 from './images/kvirt2.webp';

export const projectsData = [
	{
		title: 'Portfolio',
		tech: 'JavaScript | ReactJS | SCSS | Tailwind',
		description: 'The Portfolio Landing Page is my ongoing work in progress. I want to use it to add more projects and to showcase my learning process. It also displays the final project from the Web Development Bootcamp I joined in 2022, as well as projects I finished on my own, projects from video tutorials, or results from other resources of study.',
		image: portfolio,
		github: 'https://github.com/queuing4oranges/portfolio',
		live: 'https://www.queuing4oranges.com/',
	},
	{
		title: 'Altira.cz',
		tech: 'JavaScript | ReactJS | SCSS | Figma',
		description: 'The project is the landing page for a start-up in logistics. The design and wireframing was done in Figma. My client asked me to also design a new logo. The CTA section includes a contact form, which will be send to the company with the help of EmailJS. It is responsive for mobile devices.',
		image: altira,
		github: 'https://github.com/queuing4oranges/altira-website',
		live: 'https://www.altira.cz/',
	},
	{
		title: 'Lesbotoč.cz',
		tech: 'JavaScript | ReactJS | SCSS | Bootstrap | Figma',
		description: 'The website is the landing page for an organisation dedicated to bringing together queer women in Prague. The website shows a calendar with events, including a sign up, a gallery, about section and contact form. The organisation will be rebranded in the near future, therefore the website is currently hosted on a subdomain.',
		image: lesbotoc,
		github: 'https://github.com/queuing4oranges/lesbotoc-website',
		live: 'https://tb01.queuing4oranges.com/',
	},
	{
		title: 'Kvirtivity.cz',
		tech: 'JavaScript | ReactJS | SCSS | Bootstrap | i18next',
		description: 'New landing page for a small group of women organising events for queer women in Prague. The website is currently a work in progress and will be launched soon.',
		image: kvirt2,
		github: 'https://github.com/queuing4oranges/kvirtivity-website',
		live: 'https://test-cat.queuing4oranges.com/',
	},
	{
		title: 'Admin Panel',
		tech: 'JavaScript | ReactJS | SCSS | Bootstrap | Postman',
		description: 'The Admin Panel is a CMS built for the organisers of the Lesbotoč events. Admins will be able to execute CRUD operations with contacts and events and upload images for a user image gallery.',
		image: adminpanel,
		github: 'https://github.com/queuing4oranges/lesbotoc-admin'
	},
	{
		title: 'PHP APIs',
		tech: 'PHP | MySQL | Postman',
		description: 'The API endpoints are build for the communication with the database of the Lesbotoc.cz website. The database was created and set up with phpMyAdmin. The endpoints allow the user to execute CRUD operations (with contacts, events, but also upload pictures).',
		image: apis,
		github: 'https://github.com/queuing4oranges/lesbotoc-backend-api',
	},
	{
		title: 'dacapo-chor.de',
		tech: 'VueJS | JavaScript | SCSS | Vite',
		description: 'A public-facing website for the "da capo" choir. This project presents the choir, their repertoire, and performances to the community.',
		image: dacapo,
		github: 'https://github.com/queuing4oranges/dacapo-chor',
		live: 'https://www.dacapo-chor.de/',
	},
];

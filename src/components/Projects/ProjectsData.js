import portfolio from './images/portfolio.png';
import lesbotoc from './images/lesbotoc.png';
import altira from './images/altira.png';
import adminpanel from './images/adminpanel.png';
import apis from './images/apis.png';

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
		description: 'The website is the landing page for an organisation dedicated to bringing together queer women in Prague. The website shows a calendar with events, including a sign up and add-to-calendar function. It includes also a gallery and some information about the organisation as well as a contact form.',
		image: lesbotoc,
		github: 'https://github.com/queuing4oranges/lesbotoc-website',
		live: 'https://www.lesbotoc.cz/',
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
	// {
	// 	title: 'MiniProjects',
	// 	tech: 'ReactJS | JavaScript | SCSS | APIs',
	// 	description: 'The MiniProjects is a collection of cute little exercises and small projects, mostly built in ReactJS.',
	// 	image: portfolio,
	// 	github: 'https://github.com/queuing4oranges/miniprojects',
	// 	live: 'https://miniprojects.queuing4oranges.com/',
	// },
];

import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components:
import About from '../src/components/About/About';
import Footer from '../src/components/Footer/Footer';
import Navbar from '../src/components/Navbar/Navbar';
import Hero from '../src/components/Hero/Hero';
import Projects from '../src/components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Courses from './components/Courses/Courses';

function App() {

	return (
		<div className='App'>
			<ToastContainer position='top-right'/>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Navbar />
						<Hero />
						<Projects />
						<TechStack />
						<Courses />
						<About />
						<Footer />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

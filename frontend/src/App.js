import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import Page404 from './components/Page404';
import ProductPage from './components/ProductPage';
import './css/style.css'
import Cart from './components/Cart';


function App() {
	return (
		<Router >
			<Header />
			<main className="container">
				<div className="row">
					<div className="col">
						<Switch>
							<Route path='/' component={MainPage} exact />
							<Route path='/catalog' component={CatalogPage} exact />
							<Route path='/about' component={AboutPage} exact />
							<Route path='/contacts' component={ContactsPage} exact />
							<Route path='/catalog/:id' component={ProductPage} exact/>
							<Route path='/cart' exact component={Cart} />
							<Route path='*' component={Page404} />
						</Switch >
					</div>
				</div >
			</main>
			<Footer />
		</Router>
	);
}

export default App;
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "components/Navbar";

import Home from "pages/Home";
import Works from "pages/Works";
import About from "pages/About";
import Contact from "pages/Contact";
import Exercices from "pages/Exercices";
import CaseStudy from "pages/CaseStudy";
import ConcretCase from "pages/ConcretCase";

const App = () => {
	return (
		<>
			<Router>
				<div>
					<Navbar />

					<Switch>
						<Route path="/works">
							<Router>
								<div>
									<Works />

									<Switch>
										<Route path="/works/exercices">
											<Exercices />
										</Route>
										<Route path="/works/case-study">
											<CaseStudy />
										</Route>
										<Route path="/works/concret-case">
											<ConcretCase />
										</Route>
									</Switch>
								</div>
							</Router>
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
};

export default App;

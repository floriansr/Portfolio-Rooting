import React from "react";
import { Link } from "react-router-dom";

const Works = () => (
	<p>
		Welcome on the works page. Please, select a category'. 3 liens seront
		alors disponibles : "<Link to="/works/exercices">Exercices</Link>", "
		<Link to="/works/case-study">Case Study</Link>" et "
		<Link to="/works/concret-case">Concret case</Link>".
	</p>
);
export default Works;

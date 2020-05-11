import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<ul>
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/about">About</Link>
				<Link to="/works">Works</Link>
			</ul>
		</>
	);
};

export default Navbar;

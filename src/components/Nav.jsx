import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";


export const links = ["LatestRates", "Convert"];

const Nav = () => {



	return (
		<NavLinksWrapper className='nav-links'>
			{links.map((link) => (
				<li key={link}>
					
						<NavLink to={`/${link}`} className='link'>
							{link}
						</NavLink>
					
				</li>
			))}
		</NavLinksWrapper>
	);
};

export default Nav;

const NavLinksWrapper = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
    text-aligne:center;
    background:#333;
    height:100px;
    margin:0;
`;

export const NavLink = styled(Link)`
	position: relative;
	color: white;
	text-decoration: none;
	text-transform: capitalize;
	color: white;
    margin-left:1rem;
	&::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		bottom: -2px;
		height: 2px;
		width: 0;
		background: var(--text);
		transition: width 150ms linear;
	}
	&:hover::before {
		width: 100%;
	}
`;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

//import Dropdown from '../utils/Dropdown';
import LogoImage from '../images/logo.svg';

function Header() {

	const [navBgShown, setNavBgShown] = useState(false);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const trigger = useRef(null);
	const mobileNav = useRef(null);

	// show nav bar background when scroll over 80
	const updateNavBgShown = () => {
		if (window.scrollY >= 80) {
			setNavBgShown(true);
		} else {
			setNavBgShown(false);
		}
	}
	useEffect(() => {
		updateNavBgShown();
		window.addEventListener("scroll", updateNavBgShown);
	});

	// close the mobile menu on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!mobileNav.current || !trigger.current) return;
			if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
			setMobileNavOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	// close the mobile menu if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!mobileNavOpen || keyCode !== 27) return;
			setMobileNavOpen(false);
		};
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	});

	return (
		<header className={`fixed w-full z-30 ${navBgShown && 'bg-white shadow-lg'}`}>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16 font-AtypDisplay-Medium font-semibold">

					{/* Site branding */}
					<div className="shrink-0 mr-4">
						{/* Logo */}
						<Link to="/" className="block" aria-label="HLP Studio">
							<img src={LogoImage} className="h-10" />
						</Link>
					</div>

					{/* Desktop navigation */}
					<nav className="hidden md:flex md:grow">

						{/* Desktop menu links */}
						<ul className="flex grow justify-end flex-wrap items-center text-base">
							<li>
								<Link to="/portfolio" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">
									Portfolio
								</Link>
							</li>
							<li>
								<Link to="/pricing" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
							</li>
							<li>
								<Link to="/blog" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
							</li>
							<li>
								<Link to="/about" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">About Us</Link>
							</li>
							<li>
								<Link to="/contact" className="text-black hover:text-purple-600 px-4 py-2 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
							</li>
						</ul>

						{/* Desktop search and link */}
						<ul className="flex grow justify-end flex-wrap items-center">
							<li className="ml-4">
								<Link to="#" className="flex justify-center items-center text-black hover:text-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Search">
									<svg className="w-6 h-6 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
									</svg>
								</Link>
							</li>
							<li className="ml-4">
								<Link to="#" className="flex justify-center items-center text-black hover:text-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Link">
									<svg className="w-7 h-7 rotate-45 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
										<path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
									</svg>
								</Link>
							</li>
						</ul>

					</nav>

					{/* Mobile menu */}
					<div className="md:hidden">

						{/* Hamburger button */}
						<button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
							<span className="sr-only">Menu</span>
							<svg className="w-6 h-6 fill-current text-black hover:text-purple-600 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<rect y="4" width="24" height="2" rx="1" />
								<rect y="11" width="24" height="2" rx="1" />
								<rect y="18" width="24" height="2" rx="1" />
							</svg>
						</button>

						{/*Mobile navigation */}
						<nav
							id="mobile-nav"
							ref={mobileNav}
							className="absolute bg-white shadow-lg top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
							style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}
						>
							<ul className="px-4 py-2">
								<li>
									<Link to="/portfolio" className="flex text-black hover:text-purple-600 py-2 justify-center">Portfolio</Link>
								</li>
								<li>
									<Link to="/pricing" className="flex text-black hover:text-purple-600 py-2 justify-center">Pricing</Link>
								</li>
								<li>
									<Link to="/blog" className="flex text-black hover:text-purple-600 py-2 justify-center">Blog</Link>
								</li>
								<li>
									<Link to="/about" className="flex text-black hover:text-purple-600 py-2 justify-center">About us</Link>
								</li>
								<li>
									<Link to="/contact" className="flex text-black hover:text-purple-600 py-2 justify-center">Contact us</Link>
								</li>
								<li>
									<Link to="/search" className="flex w-full text-purple-600 hover:text-black py-2 justify-center">Search</Link>
								</li>
								<li>
									<Link to="/link" className="flex w-full text-purple-600 hover:text-black py-2 justify-center">Link</Link>
								</li>
							</ul>
						</nav>

					</div>

				</div>
			</div>
		</header>
	);
}

export default Header;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import imgLogo from "../assets/images/logo.svg";

function Header() {

	const [scrollDown, setScrollDown] = useState(false);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	// update header position according to scroll-y
	const updateScrollDown = () => {
		if (window.scrollY >= 20) {
			setScrollDown(true);
		} else {
			setScrollDown(false);
		}
	}
	useEffect(() => {
		updateScrollDown();
		window.addEventListener("scroll", updateScrollDown);
	});

	// manage mobile menu status
	const trigger = useRef(null);
	const mobileNav = useRef(null);
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
		<div className={`w-full h-14 top-0 right-0 bg-white z-50 ${scrollDown ? (mobileNavOpen ? 'sticky' : 'sticky shadow-lg') : (mobileNavOpen ? 'relative' : 'relative shadow-lg')}`}>
			<div className="max-w-7xl w-full h-14 mx-auto flex items-center justify-between bg-white">
				<a href="/" className="">
					<img className="h-10" src={imgLogo} alt="HLP Logo" />
				</a>

				{/* desktop navigation */}
				<nav className="hidden md:flex md:grow">
					<ul className="flex grow justify-end items-center font-FuturaStd font-semibold text-base">
						<li>
							<Link to="/portfolio" className="ml-8 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">Portfolio</Link>
						</li>
						<li>
							<Link to="/pricing" className="ml-8 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">Pricing</Link>
						</li>
						<li>
							<Link to="/blog" className="ml-8 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">Blog</Link>
						</li>
						<li>
							<Link to="/about" className="ml-8 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">About Us</Link>
						</li>
					</ul>
				</nav>

				{/* mobile menu */}
				<div className="md:hidden">
					{/* hamburger button */}
					<button ref={trigger} className={`hamburger p-1 rounded-xl ${mobileNavOpen && 'active bg-teal-200'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
						<span className="sr-only">Menu</span>
						<svg className="w-6 h-6 fill-current text-black transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<rect y="4" width="24" height="2" rx="1" />
							<rect y="11" width="24" height="2" rx="1" />
							<rect y="18" width="24" height="2" rx="1" />
						</svg>
					</button>

					{/* mobile navigation */}
					<nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-40 left-0 w-full px-4 sm:px-6 font-FuturaStd font-semibold text-base overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
						<ul className="">
							<li>
								<Link to="/portfolio" className="flex justify-center py-2 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">Portfolio</Link>
							</li>
							<li>
								<Link to="/pricing" className="flex justify-center py-2 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">Pricing</Link>
							</li>
							<li>
								<Link to="/blog" className="flex justify-center py-2 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">Blog</Link>
							</li>
							<li>
								<Link to="/about" className="flex justify-center py-2 decoration-4 decoration-[#ffe900] underline-offset-[6px] hover:underline">About Us</Link>
							</li>
						</ul>
					</nav>

				</div>
			</div>
		</div>
	);
}

export default Header;
import React from 'react';

import Header from '../partials/Header';
import Carousel from '../partials/Carousel';
import Services from '../partials/Services';
import Technologies from '../partials/Technologies';
import Prouds from '../partials/Prouds';
import OurTeam from '../partials/OurTeam';
import Testimonials from '../partials/Testimonials';
import BlogList from '../partials/BlogList';

import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import Stats from '../partials/Stats';

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Site header */}
			<Header />

			{/*  Page content */}
			<main className="grow">
				{/*  Page illustration */}
				{/* <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
					<PageIllustration />
				</div> */}

				{/*  Page sections */}
				<Carousel />
				<Services />
				<Technologies />
				<Prouds />
				<Stats />
				<OurTeam />
				<Testimonials />
				<BlogList />

				{/* <HeroHome /> */}
				{/* <FeaturesBlocks /> */}
				{/* <FeaturesZigZag /> */}
				{/* <Newsletter /> */}
			</main>

			{/* <Banner /> */}

			{/*  Site footer */}
			<Footer />
		</div>
	);
}

export default Home;
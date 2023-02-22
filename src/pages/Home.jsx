import React from "react";

import Carousel from "../partials/Carousel";
import StoryDetail from "../partials/StoryDetail";
import Header from "../partials/Header";
import Story from "../partials/Story";
import Trusted from "../partials/Trusted";

function Home() {
	return (
		<div>
			<Header />

			<Carousel />
			<Story />
			<StoryDetail />
			<Trusted />

		</div>
	);
}

export default Home;
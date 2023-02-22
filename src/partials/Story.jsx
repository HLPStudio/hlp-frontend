import React from "react";

import imgService1 from "../assets/images/story/service-01.png";
import imgService2 from "../assets/images/story/service-02.png";
import imgService3 from "../assets/images/story/service-03.png";

function Story() {
	return (
		<section className="my-24">
			<div className="mx-auto my-0 px-8 max-w-7xl">
				<div className="flex flex-col pb-12 w-full items-center text-center">
					<h1 className="h2">HLP for professional services</h1>
				</div>

				<div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start" data-aos-id-blocks>
					<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
						<img className="mb-8" src={imgService1} alt="Product Logo" />
						<h3 className="h3 mb-4">Product Design</h3>
						<div className="w-full text-center text-lg leading-snug">
							Professional, <a className="text-[#0062ff]" href="/portfolio/architect">secure video conferencing</a>&nbsp;for businesses around the globe.
						</div>
					</div>

					<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
						<img className="mb-8" src={imgService2} alt="Architect Logo" />
						<h3 className="h3 mb-4">Architecture</h3>
						<div className="w-full text-center text-lg leading-snug">
							Professional, <a className="text-[#0062ff]" href="/portfolio/architect">secure video conferencing</a>&nbsp;for businesses around the globe.
						</div>
					</div>

					<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
						<img className="mb-8" src={imgService3} alt="ARVR Logo" />
						<h3 className="h3 mb-4">AR/VR</h3>
						<div className="w-full text-center text-lg leading-snug">
							Professional, <a className="text-[#0062ff]" href="/portfolio/architect">secure video conferencing</a>&nbsp;for businesses around the globe.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Story;
import React, { Component } from "react";
import 'tw-elements';

import carouselImage1 from '../images/carousel-01.jpg';
import carouselImage2 from '../images/carousel-02.jpg';
import carouselImage3 from '../images/carousel-03.jpg';

function Carousel() {
	const itemMaskClass = "absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-black via-transparent to-white opacity-50";
	const itemTextClass = "text-black text-2xl sm:text-3xl lg:text-4xl leading-none font-semibold";

	return (
		<div id="carouselHLP" class="carousel slide carousel-fade carousel-dark relative" data-bs-ride="carousel">
			{/* <!-- Indicators --> */}
			<div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
				<button
					data-bs-target="#carouselHLP"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					data-bs-target="#carouselHLP"
					data-bs-slide-to="1"
					aria-label="Slide 1"
				></button>
				<button
					data-bs-target="#carouselHLP"
					data-bs-slide-to="2"
					aria-label="Slide 1"
				></button>
			</div>

			{/* <!-- Inner --> */}
			<div class="carousel-inner relative w-full overflow-hidden font-AtypDisplay-Medium">
				{/* <!-- Single item 1 --> */}
				<div class="carousel-item active relative float-left w-full">
					<img src={carouselImage1} class="block w-full" alt="Motorbike Smoke" />
					<div class={itemMaskClass}></div>
					<div class="carousel-caption absolute text-center">
						<h1 class={itemTextClass}>Welcome to HLP Studio</h1>
					</div>
				</div>

				{/* <!-- Single item 2 --> */}
				<div class="carousel-item relative float-left w-full">
					<img src={carouselImage2} class="block w-full" alt="Mountaintop" />
					<div class={itemMaskClass}></div>
					<div class="carousel-caption absolute text-center">
						<h1 class={itemTextClass}>Make your dreams 3D</h1>
					</div>
				</div>

				{/* <!-- Single item 3 --> */}
				<div class="carousel-item relative float-left w-full">
					<img src={carouselImage3} class="block w-full" alt="Woman Reading a Book" />
					<div class={itemMaskClass}></div>
					<div class="carousel-caption absolute text-center">
						<h1 class={itemTextClass}>We can help you bring your ideas to life</h1>
					</div>
				</div>
			</div>
			{/* <!-- Inner --> */}

			{/* <!-- Controls --> */}
			<button
				class="carousel-control-prev w-1/12 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
				type="button"
				data-bs-target="#carouselHLP"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next w-1/12 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
				type="button"
				data-bs-target="#carouselHLP"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>

		</div>
	);
}

export default Carousel;

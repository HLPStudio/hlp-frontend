import React from "react";
import "tw-elements";

import imgCarousel01 from "../assets/images/carousel/carousel-01.jpg";
import imgCarousel02 from "../assets/images/carousel/carousel-02.jpg";
import imgCarousel03 from "../assets/images/carousel/carousel-03.jpg";

function Carousel() {

	return (
		<div id="hlp-carousel" className="relative" data-te-carousel-init data-te-carousel-slide>
			{/* <!-- Indicators --> */}
			<div
				className="absolute inset-x-0 bottom-0 z-10 mx-[10%] mb-4 flex list-none justify-center p-0"
				data-te-carousel-indicators>
				<button
					data-te-target="#hlp-carousel"
					data-te-slide-to="0"
					data-te-carousel-active
					className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					data-te-target="#hlp-carousel"
					className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
					data-te-slide-to="1"
					aria-label="Slide 1"></button>
				<button
					data-te-target="#hlp-carousel"
					className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
					data-te-slide-to="2"
					aria-label="Slide 1"></button>
			</div>

			{/* <!-- Inner --> */}
			<div
				className="relative w-full max-md:h-96 overflow-hidden after:clear-both after:block after:content-['']">
				<div
					className="relative float-left -mr-[100%] w-full h-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-fade
					data-te-carousel-item
					data-te-carousel-active>
					<img src={imgCarousel01} className="block w-full h-full object-cover" alt="Welcome Image" />
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black to-transparent opacity-30"></div>
					<div className="absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
						<h1 className="mb-4 font-FuturaStd font-bold text-4xl">Welcome to HLP Studio</h1>
						<p className="font-semibold text-xl">We are very happy to welcome you on board with HLP Studio.</p>
					</div>
				</div>

				<div
					className="relative float-left -mr-[100%] hidden w-full h-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-fade
					data-te-carousel-item>
					<img src={imgCarousel02} className="block w-full h-full object-cover" alt="Mountaintop" />
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black to-transparent opacity-30"></div>
					<div className="absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
						<h1 className="mb-4 font-FuturaStd font-bold text-4xl">Make your dreams 3D</h1>
						<p className="font-semibold text-xl">We provides top quality architecture design, interior/exterior, and so on.</p>
					</div>
				</div>

				<div
					className="relative float-left -mr-[100%] hidden w-full h-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-fade
					data-te-carousel-item>
					<img src={imgCarousel03} className="block w-full h-full object-cover" alt="Woman Reading a Book" />
					<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black to-transparent opacity-30"></div>
					<div className="absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
						<h1 className="mb-4 font-FuturaStd font-bold text-4xl">Bring your ideas to life</h1>
						<p className="font-semibold text-xl">We are very happy to welcome you on board with HLP Studio</p>
					</div>
				</div>
			</div>

			{/* <!-- Controls --> */}
			<button
				className="absolute top-0 bottom-0 left-0 z-[1] flex w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target="#hlp-carousel"
				data-te-slide="prev">
				<span className="inline-block h-8 w-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</span>
				<span
					className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
				>Previous</span
				>
			</button>
			<button
				className="absolute top-0 bottom-0 right-0 z-[1] flex w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target="#hlp-carousel"
				data-te-slide="next">
				<span className="inline-block h-8 w-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</span>
				<span
					className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
				>Next</span
				>
			</button>
		</div>
	);
}

export default Carousel;
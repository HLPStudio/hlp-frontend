import React, { Component } from 'react';
import 'tw-elements';

function Carousel() {
	const itemMaskClass = "absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-black via-transparent to-white opacity-50";
	const itemTextClass = "h1";

	return (
		<section>
			<div id="carouselHLP" className="carousel slide carousel-fade carousel-dark relative mb-12 md:mb-20" data-bs-ride="carousel">
				{/* <!-- Indicators --> */}
				<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
					<button
						data-bs-target="#carouselHLP"
						data-bs-slide-to="0"
						className="active"
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
				<div className="carousel-inner relative w-full overflow-hidden font-AtypDisplay-Medium">
					{/* <!-- Single item 1 --> */}
					<div className="carousel-item active relative float-left w-full">
						<img src={'/images/carousel-01.jpg'} className="block w-full" alt="Motorbike Smoke" />
						<div className={itemMaskClass}></div>
						<div className="carousel-caption absolute text-center">
							<h1 className={itemTextClass}>Welcome to HLP Studio</h1>
						</div>
					</div>

					{/* <!-- Single item 2 --> */}
					<div className="carousel-item relative float-left w-full">
						<img src={'/images/carousel-02.jpg'} className="block w-full" alt="Mountaintop" />
						<div className={itemMaskClass}></div>
						<div className="carousel-caption absolute text-center">
							<h1 className={itemTextClass}>Make your dreams 3D</h1>
						</div>
					</div>

					{/* <!-- Single item 3 --> */}
					<div className="carousel-item relative float-left w-full">
						<img src={'/images/carousel-03.jpg'} className="block w-full" alt="Woman Reading a Book" />
						<div className={itemMaskClass}></div>
						<div className="carousel-caption absolute text-center">
							<h1 className={itemTextClass}>We can help you bring your ideas to life</h1>
						</div>
					</div>
				</div>
				{/* <!-- Inner --> */}

				{/* <!-- Controls --> */}
				<button
					className="carousel-control-prev w-1/12 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselHLP"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next w-1/12 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselHLP"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>

			</div>
		</section>
	);
}

export default Carousel;

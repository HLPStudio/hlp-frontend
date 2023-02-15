import React from 'react';

function Services() {
	// const serviceCard

	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pb-16 md:pb-20">

					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
						<h2 className="h2 mb-4">Our services</h2>
					</div>

					{/* Items */}
					<div className="max-w-lg md:max-w-none mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-start" data-aos-id-blocks>

						{/* 1st item */}
						<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-16 mb-10" src={'/images/service-01.png'} alt="Product Design Image" />
							<h4 className="h4 mb-6">Product Design</h4>
							<p className="text-lg leading-6 text-black text-center">Although mainly focused on product design, also cover graphic design, 3D modeling and visualization, conceptual design.</p>
						</div>

						{/* 2nd item */}
						<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-16 mb-10" src={'/images/service-02.png'} alt="Architecture Image" />
							<h4 className="h4 mb-6">Architecture</h4>
							<p className="text-lg leading-6 text-black text-center">We have extensive experience CAD modeling and renderings using Autocad, 3Ds max, Sketchup and Revit from small to large projects.</p>
						</div>

						{/* 3rd item */}
						<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-16 mb-10" src={'/images/service-03.png'} alt="AR/VR Image" />
							<h4 className="h4 mb-6">AR / VR</h4>
							<p className="text-lg leading-6 text-black text-center">Create photorealistic and stylized art with a passion for immersive content - VR and 360 animation, product and event renders and storytelling.</p>
						</div>

					</div>

				</div>
			</div>
		</section>
	)
}

export default Services;

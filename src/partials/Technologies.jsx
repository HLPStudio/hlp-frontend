import React from 'react';

function Technologies() {

	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pb-16 md:pb-20">

					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
						<h2 className="h2 mb-4">Technology & Software</h2>
					</div>

					{/* Items */}
					<div className="max-w-sm mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

						{/* 1st item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-8" src={'/images/tech/com-autodesk.svg'} alt="Autodesk logo" />
						</div>

						{/* 2nd item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
							<div className="relative flex items-center justify-center">
								<img className="h-10" src={'/images/tech/com-adobe.svg'} alt="Adobe logo" />
							</div>
						</div>

						{/* 3rd item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-12" src={'/images/tech/com-solidworks.svg'} alt="Solidworks logo" />
						</div>

						{/* 4th item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-10" src={'/images/tech/com-lumion.svg'} alt="Lumion logo" />
						</div>

						{/* 5th item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-8" src={'/images/tech/com-clo.svg'} alt="Clo3D logo" />
						</div>

						{/* 6th item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-12" src={'/images/tech/com-vray.svg'} alt="V-Ray logo" />
						</div>

						{/* 7th item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-12" src={'/images/tech/com-sketchfab.svg'} alt="Sketchfab logo" />
						</div>

						{/* 8th item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-10" src={'/images/tech/com-sketchup.svg'} alt="SketchUp logo" />
						</div>

						{/* 9th item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-14" src={'/images/tech/com-unity3d.svg'} alt="Unity3d logo" />
						</div>

						{/* 10th item */}
						<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="900" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-14" src={'/images/tech/com-unrealengine.svg'} alt="UnrealEngine logo" />
						</div>

						{/* 11th item */}
						<div className="relative flex flex-row justify-center items-center" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor="[data-aos-id-blocks]">
							<img className="h-12 mr-2" src={'/images/tech/com-threejs.svg'} alt="ThreeJS logo" />
							<h2 className="h2">three.js</h2>
						</div>

					</div>

				</div>
			</div>
		</section>
	)
}

export default Technologies;

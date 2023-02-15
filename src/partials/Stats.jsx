import React from "react";

function Stats() {
	return (
		<section>
			{/* Stats */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
				<div>
					<div className="max-w-3xl mx-auto text-center pb-2 md:pb-4">
						<h2 className="h2 mb-8">Our achievements</h2>
					</div>
					<div className="grid grid-cols-2 gap-8 text-center sm:gap-x-8 md:grid-cols-4">
						<div>
							<h1 className="font-bold text-7xl">7+</h1>
							<p className="mt-4 text-xl font-medium text-gray-900">Years</p>
							<p className="text-base mt-0.5 text-gray-500">of experiences</p>
						</div>

						<div>
							<h1 className="font-bold text-7xl">107</h1>
							<p className="mt-4 text-xl font-medium text-gray-900">Projects</p>
							<p className="text-base mt-0.5 text-gray-500">completed successfully</p>
						</div>

						<div>
							<h3 className="font-bold text-7xl">40+</h3>
							<p className="mt-4 text-xl font-medium text-gray-900">Clients</p>
							<p className="text-base mt-0.5 text-gray-500">satisfied with our results</p>
						</div>

						<div>
							<h3 className="font-bold text-7xl">24</h3>
							<p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
							<p className="text-base mt-0.5 text-gray-500">working for your success</p>
						</div>
					</div>
				</div>
			</div>

			{/* Clients */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
				<div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
					<h4 className="h4">Trusted Across the Industry</h4>
				</div>
				<ul className="flex flex-wrap justify-center items-center">
					<li className="mx-2 md:mx-4">
						<img className="max-w-[72px]" src={'/images/client/hkc.png'} alt="HKC logo" />
					</li>
					<li className="mx-2 md:mx-6">
						<img className="max-w-[120px]" src={'/images/client/prominece.png'} alt="prominece logo" />
					</li>
					<li className="mx-2 md:mx-6">
						<img className="max-w-[160px]" src={'/images/client/econcepts.png'} alt="econcepts logo" />
					</li>
					<li className="mx-2 md:mx-6">
						<img className="max-w-[64px]" src={'/images/client/inxcite.png'} alt="inxcite logo" />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Stats;

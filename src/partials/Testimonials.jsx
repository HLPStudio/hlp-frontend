import React from 'react';

function Testimonials() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pb-10 md:pb-14">

					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
						<h2 className="h2 mb-4">What our clients are saying</h2>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 text-center">
						{/* Pierr */}
						<div className="">
							<div className="flex justify-center mb-6">
								<img src={'/images/client/avatar-01.png'} className="rounded-full shadow-lg w-24" />
							</div>
							<h5 className="text-xl font-semibold mb-4">Pierr</h5>
							<h6 className="font-medium mb-4">Regular Client</h6>
							<p className="text-lg leading-6 mb-4">
								DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.
							</p>
						</div>

						{/* Manuel */}
						<div className="">
							<div className="flex justify-center mb-6">
								<img src={'/images/client/avatar-02.png'} className="rounded-full shadow-lg w-24" />
							</div>
							<h5 className="text-xl font-semibold mb-4">Manuel</h5>
							<h6 className="font-medium mb-4">Regular Client</h6>
							<p className="text-lg leading-6 mb-4">
								DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.
							</p>
						</div>

						{/* Greg */}
						<div className="">
							<div className="flex justify-center mb-6">
								<img src={'/images/client/avatar-03.png'} className="rounded-full shadow-lg w-24" />
							</div>
							<h5 className="text-xl font-semibold mb-4">Greg</h5>
							<h6 className="font-medium mb-4">Regular Client</h6>
							<p className="text-lg leading-6 mb-4">
								DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.
							</p>
						</div>

						{/* Abbas */}
						<div className="">
							<div className="flex justify-center mb-6">
								<img src={'/images/client/avatar-04.png'} className="rounded-full shadow-lg w-24" />
							</div>
							<h5 className="text-xl font-semibold mb-4">Abbas</h5>
							<h6 className="font-medium mb-4">Regular Client</h6>
							<p className="text-lg leading-6 mb-4">
								DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.
							</p>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default Testimonials;

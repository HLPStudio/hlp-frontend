import React from "react";

import imgDetail1 from "../assets/images/story/detail-01.png";
import imgDetail2 from "../assets/images/story/detail-02.png";
import imgDetail3 from "../assets/images/story/detail-03.png";

function StoryDetail() {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-10">
				<div className="py-10">

					{/* Items */}
					<div className="grid gap-20">

						{/* 1st item */}
						<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
							{/* Image */}
							<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
								<img className="max-w-full mx-auto md:max-w-none h-auto" src={imgDetail1} width="540" height="405" alt="Features 01" />
							</div>
							{/* Content */}
							<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
								<div className="md:pr-4 lg:pr-12 xl:pr-16">
									<h2 className="h2 mb-3">Keep projects on schedule</h2>
									<p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<ul className="text-base -mb-2">
										<li className="flex items-center mb-2">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Duis aute irure dolor in reprehenderit</span>
										</li>
										<li className="flex items-center mb-2">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Excepteur sint occaecat</span>
										</li>
										<li className="flex items-center">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Amet consectetur adipiscing elit</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* 2nd item */}
						<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
							{/* Image */}
							<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
								<img className="max-w-full mx-auto md:max-w-none h-auto" src={imgDetail2} width="540" height="405" alt="Features 02" />
							</div>
							{/* Content */}
							<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
								<div className="md:pl-4 lg:pl-12 xl:pl-16">
									<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
									<h2 className="h2 mb-3">Keep projects on schedule</h2>
									<p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<ul className="text-base -mb-2">
										<li className="flex items-center mb-2">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Duis aute irure dolor in reprehenderit</span>
										</li>
										<li className="flex items-center mb-2">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Excepteur sint occaecat</span>
										</li>
										<li className="flex items-center">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Amet consectetur adipiscing elit</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* 3rd item */}
						<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
							{/* Image */}
							<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
								<img className="max-w-full mx-auto md:max-w-none h-auto" src={imgDetail3} width="540" height="405" alt="Features 03" />
							</div>
							{/* Content */}
							<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
								<div className="md:pr-4 lg:pr-12 xl:pr-16">
									<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
									<h2 className="h2 mb-3">Keep projects on schedule</h2>
									<p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<ul className="text-base -mb-2">
										<li className="flex items-center mb-2">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Duis aute irure dolor in reprehenderit</span>
										</li>
										<li className="flex items-center mb-2">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Excepteur sint occaecat</span>
										</li>
										<li className="flex items-center">
											<svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Amet consectetur adipiscing elit</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</section>
	);
}

export default StoryDetail;
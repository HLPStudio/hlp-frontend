import React from 'react';

import ProudItems from './Gallery';

function Prouds() {
	const tabLinkClass = "nav-link block font-AtypDisplay-Medium text-lg text-black leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent rounded-lg px-4 py-3 my-2";

	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 relative pb-16 md:pb-20 focus:isolate">

				{/* Section header */}
				<div className="max-w-3xl mx-auto text-center pb-2 md:pb-4">
					<h2 className="h2 mb-8">Projects we are proud of</h2>
					<p className="text-lg leading-6 text-black">In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.</p>
				</div>

				{/* Section content */}
				<div className="flex flex-col items-center">
					<ul className="nav nav-tabs flex flex-row flex-wrap justify-center list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<a href="#tabs-all" className={tabLinkClass + " active"} id="tabs-all-tab" data-bs-toggle="pill" data-bs-target="#tabs-all" role="tab" aria-controls="tabs-all" aria-selected="true">All</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-product" className={tabLinkClass} id="tabs-product-tab" data-bs-toggle="pill" data-bs-target="#tabs-product" role="tab" aria-controls="tabs-product" aria-selected="false">Product</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-exterior" className={tabLinkClass} id="tabs-exterior-tab" data-bs-toggle="pill" data-bs-target="#tabs-exterior" role="tab" aria-controls="tabs-exterior" aria-selected="false">Exterior</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-interior" className={tabLinkClass} id="tabs-interior-tab" data-bs-toggle="pill" ata-bs-target="#tabs-interior" role="tab" aria-controls="tabs-interior" aria-selected="false">Interior</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-arvr" className={tabLinkClass} id="tabs-arvr-tab" data-bs-toggle="pill" data-bs-target="#tabs-arvr" role="tab" aria-controls="tabs-arvr" aria-selected="false">AR/VR</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-clo3d" className={tabLinkClass} id="tabs-clo3d-tab" data-bs-toggle="pill" data-bs-target="#tabs-clo3d" role="tab" aria-controls="tabs-clo3d" aria-selected="false">CLO3D</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-anim" className={tabLinkClass} id="tabs-anim-tab" data-bs-toggle="pill" data-bs-target="#tabs-anim" role="tab" aria-controls="tabs-anim" aria-selected="false">Animation</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-autocad" className={tabLinkClass} id="tabs-autocad-tab" data-bs-toggle="pill" data-bs-target="#tabs-autocad" role="tab" aria-controls="tabs-autocad" aria-selected="false">AutoCAD</a>
						</li>
						<li className="nav-item" role="presentation">
							<a href="#tabs-floorplan" className={tabLinkClass} id="tabs-floorplan-tab" data-bs-toggle="pill" data-bs-target="#tabs-floorplan" role="tab" aria-controls="tabs-floorplan" aria-selected="false">FloorPlan</a>
						</li>
					</ul>
					<div className="tab-content w-full" id="tabs-tabContent">
						{/* ALL content */}
						<div className="tab-pane fade show active" id="tabs-all" role="tabpanel" aria-labelledby="tabs-all-tab">
							<ProudItems dir="all" />
						</div>
						<div className="tab-pane fade" id="tabs-product" role="tabpanel" aria-labelledby="tabs-product-tab">
							<ProudItems dir="product" />
						</div>
						<div className="tab-pane fade" id="tabs-exterior" role="tabpanel" aria-labelledby="tabs-exterior-tab">
							<ProudItems dir="exterior" />
						</div>
						<div className="tab-pane fade" id="tabs-interior" role="tabpanel" aria-labelledby="tabs-interior-tab">
							<ProudItems dir="interior" />
						</div>
						<div className="tab-pane fade" id="tabs-arvr" role="tabpanel" aria-labelledby="tabs-arvr-tab">
							<ProudItems dir="arvr" />
						</div>
						<div className="tab-pane fade" id="tabs-clo3d" role="tabpanel" aria-labelledby="tabs-clo3d-tab">
							<ProudItems dir="clo3d" />
						</div>
						<div className="tab-pane fade" id="tabs-anim" role="tabpanel" aria-labelledby="tabs-anim-tab">
							<ProudItems dir="animation" />
						</div>
						<div className="tab-pane fade" id="tabs-autocad" role="tabpanel" aria-labelledby="tabs-autocad-tab">
							<ProudItems dir="autocad" />
						</div>
						<div className="tab-pane fade" id="tabs-floorplan" role="tabpanel" aria-labelledby="tabs-floorplan-tab">
							<ProudItems dir="floorplan" />
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Prouds;

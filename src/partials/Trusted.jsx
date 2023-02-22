import React from "react";

import imgCompany1 from "../assets/images/client/econcepts.png";
import imgCompany2 from "../assets/images/client/hkc.png";
import imgCompany3 from "../assets/images/client/inxcite.png";
import imgCompany4 from "../assets/images/client/prominece.png";

function Trusted() {
	return (
		<section>
			<div className="flex flex-col mx-auto my-20 w-full max-w-7xl">

				<div className="w-full text-center mb-7">
					<h2 className="h2">Trusted Across the Industry</h2>
				</div>

				<ul className="flex justify-center">
					<li className="flex m-4 items-center justify-center max-h-24">
						<img src={imgCompany1} alt="econcepts logo." />
					</li>
					<li className="flex m-4 items-center justify-center max-h-24">
						<img src={imgCompany2} alt="hkc logo" />
					</li>
					<li className="flex m-4 items-center justify-center max-h-24">
						<img src={imgCompany3} alt="inxcite logo" />
					</li>
					<li className="flex m-4 items-center justify-center max-h-24">
						<img src={imgCompany4} alt="prominece logo" />
					</li>
				</ul>

			</div>
		</section>
	);
}

export default Trusted;
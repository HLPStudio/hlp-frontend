import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function ProudItem(props) {
	return (
		<PhotoView src={props.imgPath + ".jpg"}>
			<div className="relative flex overflow-hidden justify-center border border-gray-200 rounded-lg shadow-md">
				<img src={props.imgPath + "-thumb.jpg"} className="hover:scale-110 transition duration-200 ease-in-out" alt="Proud Item" />
				<div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-[#ffe900]"></div>
			</div>
		</PhotoView>
	);
}

function ProudItems(props) {
	return (
		<PhotoProvider>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-1">
				<ProudItem imgPath={"/images/" + props.dir + "/01"} />
				<ProudItem imgPath={"/images/" + props.dir + "/02"} />
				<ProudItem imgPath={"/images/" + props.dir + "/03"} />
				<ProudItem imgPath={"/images/" + props.dir + "/04"} />
			</div>
		</PhotoProvider>
	);
}

export default ProudItems;

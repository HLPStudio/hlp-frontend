import React from 'react';

function BlogList() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pb-16 md:pb-20">

					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
						<h2 className="h2 mb-4">Latest blog posts</h2>
					</div>

					<div className="flex flex-wrap justify-center text-center">
						<div className="flex justify-center p-2">
							<div className="rounded-lg shadow-xl bg-white w-80">
								<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
									<img className="rounded-t-lg" src={"/images/blog/post-01.jpg"} alt="blog image" />
									<div className="p-2 text-left">
										<h5 className="h4 mb-2">Card title</h5>
										<p className="text-gray-700 mb-4">
											Some quick example text to build on the card title and make up the bulk of the card's
											content.
										</p>
										<p className="text-gray-700 mb-4">2/7/2023</p>
									</div>
								</a>
							</div>
						</div>

						<div className="flex justify-center p-2">
							<div className="rounded-lg shadow-xl bg-white w-80">
								<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
									<img className="rounded-t-lg" src={"/images/blog/post-02.jpg"} alt="blog image" />
									<div className="p-2 text-left">
										<h5 className="h4 mb-2">Card title</h5>
										<p className="text-gray-700 mb-4">
											Some quick example text to build on the card title and make up the bulk of the card's
											content.
										</p>
										<p className="text-gray-700 mb-4">1/15/2023</p>
									</div>
								</a>
							</div>
						</div>

						<div className="flex justify-center p-2">
							<div className="rounded-lg shadow-xl bg-white w-80">
								<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
									<img className="rounded-t-lg" src={"/images/blog/post-03.jpg"} alt="blog image" />
									<div className="p-2 text-left">
										<h5 className="h4 mb-2">Card title</h5>
										<p className="text-gray-700 mb-4">
											Some quick example text to build on the card title and make up the bulk of the card's
											content.
										</p>
										<p className="text-gray-700 mb-4">12/17/2022</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BlogList;

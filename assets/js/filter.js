//document.getElementById('getReviews').addEventListener('click', getReviews);
document.getElementById('venue').addEventListener('click', getReviews);


//GET REVIEWS
function getReviews() {
	fetch('http://localhost/mass-memoreview-v2/reviews.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '';
		
//			let venue = document.getElementById("venue").value;
		
			var venue = document.getElementById("venue").value;
			const result = []
		
			data
			// VENUE FILTER
			.
			if(venue.length > 0){
				.filter(data => data.venue === venue)
				result.push(review);
			}
//				.filter(data => data.venue === venue)
				.forEach(function (review) {
					output += `
				<li>
					 <a class="content-pane-trigger flex-block" href="${review.url}">
						  <div class="flex-block-image" style="background-image:url('${review.image}')">


						  </div>
						  <div class="flex-block-text">
								<h2>${review.section}, ${review.venue} by ${review.author}</h2>
						  </div>
					 </a>
				</li>
			 `;
				});
			document.getElementById('articles').innerHTML = output;
		})
}







//
//// HIGH LEVEL FILTER FUNCTION
//
//// FETCH REVIEWS JSON
//const reviews = [
//	{
//		"url": "http://localhost/mass-memoreview-v2/reviews/emily-floyd-anti-totalitarian-vector-at-anna-schwartz-by-riley-bennett",
//		"title": "Sculpture",
//		"date": "2019-08-17",
//		"author": "Riley Bennett",
//		"section": "Sculpture",
//		"image": "http://localhost/mass-memoreview-v2/media/pages/reviews/emily-floyd-anti-totalitarian-vector-at-anna-schwartz-by-riley-bennett/10a869e2b6-1603953274/riley-bennett-emily-floyd-image.jpg",
//		"venue": "RMIT University"
//  },
//	{
//		"url": "http://localhost/mass-memoreview-v2/reviews/bri-hammond-nuoto-da-sola-i-swim-alone-at-brunswick-street-gallery-by-julia-onufreichuk-copy",
//		"title": "Printmaking, Monash University",
//		"date": "2019-08-17",
//		"author": "Julia Onufreichuk",
//		"section": "Printmaking",
//		"image": "http://localhost/mass-memoreview-v2/media/pages/reviews/bri-hammond-nuoto-da-sola-i-swim-alone-at-brunswick-street-gallery-by-julia-onufreichuk-copy/1f70ff61c4-1603953274/julia-onufriechuck-bri-hammond-greenlandscape.jpg.jpeg",
//		"venue": "Monash University"
//  },
//	{
//		"url": "http://localhost/mass-memoreview-v2/reviews/bri-hammond-nuoto-da-sola-i-swim-alone-at-brunswick-street-gallery-by-julia-onufreichuk",
//		"title": "Printmaking, Monash University",
//		"date": "2019-08-17",
//		"author": "Julia Onufreichuk",
//		"section": "Printmaking",
//		"image": "http://localhost/mass-memoreview-v2/media/pages/reviews/bri-hammond-nuoto-da-sola-i-swim-alone-at-brunswick-street-gallery-by-julia-onufreichuk/aa687b0fe5-1603953274/julia-onufriechuck-bri-hammond-greenlandscape.jpg",
//		"venue": "Monash University"
//  },
//	{
//		"url": "http://localhost/mass-memoreview-v2/reviews/bauhaus-now-at-buxton-contemporary-by-celine-saoud-copy",
//		"title": "Sculpture, Monash University",
//		"date": "2019-08-17",
//		"author": "Celine Saoud",
//		"section": "Sculpture",
//		"image": "http://localhost/mass-memoreview-v2/media/pages/reviews/bauhaus-now-at-buxton-contemporary-by-celine-saoud-copy/a7d1b107ed-1603953274/download.jpeg",
//		"venue": "Monash University"
//  },
//	{
//		"url": "http://localhost/mass-memoreview-v2/reviews/bauhaus-now-at-buxton-contemporary-by-celine-saoud",
//		"title": "Sculpture, Monash University",
//		"date": "2019-08-17",
//		"author": "Celine Saoud",
//		"section": "Sculpture",
//		"image": "http://localhost/mass-memoreview-v2/media/pages/reviews/bauhaus-now-at-buxton-contemporary-by-celine-saoud/9dee5b138c-1603953274/celine-saoud-buxton_bauhaus_82.jpg",
//		"venue": "Monash University"
//  },
//	{
//		"url": "http://localhost/mass-memoreview-v2/reviews/athena-thebus-and-chloe-corkran-drippy-rock-at-tcb-by-camille-orel-copy",
//		"title": "Painting, VCA College",
//		"date": "2020-08-17",
//		"author": "Camille Orel",
//		"section": "Painting",
//		"image": "http://localhost/mass-memoreview-v2/media/pages/reviews/athena-thebus-and-chloe-corkran-drippy-rock-at-tcb-by-camille-orel-copy/8bc0674276-1603953274/download.jpeg",
//		"venue": "VCA College"
//  },
//	{
//		"url": "http://localhost/mass-memoreview-v2/reviews/athena-thebus-and-chloe-corkran-drippy-rock-at-tcb-by-camille-orel",
//		"title": "Painting, VCA College",
//		"date": "2020-08-17",
//		"author": "Camille Orel",
//		"section": "Painting",
//		"image": "http://localhost/mass-memoreview-v2/media/pages/reviews/athena-thebus-and-chloe-corkran-drippy-rock-at-tcb-by-camille-orel/48187edf49-1603953274/image1.jpg",
//		"venue": "VCA College"
//  }
//]
//
//// FILTER REVIEWS
//const filter = (predicate, collection) => {
//	const result = [];
//
//	for (let review of collection) {
//
//		//Filter Type
//		if (predicate(review)) {
//			result.push(review);
//		};
//
//		//Filter Type
//		if (predicate(review)) {
//			result.push(review);
//		};
//
//	}
//	return result;
//}
//
//const title = review => review.title === "Sculpture";
//
//const r = filter(title, reviews)
//
//const r2 = reviews.filter(title);
//
//console.log(r)



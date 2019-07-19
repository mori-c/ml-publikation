
// Chart.js
var items = [
	Reveal.initialize({ 	
		chart : { 
			items : [ {
		        selector: "#chart-frame-1",
		        type: "line",
		        data: {
		            labels: ["January", "February", "March", "April", "May", "June", "July"],
		            datasets: [{
		                label: "My First dataset",
		                fillColor: "rgba(220,220,220,0.2)",
		                strokeColor: "rgba(220,220,220,1)",
		                pointColor: "rgba(220,220,220,1)",
		                pointStrokeColor: "#fff",
		                pointHighlightFill: "#fff",
		                pointHighlightStroke: "rgba(220,220,220,1)",
		                data: [65, 59, 80, 81, 56, 55, 40]
		            }, 
		            {
		                label: "My Second dataset",
		                fillColor: "rgba(151,187,205,0.2)",
		                strokeColor: "rgba(151,187,205,1)",
		                pointColor: "rgba(151,187,205,1)",
		                pointStrokeColor: "#fff",
		                pointHighlightFill: "#fff",
		                pointHighlightStroke: "rgba(151,187,205,1)",
		                data: [28, 48, 40, 19, 86, 27, 90]
		            }] // datasets
		        }, // data
		        options: {
		            responsive: true
		        }
		    } // items array
	    	]
	    }
	})
]; // var items


// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

	// Chart.js
	/*
	chart: {  // options
		items: 
			items } //, Some object
	*/

}); // End of Reveal.initialize


// Chart.js
// access all the charts in the presentation
/*
Reveal.addEventListener("slidechanged",function(){
  setTimeout(function(){ // Needed because the charter.js isnt loaded and executed by that time.
    // To access them
    // The RevealChart contains iframe ids as properties (replacing '-' with '_')
    console.log(RevealChart.chart_frame_2.canvas);
  },500);
},true);
*/






// ---------------------------------------------------------------------------------------------------------

/*


var Reveal = (function(){ .. function initialize( options ) { .. } .. });


// var somevar_name = [ { Reveal.initialize({ chart{ items[ { selector, type, data { labels[], datasets[{}] }, options {} } ] } }); }];

var somevar_name = [ { 				// var somevar_name [ {} ];
	// Reveal.initialize({ 			// Reveal.initialize({ chart{} });
	  chart : { 					// chart : { items[] }
	    items : [  					// items : [ { selector, type, data { labels[], datasets[{}] }, options {} ]
	      {
	        selector : , 			// id name
	        type : , 				// any label you want to name
	        data : {
	          labels: [], 			// stringed data
	          datasets: [ {}] 		// styling + numeric data
	        },
	        options : {} 			// responsive: true
	      } 						// item array
	    ] 							// item
	  } 							// chart
	// }); 							// Reveal.initialize
}]; 								// var somevar_name
*/


















var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    diameter = 70;

var removeColor = "#f98181";
var addColor = "#6fd69a";
var defaultColor = "#95e0f4";

var svg = d3.select("svg")
		.attr("height", height + margin.top + margin.bottom)
		.attr("width", width + margin.left + margin.right),
    g = svg.append("g").attr("transform", "translate("+ margin.left + "," + margin.top + ")"),
    format = d3.format(",d");

var parseTime = d3.timeParse("%Y-%m-%d");

var xScale = d3.scaleTime().range([0, width]);
var yScale = d3.scaleLinear().range([height, 0]);

var pack = d3.pack()
    .size([diameter, diameter]);

var data = getData();
var dates = Object.keys(data);
var startDate = parseTime(dates[0]);
var endDate = parseTime(dates[dates.length - 1]);

var tooltip = d3.select(".chart-tooltip");

xScale.domain([startDate.setDate(startDate.getDate() - 1), endDate.setDate(endDate.getDate() + 1)]);
yScale.domain([0, d3.max(Object.values(data), function(d) { return d.length; })]);

// Add x axis
g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b %d")));

// Add the Y Axis
/*g.append("g")
  .call(d3.axisLeft(yScale));*/

Object.keys(data).forEach((date,i) => {
	data[date].forEach((topic,j) => {
		var topicG = g.append("g")
			.attr("class", "topic")
			.attr("transform","translate("+ (xScale(parseTime(date)) - diameter/2) +"," + yScale(j + 1) + ")");
		addPack(topic,topicG);
	});
});

function addPack(root, parent) {
	let root1 = root;
	var rootNode = d3.hierarchy(root1)
				.sum(function(d) { return 1; })
      			.sort(function(a, b) { return b.value - a.value; });;

	 var node = parent.selectAll(".node")
	    .data(pack(rootNode).descendants())
	    .enter().append("g")
	      .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
	      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  /*node.append("title")
	      .text(function(d) { return d.data.name + "\n" + format(d.value); });*/

	  node.append("circle")
	      .attr("r", function(d) { return d.r; })
	      .style("fill",function(d) {
	      	if (d.data.status === "removed")
	      		return removeColor;
	      	else if (d.data.status === "added")
	      		return addColor;
	      	else
	      		return defaultColor;
	      })
	      .style("stroke",function(d) {
	      	if (d.data.status === "removed")
	      		return d3.rgb(removeColor).darker();
	      	else if (d.data.status === "added")
	      		return d3.rgb(addColor).darker();
	      	else
	      		return d3.rgb(defaultColor).darker();
	      });

	  node.filter(function(d) { return !d.children; }).append("text")
	      .attr("dy", "0.3em")
	      .text(function(d) {
	      	return d.data.name.length > d.r/3 ? d.data.name.substring(0, d.r/3) + ".." : d.data.name;
	      });

	  node.filter(function(d) { return d.children; }).append("text")
	      .attr("dy", diameter/2 + 10)
	      .text(function(d) {
	      	return d.data.name.length > d.r/3 ? d.data.name.substring(0, d.r/3) + "..." : d.data.name;
	      });

	  node
	  	.on("mouseover", function(d) {
	  		addContentToTooltip(d);
	  		tooltip
	          .transition()
	          .style("opacity",0.9);
	  	})
	  	.on("mouseout", function() {
	  		tooltip
	  			.transition()
	  			.style("opacity",0);
	  	})
	  	.on("mousemove", function() {
	  		tooltip
	  			.style("left", (d3.event.layerX + 5) + "px")
          		.style("top", (d3.event.layerY + 5) + "px");
	  	});
}

function addContentToTooltip(node) {
	let addCount = 0, removeCount = 0;
	tooltip.select(".header").html(node.data.name);
	let children = node.children;
	if (children) {
		let added = "<table><thead><tr style='color:"+ addColor +"'><td>Added</td></tr></thead><tbody>";
		let removed = "<table><thead><tr><td style='color: " + removeColor + "'>Removed</td></tr></thead><tbody>";
		children.forEach(child => {
			if (child.data.status === "added") {
				added += "<tr>"
						+ "<td>" + child.data.name
						+ "</tr>";
				addCount++;
			}
			else if (child.data.status === "removed") {
				removed += "<tr>"
						+ "<td>" + child.data.name
						+ "</tr>";
				removeCount++;
			}

		});
		added += "</tbody></table>";
		removed += "</tbody></table>";
		let html = "";
		if (addCount > 0) html+= added;
		if (removeCount > 0) html += removed
		tooltip.select(".body").html(html);
	} else {
		let html = "<table><tbody>"
			  + "<tr>"
			  + "<td>Inventory:</td><td>" + node.parent.data.name + "</td>"
			  + "</tr><tr>"
			  + "<td>Status:</td><td style='color: " + (node.data.status === "removed" ? removeColor : addColor) + "'>" + node.data.status + "</td>";
			  + "</tr>"
			  + "</tbody>"
			  + "</table>";
		tooltip.select(".body").html(html);
	}
}

function getData() {
	let data = {};
	let dates = ["2017-05-01","2017-05-02","2017-05-03","2017-05-04","2017-05-05","2017-05-06","2017-05-07"];
	let domains = Object.keys(segmentsData);
	dates.forEach(date => {
		let dateData = [];
		let domainsCount = Math.round(Math.random()*(domains.length - 1) + 1);
		for (let i = 0; i < domainsCount; i++) {
			let domain = domains[i];
			let segments = [];
			let segmentsCount = Math.round(Math.random()*7 + 1);
			for (let j = 0; j < segmentsCount; j++) {
				segments.push({
					name: segmentsData[domain][j],
					status: !!Math.round(Math.random()) ? "added" : "removed"
				});
			}
			dateData.push({
				name: domain,
				children: segments
			});
		}
		data[date] = dateData;
	});
	return data;
}

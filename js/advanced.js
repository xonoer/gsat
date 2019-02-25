var favStorageName = "favoritesAdv";

var filterAdv = {
	"國文": 0,
	"英文": 0,
	"數甲": 0,
	"數乙": 0,
	"物理": 0,
	"化學": 0,
	"生物": 0,
	"歷史": 0,
	"地理": 0,
	"公民": 0
};
var subjectsAdv = Object.keys(filterAdv);


var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/data-advanced', false);
xhr.send(null);
var lines = xhr.response.split('\n');

var data = [];
var lc = {};
for (var i=0; i<lines.length; i++) {
	var line = lines[i].split('\t');
	datum = {
		id: line[0],
		gsat: line[1].split(""),
		school: line[3],
		name: line[4]
	};

	var adv = line[2].split(" ");
	for (var k = 0; k < subjectsAdv.length; k++)
		datum[ subjectsAdv[k] ] = "x" + adv[k];

	if (lc[datum.name] === undefined)
		lc[datum.name] = 1;
	else
		lc[datum.name]++;

	data.push(datum);
}

var list = Object.keys(lc).sort(function(a, b) {
	return lc[a] < lc[b];
});


window.onload = () => {
	/* Countdown */
	document.getElementById("countdown").innerHTML = Math.ceil((1561924800000 - new Date().getTime()) / 1000 / 60 / 60 / 24);
}

function getDetailLink(id) {
	return 'https://campus4.ncku.edu.tw/uac/cross_search/dept_info/' + id + '.html';
}

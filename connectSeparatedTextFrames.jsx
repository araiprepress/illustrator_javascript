// Concatenate textframes scattered apart.
// Connecting order is simply from left to right.
// *asserted only horizontal textframes;
// Usage: Select textframes to concatenate.
// A connected textframe apperas on a new layer at the x-y position of the first left item.

var selObj = app.activeDocument.selection;
var sLen = selObj.length;
var dc = {};
var tXyArray = [];
var str = "";
var layObj = activeDocument.layers.add();

for(i=0; i<sLen; i++){
	if (selObj[i].typename =="TextFrame"){
		dc['top'] = selObj[i].top;
		dc['left'] = selObj[i].left;
		dc['cont'] = selObj[i].contents;
		tXyArray.push(dc);
	}
	dc = {};
}

tXyArray = tXyArray.sort(function(a, b){
	return a.left - b.left;
});

for(j=0; j<tXyArray.length; j++){
    str+= tXyArray[j].cont;
}
txtObj = app.activeDocument.textFrames.add();
txtObj.contents = str;
txtObj.position = Array(tXyArray[0].left, tXyArray[0].top)
txtObj.moveToBeginning(layObj);


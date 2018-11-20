// Concatenate textframes scattered apart.
// Connecting order is simply from left to right.
// *asserted only vertical textframes;
// Usage: Select textframes to concatenate.

var selObj = app.activeDocument.selection;
var sLen = selObj.length;
var dc = {};
var tXyArray = [];
var str = "";
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

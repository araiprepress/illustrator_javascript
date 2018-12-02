//Select 1 path and write down the bezer parameters
function bezierParameters_simplest(){
	var selObj = activeDocument.selection;
	var str ="";
	if (selObj.length!=1 ){alert("select one path"); return false;}
	if (selObj[0].typename == "PathItem"){
		var pLen = selObj[0].pathPoints.length;
		for(var j=0; j<pLen; j++){
			var x = selObj[0].pathPoints[j].anchor[0];
			var y = selObj[0].pathPoints[j].anchor[1];
			var leftX = selObj[0].pathPoints[j].leftDirection[0];
			var leftY = selObj[0].pathPoints[j].leftDirection[1];
			var rightX = selObj[0].pathPoints[j].rightDirection[0];
			var rightY = selObj[0].pathPoints[j].rightDirection[1];
			str += "anchor_"+j+" :  x= "+x+"  y="+y+"\r"+"leftXY : x="+leftX+"  y="+leftY+"\r"+"rightXY : x="+rightX+"  y="+rightY+"\r\r";
		}
	}
	var txtObj = activeDocument.textFrames.add();
	txtObj.contents = str;
}
bezierParameters_simplest();
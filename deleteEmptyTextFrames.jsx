//target application is Illustrator CS6-CC; NOT for InDesign
//Delete all the empty text frames.
//For locked layers, unlock and lock again after deleting empty text frames on the layer.

layTF=[];
layObj = app.activeDocument.layers;
layLength=layObj.length;

myTObj=app.activeDocument.textFrames;
len=myTObj.length;
pat = new RegExp("^[\u0020\u3000\u00a0\t\s]*$","g");

if (myTObj.length==0){
	alert("no text items available");
	exit();
}

unlockLayers();

n=0;
for(i=len-1; i>=0; i--){
	myContents=myTObj[i].contents+"";

	if (myContents.match(pat)){
		myTObj[i].remove();	
		n++;
	}
}
layerRestore();

alert(n+" empty text items are removed.");


function unlockLayers(){

	for (j=0; j<layObj.length; j++)
	{ 
	       layTF[j]=layObj[j].locked;
	       if (layObj[ j ].locked == true) layObj[ j ].locked = false;
	}
}


function layerRestore(){

	for(k=0; k<layTF.length; k++){
		if(layTF[k]==true)layObj[k].locked=true;
	}
}


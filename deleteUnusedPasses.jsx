//target application is Illustrator CS6-CC; NOT for InDesign
//Delete all the path items like the followings:
// - paths without fill or stroke, 
//        and 
// - not clipping path or not wrapped.

//For compoundPathItems, delete if ALL the pathitems contained are transparent.


if(app.documents.length==1){
	checkCompoundPathItems();
	deleteUnusedPathItems();
} else alert("Open 1 document");


function deleteUnusedPathItems(){
	pLen = app.activeDocument.pathItems.length;
	for (i=pLen-1; i>=0; i--){
		var pObj = app.activeDocument.pathItems[i];
		if (!pObj.filled && !pObj.stroked){ 
			if(!pObj.wrapped && !pObj.clipping){
				pObj.remove();
			}
		}
	}
}

function checkCompoundPathItems(){
	cLen = app.activeDocument.compoundPathItems.length;
	if(cLen > 0){
		v = 0;
		for(i=cLen-1; i>=0; i--){
			compObj = app.activeDocument.compoundPathItems[i];
			cPLen = compObj.pathItems.length;
				for(j=0; j<cPLen; j++){
					if (!compObj.pathItems[j].filled && !compObj.pathItems[j].stroked){
						v = v + 1;
					}
					// alert(v);
				}
			if(v > 0){
				compObj.remove();
			}
		}
	}

}

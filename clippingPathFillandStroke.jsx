//target application is Illustrator (CS6-)CC; NOT for InDesign
//If a clipping path has stroke or fill, 
//copy the path, delete the stroke or fill value, and paste.


if(app.documents.length==1){
	separateStrokedClippingPath()
} else alert("Open 1 document");


function separateStrokedClippingPath(){
    layObj = activeDocument.layers.add();
	pLen = app.activeDocument.pathItems.length;
	for (i=0; i<pLen; i++){
		var pObj = app.activeDocument.pathItems[i];
		if (pObj.clipping){
			if(pObj.stroked || pObj.filled){ 
				_pObj = pObj.duplicate();
				_pObj.clipping = false;
                  _pObj.moveToBeginning(layObj);

				pObj.stroked = false;
				pObj.filled = false;
				pObj.selected = false;
				
		}
	}
}

}



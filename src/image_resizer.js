var ImageResizer = function(img, quality = 0.85, targetSize = 250000, stepSize = 0.8 ) {

    var output = new Image();
    output.src = img.src;

    var canvas = document.createElement('canvas');
    var canvas2d = canvas.getContext('2d');

    var destCanvas = document.createElement('canvas');
    var destCanvas2d = destCanvas.getContext('2d');

    canvas.width = output.width;
    canvas.height = output.height;
    canvas2d.drawImage(output, 0, 0, canvas.width, canvas.height);

    // We write the image to check if it's already smaller than our target size.
    output.src = canvas.toDataURL('image/jpeg', quality);
    if ( this.checkDataSize(output.src) <= targetSize ) return output;

    for (var i = 1; ; i++) {
        canvas2d.drawImage(canvas, 0, 0, canvas.width * stepSize, canvas.height * stepSize);
    
        destCanvas.width = output.width * Math.pow(stepSize, i)
        destCanvas.height = output.height * Math.pow(stepSize, i)
        destCanvas2d.drawImage(canvas, 0, 0, canvas.width, canvas.height);

        output.src = destCanvas.toDataURL('image/jpeg', quality);

        if ( this.checkDataSize(output.src) <= targetSize ) return output;
    }

};

ImageResizer.prototype.checkDataSize = function(dataURL) {
    return Math.round( (dataURL.length - 22)*3/4 );
};
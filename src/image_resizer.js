var ImageResizer = function(img, quality = 0.85, targetSize = 250000, stepSize = 0.8 ) {

    var output = new Image();
    output.src = img.src;

    var canvas = document.createElement('canvas');
    var canvas2d = canvas.getContext('2d');

    var destCanvas = document.createElement('canvas');
    var destCanvas2d = destCanvas.getContext('2d');

    canvas.width = output.width * stepSize;
    canvas.height = output.height * stepSize;
    canvas2d.drawImage(output, 0, 0, canvas.width, canvas.height);

    for (var i = 2; ; i++) {
        canvas2d.drawImage(canvas, 0, 0, canvas.width * stepSize, canvas.height * stepSize);
    
        destCanvas.width = output.width * Math.pow(stepSize, i)
        destCanvas.height = output.height * Math.pow(stepSize, i)
        destCanvas2d.drawImage(canvas, 0, 0, canvas.width, canvas.height);

        output.src = destCanvas.toDataURL('image/jpeg', quality);

        if ( this.checkDataSize(output.src) < targetSize ) return output;
    }

};

ImageResizer.prototype.checkDataSize = function(dataURL) {
    return Math.round( (dataURL.length - 22)*3/4 );
};
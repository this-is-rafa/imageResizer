var resizeImage = function(event) {
    var reader = new FileReader();
    var input = event.target;

    reader.onload = function() {
        var tempImage = new Image();
        tempImage.src = reader.result;
        tempImage.onload = function() {
                var output = new ImageResizer(tempImage);
                document.body.appendChild(output);
        }
    }
    reader.readAsDataURL(input.files[0]);
}



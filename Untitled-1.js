<html>
<head>
<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
<title>Show Image Dimensions Locally</title>
<style type='text/css'>
body {
    font-family: sans-serif;
}
</style>
<script type='text/javascript'>

    function loadImage() {
        var input, file, fr, img;

        if (typeof window.FileReader !== 'function') {
            write("The file API isn't supported on this browser yet.");
            return;
        }

        input = document.getElementById('imgfile');
        if (!input) {
            write("Um, couldn't find the imgfile element.");
        }
        else if (!input.files) {
            write("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            write("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            fr = new FileReader();
            fr.onload = createImage;
            fr.readAsDataURL(file);
        }

        function createImage() {
            img = new Image();
            img.onload = imageLoaded;
            img.src = fr.result;
        }

        function imageLoaded() {
            var canvas = document.getElementById("canvas")
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img,0,0);
            alert(canvas.toDataURL("image/png"));
        		console.log(canvas.toDataURL("image/png"));  
        }

        function write(msg) {
            var p = document.createElement('p');
            p.innerHTML = msg;
            document.body.appendChild(p);
        }
    }

</script>
</head>
<body>
<form action='#' onsubmit="return false;">
    <input type='file' id='imgfile' />
    <input type='button' id='btnLoad' value='Load' onclick='loadImage();' />
</form>
    <canvas id="canvas"></canvas>
</body>

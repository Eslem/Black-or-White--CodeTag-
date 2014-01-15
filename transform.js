var ctx;
var img;
function draw(){
	var canvas=document.getElementById("canvas1");
	ctx=canvas.getContext("2d");
	img=new Image()
	img.src="Images/joker.jpg";
	ctx.drawImage(img,0,0);
}

function gray8(){
	var imageData=ctx.getImageData(0, 0, img.width, img.height);
	var data = imageData.data;

       for(var i = 0; i < data.length; i += 4) {
           Red = data[i]
		   Green = data[i+1]
		   Blue = data[i+2]

		   Gray = (Red + Green + Blue) / 3

		  
          // red
          data[i] = Gray;
          // green
          data[i + 1] = Gray;
          // blue
          data[i + 2] = Gray;
        }

        // overwrite original image
        ctx.putImageData(imageData, 0, 0);
}

document.body.onload=function(){
	draw();
};

document.getElementById("canvas1").onmouseover=function(){
	gray8();
}
document.getElementById("canvas1").onmouseout=function(){
	draw();
}

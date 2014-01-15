var ctx1, ctx2, ctx3, ctx4 ;
var img;

//Draw the canvas image
function draw(){
	var canvas1=document.getElementById("canvas1");
	ctx1=canvas1.getContext("2d");
	var canvas2=document.getElementById("canvas2");
	ctx2=canvas2.getContext("2d");
	var canvas3=document.getElementById("canvas3");
	ctx3=canvas3.getContext("2d");
	var canvas4=document.getElementById("canvas4");
	ctx4=canvas4.getContext("2d");
	img=new Image()
	img.src="Images/joker.jpg";
	var prop=img.width/img.height;
	
	//scale height of canvas to fit de image
	canvas1.height= canvas1.width*prop;
	canvas2.height= canvas1.width*prop;
	canvas3.height= canvas1.width*prop;
	canvas4.height= canvas1.width*prop;
	
	ctx1.drawImage(img,0,0, canvas1.width, canvas1.height);
	ctx2.drawImage(img,0,0, canvas1.width, canvas1.height);
	ctx3.drawImage(img,0,0, canvas1.width, canvas1.height);
	ctx4.drawImage(img,0,0, canvas1.width, canvas1.height);
}

//grayscale
function gray(bit, ctx){
	var imageData=ctx.getImageData(0, 0, img.width, img.height);
	var data = imageData.data;

       for(var i = 0; i < data.length; i += 4) {
           Red = data[i]
		   Green = data[i+1]
		   Blue = data[i+2]
		   alpha=data[i+4];
		   scale=alpha/Math.pow(2, bit);
		   Gray = (Red + Green + Blue) / 3 * scale;

		  
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
draw();


document.getElementById("canvas1").onmouseover=function(){
	gray(8, ctx1);
}
document.getElementById("canvas1").onmouseout=function(){
	draw();
}

document.getElementById("canvas2").onmouseover=function(){
	gray(4, ctx2);
}
document.getElementById("canvas2").onmouseout=function(){
	draw();
}

document.getElementById("canvas3").onmouseover=function(){
	gray(2, ctx3);
}
document.getElementById("canvas3").onmouseout=function(){
	draw();
}

document.getElementById("canvas4").onmouseover=function(){
	gray(1, ctx4);
}
document.getElementById("canvas4").onmouseout=function(){
	draw();
}
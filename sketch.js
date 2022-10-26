let video;
let adciiDiv
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(48,48);
  asciiDiv = createDiv();
}
function draw() {
  video.loadPixels();
  let asciiImage = '';
  for(let j=0;j<video.height;j++) {
    for(let i=0;i<video.width;i++) {
      const imgIndex = (i + j * video.width) *4;
      const r = video.pixels[imgIndex];
      const g = video.pixels[imgIndex+1];
      const b = video.pixels[imgIndex+2];
      const avg = (r+g+b)/3;
      const ascii = floor(map(avg, 0,255,density.length,0));
      const check =density.charAt(ascii);
      if(check == ' ') {
        asciiImage+='&nbsp;';
      }
      else {
        asciiImage +=check;
      }
      
    }
    asciiImage+="<br/>"
    asciiDiv.html(asciiImage);
    // console.log(row);
  }
}
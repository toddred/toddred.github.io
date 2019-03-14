

var keyData = {

q: {
sound: new Howl({
  src: ['assets/js/lib/sounds/bubbles.mp3']
}),
color: '#1abc9c'
},
w: {
sound: new Howl({
  src: ['assets/js/lib/sounds/clay.mp3']
}),
color: '#2ecc71'
},
e: {
sound: new Howl({
  src: ['assets/js/lib/sounds/confetti.mp3']
}),
color: '#3498db'
},
r: {
sound: new Howl({
  src: ['assets/js/lib/sounds/corona.mp3']
}),
color: '#9b59b6'
},
t: {
sound: new Howl({
  src: ['assets/js/lib/sounds/dotted-spiral.mp3']
}),
color: '#34495e'
},
y: {
sound: new Howl({
  src: ['assets/js/lib/sounds/flash-1.mp3']
}),
color: '#16a085'
},
u: {
sound: new Howl({
  src: ['assets/js/lib/sounds/flash-2.mp3']
}),
color: '#27ae60'
},
i: {
sound: new Howl({
  src: ['assets/js/lib/sounds/flash-3.mp3']
}),
color: '#2980b9'
},
o: {
sound: new Howl({
src: ['assets/js/lib/sounds/glimmer.mp3']
}),
color: '#8e44ad'
},
p: {
sound: new Howl({
  src: ['assets/js/lib/sounds/moon.mp3']
}),
color: '#2c3e50'
},
a: {
sound: new Howl({
  src: ['assets/js/lib/sounds/pinwheel.mp3']
}),
color: '#f1c40f'
},
s: {
sound: new Howl({
  src: ['assets/js/lib/sounds/piston-1.mp3']
}),
color: '#e67e22'
},
d: {
sound: new Howl({
  src: ['assets/js/lib/sounds/piston-2.mp3']
}),
color: '#e74c3c'
},
f: {
sound: new Howl({
  src: ['assets/js/lib/sounds/prism-1.mp3']
}),
color: '#95a5a6'
},
g: {
sound: new Howl({
  src: ['assets/js/lib/sounds/prism-2.mp3']
}),
color: '#f39c12'
},
h: {
sound: new Howl({
  src: ['assets/js/lib/sounds/prism-3.mp3']
}),
color: '#d35400'
},
j: {
sound: new Howl({
  src: ['assets/js/lib/sounds/splits.mp3']
}),
color: '#1abc9c'
},
k: {
sound: new Howl({
  src: ['assets/js/lib/sounds/squiggle.mp3']
}),
color: '#2ecc71'
},
l: {
sound: new Howl({
  src: ['assets/js/lib/sounds/strike.mp3']
}),
color: '#3498db'
},
z: {
sound: new Howl({
  src: ['assets/js/lib/sounds/suspension.mp3']
}),
color: '#9b59b6'
},
x: {
sound: new Howl({
  src: ['assets/js/lib/sounds/timer.mp3']
}),
color: '#34495e'
},
c: {
sound: new Howl({
  src: ['assets/js/lib/sounds/ufo.mp3']
}),
color: '#16a085'
},
v: {
sound: new Howl({
  src: ['assets/js/lib/sounds/veil.mp3']
}),
color: '#27ae60'
},
b: {
sound: new Howl({
  src: ['assets/js/lib/sounds/wipe.mp3']
}),
color: '#2980b9'
},
n: {
sound: new Howl({
src: ['assets/js/lib/sounds/zig-zag.mp3']
}),
color: '#8e44ad'
},
m: {
sound: new Howl({
  src: ['assets/js/lib/sounds/moon.mp3']
}),
color: '#2c3e50'
}
}

var circles = [];

function onKeyDown(event) {
	//if(event.key === "a"){
	//	sound1.play();
	//}
	//if(event.key === "s") {
	//	sound2.play();
	//};
	if(keyData[event.key]) {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randPoint = Point.random();
	var point = maxPoint * randPoint;
	// When a key is pressed, set the content of the text item:
	var newCircle = new Path.Circle(point,500);
	newCircle.fillColor = keyData[event.key].color;
	circles.push(newCircle);
	keyData[event.key].sound.play();
	}
}


function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	for (var i = 0; i < circles.length; i++) {
	 circles[i].fillColor.hue += 1;
	 circles[i].scale(0.9);
	if(circles[i].area < 1){
		circles[i].remove();
		circles.splice(i, 1);
		i--;
		//console.log(circles);
		}
	}

}



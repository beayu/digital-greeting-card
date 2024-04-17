let colors = [];
let confetti = [];

function setup() {
  createCanvas(500, 700);
  angleMode(DEGREES); 
  
  colors[0] = [[248, 210, 72], [251, 230, 122]];
  colors[1] = [[240, 147, 54], [242, 168, 88]];
  colors[2] = [[245, 181, 77], [238, 122, 95]];
  colors[3] = [[142, 179, 57], [199, 223, 88]];
  
  for (let i = 0; i < 100; i++) {
    confetti.push(new Confetti(random(20, 480), random(-700, 0), 35));
  }
}

function draw() {
  background(252, 244, 230);
  let o = new Orange(350, 550, 200);
  let h = new HalfOrange(150, 560, 180);
  
  fill(0); 
  textSize(24); 
  textAlign(CENTER); 
  textFont('courier new');
  text('to: my roommates', 250, 120); 
  text('\(alyssa & viveka\)', 250, 170)
  text('don\'t get sick this quarter', 250, 220); 
  text('eat more citrus', 250, 270); 
  text('love bebus', 250, 320);
  
  for (let i = 0; i < confetti.length; i++) {
    confetti[i].move();
    confetti[i].display();
  }
}

class Orange {
  constructor(w, h, r) {
    stroke(155, 182, 56);
    strokeWeight(8);
    line(w - 5, h - 100, w - 5, h - 140);
    fill(155, 182, 56);
    ellipse(w - 40, h - 125, 50, 15);

    noStroke();
    fill(239, 126, 49);
    circle(w, h, r);
    fill(240, 146, 54);
    circle(w - 5, h - 5, 160);
    fill(255);
    circle(w - 40, h - 40, 30);
  }
}

class HalfOrange {
  constructor(w, h, r) {
    noStroke();
    fill(239, 126, 49);
    circle(w, h, r);
    fill(252, 244, 230);
    circle(w, h, 165);
    fill(245, 184, 64);
    circle(w, h, 150);
    stroke(252, 244, 230);
    strokeWeight(7);
    line(w, h - 75, w, h + 75);
    line(w - 75, h, w + 75, h);
    line(w - 55, h - 55, w + 55, h + 55);
    line(w + 55, h - 55, w - 55, h + 55);
  }
}

class Confetti {
  constructor(w, h, r) {
    this.c = colors[int(random(0, colors.length))];
    this.w = w; 
    this.h = h; 
    this.r = r; 
    this.speed = random(2, 5); 
    this.rotation = random(0, 360);
    this.rotateSpeed = random(-5, 5); 
  }
  
  move() {
    this.h += this.speed; 
    this.rotation += this.rotateSpeed; 
  }
  
  display() {
    noStroke();
    fill(this.c[0]); 
    circle(this.w, this.h, this.r); 
    fill(255); 
    circle(this.w, this.h, this.r * 0.92); 
    fill(this.c[1]); 
    circle(this.w, this.h, this.r * 5/6); 
    stroke(255); 
    strokeWeight(2); 
    let d = (this.r * 5/6) / 2;
    let dd = d * 0.73;
    // line(this.w, this.h - d, this.w, this.h + d); 
    // line(this.w - d, this.h, this.w + d, this.h); 
    // line(this.w - dd, this.h - dd, this.w + dd, this.h + dd); 
    // line(this.w + dd, this.h - dd, this.w - dd, this.h + dd);
    push() 
    translate(this.w, this.h); 
    rotate(this.rotation); 
    line(0, -d, 0, d); 
    line(-d, 0, d, 0); 
    line(-dd, -dd, dd, dd); 
    line(dd, -dd, -dd, dd);
    pop(); 
  }
}

function setup() {
  createCanvas(500, 500);
  background(0);

let A = new Matrix(2,2);
let B = new Matrix(2,2);
A.randomize();
B.randomize();
A.print();
B.print();

let C = Matrix.hadamard(A,B);
C.print();
  // var rn= new RedeNeural(1,3,5);

  // var arr = [1,2];
  // rn.feedforward(arr);
}
function draw() {
  
}
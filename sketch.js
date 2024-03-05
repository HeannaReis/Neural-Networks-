function setup() {

  var train = true;
  createCanvas(300, 300);
  background(0);


  nn= new RedeNeural(1, 3, 2);
  let arr = [1,2];
  nn.train(arr,[0,1]);

//testing operations matrix class
// let A = new Matrix(2,1);
// let B = new Matrix(2,1);
// A.randomize();
// B.randomize();
// A.print();
// B.print();

// let C = Matrix.subtract(A,B);
// C.print();
}
function draw() {
  
}
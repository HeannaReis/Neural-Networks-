var train = true;

function setup() {

  createCanvas(300, 300);
  background(0);


  nn= new RedeNeural(2, 3, 1);

  dataset = {
    inputs: [
      [1, 1],
      [1, 0],
      [0, 1],
      [0, 0]],
    
    outputs: [
      [0],
      [1],
      [1],
      [0]
    ]

  }




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
if(train) {
  for (var i = 0; i <10000; i++) {
    var index = floor(random(4));
    nn.train(dataset.inputs[index], dataset.outputs[index]);
  }
  if (nn.predict([0,0]) [0] < 0.04 && nn.predict([1,0]) [0] < 0.98 )
  train = false;
  console.log("Completed");
}
}
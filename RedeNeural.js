function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}


function dsigmoid(y){
    return y * (1 - y);
}
class RedeNeural{
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(this.h_nodes, 1);
        this.bias_ih.randomize();
        this.bias_ho = new Matrix(this.o_nodes, 1);
        this.bias_ho.randomize();

        this.weigths_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.weigths_ih.randomize();
        
        this.weights_ho = new Matrix(this.o_nodes, this.h_nodes);
        this.weights_ho.randomize();
    }

    train(arr, target){
        //INPUT -> HIDDEN
        let input = Matrix.arrayToMatrix(arr);

        let hidden = Matrix.multiply(this.weigths_ih, input);
        hidden = Matrix.add(hidden, this.bias_ih);
        hidden.map(sigmoid);

        //HIDDEN -> OUTPUT
        //d(sigmoid) = Output * (-1 Output)
        let output = Matrix.multiply(this.weights_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.map(sigmoid);


        //BACKPROPAGATION
        let expected = Matrix.arrayToMatrix(target);
        let output_error = Matrix.subtract(expected, output); // Corrigido para subtrair de 'output'
        let d_output = Matrix.map(output, dsigmoid); // Corrigido para aplicar 'dsigmoid' em 'output'
        
        let gradient = Matrix.hadamard(output_error, d_output);
        gradient.print();
    }
}
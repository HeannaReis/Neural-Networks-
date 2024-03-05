function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}


function dsigmoid(y) {
    return y * (1 - y);
}
class RedeNeural {
    constructor(input, hidden, output) {
        this.input = input;
        this.hidden = hidden;
        this.output = output;

        this.bias_ih = new Matrix(this.hidden, 1);
        this.bias_ih.randomize();
        this.bias_ho = new Matrix(this.output, 1);
        this.bias_ho.randomize();

        this.weights_ih = new Matrix(this.hidden, this.input);
        this.weights_ih.randomize();

        this.weights_ho = new Matrix(this.output, this.hidden);
        this.weights_ho.randomize();

        this.learning_rate = 0.1;

    }

    train(arr, target) {
        //Input Hidden
        let input = Matrix.arrayToMatrix(arr);

        let hidden = Matrix.multiply(this.weights_ih, input);
        hidden = Matrix.add(hidden, this.bias_ih);

        hidden.map(sigmoid);

        //hidden output

        let output = Matrix.multiply(this.weights_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.map(sigmoid);

        //BackPropagation
        let expected = Matrix.arrayToMatrix(target);
        let output_error = Matrix.subtract(expected, output);
        let d_output = Matrix.map(output, dsigmoid);

        let hidden_T = Matrix.transpose(hidden);

        let gradient = Matrix.hadamard(d_output, output_error);
        gradient = Matrix.escalar_multiply(gradient, this.learning_rate)

        this.bias_ho = Matrix.add(this.bias_ho, gradient);

        let weights_ho_deltas = Matrix.multiply(gradient, hidden_T);
        this.weights_ho = Matrix.add(this.weights_ho, weights_ho_deltas);
        ////////////////////////////////
        let weights_ho_T = Matrix.transpose(this.weights_ho);
        let hidden_error = Matrix.multiply(weights_ho_T, output_error);
        let d_hidden = Matrix.map(hidden, dsigmoid);
        let input_T = Matrix.transpose(input);

        let gradient_H = Matrix.hadamard(hidden_error, d_hidden);
        gradient_H = Matrix.escalar_multiply(gradient_H, this.learning_rate);

        this.bias_ih = Matrix.add(this.bias_ih, gradient_H);
        let weights_ih_delta = Matrix.multiply(gradient_H, input_T);
        weights_ih_delta.print();
        this.weights_ih.print();
        this.weights_ih = Matrix.add(this.weights_ih, weights_ih_delta);
    }

    predict(arr) {
        let input = Matrix.arrayToMatrix(arr);

        let hidden = Matrix.multiply(this.weights_ih, input);
        hidden = Matrix.add(hidden, this.bias_ih);

        hidden.map(sigmoid);

        //hidden output

        let output = Matrix.multiply(this.weights_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.map(sigmoid);
        output = Matrix.MatrixToArray(output);
        return output;
    }
}
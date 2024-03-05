class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        // Inicializa os dados da matriz como uma matriz 2D preenchida com zeros
        this.data = [];
        for (let i = 0; i < rows; i++) {
            let arr = [];
            for (let j = 0; j < cols; j++) {
                arr.push(0);
            }
            this.data.push(arr);
        }
    }

    // Converte um array para uma matriz com uma única coluna
    static arrayToMatrix(arr) {
        let matrix = new Matrix(arr.length, 1);

        matrix.map((elm, i, j) => {
            return arr[i];
        });
        return matrix;
    }

    // Imprime os dados da matriz em formato tabular
    print() {
        console.table(this.data);
    }

    // Preenche a matriz com valores inteiros aleatórios entre 0 e 9
    randomize() {
        this.map((elm, i, j) => {
            return Math.random() * 2 - 1;
            //return Math.floor(Math.random() * 10);
        });
    }

    // Aplica uma função a cada elemento da matriz
    static map(A, func) {
        let matrix = new Matrix(A.rows, A.cols);

        matrix.data = A.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            });
        });
        return matrix;
    }

    // Aplica uma função a cada elemento da matriz (método de instância)
    map(func) {
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            });
        });
        return this;
    }

    // Transpõe a matriz
    static transpose(A) {
        var matrix = new Matrix(A.cols, A.rows);
        matrix.map((num, i, j) => {
            return A.data[j][i];
        });
        return matrix;
    }

    // Multiplica cada elemento da matriz por um valor escalar
    static escalar_multiply(A, escalar) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((mul, i, j) => {
            return A.data[i][j] * escalar;
        });

        return matrix;
    }

    // Realiza o produto de Hadamard (multiplicação elemento a elemento) de duas matrizes
    static hadamard(A, B) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] * B.data[i][j];
        });

        return matrix;
    }

    // Adiciona duas matrizes elemento a elemento
    static add(A, B) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((mul, i, j) => {
            return A.data[i][j] - B.data[i][j];
        });

        return matrix;
    }

    // Subtrai duas matrizes elemento a elemento
    static subtract(A, B) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((mul, i, j) => {
            return A.data[i][j] - B.data[i][j];
        });

        return matrix;
    }

    // Multiplica duas matrizes (multiplicação de matrizes)
    static multiply(A, B) {
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((num, i, j) => {
            let sum = 0;
            for (let k = 0; k < A.cols; k++) {
                let elm1 = A.data[i][k];
                let elm2 = B.data[k][j];
                sum += elm1 * elm2;
            }
            return sum;
        });

        return matrix;
    }
}

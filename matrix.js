class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
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
        matrix.data = arr.map(elm => [elm]);
        return matrix;
    }

    // Converte uma matriz para um array
    static MatrixToArray(obj) {
        let arr = []
        obj.map((elm, i, j) => {
            arr.push(elm);
        })
        return arr;
    }

    // Imprime os dados da matriz em formato tabular
    print() {
        console.table(this.data);
    }

    // Preenche a matriz com valores inteiros aleatórios entre -1 e 1
    randomize() {
        this.map(() => Math.random() * 2 - 1);
    }

    // Aplica uma função a cada elemento da matriz
    static map(A, func) {
        let matrix = new Matrix(A.rows, A.cols);
        matrix.data = A.data.map((row, i) => {
            return row.map((num, j) => func(num, i, j));
        });
        return matrix;
    }

    // Aplica uma função a cada elemento da matriz (método de instância)
    map(func) {
        this.data = this.data.map((row, i) => {
            return row.map((num, j) => func(num, i, j));
        });
        return this;
    }

    // Transpõe a matriz
    static transpose(A) {
        let matrix = new Matrix(A.cols, A.rows);
        matrix.data = matrix.data.map((row, i) => {
            return row.map((num, j) => A.data[j][i]);
        });
        return matrix;
    }

    // Operações Estáticas Matriz x Escalar

    static escalar_multiply(A, escalar) {
        return Matrix.map(A, num => num * escalar);
    }

    // Operações Estáticas Matriz x Matriz

    static hadamard(A, B) {
        return Matrix.map(A, (num, i, j) => num * B.data[i][j]);
    }

    static add(A, B) {
        return Matrix.map(A, (num, i, j) => num + B.data[i][j]);
    }

    static subtract(A, B) {
        return Matrix.map(A, (num, i, j) => num - B.data[i][j]);
    }

    static multiply(A, B) {
        let matrix = new Matrix(A.rows, B.cols);
        matrix.data = matrix.data.map((row, i) => {
            return row.map((num, j) => {
                let sum = 0;
                for (let k = 0; k < A.cols; k++) {
                    sum += A.data[i][k] * B.data[k][j];
                }
                return sum;
            });
        });
        return matrix;
    }
}

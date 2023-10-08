class ServicioTablero{

    constructor(){

        this.tablero =  new Array(filas);

        for(let i = 0; i<this.tablero.length; i++){
            this.tablero[i] = new Array(columnas);
    
            for(let j = 0; j<this.tablero[i].length; j++){
    
             this.tablero[i][j] = 0;
            }
        }
    }

    colocarFicha(colum, turno){

        for(let i = this.tablero.length-1; i >= 0; i--){

            if(this.tablero[i][colum] == 0){
                this.tablero[i][colum] = turno;
                console.log(this.tablero);
                break;
            }
        }
    }

    Comprobarganador(){
        let ganador = 0;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {

                if (i + 3 < 6) {
                    if (this.tablero[i][j] == 1 && this.tablero[i + 1][j] == 1 && this.tablero[i + 2][j] == 1 && this.tablero[i + 3][j] == 1) {
                        ganador = 1;
                    }
                }
                if (j + 3 < 7) {
                    if (this.tablero[i][j] == 1 && this.tablero[i][j + 1] == 1 && this.tablero[i][j + 2] == 1 && this.tablero[i][j + 3] == 1) {
                        ganador = 1;
                    }
                }

                if (i + 3 < 6 && j + 3 < 7) {
                    if (this.tablero[i][j] == 1 && this.tablero[i + 1][j + 1] == 1 && this.tablero[i + 2][j + 2] == 1 && this.tablero[i + 3][j + 3] == 1) {
                        ganador = 1;
                    }
                }
                if (j - 3 > -1 && i + 3 < 6) {
                    if (this.tablero[i][j] == 1 && this.tablero[i + 1][j - 1] == 1 && this.tablero[i + 2][j - 2] == 1 && this.tablero[i + 3][j - 3] == 1) {
                        ganador = 1;
                    }
                }
                if (j + 3 < 7 && i - 3 > -1) {
                    if (this.tablero[i][j] == 1 && this.tablero[i - 1][j + 1] == 1 && this.tablero[i - 2][j + 2] == 1 && this.tablero[i - 3][j + 3] == 1) {
                        ganador = 1;
                    }
                }

                if (i + 3 < 6) {
                    if (this.tablero[i][j] == 2 && this.tablero[i + 1][j] == 2 && this.tablero[i + 2][j] == 2 && this.tablero[i + 3][j] == 2) {
                        ganador = 2;
                    }
                }
                if (j + 3 < 7) {
                    if (this.tablero[i][j] == 2 && this.tablero[i][j + 1] == 2 && this.tablero[i][j + 2] == 2 && this.tablero[i][j + 3] == 2) {
                        ganador = 2;
                    }
                }

                if (i + 3 < 6 && j + 3 < 7) {
                    if (this.tablero[i][j] == 2 && this.tablero[i + 1][j + 1] == 2 && this.tablero[i + 2][j + 2] == 2 && this.tablero[i + 3][j + 3] == 2) {
                        ganador = 2;
                    }
                }
                if (j - 3 > -1 && i + 3 < 6) {
                    if (this.tablero[i][j] == 2 && this.tablero[i + 1][j - 1] == 2 && this.tablero[i + 2][j - 2] == 2 && this.tablero[i + 3][j - 3] == 2) {
                        ganador = 2;
                    }
                }
                if (j + 3 < 7 && i - 3 > -1) {
                    if (this.tablero[i][j] == 2 && this.tablero[i - 1][j + 1] == 2 && this.tablero[i - 2][j + 2] == 2 && this.tablero[i - 3][j + 3] == 2) {
                        ganador = 2;
                    }
                }
            }
        }
        return ganador;
    }

    reiniciar(){

        for(let i = 0; i<this.tablero.length; i++){
    
            for(let j = 0; j<this.tablero[i].length; j++){
    
             this.tablero[i][j] = 0;
            }
        }
    
    }
}

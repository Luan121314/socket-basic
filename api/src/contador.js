class Contador {
    constructor() {
        this.cont = 0
        this.time;

    }

    contar() {
        this.cont = this.cont++
        return this.cont;
    }

    stop(){
        clearInterval(this.time)
    }
}

module.exports = Contador
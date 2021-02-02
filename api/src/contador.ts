class Contador {
    time: NodeJS.Timeout ;
    cont: number;
    interval: number;

    constructor() {
        this.cont = 0;
        this.interval = 1000;
        this.time = setInterval(()=>{}, this.interval) ;
    }

    init(callback: (value: any)=> void): void {
        try {

            this.time = setInterval(()=>callback(this.increment()), this.interval);
        } catch (error) {
            console.log("error in callback\n", error.message);
            this.stop()
        }
    }


    increment(): number {
        return this.cont++;
    }

    stop():void {
        clearInterval(this.time)
    }
}

export default Contador
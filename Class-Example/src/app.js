class Car {
    constructor() {
        console.log('Car constructor');
    }
    
    run () {
        console.log('Running ... ...');
    }
}

class Bus extends Car {
    constructor(number) {
        super();
        this.number = number;
    }
    
    print_number(camera) {
        console.log(this.number);
    }
    
    static print_manufacturer() {
        console.log('Honda');
    }
}


var bus1 = new Bus('222-aabb');
Bus.print_manufacturer();
bus1.print_number();
bus1.run();
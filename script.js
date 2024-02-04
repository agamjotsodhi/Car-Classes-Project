class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep Beep";
    }

    toString() {
        return `The Vehichle is a ${this.make} ${this.model} from ${this.year}.`; //template
    }

}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4; // number of wheels
    }
}

class Motorcycle extends Car {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return " Vrooooom Vroom";
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Sorry only vehicles are allowed in this garage!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry about that, we are full with max capacity.";
        }
        this.vehicles.push(newVehicle);
        return "Congrats new vehicle added!";
    }
}


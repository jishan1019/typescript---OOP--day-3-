{
  // abstraction
  // idia pabo kintu vitore ki seta janbo na ata k abstraction bole
  // ata kora jai 1. interface 2. abstraction

  interface Vehicle1 {
    name: string;
    model: number;

    startEngin(): void;
    stopEngin(): void;
    move(): void;
  }

  // Real Implimentation
  class Car implements Vehicle1 {
    startEngin(): void {
      console.log("I a Stationg the car engin");
    }

    stopEngin(): void {
      console.log("Car Engin Stop");
    }

    move(): void {
      console.log("I am moving the car");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngin();

  // Abstract class / leader class jetake bakira follow korbe
  abstract class Car2 {
    abstract startEngin(): void;
    abstract stopEngin(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    startEngin(): void {
      console.log("I a Stationg the car engin");
    }

    stopEngin(): void {
      console.log("Car Engin Stop");
    }

    move(): void {
      console.log("I am moving the car");
    }
  }

  const toyotaCar = new ToyotaCar();
  toyotaCar.startEngin();

  //
}

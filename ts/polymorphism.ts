{
  // polymorphism
  //place , kal , patro ved e akta method deffrent deffrent output k polymorphism bole

  class Persion {
    getSleep() {
      console.log("I am sleeping for 8 hours");
    }
  }

  class Student extends Persion {
    getSleep() {
      console.log("Student Sleeping daily 8 hours");
    }
  }

  class Developer extends Persion {
    getSleep() {
      console.log("Developer Sleeping daily 6 hours");
    }
  }

  const getSleepingHours = (param: Persion) => {
    param.getSleep();
  };

  const persion1 = new Persion();
  const persion2 = new Student();
  const persion3 = new Developer();

  getSleepingHours(persion1);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // get Redius
  class Circel extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // get Area
  class Ractangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeAre = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circel(10);
  const shape3 = new Ractangle(10, 20);

  getShapeAre(shape1);
  getShapeAre(shape2);
  getShapeAre(shape3);

  //
}

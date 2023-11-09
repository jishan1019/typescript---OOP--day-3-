{
  // inharitence -oop
  class Parent {
    name: string;
    age: number;
    adress: string;

    constructor(name: string, age: number, adress: string) {
      this.name = name;
      this.age = age;
      this.adress = adress;
    }

    //   method
    getSleep(numberOfHours: number) {
      console.log(`${this.name} student sleep ${numberOfHours}`);
    }
  }

  // class
  class Student extends Parent {
    constructor(name: string, age: number, adress: string) {
      super(name, age, adress);
    }
  }

  //   insoant
  const student1 = new Student("Jishan", 21, "Dhaka");
}

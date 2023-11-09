{
  // class componeentss
  class Animel {
    name: string;
    spacific: string;
    sound: string;

    constructor(name: string, spacific: string, sound: string) {
      this.name = name;
      this.spacific = spacific;
      this.sound = sound;
    }

    //   class er modde function k annonimus fuction bole ba method bole

    makeSound() {
      console.log(`the ${this.name} sound ${this.sound}`);
    }
  }

  // inostance mane object
  const dog = new Animel("BOB", "dog", "ghew");
  const cat = new Animel("Oggy", "cat", "mew mew");

  cat.makeSound();
}

{
  // static

  class Counter {
    //ekhane thekei change kori 1 jaigai chang ekorte golel static use korbo
    static count: number = 0;

    static incriment() {
      return (Counter.count = Counter.count + 1);
    }

    static decriment() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instonent1 = new Counter(); //static use korle ar insostant bananor proyojon nai
  console.log(Counter.incriment());

  //   const instonent2 = new Counter();
  console.log(Counter.decriment());

  //
}

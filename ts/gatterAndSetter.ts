{
  //gutter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    // public addDeposite(amount: number) {
    //   this.balance = this.balance + amount;
    // }

    //getter
    get Balance() {
      return this.balance;
    }

    set Deposite(amount: number) {
      this.balance = this.balance + amount;
    }

    // public getBalance() {
    //   return this.balance;
    // }
  }

  const goribManuserAccount = new BankAccount(111, "Mr Gorib", 20);
  const myBalance = goribManuserAccount.Balance;

  goribManuserAccount.Deposite = 50;

  console.log(myBalance);

  //   goribManuserAccount.addDeposite(20);
  //   const myBlance = goribManuserAccount.getBalance();

  // getter And setter property

  //
}

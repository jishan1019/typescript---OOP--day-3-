{
  // typegurd

  // ------Type of Grund ------
  type AlphaNumaric = string | number;
  const add = (
    param1: AlphaNumaric,
    param2: AlphaNumaric
  ): number | string | undefined => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(1, 1);

  // ------Type in gurd class match ----------
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const NormalUser = {
    name: "Jishan",
  };

  const AdminUser = {
    name: "Admin",
    role: "admin",
  };

  getUser(NormalUser);
  getUser(AdminUser);
}

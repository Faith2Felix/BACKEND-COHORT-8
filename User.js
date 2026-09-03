class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  validate() {
    if (!this.name || !this.name.trim() === "") {
      throw new Error("Name is required");
    }

    if (!this.email || !this.email.includes("@")) {
      throw new Error("A Valid email is required");
    }
    return true;
  }
}
export default User;

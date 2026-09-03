import User from "./User.js";

//Test user 1
try {
  const user1 = new User("Faith", "faith@example.com");
  user1.validate();
  console.log("user 1 is valid", user1);
} catch (error) {
  console.log("User 1 error:", error.message);
}

//Test user 2
try {
  const user2 = new User("", "esther@example.com");
  user2.validate();
  console.log("user 2 is valid", user2);
} catch (error) {
  console.log("User 2 error:", error.message);
}

//Test user 3
try {
  const user3 = new User("Tofunmi", "tofunmiexample.com");
  user3.validate();
  console.log("user 3 is valid", user3);
} catch (error) {
  console.log("User 3 error:", error.message);
}

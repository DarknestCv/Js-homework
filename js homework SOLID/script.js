class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  class UserNotifier {
    sendEmail(user, message) {
      console.log(`Відправка повідомлення ${user.email}: ${message}`);
    }
  }

  const user = new User("Ілюха", "riroox@gmail.com"); //! створюєм юзера
  const notifier = new UserNotifier(); 
  

  notifier.sendEmail(user, "Здоров" + ' ' + `${user.name}`); //! відправляєм скам силку юзеру
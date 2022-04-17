class Pokemon {
  constructor(name) {
    this.name = name;
    this.inicio = "Mi pokemon " + name + " ";
  }

  sayHello() {
    console.log(this.inicio + "te saluda!!!");
  }

  sayMessage(message) {
    console.log(this.inicio + "dice: " + message);
  }
}

module.exports = Pokemon;

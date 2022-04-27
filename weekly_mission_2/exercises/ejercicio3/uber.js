class Profile {
  constructor(user, username) {
    this.user = user;
    this.username = username;
  }
}
const profile = new Profile("blanco", "blancoM");

class Travel {
  constructor(origin, km, destiny, price) {
    this.origin = origin;
    this.km = km;
    this.destiny = destiny;
    this.price = price;
  }

  getPrice() {
    return "$" + this.price;
  }
}
const travel = new Travel("Puebla", 80, "CDMX", 340);
console.log(travel.getPrice());

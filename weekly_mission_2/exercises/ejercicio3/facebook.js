class User {
  constructor(
    user,
    username,
    city,
    working_place,
    sentimental_situation,
    friends,
    pictures
  ) {
    this.user = user;
    this.username = username;
    this.city = city;
    this.working_place = working_place;
    this.sentimental_situation = sentimental_situation;
    this.friends = friends;
    this.pictures = pictures;
  }
  getUserName() {
    return this.username;
  }
  getCity() {
    return "Ciudad " + this.city;
  }
}
const user = new User("blanca", "blancaM", "Puebla", "none", "single", 101, [
  { name: "ahm", date: "26/04/2022", url: "/url", alt: "12222" },
]);
console.log("Nombre de usuario:" + user.username);
console.log(user.getCity());

class Post {
  constructor(user, username, date, content, reactions, coments) {
    this.user = user;
    this.username = username;
    this.date = date;
    this.content = content;
    this.reactions = reactions;
    this.coments = coments;
  }
  getUserName() {
    return this.username;
  }
  getContent() {
    return (
      "Desc= " +
      this.content.description
    );
  }
}
const post = new Post(
  "blanca",
  "blancaM",
  '22/04/2022',
  {
    description: "Yupi",
    labeled: [{ username: "Angie", url_profile: "@angie" }],
  },
  {
    smile: 1,
    heart: 2,
    sad: 2,
  },
  [{ user: "luca", message: "Divertido", date: "26/04/2022 6=00" }]
);
console.log("Nombre de usuario=" + post.getUserName());
console.log(post.getContent());

class Biography {
  constructor(post) {
    this.post = post;
  }
  getPost() {
    return post;
  }
}
const biography = new Biography(post);
console.log(biography.getPost());

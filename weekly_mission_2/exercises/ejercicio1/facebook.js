const user = {
  user: "blanca",
  username: "blancaM",
  city: "Puebla",
  working_place: "none",
  sentimental_situation: "single",
  friends: 101,
  pictures: [{ name: "ahm", date: "26/04/2022", url: "/url", alt: "12222" }],
  getCity: function(){
      return "Ciudad "+this.city;
  }
};
console.log("Nombre de usuario:" + user.username);
console.log(user.getCity());

const post = {
  user: "blanca",
  username: "blancaM",
  date: "26/04/2022 7:00",
  content: {
    description: "Yupi",
    labeled: [{ username: "Angie", url_profile: "@angie" }],
  },
  reactions: {
    smile: 1,
    heart: 2,
    sad: 2,
  },
  coments: [{ user: "luca", message: "Divertido", date: "26/04/2022 6:00" }],
  getContent : function(){
      return "Desc: "+this.content.description + " etiqueta: " + this.content.labeled[0].username;
  }
};
console.log("Nombre de usuario:" + post.username);
console.log(post.getContent());

const biography = {
  posts: [post],
};

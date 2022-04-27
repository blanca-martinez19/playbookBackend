const user = {
  user: "blanco",
  username: "blancoM",
  bio: "Love making friends",
  age: 26,
  follow: 34,
  followers: 56,

  getFollowers: function () {
    return "Followers " + this.follow;
  },
};
console.log("Nombre de usuario:" + user.username);
console.log(user.getFollowers());

const trending_topic = {
  username: "Shalev Zaken",
  status: {
    time: "44min",
    img: "1",
    description: "Making HISTORY",
  },
  getDescription: function () {
    return "Desc. " + this.status.description;
  },
};
console.log("Nombre de usuario:" + trending_topic.username);
console.log(trending_topic.getDescription());

const hashtag = {
  name: "#Ax1",
  src: "url",
  getUrl: function () {
    return "Url " + this.src;
  },
};
console.log("Nombre de hastag:" + hashtag.name);
console.log(hashtag.getUrl());

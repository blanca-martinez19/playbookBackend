class User {
  constructor(user, username, bio, age, follow, followers) {
    this.user = user;
    this.username = username;
    this.bio = bio;
    this.age = age;
    this.follow = follow;
    this.followers = followers;
  }

  getFollowers() {
    return "Followers " + this.follow;
  }
}
const user = new User("blanco", "blancoM", "Love making friends", 26, 34, 56);
console.log("Nombre de usuario=" + user.username);
console.log(user.getFollowers());

class TrendingTopic {
  constructor(username, time, img, description) {
    this.username = username;
    this.status = {
      time: time,
      img: img,
      description: description,
    };
  }
  getDescription() {
    return "Desc. " + this.status.description;
  }
}
const trendingTopic = new TrendingTopic(
  "Shalev Zaken",
  "44min",
  "1",
  "Making HISTORY"
);
console.log(trendingTopic.getDescription());

class Hashtag {
  constructor(name, src) {
    this.name = name;
    this.src = src;
  }
  getUrl() {
    return "Url " + this.src;
  }
}
const hashtag = new Hashtag("#Ax1", "url");
console.log(hashtag.getUrl());

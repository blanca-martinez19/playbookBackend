class Repo {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
  getName() {
    return this.name;
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close;
  }
  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}
const repo = new Repo(
  "LaunchX",
  "carlogilmar",
  "JavaScript",
  100,
  199,
  299,
  10,
  10
);

console.log("Nombre del repo=" + repo.getName());
console.log("Issues totales= " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

class Issue {
  constructor(
    title,
    repositoryNameAssociated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdated
  ) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }

  getTitleAndAuthor() {
    return this.title + " / " + this.author;
  }
  getGeneralInfo() {
    return (
      "Creado el " +
      this.dateCreated +
      " Ultima actualizacion= " +
      this.lastUpdated
    );
  }
}
const issue = new Issue(
  "03 Live 3 Semana 1",
  "MissionNodeJS",
  "Open",
  66,
  ["finalizado", "LIVE 3", "Semana-1"],
  "carlogilmar",
  "7 abril 2022",
  "9 days ago"
);
console.log("Titulo y autor= " + issue.getTitleAndAuthor());
console.log("Informacion general " + issue.getGeneralInfo());

class PullRequest {
  constructor(
    title,
    author,
    branchName,
    dateCreated,
    status,
    repositoryNameAssociated
  ) {
    this.title = title;
    this.author = author;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
  }

  getStatus() {
    return this.status;
  }
  getTitleAndAutor() {
    return this.title + " / " + this.author;
  }
}

const pullRequest = new PullRequest(
  "Enviando el blog de Ronnie",
  "Ronnie",
  "main",
  "17/04/2022",
  "Open",
  "launch-x-explorers"
);
console.log("Estatus= " + pullRequest.getStatus());
console.log("Titulo y autor " + pullRequest.getTitleAndAutor());

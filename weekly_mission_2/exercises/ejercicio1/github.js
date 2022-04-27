const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
  title: "03 Live 3 Semana 1",
  repositoryNameAssociated: "MissionNodeJS",
  status: "Open",
  numberOfComments: 66,
  labels: ["finalizado", "LIVE 3", "Semana-1"],
  author: "carlogilmar",
  dateCreated: "7 abril 2022",
  lastUpdated: "9 days ago",

  getTitleAndAuthor: function () {
    return this.title + " / " + this.author;
  },
  getGeneralInfo: function () {
    return (
      "Creado el " +
      this.dateCreated +
      " Ultima actualizacion: " +
      this.lastUpdated
    );
  },
};
console.log("Nombre del issue:" + issue.title);
console.log("Titulo y autor: " + issue.getTitleAndAuthor());
console.log("Informacion general " + issue.getGeneralInfo());

const pullRequest = {
  title: "Enviando el blog de Ronnie",
  author: "Ronnie",
  branchName: "main",
  dateCreated: "17/04/2022",
  status: "Open",
  repositoryNameAssociated: "launch-x-explorers",

  getStatus: function () {
    return this.status;
  },
  getTitleAndAutor: function () {
    return this.title + " / " + this.author;
  },
};
console.log(
  "Nombre del repositorio asociado:" + pullRequest.repositoryNameAssociated
);
console.log("Estatus: " + pullRequest.getStatus());
console.log("Titulo y autor " + pullRequest.getTitleAndAutor());

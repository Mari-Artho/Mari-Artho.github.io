fetch("https://api.github.com/users/mari-artho/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log("github API", json);

    var githubRepos = document.getElementById("githubRepos");
    var i = 0;
    for (i = 0; i < json.length; i++) {
      githubRepos.insertAdjacentHTML(
        "beforeend",
        "<a href='" +
          json[i].html_url +
          "' target='_blank'><div class='githubrepo'>" +
          json[i].name +
          "</div></a>"
      );
    }
  });

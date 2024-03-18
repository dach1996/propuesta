function start() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "July" && password == "") {
    window.location.href = "content.html";
  }
}

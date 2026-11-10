import AuthenticationService from "../services/authentication.service.js";

document.querySelector("#tButLogIn").addEventListener("click", async (_) => {
  const username = document.querySelector("#tTxtUsername").value;
  const password = document.querySelector("#tTxTPassword").value;
  const service = new AuthenticationService();
  try {
    const token = service.validateUser(username, password);
    window.sessionStorage.setItem("token", token);
    window.location = "/views/index.html";
  } catch (error) {
    alert(error.message);
  }
});

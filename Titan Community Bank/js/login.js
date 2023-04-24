function User(email, password) {
  this.email = email;
  this.password = password;
}

function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userString = localStorage.getItem(email);
  if (!userString) {
    const errorText = document.getElementById("error-text");
    errorText.innerHTML = "Invalid username or password. Please try again.";
    return;
  }

  const user = JSON.parse(userString);
  if (password === user.password) {
    window.location.href = "accounts.html";
  } else {
    const errorText = document.getElementById("error-text");
    errorText.innerHTML = "Invalid username or password. Please try again.";
  }
}

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", handleSubmit);

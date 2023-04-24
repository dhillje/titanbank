function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const newPassword = document.getElementById("new-password").value;

  const userString = localStorage.getItem(email);
  if (!userString) {
    const errorText = document.getElementById("error-text");
    errorText.innerHTML = "Invalid username or password. Please try again.";
    return;
  }

  const user = JSON.parse(userString);
  if (password === user.password) {
    user.password = newPassword;
    localStorage.setItem(email, JSON.stringify(user));
    window.location.href = "login.html";
  } else {
    const errorText = document.getElementById("error-text");
    errorText.innerHTML = "Invalid username or password. Please try again.";
  }
}

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", handleSubmit);

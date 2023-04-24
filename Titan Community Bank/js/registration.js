function User(email, password) {
  this.email = email;
  this.password = password;
}

function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email2").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password-confirm").value;

  const errorTable = document.getElementById("error-table");
  errorTable.innerHTML = "";
  let isValid = true;

  if (!email || !email.trim()) {
    const row = errorTable.insertRow();
    const cell = row.insertCell();
    cell.innerHTML = "Email is required.";
    isValid = false;
  }

  if (!password || !password.trim()) {
    const row = errorTable.insertRow();
    const cell = row.insertCell();
    cell.innerHTML = "Password is required.";
    isValid = false;
  }

  if (!confirmPassword || !confirmPassword.trim()) {
    const row = errorTable.insertRow();
    const cell = row.insertCell();
    cell.innerHTML = "Confirm password is required.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    const row = errorTable.insertRow();
    const cell = row.insertCell();
    cell.innerHTML = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    const user = new User(email, password);
    localStorage.setItem(email, JSON.stringify(user));

    window.location.href = "login.html";
  }
}

const registerBtn = document.getElementById("reg-btn");
registerBtn.addEventListener("click", handleSubmit);

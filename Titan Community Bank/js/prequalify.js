const form = document.querySelector("#myForm");
const applyBtn = document.querySelector("#apply-btn");

applyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const emailConfirm = document.querySelector("#email-confirm").value;
  const firstName = document.querySelector("#first-name").value;
  const grossIncome = document.querySelector("#income").value;

  if (email !== emailConfirm) {
    displayError("#email-confirm", "Email addresses do not match");
  } else {
    clearError("#email-confirm");
  }

  if (!firstName) {
    displayError("#first-name", "First name is required");
  } else {
    clearError("#first-name");
  }

  const inputs = form.querySelectorAll(
    'input:not([type="checkbox"]), input[type="checkbox"][data-required]'
  );
  let isValid = true;

  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      if (!input.checked) {
        displayError(`#${input.id}`, `${input.name} is required`);
        isValid = false;
      } else {
        clearError(`#${input.id}`);
      }
    } else if (!input.value) {
      displayError(`#${input.id}`, `${input.name} is required`);
      isValid = false;
    } else {
      clearError(`#${input.id}`);
    }
  });

  if (isValid && grossIncome >= 45000 && email == emailConfirm) {
    alert(
      "Congratulations, You are prequalified for a loan. A representative will contact you soon."
    );
  } else if (isValid && email == emailConfirm) {
    alert("We're sorry, you do not qualify for a loan at this time.");
  }

  const errorTable = document.querySelector("#error-table");
  const errorRows = errorTable.querySelectorAll("tr:not(:first-child)");

  if (errorRows.length > 0) {
    errorTable.style.display = "table";
  } else {
    errorTable.style.display = "none";
  }
});

function displayError(selector, message) {
  const input = document.querySelector(selector);
  const errorTable = document.querySelector("#error-table");
  const row = errorTable.insertRow();

  row.innerHTML = `<td>${message}</td>`;
  input.classList.add("error");
}

function clearError(selector) {
  const input = document.querySelector(selector);
  const errorTable = document.querySelector("#error-table");
  const errorRows = errorTable.querySelectorAll("tr:not(:first-child)");

  input.classList.remove("error");

  errorRows.forEach((row) => {
    if (row.firstChild.textContent === input.name) {
      row.remove();
    }
  });
}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#myForm").reset();
});

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");

  if (name === "" || email === "") {
    error.textContent = "Please fill all fields";
    return false;
  }

  error.textContent = "Message sent successfully!";
  return false;
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
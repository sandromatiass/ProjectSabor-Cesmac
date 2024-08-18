const form = document.querySelector(".myForm");

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const date = form.querySelector('#date').value;
  const description = form.querySelector('#description').value.trim();

  let isValid = true;

  document.querySelectorAll('.error-message').forEach(span => span.style.display = 'none');

  if (!name) {
    const nameError = document.getElementById('name-error');
    nameError.textContent = "Por favor, preencha o nome.";
    nameError.style.display = 'block';
    isValid = false;
  };

  if (!email) {
    const emailError = document.getElementById('email-error');
    emailError.textContent = "Por favor, preencha o e-mail.";
    emailError.style.display = 'block';
    isValid = false;
  };

  if (!date) {
    const dateError = document.getElementById('date-error');
    dateError.textContent = "Por favor, selecione uma data.";
    dateError.style.display = 'block';
    isValid = false;
  };

  if (!description) {
    const descriptionError = document.getElementById('description-error');
    descriptionError.textContent = "Por favor, preencha a descrição.";
    descriptionError.style.display = 'block';
    isValid = false;
  };

  if (isValid) {
    alert(`Olá, ${name}! Todos os campos foram preenchidos corretamente.`);
    form.reset();
  };
});

document.getElementById("clearForm").addEventListener('click', function(){
  form.reset();
});




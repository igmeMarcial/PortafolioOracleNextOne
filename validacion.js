//Haz tú validación en javascript acá

const n = navigator;
const w = window;
const d = document;

const inputs = d.querySelectorAll("input");

// console.log(inputs);

inputs.forEach((input) => {
  //   console.log(input);
  input.addEventListener("blur", (e) => {
    validation(e.target);
  });
});

function validation(input) {
  const typeInput = input.dataset.type;

  console.log(input.validity);
  console.log(input.validity.valid);

  if (input.validity.valid) {
    if (typeInput == "email" && input.dataset.pattern) {
      input.classList.remove("form__error");
    } else {
      input.classList.remove("form__error");
    }
  } else {
    input.classList.add("form__error");
    input.title = messagesError[typeInput].valueMissing;
  }
}

const ErrorsType = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const validationInput = {};

const messagesError = {
  name: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  subject: {
    valueMissing: "El campo asunto no puede estar vacío",
    patternMismatch: "Al menos escribe el asunto",
  },
  message: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La message debe contener minimo una palabra",
  },
};

document.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por enciarme mensaje ");
  let form = document.querySelector("form");
  form.reset();
});

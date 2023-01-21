
const regexEmail = /^(?!.{35}$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i;
const regexPassword = /^(?=.*[0-9])(?=.{6,10})/i;

export const validate = (inputs) => {
  let errors = {}; // {username: 'Debe ser un correo electrónico', password: 'Se requiere un password'}

  if(!regexEmail.test(inputs.username)){
    errors.username = 'Debe ser un correo electrónico';
  }
  
  if(!regexPassword.test(inputs.password)){
    errors.password = 'Se requiere un password';
  }

  return errors;
}
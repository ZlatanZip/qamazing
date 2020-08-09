const validate = (values) => {
  const {firstName, lastName, email, password, repeatPassword} = values;
  console.log(values);
  const errors = {};

  if (!firstName) {
    errors.firstName = "Firstname is required";
  } else if (!/^[a-zA-Z]+$/.test(firstName)) {
    errors.firstName = " Firstname should only contain letters";
  } else if (!/^.{2,}$/.test(firstName)) {
    errors.firstName = " Firstname should be at least two lettes long";
  }

  if (!lastName) {
    errors.lastName = "Lastname is required";
  } else if (!/^[a-zA-Z]+$/.test(lastName)) {
    errors.lastName = " Lastname should only contain letters";
  } else if (!/^.{2,}$/.test(lastName)) {
    errors.lastName = " Lastname should be at least two lettes long";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Passoword is required";
  } else if (!/^.{8,}$/.test(password)) {
    errors.password = "Must be greater than 8 characters ";
  } else if (!/^.+[A-Z]|[!@#$&*]$/.test(password)) {
    errors.password =
      "Password should contain one uppercase letter or a special character";
  }

  if (!repeatPassword) {
    errors.repeatPassword = "Passoword is required";
  } else if (!/^.{8,}$/.test(repeatPassword)) {
    errors.repeatPassword = "Must be greater than 8 characters ";
  } else if (!/^.+[A-Z]|[!@#$&*]$/.test(repeatPassword)) {
    errors.repeatPassword =
      "Password should contain one uppercase letter or a special character";
  }

  if (password && password && repeatPassword !== repeatPassword) {
    errors.repeatPassword = "Passwords don't match";
  }

  return errors;
};
export default validate;

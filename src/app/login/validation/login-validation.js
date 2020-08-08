const validate = (values) => {
  console.log(values);
  const errors = {};
  if (!values.password) {
    errors.password = "Passoword is required";
  } else if (values.password.length < 8) {
    errors.password = "Must be greater than 8 characters ";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
export default validate;

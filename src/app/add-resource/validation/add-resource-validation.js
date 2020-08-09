const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.role) {
    errors.role =
      "Role is required, roles are number based 1 for 'admin' and 2 for 'user' ";
  } else if (!/^(?=.{1,}).$/.test(values.role)) {
    errors.role =
      "Invalid role, roles are number  based and single digits 1 for 'admin' and 2 for 'user' ";
  }

  return errors;
};
export default validate;

export default function validateForm(values, fields) {
  const err = {};

  if (values.username.length === 0) {
    err.username = "Length of username is too short";
  }

  for (let i = 0; i < fields.length; i++) {
    if (values[fields[i].name] <= fields[i].rules.min) {
      err[fields[i].name] = "Length of " + fields[i].name + " is too short";
    } else if (values[fields[i].name] >= fields[i].rules.max) {
      err[fields[i].name] = "Length of " + fields[i].name + " is too large";
    }
    var hasNumber = /\d/;
    if (!fields[i].rules.num && hasNumber.test(values[fields[i].name])) {
      err[fields[i].name] =
        "The " + fields[i].name + " field cannot have numbers";
    }
  }
  return err;
}

export function isEmpty(value) {
  return !value || value.trim() === "";
}

export function isValidUsername(username) {
  return username.length >= 3;
}

export function isValidPassword(password) {
  return password.length >= 4;
}
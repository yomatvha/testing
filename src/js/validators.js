export function isValidCard(value) {
  if (value.length === 0) {
    return false;
  }

  let sum = 0;
  let nDigits = value.length;
  let parity = nDigits % 2;
  let digit;
  for (let i = 0; i < nDigits; i += 1) {
    digit = Number(value[i]);

    if (i % 2 === parity) {
      digit = digit * 2;
      if (digit > 9) {
        digit = digit - 9;
      }
    }
    sum = sum + digit;
  }
  return sum % 10 === 0;
}

export function getCardType(value) {
  if (value[0] === "2") {
    return "mir";
  } else if (value[0] === "4") {
    return "visa";
  } else if (value[0] === "5") {
    return "mastercard";
  } else if (value.substr(0, 2) === "34" || value.substr(0, 2) === "37") {
    return "amex";
  } else if (value.substr(0, 2) === "60") {
    return "discover";
  } else if (value.substr(0, 2) === "31" || value.substr(0, 2) === "35") {
    return "jcb";
  } else if (
    value.substr(0, 2) === "30" ||
    value.substr(0, 2) === "36" ||
    value.substr(0, 2) === "38"
  ) {
    return "diners";
  } else {
    return "others";
  }
}

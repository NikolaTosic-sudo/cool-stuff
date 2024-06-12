export const formatPhone = (phone: string = "") => {
  if (!phone) {
    return "";
  }
  // Remove all non-digits
  phone = phone.replace(/\D/g, "");

  // No more than 11 digits
  phone = phone.slice(0, 11);

  if (phone[0] !== "1") {
    phone = "1" + phone;
  }

  // Add the dashes as user types
  if (phone.length > 1 && phone.substring(1, 2) !== "-") {
    phone = phone.slice(0, 1) + "-" + phone.slice(1);
  }
  if (phone.length > 5 && phone.substring(5, 6) !== "-") {
    phone = phone.slice(0, 5) + "-" + phone.slice(5);
  }
  if (phone.length > 9 && phone.substring(9, 10) !== "-") {
    phone = phone.slice(0, 9) + "-" + phone.slice(9);
  }

  return phone;
};

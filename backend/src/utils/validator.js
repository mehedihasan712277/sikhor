export const isValidString = (str) =>
  typeof str === "string" && str.trim() !== "";

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

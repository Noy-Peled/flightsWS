const DetermineReturnValue = (value) => {
  const result = typeof value === "string" ? value : value.length;
  return result;
};

module.exports = { DetermineReturnValue };

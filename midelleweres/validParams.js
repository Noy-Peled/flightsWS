const isValidParams = (req, res, next) => {
  
  const { country } = req.params;

  // if country (req.params) does not exist, will return missing param error
  if (!country) {
    return res.status(400).json({message: "Missing required parameter - country"});
  }

  // If the country (req.params) is not a string or there is a space, will return an invalid param error
  if (typeof country !== "string" || country.trim() === "") {
    return res.status(400).json({message: "Invalid country parameter"});
  }

  next();
};

module.exports = { isValidParams };

// If the base route is reached return an error and message to select router.

const isBaseRoute = (req, res, next) => {

  if (req.originalUrl === req.baseUrl) {
    return res.status(404).json({message: "You must select the router you want to reach"});
  }
  next();
};

module.exports = { isBaseRoute };

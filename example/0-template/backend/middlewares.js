const validURL = require("valid-url");

const validatePostURL = (req, res, nextCallback) => {
  const fullURL = req.body.fullURL;

  if (validURL.isWebUri(fullURL)) {
    return nextCallback();
  }

  return res.status(400).json({
    error: "Your input is invalid",
  });
};

module.exports = { validatePostURL };

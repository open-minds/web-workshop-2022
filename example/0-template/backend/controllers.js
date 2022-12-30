const shortid = require("shortid");

const urlsDB = {}; // Map {"key": "value"}

const saveNewLink = (req, res) => {
  const fullUrl = req.body.fullURL;

  // Validate if the ID exists
  if (urlsDB[fullUrl]) {
    return res.status(409).json({
      error: "This url is already submitted",
    });
  }

  // Save to database
  urlsDB[fullUrl] = shortid.generate();

  return res.json({
    fullUrl,
    shortUrl: `http://localhost:3000/${urlsDB[fullUrl]}`,
  });
};

const redirectToOriginalURL = (req, res) => {
  const shortID = req.params.shortID;

  // If the short url exists ::> Redirect, else: return 404
  const originalURL = Object.keys(urlsDB).find((k) => urlsDB[k] === shortID);

  if (originalURL) {
    return res.redirect(originalURL);
  }

  return res.status(404).send("Invalid URL");
};

module.exports = {
  saveNewLink,
  redirectToOriginalURL,
};

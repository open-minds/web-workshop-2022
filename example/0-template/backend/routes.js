const { Router } = require("express");
const { saveNewLink, redirectToOriginalURL } = require("./controllers");
const { validatePostURL } = require("./middlewares");

const routes = Router();

routes.post("/links/new", validatePostURL, saveNewLink);
routes.get("/:shortID", redirectToOriginalURL);
module.exports = routes;

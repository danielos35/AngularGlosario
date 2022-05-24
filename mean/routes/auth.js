const { Router } = require("express");
const authRouter = Router();

authRouter.get("/login", (req, res) => {
  req.send("rest");
  res.send("server");
});

module.exports = authRouter;

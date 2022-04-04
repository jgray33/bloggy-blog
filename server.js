const express = require("express");
const exphbs = require("express-handlebars")
const path = require("path")
const routes = require("./controllers/");
const hbs = exphbs.create({})
const session = require("express-session")

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

const sess = {
  secret: "secret secret",
  resave: false,
  saveUninitialized: true,
}

app.use(session(sess))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.use(routes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () =>
    console.log("Server listening on http://locahost" + PORT)
  );
});

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// const server = http.createServer(app);
// app.listen(3000,)

// next();//Allows the request to continue to the next middleeware

//app.use
//app.get
//app.post
//app.route
//app.delete
//app.patch
//app.push

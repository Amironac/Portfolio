let express = require("express");
let path = require("path");
let exphbs = require("express-handlebars");

let app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/router"))



let PORT = process.env.PORT || 3000

app.listen(PORT , console.log(`Server started on ${PORT}`));
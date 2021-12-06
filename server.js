const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = `mongodb+srv://andrewcbuensalida:${process.env.DB_PW}@cluster0.okm5c.mongodb.net/net-ninja?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8080;
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) =>
		app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
	)
	.catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
// this is so express knows to use public folder
app.use(express.static("public"));
// this is to allow to read req.body, which is from url query string myVariable=myValue etc. needed in the blog create post.
app.use(express.urlencoded({ extended: true }));
// this is to console log requests
app.use(morgan("dev"));
app.use((req, res, next) => {
	// req.path is the /about  in blogs.anhonestobserver.com/about. res.locals persist for the request, while app.locals persist for the application lifetime. res.locals contain local variables. not sure about this middleware
	res.locals.path = req.path;
	next();
});

// routes
app.get("/", (req, res) => {
	res.redirect("/blogs");
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 page. could either be app.get('*') OR app.all('*') OR
app.use((req, res) => {
	res.status(404).render("404", { title: "404" });
});

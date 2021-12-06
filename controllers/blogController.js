// converts \n to <br>
const nl2br = require("nl2br");
const Blog = require("../models/blog");

// main homepage, gets all blogs from mongodb then sends it toe ejs
const blog_index = (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render("index", { blogs: result, title: "All blogs" });
		})
		.catch((err) => {
			console.log(err);
		});
};

const blog_details = (req, res) => {
	// params from the url route parameters, like /user/:name   can get name with req.params.name
	const id = req.params.id;
	Blog.findById(id)
		.then((result) => {
			result.body = nl2br(result.body);
			res.render("details", { blog: result, title: "Blog Details" });
		})
		.catch((err) => {
			console.log(err);
			res.render("404", { title: "Blog not found" });
		});
};

const blog_create_get = (req, res) => {
	res.render("create", { limit: "", title: "Create a new blog" });
};

const blog_create_post = (req, res) => {
	if (req.isLimitReached) {
		return res.render("create", {
			title: "Create a new blog",
			limit: "Limit reached. Only 1 new blog per 20 seconds.",
		});
	}
	// create new Blog object then save it to mongodb
	const blog = new Blog(req.body);
	blog.save()
		.then((result) => {
			res.redirect("/blogs");
		})
		.catch((err) => {
			console.log(err);
		});
};

const blog_delete = (req, res) => {
	const id = req.params.id;
	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: "/blogs" });
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	blog_index,
	blog_details,
	blog_create_get,
	blog_create_post,
	blog_delete,
};

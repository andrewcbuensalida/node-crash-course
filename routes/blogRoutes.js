const express = require("express");
const rateLimit = require("express-rate-limit");
const blogController = require("../controllers/blogController");

const router = express.Router();

// limiter is middleware that fires handler if max is exceeded within windowMs
const limiter = rateLimit({
	windowMs: 20 * 1000,
	max: 1, // limit each IP to 1 requests per windowMs
	handler: function (req, res, next) {
		req.isLimitReached = true;
		next();
	},
});

router.get("/create", blogController.blog_create_get);
router.get("/", blogController.blog_index);
router.post("/", limiter, blogController.blog_create_post);
router.get("/:id", blogController.blog_details);
router.delete("/:id", blogController.blog_delete);

module.exports = router;

const { Router } = require("express");
const {
    getNews,
    postNews,
    getNewsByQuerry,
    getNewsByID
} = require("../controllers/news.controller");
const router = Router();

router.route("/news/get").get(getNews)
router.route("/news/new").post(postNews)
// router.route("/news/get?Location").get(getNewsByQuerry)
router.route("/news/get/:id").get(getNewsByID)



module.exports = router;

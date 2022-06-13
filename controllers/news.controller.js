const newsModel = require('../models/News.model');

exports.getNews = async (req, res, next) => {
    const allNews = await newsModel.find();
    res.status(200).json({ success: true, data: allNews});
};
exports.postNews = async (req, res, next) => {
     const news = await newsModel.create(req.body);
    res.status(200).json({ success: true, data: news});
};
  
exports.getNewsByQuerry = async (req, res, next) => {
    const query = req.query;
    res.status(200).json({ success: true, data: query});
};
exports.getNewsByID = async (req, res, next) => {
    console.log(req.params.id)
    const news = newsModel.findById(req.params.id)
    res.status(200).json({ success: true, data:news});
};
  


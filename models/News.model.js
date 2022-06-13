const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    Title: String,
    Description: String,
    Date: Date,
    Author: {
        type: String,
        enum: ["Mathias Newburn", "Rey Rutty", "Magdaia Shellard", "Kathrine Faichney"]
    },
    Location: {
        type: String,
        enum: ["London", "New York"]
    },
    tags: {
        type: String,
        enum: [ "politics", "crime", "tech", "sports", "health"]
    },
    total_views: Number,
    category: {
        type: String
    }
})

const newsModel = mongoose.model("news", newsSchema);

module.exports = newsModel;
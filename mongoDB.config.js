var mongoose = require('mongoose')
var mongoDB = 'mongodb+srv://m220student:m220student@mflix.pnhbt.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
module.exports = mongoose
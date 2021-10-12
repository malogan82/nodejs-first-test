var mongoose = require('mongoose')
var mongoDB = ''
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
module.exports = mongoose

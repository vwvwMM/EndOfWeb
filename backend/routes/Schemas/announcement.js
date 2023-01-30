const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const Announcement = new Schema({
  date: String,
  title: String,
  body: String
})

Announcement.methods.getPublic = function () {
  const { date, title, body, _id } = this
  return { date, title, body, _id }
}
Announcement.statics.smartQuery = function (keywords) {
  const reg = new RegExp(keywords.replace(' ', '|'), 'i')
  const query = {
    $or: [{ title: reg }, { body: reg }, { date: reg }],
  }
  return query
}

module.exports = mongoose.model('Announcement', Announcement)

const Announcement = require('../../../Schemas/recruitment')
const { searchQuery, findWithLimit } = require('../../../Schemas/query')
const asyncHandler = require('express-async-handler')

const searchAnnouncement = async function (req, res, next) {
  const {
    title,
    body,
    date,
  } = req.body
  const keys = {
    title,
    body,
    date,
  }
  const query = searchQuery(keys)
  const { page, perpage } = req.body
  const [anns, maxPage] = await findWithLimit(Announcement, query, page, perpage || 20)
  return res.status(201).send(anns.map((an) => an.getPublic()).reverse())
}

/**
 * @api {post} /searchAnnouncement search announcement by field
 * @apiName SearchAnnouncement
 * @apiGroup In/announcement
 * @apiDescription 指定欄位搜尋公告
 * 
 * @apiparam {String} _id _id (optional)
 * @apiparam {String} title 公告標題 (optional)
 * @apiparam {String} date 公告日期 (optional)
 * @apiparam {Number} page default 1
 * @apiparam {Number} perpage default 20
 * 
 * @apiError (500) {String} description 資料庫錯誤
 */

const valid = require('../../../middleware/validation')
const rules = [
  {
    filename: 'optional',
    field: [
      'title',
      'body',
      'date',
    ],
    type: 'string',
  },
]
module.exports = [valid(rules), asyncHandler(searchAnnouncement)]

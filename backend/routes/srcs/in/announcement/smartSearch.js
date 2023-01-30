const Announcement = require('../../../Schemas/announcement')
const asyncHandler = require('express-async-handler')
const { findWithLimit } = require('../../../Schemas/query')

/**
 * @api {post} /smartsearchAnnouncement search announcement by keywords
 * @apiName ShowAnnouncement
 * @apiGroup In/announcement
 * @apiDescription 用空格區分關鍵字進行搜尋
 *
 * @apiParam {String} keyword 用空格區分
 *
 * @apiSuccess (201) {String} -._id mongodb _id(for delete)
 * @apiSuccess (201) {Object} -.title 標題
 * @apiSuccess (201) {Object} -.date 日期
 * @apiSuccess (201) {Object} -.body 內容
 *
 * @apiError (500) {String} description 資料庫錯誤
 */
const smartSrh = async (req, res, next) => {
  const { keyword, page, perpage } = req.body
  const query = Announcement.smartQuery(keyword)
  const [anns, maxPage] = await findWithLimit(Announcement, query, page, perpage)
  res.status(201).send({ data: anns.map((ann) => ann.getPublic()).reverse() })
}

const valid = require('../../../middleware/validation')
const rules = [{ filename: 'optional', field: ['keyword'] }]
module.exports = [valid(rules), asyncHandler(smartSrh)]

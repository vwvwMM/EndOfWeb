const { dbCatch, ErrorHandler } = require('../../../error')
const Announcement = require('../../../Schemas/announcement')
const { updateQuery, parseImg } = require('../../../Schemas/query')
const asyncHandler = require('express-async-handler')

const updateAnnouncement = async (req, res, next) => {
  const { title, date, body, _id } =
    req.body
  const toUpdate = await Announcement.findById(_id, '_id').catch(dbCatch)
  if (!toUpdate) throw new ErrorHandler(404, '_id not exists')
  if (!req.session.loginAccount || req.session.loginAccount !== toUpdate.account)
    throw new ErrorHandler(403, 'unauthorized')

  const keys = {
    title,
    date,
    body
  }
  const toSet = updateQuery(keys)

  await Announcement.findByIdAndUpdate(req.body._id, toSet).catch(dbCatch)
  res.status(203).end()
}

/**
 * @api {patch} /announcement update announcement
 * @apiName UpdateAnnouncement
 * @apiGroup In/career
 * @apiDescription 更新一筆職缺
 * 
 * @apiHeaderExample {json} header-config
				 { "content-type": "multipart/form-data" }
 * 
 * @apiparam {String} _id 要更新職缺的mongodb _id
 * @apiparam {String} title 職缺標題(optional)
 * @apiparam {String} company_name 公司名稱(optional)
 * @apiparam {String} work_type 職位(ex.前端工程師)(optional)
 * @apiparam {String} salary 薪資(optional)
 * @apiparam {String[]} experience 經驗要求(optional)
 * @apiparam {String} diploma 學系要求(optional)
 * @apiparam {String[]} requirement 技能要求(optional)
 * @apiparam {String[]} description 其他描述(optional)
 * @apiparam {File} file 照片(optional)
 * 
 * @apiSuccess (203) - -
 * 
 * @apiError (404) {String} description _id not exists
 * @apiError (500) {String} description 資料庫錯誤
 * @apiError (403) {String} description unauthorized(僅建立者可以更新)
 */

const valid = require('../../../middleware/validation')
const rules = [
  {
    filename: 'optional',
    field: ['title', 'body', 'date'],
    type: 'string',
  },
  { filename: 'required', field: '_id' },
]
module.exports = [valid(rules), asyncHandler(updateAnnouncement)]

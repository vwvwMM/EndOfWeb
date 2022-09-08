const asyncHandler = require('express-async-handler')
const { dbCatch, ErrorHandler } = require('../../../error')
const Announcement = require('../../../Schemas/announcement')

/**
 * @api {get} /column/detail get column detail
 * @apiName GetAnnouncement
 * @apiGroup In/column
 * @apiDescription 拿詳細文章內容
 * 
 * @apiparam {String} id yymm(required)
 * 
 * @apiSuccessExample {json} Success-Response:
 * 	{
 * 		'top':{
 *          'name':'String',
 *          'experience':'String',
 *          'hashtags':['String']
 *      },
 *      'body': {
            'body': [
            {
                'bigtitle': 'String',
                'bigsections': [
                {
                    'subtitle': 'String',
                    'subsection': 'String',
                },],
            },],
        },
        'annotation': {
            'annotation': [
            {
                'job': 'String',
                'contributer': 'String',
            },],
        },
        'id': 'String',
 * 	}
 * 
 * @apiError (404) {String} description id is required/資料不存在
 * @apiError (500) {String} description 資料庫錯誤
 */
const getAnnouncement = async (req, res, next) => {
  const { title,date } = req.query
  const announcement = await Announcement.findOne({ title,date }).catch(dbCatch)
  if (!announcement) throw new ErrorHandler(404, '資料不存在')
  return res.status(201).send(announcement)
}

const valid = require('../../../middleware/validation/main')
const rules = [{ filename: 'required', field: ['title','date'], method: 'get' }]
module.exports = [valid(rules), asyncHandler(getAnnouncement)]

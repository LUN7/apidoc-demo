
/**
 * @apiDefine admin admin
 * Only admin has permission to delete comment
 */

/**
 * @api {get} /comment/:commentId get comment
 * @apiName getcomment
 * @apiGroup comment
 * 
 * @apiParam {String} commentId comment unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.get = (req,res,next) => {
    ...   
}

/**
 * @api {delete} /comment/:commentId delete comment
 * @apiName deletecomment
 * @apiGroup comment
 * @apiPermission admin
 * @apiParam {String} commentId comment unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.delete = (req,res,next) => {
    ...   
}

/**
 * @api {post} /comment/:commentId Edit comment
 * @apiName editcomment
 * @apiGroup comment
 * 
 * @apiParam {String} commentId comment unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.edit = (req,res,next) => {
    ...   
}

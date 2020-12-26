
/**
 * @apiDefine admin admin
 * Only admin has permission to delete post
 */

/**
 * @api {get} /post/:postId get post
 * @apiName getpost
 * @apiGroup post
 * 
 * @apiParam {String} postId post unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.get = (req,res,next) => {
    ...   
}

/**
 * @api {delete} /post/:postId delete post
 * @apiName deletepost
 * @apiGroup post
 * @apiPermission admin
 * @apiParam {String} postId post unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.delete = (req,res,next) => {
    ...   
}

/**
 * @api {post} /post/:postId Edit post
 * @apiName editpost
 * @apiGroup post
 * 
 * @apiParam {String} postId post unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.edit = (req,res,next) => {
    ...   
}

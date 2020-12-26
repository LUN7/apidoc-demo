
/**
 * @apiDefine admin admin
 * Only admin has permission to delete user
 */

/**
 * @api {get} /user/:userId get user
 * @apiName getUser
 * @apiGroup user
 * 
 * @apiParam {String} userId User unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.get = (req,res,next) => {
    ...   
}

/**
 * @api {delete} /user/:userId delete user
 * @apiName deleteUser
 * @apiGroup user
 * @apiPermission admin
 * @apiParam {String} userId User unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.delete = (req,res,next) => {
    ...   
}

/**
 * @api {post} /user/:userId Edit user
 * @apiName editUser
 * @apiGroup user
 * 
 * @apiParam {String} userId User unique ID 
 * 
 * @apiSuccess {String} data "success"
 * 
 */
module.exports.edit = (req,res,next) => {
    ...   
}

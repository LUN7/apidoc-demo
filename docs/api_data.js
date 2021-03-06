define({ "api": [
  {
    "type": "delete",
    "url": "/comment/:commentId",
    "title": "delete comment",
    "name": "deletecomment",
    "group": "comment",
    "permission": [
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Only admin has permission to delete user</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>comment unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/comment/:commentId",
    "title": "Edit comment",
    "name": "editcomment",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>comment unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "get",
    "url": "/comment/:commentId",
    "title": "get comment",
    "name": "getcomment",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>comment unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/comment.js",
    "groupTitle": "comment"
  },
  {
    "type": "delete",
    "url": "/post/:postId",
    "title": "delete post",
    "name": "deletepost",
    "group": "post",
    "permission": [
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Only admin has permission to delete user</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>post unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "post",
    "url": "/post/:postId",
    "title": "Edit post",
    "name": "editpost",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>post unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/post/:postId",
    "title": "get post",
    "name": "getpost",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postId",
            "description": "<p>post unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/post.js",
    "groupTitle": "post"
  },
  {
    "type": "delete",
    "url": "/user/:userId",
    "title": "delete user",
    "name": "deleteUser",
    "group": "user",
    "permission": [
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Only admin has permission to delete user</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/:userId",
    "title": "Edit user",
    "name": "editUser",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:userId",
    "title": "get user",
    "name": "getUser",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;success&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "user"
  }
] });

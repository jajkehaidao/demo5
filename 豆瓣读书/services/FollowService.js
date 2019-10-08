//引入模块
let FollowModel = require("../model/FollowModel");
class FollowService {
    constructor() { }
    getFollowsWithCourse(callback) {
        //创建对象
        let followModel = new FollowModel();
        followModel.getAllFollow(function (follows) {
            callback(follows);
        });
    }
}

module.exports = FollowService;
const sqlbase = require('../model/SqlBase')
class service extends sqlbase {
    constructor(req, res) {
        super()
        this.req = req;
        this.res = res
    }
    getdata() {
        let sql = 'insert into usenames (usename,password) values(?,?)'
        var that = this
        this.connection.query(sql, [that.req.body.usename, that.req.body.password], (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            that.res.send(result)
        })
    }
    getAllUsename() {
        //3,编写sql语句
        let sql = "select * from usenames";
        let that = this;
        console.log(this.req.query)
        //4,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            that.res.send(result);

        });
    }
}
module.exports = service
const service = require('../services/service')
module.exports = {
    getdata(req, res) {
        console.log(req.body)
        let service1 = new service(req, res);
        service1.getdata()
    },
    getAllUsename(req, res) {
        // console.log(req.body)
        let service1 = new service(req, res);

        service1.getAllUsename()
    }
}
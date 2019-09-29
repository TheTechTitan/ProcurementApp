process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Order = require('../src/models/orderModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');

chai.use(chaiHttp);
chai.should();

//Testing Order
describe("Order", () => {
    describe("GET /", () => {
        // Test to get all company record
        it("should get all orders record", (done) => {
            chai.request(app)
                .get('/rest/api/order/get-orders')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single order item
        it("should get a single company record", (done) => {
            const oid = '5d8fac3eb5d24008dd0e37fb';
            const Orderid= 'ON02'
            const qty='8'
            chai.request(app)
                .post(`/rest/api/order/add-order-item/${Orderid}/${oid}/${qty}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to not get any record
        it("should not get a single order record", (done) => {
            const id = 'invalid id';
            chai.request(app)
                .get(`/rest/order?id=${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});



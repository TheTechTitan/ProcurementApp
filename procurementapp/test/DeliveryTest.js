process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Company = require('../src/models/Delivery');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');

chai.use(chaiHttp);
chai.should();

//Testing Company
describe("Delivery", () => {
    describe("GET /", () => {
        // Test to get all company record
        it("should get all deliveries record", (done) => {
            chai.request(app)
                .get('/rest/api/delivery')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single delivery record
        it("should get a single company record", (done) => {
            const id = '5d8fac3eb5d24008dd0e37fb';
            chai.request(app)
                .get(`/rest/api/delivery?id=${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to not get any record
        it("should not get a single delivery record and display an error message", (done) => {
            const id = 'invalid id';
            chai.request(app)
                .post(`/rest/api/deliver`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});


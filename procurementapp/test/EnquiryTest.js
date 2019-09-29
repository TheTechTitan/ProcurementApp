process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Company = require('../src/models/enquiryModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');

chai.use(chaiHttp);
chai.should();

//Testing Enquiry
describe("Enquiry", () => {
    describe("GET /", () => {
        // Test to get all enquiry record
        it("should get all enquiries record", (done) => {
            chai.request(app)
                .get('/rest/api/enquiry')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single enquiry record
        it("should get a single enquiry record", (done) => {
            const id = '5d8fac3eb5d24008dd0e37fb';
            chai.request(app)
                .get(`/rest/api/enquiry?id=${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to not get any record
        it("should not get a single enquiry record", (done) => {
            const id = 'invalid id';
            chai.request(app)
                .get(`/rest/api/enq?id=${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

         // Test to not get any record
         it("should not get a single enquiry record", (done) => {
            const id = 'invalid id';
            chai.request(app)
                .post(`/rest/api/enqu`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});


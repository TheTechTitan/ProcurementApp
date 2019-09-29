process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Company = require('../src/models/companyModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/app');

chai.use(chaiHttp);
chai.should();

//Testing Company
describe("Company", () => {
    describe("GET /", () => {
        // Test to get all company record
        it("should get all companies record", (done) => {
            chai.request(app)
                .get('/rest/api/company')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single student record
        it("should get a single company record", (done) => {
            const id = '5d8fac3eb5d24008dd0e37fb';
            chai.request(app)
                .get(`/rest/api/company?id=${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to not get any record
        it("should not get a single company record", (done) => {
            const id = 'invalid id';
            chai.request(app)
                .get(`/rest/api/comp?id=${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});

//Testing Supplier
describe("Company", () => {
    describe("GET /", () => {
        // Test to get all supplier records
        it("should get all suppliers record", (done) => {
            chai.request(app)
                .get('/rest/api/supplier')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // Test to get single supplier record
        it("should get a single supplier record", (done) => {
            const id = '5d8fb72bbfb51f09aadc0d29';
            chai.request(app)
                .get(`/rest/api/supplier?id=${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

    });
});
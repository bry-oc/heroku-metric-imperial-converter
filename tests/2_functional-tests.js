const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    test('Convert a valid input: 10L in a GET request to /api/convert', function(done) {
        chai
            .request(server)
            .get('/api/convert?input=10L')
            .end(function (err, res) {
                assert.equal(res.body.initNum, 10, 'The expected result is 10.');
                assert.equal(res.body.initUnit, 'L', 'The expected result is L.');
                assert.equal(res.body.returnNum, 2.64172, 'The expected result is 2.46172.');
                assert.equal(res.body.returnUnit, 'gal', 'The expected result is gal.');
                assert.equal(res.body.string, '10 liters converts to 2.64172 gallons', 'The expected result is a string.');
                done();
            });
    });    
    test('Convert an invalid input: 32g in a GET request to /api/convert', function(done) {
        chai
            .request(server)
            .get('/api/convert?input=32g')
            .end(function (err, res) {
                assert.equal(res.body, 'invalid unit', 'The expected result is invalid unit.');
                done();
            });
    });
    test('Convert an invalid number: 3/7.2/4kg in a GET request to /api/convert', function(done) {
        chai
            .request(server)
            .get('/api/convert?input=3/7.2/4kg')
            .end(function (err, res) {
                assert.equal(res.body, 'invalid number', 'The expected result is invalid number.');
                done();
            });
    });
    test('Convert an invalid number AND unit: 3/7.2/4kilomegagram in a GET request to /api/convert', function(done) {
        chai
            .request(server)
            .get('/api/convert?input=3/7.2/4kilomegagram')
            .end(function (err, res) {
                assert.equal(res.body, 'invalid number and unit', 'The expected result is invalid number and unit.');
                done();
            })
    })
    test('Convert with no number such as kg in a GET request to /api/convert', function(done) {
        chai
            .request(server)
            .get('/api/convert?input=kg')
            .end(function (err, res) {
                assert.equal(res.body.initNum, 1, 'The expected result for no number given is 1.');
                assert.equal(res.body.initUnit, 'kg', 'The expected result is kg.');
                assert.equal(res.body.returnNum, 2.20462, 'The expected result is 2.20462.');
                assert.equal(res.body.returnUnit, 'lbs', 'The expected result is lbs.');
                assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds', 'The expected result is a string.');
                done();
            })
    })
});

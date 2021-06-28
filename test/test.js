/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';
const should = chai.should();
let token;

chai.use(chaiHttp);
//Our parent block
describe('Test', () => {
    describe('/Post Login', () => {
        it('should login', (done) => {
            chai.request(server)
                .post('/api/signin')
                .send({ username: 'test12', password: 'password12' })
                .end((err, res) => {
                    console.log(res.body.token);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        })
    })

    describe('/GET api/test/all', () => {
        it('it should GET `Public Content.` ', (done) => {
            chai.request(server)
                .get('/api/test/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});
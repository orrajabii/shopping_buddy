/* eslint-disable no-undef */
import assert from 'assert'
import axios from 'axios'

// describe('Array', function () {
//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });
beforeEach(async function () {
    console.log(await axios.get('https://localhost:3000/'));
})

describe('Root Test', function () {
    describe('#root()', async function () {
        it('Should Return Running', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
})
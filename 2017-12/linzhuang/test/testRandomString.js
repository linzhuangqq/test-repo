
import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString.js'

test('randomString', t => {
  expect(/^[a-zA-Z0-9]\w{0,5}$/.test(randomString()())).to.eql(true)
  expect(/^[a-zA-Z0-9]\w{0,9}$/.test(randomString()(10))).to.eql(true)
  expect(/^[a-zA-Z0-9]\w{0,9}$/.test(randomString()(10, '$'))).to.eql(false)
  expect('`!@#$%^&*()-+=_[]{},./<>?;:"|\\\''.indexOf(randomString()(1, '$')) >= 0 || randomString()(1, '$').length === 0).to.eql(true)
  expect(/^[a-z]\w{0,5}$/.test(randomString()(6, 'l'))).to.eql(true)
  expect((/^[A-Z]\w{0,5}$/.test(randomString()(6, 'u')))).to.eql(true)
  expect(/^[0-9]\w{0,5}$/.test(randomString()(6, 'd'))).to.eql(true)
  expect(/^[a-z0-9]\w{0,5}$/.test(randomString()(6, 'ld'))).to.eql(true)
  expect(randomString()(6, '$dul').length >= 5).to.eql(true)
  expect(randomString()(2, 'd', '11111111111111111').indexOf('1') >= 0).to.eql(true)
  t.pass()
})

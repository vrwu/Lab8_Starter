// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checks (123)456-7890 phonne number to equal true', () => {
    expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
});

test('checks 098-765-4321 phone number to equal true', () => {
    expect(functions.isPhoneNumber("098-765-4321")).toBe(true);
});

test('checks "" phone number to equal false', () => {
    expect(functions.isPhoneNumber("")).toBe(false);
});

test('checks 01-23-456 phone number to equal false', () => {
    expect(functions.isPhoneNumber("01-23-456")).toBe(false);
});

test('checks helloworld@hello.com email to equal true', () => {
    expect(functions.isEmail("helloworld@hello.com")).toBe(true);
});

test('checks facebook@fb.com email to equal true', () => {
    expect(functions.isEmail("facebook@fb.com")).toBe(true);
});

test('checks 123-456-7890 email to equal false', () => {
    expect(functions.isEmail("123-456-7890")).toBe(false);
});

test('checks hello@hello.world.com email to equal false', () => {
    expect(functions.isEmail("hello@hello.world.com")).toBe(false);
});

test('checks x123_fds password to equal true', () => {
    expect(functions.isStrongPassword("x123_fds")).toBe(true);
});

test('checks sdf_321x password to equal true', () => {
    expect(functions.isStrongPassword("sdf_321x")).toBe(true);
});

test('checks abc password to equal false', () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});

test('checks abcdefghijklmnopqrstuvwxyz password to equal false', () => {
    expect(functions.isStrongPassword("abcdefghijklmnopqrstuvwxyz")).toBe(false);
});

test('checks 01/01/2022 date to equal true', () => {
    expect(functions.isDate("01/01/2022")).toBe(true);
});

test('checks 11/11/2021 date to equal true', () => {
    expect(functions.isDate("11/11/2021")).toBe(true);
});

test('checks hello date to equal false', () => {
    expect(functions.isDate("hello")).toBe(false);
});

test('checks 11/111/2021 date to equal false', () => {
    expect(functions.isDate("11/111/2021")).toBe(false);
});

test('checks #FFFFFF hex to equal true', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});

test('checks #000 hex to equal true', () => {
    expect(functions.isHexColor("#000")).toBe(true);
});

test('checks #FFFFF hex to equal false', () => {
    expect(functions.isHexColor("#FFFFF")).toBe(false);
});

test('checks #0 hex to equal false', () => {
    expect(functions.isHexColor("#0")).toBe(false);
});
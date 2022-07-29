import core from '@actions/core';

const inputName = core.getInput('name');
console.log(`Hello ${inputName}!`);

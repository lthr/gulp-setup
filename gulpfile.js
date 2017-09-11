'use strict';

// import gulp from 'gulp';
const requireDir = require('require-dir');

// read all subtasks
requireDir('./gulp/tasks', { recurse: true });
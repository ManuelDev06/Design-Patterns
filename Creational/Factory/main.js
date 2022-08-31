var Task = require('./task');
var taskRepo = require('./taskRepository');
var userRepo = require('./userRepository');
var projectRepository = require('./projectRepository');

var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var project = projectRepository.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();

/*
task1: {
    name,
    completed,
    user,
    project
}
*/
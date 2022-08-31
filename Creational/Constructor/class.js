'use strict'

class Task { 
    constructor(name){
        this.name = name;
        this.completed = false;
    }

    complete() {
        console.log('completing task: ' + this.name)
        this.completed = true
    }

    save = function () {
        console.log('Saving Task: ' + this.name)
    }

}

var task1 = new Task('create a demo for constructor')
var task2 = new Task('create a demo for modules')
var task3 = new Task('create a demo for singletons')
var task4 = new Task('create a demo for prototypes')


task1.complete();
task2.save();
task3.save();
task4.save();


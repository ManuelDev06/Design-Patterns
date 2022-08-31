var Repo = require('./taskRepository')

var Task = function(data){
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name)
    this.completed = true
}

Task.prototype.save = function () {
    console.log('Saving Task: ' + this.name)
    console.log(this);
    Repo.save(this)
}


module.exports = Task;
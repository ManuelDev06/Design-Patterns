var task = {
    title: 'My title',
    description: 'My description'
}

//var task = Object.create(Object.prototype)

//var task = new Object();

// task.title = 'My task';
// task.description = 'My Description';

task.toString = function(){
    return this.title + ' ' + this.description;
}

console.log(task.toString())
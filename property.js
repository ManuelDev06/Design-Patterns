var task = {
    title: 'My title',
    description: 'My description'
}

Object.defineProperty(task, 'toString',{
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable: false, // Can change type
    enumrable: false, //Show the information
    configurable: false
})

const urgentTask = Object.create(task);


Object.defineProperty(urgentTask, 'toString',{
    value: function(){
        return this.title + ' is urgent';
    },
    writable: false, // Can change type
    enumrable: false, //Show the information
    configurable: false
})


console.log(urgentTask.toString())
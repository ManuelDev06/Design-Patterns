var repoFactory = function(){
    this.getRepo = function(repoType) {
        if(repoType === 'task'){
            console.log('Retrieving from cache');
            if(this.taskRepo){
                return this.taskRepo;
            }else {
                this.taskRepo = require('./taskRepository')();
                // config --
                return this.taskRepo;
            }
        }
        if(repoType === 'user'){
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if(repoType === 'project'){
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
};

module.exports = new repoFactory;
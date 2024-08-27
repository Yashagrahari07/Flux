import path from 'path';

class Flux {
    
    constructor(repoPath = '.') {
        this.repoPath = path.join(repoPath, '.flux');
    }

}
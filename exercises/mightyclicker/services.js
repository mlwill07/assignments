angular.module('clickApp')

.service('blueService', [function () {
    
    this.blueCount = 100;
    
    this.incremenet = function() {
        this.blueCount++;
        return this.blueCount;
    }
    this.decrement = function() {
       this.blueCount--;
       return this.blueCount; 
    }
    this.reset = function() {
        this.blueCount = 100;
        return this.blueCount;
    }

}])

.service('redService', [function(){
    
    this.redCount = 100;
    
    this.incremenet = function() {
        this.redCount++;
        return this.redCount;
    }
    this.decrement = function() {
        this.redCount--;
        return this.redCount;
    }
    this.reset = function() {
        this.redCount = 100;
        return this.redCount;
    }
    
}])
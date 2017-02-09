angular.module('myApp')

.service('cartoonService', [function(){
    
    this.cartoons = [];
    
    this.addCartoon = function(cartoon) {
        this.cartoons.push(cartoon);
        console.log(this.cartoons);
        return this.cartoons;
    }
    
}])
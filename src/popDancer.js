var Popdancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Popdancer.prototype = Object.create(makeDancer.prototype);
Popdancer.prototype.constructor = Popdancer;

Popdancer.prototype.dance = function() {
  makeDancer.prototype.step.call(this);
  // moves up
  // moves down
  this.$node.toggle();
};

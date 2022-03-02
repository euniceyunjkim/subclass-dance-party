var makeFightingDancer = function (top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node[0].classList.replace('dancer', 'fighting');
  this.left = left;
};


makeFightingDancer.prototype = Object.create(makeDancer.prototype);
makeFightingDancer.prototype.constructor = makeFightingDancer;

makeFightingDancer.prototype.step = function() {
  // makeDancer.prototype.step.call(this);
  // moves up
  // moves down
  this.oldStep();
  this.dance();
  this.$node.slideDown();
  //
};

makeFightingDancer.prototype.lineUp = function (top, left) {
  this.setPosition(top, this.left);
};

makeFightingDancer.prototype.dance = function() {
  this.$node[0].animate([
    { transform: 'rotate(0)'},
    { transform: 'rotate(-10deg)'},
    { transform: 'rotate(1turn)'},
    {transform: 'rotate(0)'}
  ], {
    duration: 1000,
    iterations: Infinity
  });
};

// chun-lee
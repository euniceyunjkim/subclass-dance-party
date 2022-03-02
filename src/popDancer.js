var Popdancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node[0].classList.replace('dancer', 'pop');

  this.top = top;
  this.dance();
  this.hover();
};

Popdancer.prototype = Object.create(makeDancer.prototype);
Popdancer.prototype.constructor = Popdancer;

Popdancer.prototype.step = function() {
  // makeDancer.prototype.step.call(this);
  // moves up
  // moves down
  this.oldStep();
  this.$node.fadeIn();
};

Popdancer.prototype.lineUp = function (top, left) {
  this.setPosition(this.top, left);
};

Popdancer.prototype.dance = function() {
  this.$node[0].animate([
    { transform: 'translateX(20px)'},
    { transform: 'translateX(-20px)'}
  ], {
    duration: 700,
    iterations: Infinity
  });
};

Popdancer.prototype.hover = function () {
  this.$node.hover(function () {
    this.$node.classList.replace('pop', 'hover');
  }, function () {
    this.$node.classList.replace('hover', 'pop');
  });
};

/**
 * QUESTIONS I HAD
 * 1. Why is top a property and not left in the class function?
 */
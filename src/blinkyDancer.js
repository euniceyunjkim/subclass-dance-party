var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node[0].classList.replace('dancer', 'blinky');
  this.top = top;
  this.dance();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function (top, left) {
  this.setPosition(this.top, 50);
};

makeBlinkyDancer.prototype.dance = function() {
  this.$node[0].animate([
    { transform: 'scale(1)'},
    { transform: 'scale(3)'},
    { transform: 'scale(1)'}
  ], {
    duration: 1000,
    iterations: Infinity
  });

  // Squidward is going to grow in size and shrink quickly!
};

//squidward - flippin squid
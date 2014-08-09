"use strict";

module.exports = Cow;

function Cow(name) {
  this.name = name || "Anon cow";
}

Cow.prototype.greets = function(target) {
  if (!target){
    return console.error("missing target");
  }
  console.log(this.name + " greets " + target);
};

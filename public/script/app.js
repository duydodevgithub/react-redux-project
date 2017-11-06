"use strict";

var fullName = "Duy Do";

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};

console.log(getFirstName(fullName));

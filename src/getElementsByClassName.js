// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, element) {
  // your code here
  // I - desired class name, a string; a potential second parameter
  // O - an object with the class elements (parents and children)
  // C - none
  // E - empty html element

  // create resulting variable
  var result = [];

  // [base case] one element (parent/child)
  element = element || document.body;

  if (element.classList.contains(className)) {
    // if the element includes the className
    result.push(element);
  }
  // [recursion case] if there's nested children, check each one
  if (element.children) {
    // check each child for className
    element.children.forEach(function (item) {
      var targetChild = getElementsByClassName(className, item);
      result = result.concat(targetChild);
    });
    return result;
  }
};
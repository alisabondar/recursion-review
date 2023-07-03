// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // I - any value/collection
  // O - quotations around everything except booleans, nums, null
  // E - empty/undefined values

  // create empty result
  var result = {};
  // loop through each value use forEach
  // decide to add quotes or not
  // add to resulting object
  // return result
};



/*
{a: 'apple'}
'{'a': 'apple'}',
*/

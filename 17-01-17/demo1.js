/**
 * Author : anning
 * Date : 17/1/17
 * Mail : amnhhlod@gmail.com
 */

/**
 * test of this
 */
/**************************************** demo1 *******************************************/

[1, 2, 3].map(function () {
  console.log(this === global);
});

/**************************************** demo2 *******************************************/
setTimeout(function () {
  console.log(this);
}, 1000);

/**************************************** demo3 *******************************************/
function common (arr) {
  var self = this;
  return arr.map(function (val, idx) {
    if (idx === 1) {
      console.log(self);
    }
  });
};

var a = {isA : true};
common.call(a, [1, 2, 3, 4, 5]);
common([1, 2, 3, 4, 5]);
/**************************************** demo3 *******************************************/
// function father () {};
// father.a = 1;
// father.prototype.a = 2;
// father.prototype.again = function () {
//   console.log(this.personal);
//   console.log(this);
// }
// var fat = new father();
// fat.personal = 5;
// fat.again();
//
// var person = {personal : 10};
// fat.again.call(person);
//
// console.log(Object.prototype.toString.call(this));

/**************************************** demo4 *******************************************/

// function fnFather (func) {
//   func();
// }
//
// function fnSon () {
//   console.log(this === global);
// }
//
// fnFather(fnSon);
//
// console.log(global);
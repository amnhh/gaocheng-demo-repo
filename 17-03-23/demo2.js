/**
 * Created by anning on 2017/3/23.
 */
// 借用构造函数
// 就是在新的构造函数内部 call 一发

function Super () {
  this.color = ['red', 'green'];
}

function Sub () {
  Super.call(this);
}

var sub = new Sub();
var _super = new Super();

console.log(sub);
console.log(_super);

sub.color.push('black');

console.log(sub); // 只有 sub 的实例上多了一些
console.log(_super);

var _sub = new Sub();
console.log(_sub); // 因为这时候的又重新的去搞了一发 this.color = [xxxxxx], 所以没有受到上面的影响
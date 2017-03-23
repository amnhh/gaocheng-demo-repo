/**
 * Created by anning on 2017/3/23.
 */

// oo 语言一般都支持两种继承方式 -> 接口继承和实现继承
// 接口继承 -> 只继承方法签名
// 实现继承 -> 继承实际的方法

// js 只支持实现继承

function SuperType () {
  this.property = 1;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType () {
  this.subProperty = 2;
}

// subType 的原型继承自 SuperType
SubType.prototype = new SuperType();
var sub = new SubType();
console.log(sub);
console.log(sub.subProperty);
console.log(sub.property);
console.log(sub.getSuperValue());

// 最后生成的层级关系大概就是 :

// sub {subProperty : 2} => new SuperType {property : 1} => SuperType.prototype {getSuperValue : function ...} => 最后继承到 Object 上
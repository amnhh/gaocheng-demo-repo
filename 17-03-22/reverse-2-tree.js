/**
 * Created by anning on 2017/3/22.
 */
function reverse2tree (tree) {
  // 中间栈
  var interceptor = [tree];

  function reverse (idx, leftValue, rightValue) {
    idx.left = rightValue;
    idx.right = leftValue;
  }

  // 循环
  while(interceptor.length !== 0) {
    // 取出来当前的循环项
    var idx = interceptor.shift();
    if (idx.left) {
      // 替换左右
      reverse(idx, idx.left, idx.right);
      // 左右进栈
      interceptor.push([idx.left, idx.right]);
    }
  };

  return tree;
}
/**
 * Author : anning
 * Date : 17/1/19
 * Mail : amnhhlod@gmail.com
 */
var submitF = {
  /**
   * 入参是你全部的数据字段以及初始值
   * @param options
   */
  init : function (options) {
    // data 就是各种数据
    this.data = options;
  },
  setDatas : function (key, value) {
    // 支持传入一个 map, 类似 {key1 : value1, key2 : value2} 这种
    if (Object.prototype.toString.call(key) === '[object Object]') {
      var optionsObject = key;
      var keys = Object.keys(optionsObject);
      for (var i = 0, len = keys.length; i < len; i ++) {
        var idx = keys[i];
        this.data[idx] = optionsObject[idx];
      }
      // 否则就是传入 key, value 的形式
    } else if (Object.prototype.toString.call(key) === '[object String]') {
      this.data[key] = value;
    }

  },
  getDatas : function () {
    return this.data;
  },
  refreshData : function () {
    // 每次 ajax 之前都要搞一次这个
    // this.data['字段'] = $('xxx').val();
    // this.data['字段'] = $('xxx').val();
    // this.data['字段'] = $('xxx').val();
    // this.data['字段'] = $('xxx').val();
    // this.data['字段'] = $('xxx').val();
    // this.data['字段'] = $('xxx').val();
  },
  // 发送 ajax, 会在这之前检测跑完所有的中间件
  sendAjax : function (url, type) {
    var self = this;
    self.refreshData();
    for (var i = 0; i < this.interceptor.length; i ++) {
      this.interceptor[i].call(self);
    }

    // ajax 操作
    /**
    $
      .ajax({
        data : self.getDatas(),
        type : type,
        url : url
      })
      .then(function () {})
      .catch(function () {});
     */
  },
  // 中间件 list
  interceptor : [],

  // 添加中间件
  setInterceptor : function (func) {
    /**
     * 在执行中间件的时候, 使用 call 强行把 func 内部的 this 指向了 submitF
     *
     * 所以可以通过 this.data 取到所有的data, 进而在中间件中进行检测
     *
     * @example
     * function func () {
     *    console.log(this.data); // 这里取到的是 submitF.data,
     * }
     *
     *
     */
    this.interceptor.push(func);
  }
};

// 初始化数据, 传入所有的数据字段
submitF.init({anning : 1, again : 2});

// console.log(submitF.getDatas());

// 设置中间件示例
submitF.setInterceptor(function () {
  console.log(this.data);
});
// submitF.sendAjax();

submitF.setDatas('ohehe', 'feimin'); // 此时数据变为了 { anning: 1, again: 2, ohehe: 'feimin' }
submitF.sendAjax(); // 执行中间件函数的的时候打印出了 { anning: 1, again: 2, ohehe: 'feimin' }

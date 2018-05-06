function Promise(executor) {//executor 执行器--函数
    let self = this;
    self.status = "pending"; // 等待状态
    self.value = undefined;   // 成功的值
    self.reason = undefined;// 失败的值
    function resolve(value) {  // 成功
        if (self.status == "pending") {
            self.status = "resolved";
            self.value = value;

        }
    }
    function reject(reason) {// 失败
        if (self.status == "pending") {
            self.status = "rejected";
            self.reason = reason;
        }
    }
    executorz(resolve, reject);
}
Promise.prototype.then=function(onFufiled,onRejected){
   let self = this;
   if(self.status==="resolved"){
       onFufiled(self.value);
   }
   if(self.status==="rejected"){
       onRejected(self.reason);
   }
}
module.exprots = Promise;
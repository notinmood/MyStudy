/**
 * @file   : index.js
 * @time   : 9:50
 * @date   : 2022/10/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function AsyncCall(callback, timeout = 3000) {
    console.log("before");
    setTimeout(() => {
        if (typeof callback == 'function') {
            callback();
        }
    }, timeout);
    console.log("after");
}

AsyncCall(() => {
    console.log("executing default!")
});

AsyncCall(() => {
    console.log("executing 2000!")
}, 2000);

AsyncCall("doing");
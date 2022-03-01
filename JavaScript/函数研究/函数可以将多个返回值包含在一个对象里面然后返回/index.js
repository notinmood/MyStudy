let checkType = (function () {
    let rules = {
        email(str) {
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        },
        mobile(str) {
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        }
    };
    //暴露接口
    return {
        //校验
        check(str, type) {
            return rules[type] ? rules[type](str) : false;
        },
        //添加规则
        addRule(type, fn) {
            rules[type] = fn;
        }
    }
})();

//调用方式
//使用mobile校验规则
console.log(checkType.check('188170239', 'mobile'));
//添加金额校验规则
checkType.addRule('money', function (str) {
    return /^[0-9]+(.[0-9]{2})?$/.test(str)
});
//使用金额校验规则
console.log(checkType.check('18.36', 'money'));


# 说明

Vue的事件内包含一个默认的事件参数 $event(大家经常简写为”e“)。$event内包含一些列参数，其中最重要的是 $event.target (即事件源)

## 事件源属性 $event.target 和 $event.currentTarget

1. currentTarget 是我们事件响应方法，绑定到 HTML 的 DOM元素
2. target 是具体触发事件 HTML 的 DOM 元素 二者通常是一致的。但如果绑定事件方法的元素内部还有子元素，那么二者会不同，比如例子 1

## $event 事件参数包含非常多信息
具体参考 例子 2。

## 注意事项
通过 console.log 查看 全变量$event 的属性 currentTarget到时候，有时候查不到。但直接使用没有问题。

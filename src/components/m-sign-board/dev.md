## wxtSignBoard 组件

弹窗式签名组件

## 属性

| 参数    | 说明         | 类型    |
| ------- | ------------ | ------- |
| visible | 是否展示弹窗 | Boolean |

## 事件

| 事件名  | 说明               | 回调参数            |
| ------- | ------------------ | ------------------- |
| confirm | 点击确认的回调函数 | url(string)签名地址 |

## 使用

```
<m-sign-board :visible.sync='signVisible'
      @confirm=''></m-sign-board>
```

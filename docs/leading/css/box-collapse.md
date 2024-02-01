---
outline: deep
---



# 如何解决盒子塌陷问题


> 嵌套的块级元素,同时设置了外边距或者父元素未设置高度子元素浮动导致盒子塌陷

#### 解决方法:  

<div style="margin:15px 0px"></div>

##### 1. 为父元素添加 overflow:hidden

<div style="margin:15px 0px"></div>

##### 2. 为父元素添加高度和清除浮动

```css
/*第一种方法*/
    .father {
        overflow: hidden;
    }
/*第二种方法*/
    .father {
        width: 300px;
        height: 300px;
    }
    .father::after{
        content: '';
        display: block;
        clear: both;
    }
```




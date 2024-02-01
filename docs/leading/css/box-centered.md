---
outline: deep
---


# 如何使一个盒子垂直水平居中

> #### 方法1

+ #####   定位 position

```css

.parent {
    /*...*/
    position: relative;
}

.child {
    /*...*/
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}

```
> #### 方法2

+ ##### 定位 + margin:auto

```css

.parent {
    /*...*/
    position: relative;
}

.child {
    /*...*/
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

```

> #### 方法3

+ ##### dispaly:tabel-cell

```css

.parent {
    /*...*/
    display: table-cell;
    /* 
    vertical-align 指定行内元素，行内块元素或者表格单元格元素的垂直对齐方式 
    也可以用于垂直对齐一行文本内的图片 <img />
    */
    vertical-align: center; 
    text-align: center;
}

.child {
    /*...*/
    display: inline-block;
}

```

> #### 方法4 

+ ##### display:flex

```css

.parent {
    /*...*/
    display: flex;
    justify-content: center;    
    align-items: center;
}

.child {
    /*...*/
}

```
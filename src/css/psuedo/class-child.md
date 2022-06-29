---
name: "CSS - Psuedo class - :*-child"
description: "Add a :*-child psuedo class within a SCSS / PostCSS nested selector, optionally inside a :not() inversion"
scopes: ["scss", "postcss", "vue-postcss"]
prefix: "_pc-c"
---

```scss
&${1::not(}:${2:${3:last}-child}${4:)} {
	${0}
}
```

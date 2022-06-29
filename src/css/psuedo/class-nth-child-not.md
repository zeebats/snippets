---
name: "CSS - Psuedo class - &:not(:nth-child(n))"
description: "Add a :nth-child(n) psuedo class within a SCSS / PostCSS nested selector, inside a :not() inversion"
scopes: ["scss", "postcss", "vue-postcss"]
prefix: "nn-c"
---

```scss
&:not(:nth-child(${1:n})) {
	${0}
}
```

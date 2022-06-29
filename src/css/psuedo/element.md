---
name: "CSS - Psuedo element"
description: "Add a psuedo element within a parent selector"
scopes: ["scss", "postcss", "vue-postcss"]
prefix: "::"
---

```scss
&::${1|after,before|} {
	${2:content: '${3}';}
	${0}
}
```

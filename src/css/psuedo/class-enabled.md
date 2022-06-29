---
name: "CSS - Psuedo class & Attribute - Enabled"
description: "Add a enabled psuedo class & attribute within a parent selector. The attribute is mostly for JavaScript frameworks"
scopes: ["scss", "postcss", "vue-postcss"]
prefix: "ena{"
---

```scss
&:not([disabled]),
&:enabled {
	${0}
}
```

---
name: "BEM - Child with root"
description: "Add a BEM child with a ^root selector prefix"
scopes: ["postcss", "vue-postcss"]
prefix: "^__"
---

```scss
^&__${1:element} {
	${0}
}
```

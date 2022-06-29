---
name: "Vue - PostCSS block with CSS Modules"
description: "Render an empty PostCSS block with CSS Modules enabled"
scopes: ["vue"]
prefix: "postcss"
---

```vue
<style module lang="postcss">
	.${1:element} {
		${0}
	}
</style>
```

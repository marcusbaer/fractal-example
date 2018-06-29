---
title: Hello World
---

This is your index page. You can edit its contents at `docs/01-index.hbs`


## Button component

The button component can be included within other components like this:

```
\{{> @button }}
```

This template for this component looks like this:

```
{{view @button}}
```

and it therefore expects a set of data to render it that is in the following format:

```
{{context @button}}
```

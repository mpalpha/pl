---
title: Layouts
layout: full
---

{{#markdown}}
<div class="container">

<h2>Example: Fixed container</h2>

<p>Turn any full-width <a href="grid.html">grid</a> layout into a fixed-width layout by changing your outermost <code>.container-fluid</code> to <code>.container</code>.</p>

<div class="show-grid">
  <div class="row-flex">
    <div class="col-flex-xs-4">Side...</div>
    <div class="col-flex-xs-8">Content...</div>
  </div>
</div>

```
<div class="container">
  <div class="row-flex">
    <div class="col-flex-xs-4">Side...</div>
    <div class="col-flex-xs-8">Content...</div>
  </div>
</div>
```

<h2>Example: Fluid container</h2>

<p>Turn any fixed-width <a href="grid.html">grid</a> layout into a full-width layout by changing your outermost <code>.container</code> to <code>.container-fluid</code>.</p>

</div>

<div class="container-fluid show-grid">
  <div class="row-flex">
    <div class="col-flex-xs-4">Side...</div>
    <div class="col-flex-xs-8">Content...</div>
  </div>
</div>


```
<div class="container-fluid">
  <div class="row-flex">
    <div class="col-flex-xs-4">Side...</div>
    <div class="col-flex-xs-8">Content...</div>
  </div>
</div>
```
{{/markdown}}
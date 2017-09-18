---
title: Grid System
---

{{#markdown}}
Use this page to guide your designs and layouts, both online and off, to ensure you're staying consistent with the Base Structures.

## Grid Specifications:

We use a 1200px width grid, which includes the minimum resolution for displays that we provide to our customers.

-   1170px width
-   12 ~66PX columns
-   30px gutter (15px on each side of a column)

### Introduction

Grid systems are used for creating page layouts through a series of rows and columns that house your content. Here's how the Securus Pattern Library grid system works:

-   Rows must be placed within a `.container` (fixed-width) or `.container-fluid` (full-width) for proper alignment and padding.
-   Use rows to create horizontal groups of columns.
-   Content should be placed within columns, and only columns may be immediate children of rows.
-   Predefined grid classes like `.row-flex` and `.col-flex-xs-4` are available for quickly making grid layouts. Sass mixins can also be used for more semantic layouts.
-   Columns create gutters (gaps between column content) via `padding`. That padding is offset in rows for the first and last column via negative margin on `.row-flex`s.
-   The negative margin is why the examples below are outdented. It's so that content within grid columns is lined up with non-grid content.
-   Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three `.col-flex-xs-4`.
-   If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
-   Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any `.col-flex-md-*` class to an element will not only affect its styling on medium devices but also on large devices if a `.col-flex-lg-*` class is not present.

Look to the examples for applying these principles to your code.

## Media queries

We use the following media queries in our Sass files to create the key breakpoints in our grid system.


```
  /* Extra small devices (phones, less than 768px) */ 
  /* No media query since this is the default in Securus Pattern Library */  

  /* Small devices (tablets, 768px and up) */ 
  @media  ( min-width :  $screen-sm-min )  {  ...  } 
  
  /* Medium devices (desktops, 992px and up) */ 
  @media  ( min-width :  $screen-md-min )  {  ...  }  

  /* Large devices (large desktops, 1200px and up) */ 
  @media  ( min-width :  $screen-lg-min )  {  ...  } 
```

We occasionally expand on these media queries to include a `max-width` to limit CSS to a narrower set of devices.

```
  @media  ( max-width :  $screen-xs-max )  {  ...  } 
  @media  ( min-width :  $screen-sm-min )  and  ( max-width :  $screen-sm-max )  {  ...  } 
  @media  ( min-width :  $screen-md-min )  and  ( max-width :  $screen-md-max )  {  ...  } 
  @media  ( min-width :  $screen-lg-min )  {  ...  } 
```

## Grid options

See how aspects of the Securus Pattern Library grid system work across multiple devices with a handy table.

<div class="table-responsive">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th></th>
                <th> Extra small devices <small>Phones (&lt;768px)</small> </th>
                <th> Small devices <small>Tablets (≥768px)</small> </th>
                <th> Medium devices <small>Desktops (≥992px)</small> </th>
                <th> Large devices <small>Desktops (≥1200px)</small> </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Grid behavior</th>
                <td>Horizontal at all times</td>
                <td colspan="3">Collapsed to start, horizontal above breakpoints</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Container width</th>
                <td>None (auto)</td>
                <td>750px</td>
                <td>970px</td>
                <td>1170px</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Class prefix</th>
                <td>`.col-flex-xs-`</td>
                <td>`.col-flex-sm-`</td>
                <td>`.col-flex-md-`</td>
                <td>`.col-flex-lg-`</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;# of columns</th>
                <td colspan="4">12</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Column width</th>
                <td class="text-muted">Auto</td>
                <td>~62px</td>
                <td>~81px</td>
                <td>~97px</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Gutter width</th>
                <td colspan="4">30px (15px on each side of a column)</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Nestable</th>
                <td colspan="4">Yes</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Offsets</th>
                <td colspan="4">Yes</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">&nbsp;&nbsp;&nbsp;Column ordering</th>
                <td colspan="4">Yes</td>
            </tr>
        </tbody>
    </table>
</div>

## Example: Stacked-to-horizontal

Using a single set of `.col-flex-md-*` grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any `.row-flex`.

<div class="show-grid">
  <div class="row-flex">
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
      <div class="col-flex-md-1">.col-flex-md-1</div>
  </div>
  <div class="row-flex">
      <div class="col-flex-md-8">.col-flex-md-8</div>
      <div class="col-flex-md-4">.col-flex-md-4</div>
  </div>
  <div class="row-flex">
      <div class="col-flex-md-4">.col-flex-md-4</div>
      <div class="col-flex-md-4">.col-flex-md-4</div>
      <div class="col-flex-md-4">.col-flex-md-4</div>
  </div>
  <div class="row-flex">
      <div class="col-flex-md-6">.col-flex-md-6</div>
      <div class="col-flex-md-6">.col-flex-md-6</div>
  </div>
</div>

```
<div class="row-flex">
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
  <div class="col-flex-md-1">.col-flex-md-1</div>
</div>
 
<div class="row-flex">
  <div class="col-flex-md-8">.col-flex-md-8</div>
  <div class="col-flex-md-4">.col-flex-md-4</div>
</div>
 
<div class="row-flex">
  <div class="col-flex-md-4">.col-flex-md-4</div>
  <div class="col-flex-md-4">.col-flex-md-4</div>
  <div class="col-flex-md-4">.col-flex-md-4</div>
</div>
 
 <div class="row-flex">
  <div class="col-flex-md-6">.col-flex-md-6</div>
  <div class="col-flex-md-6">.col-flex-md-6</div>
</div>
```

## Collapse Gutters:

Using utility classes you can collapse the gutters for a row, a column, or both recursively.

`.collapse-sides` can be applied to a row

<div class="show-grid">
.row-flex .collapse-sides
  <div class="row-flex collapse-sides">
    <div class="col-flex-xs-6">
      <div class="show-grid"> .col-flex-xs-6</div>
    </div>
    <div class="col-flex-xs-6">
      <div class="show-grid"> .col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex collapse-sides">
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

<p>`.collapse-sides` can be applied to column</p>

<div class="show-grid">
  <div class="row-flex">
    <div class="col-flex-md-6 collapse-sides">
      <div class="show-grid"> .col-flex-md-6 .collapse-sides</div>
    </div>
    <div class="col-flex-xs-6 collapse-sides">
      <div class="show-grid"> .col-flex-md-6 .collapse-sides</div>
    </div>
  </div>
</div>

```
<div class="row-flex">
    <div class="col-flex-xs-6 collapse-sides">
        .col-flex-xs-6 .collapse-sides
    </div>
    <div class="col-flex-xs-6 collapse-sides">
        .col-flex-xs-6 .collapse-sides
    </div>
</div>
```

<p>`.collapse-sides-nested` applies to a row and the first set of columns</p>

<div class="show-grid">
.row-flex .collapse-sides-nested
  <div class="row-flex collapse-sides-nested">
    <div class="col-flex-xs-6">
      <div class="show-grid"> .col-flex-xs-6</div>
    </div>
    <div class="col-flex-xs-6">
      <div class="show-grid"> .col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex collapse-sides-nested">
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

  <p>`.collapse-sides-nested-lg` applies to a row and the first set of columns but only on large device and up</p>

  <div class="show-grid">
  .row-flex .collapse-sides-nested-lg
    <div class="row-flex collapse-sides-nested-lg">
      <div class="col-flex-xs-6">
        <div class="show-grid"> .col-flex-xs-6</div>
      </div>
      <div class="col-flex-xs-6">
        <div class="show-grid"> .col-flex-xs-6</div>
      </div>
    </div>
  </div>

```
<div class="row-flex collapse-sides-nested">
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

  <p>`.collapse-between` applies to a each column on extra small devices and up</p>

  <div class="show-grid">
  .row-flex .collapse-between
    <div class="row-flex collapse-between">
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
    </div>
  </div>

```
<div class="row-flex collapse-between">
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
</div>
```
  <p>`.collapse-between-lg` applies to a row and the first set of columns but only on large device and up</p>

  <div class="show-grid">
  .row-flex .collapse-between-lg
    <div class="row-flex collapse-between-lg">
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
      <div class="col-flex-xs-3">
        <div class="show-grid"> .col-flex-xs-3</div>
      </div>
    </div>
  </div>

```
<div class="row-flex collapse-between">
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
    <div class="col-flex-xs-3">
        .col-flex-xs-3
    </div>
</div>
```
## Example: Mobile and desktop

Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding `.col-flex-xs-*` `.col-flex-md-*` to your columns. See the example below for a better idea of how it all works.

<div class="row-flex show-grid">
    <div class="col-flex-xs-12 col-flex-md-8"><div class="show-grid">.col-flex-xs-12 .col-flex-md-8</div></div>
    <div class="col-flex-xs-6 col-flex-md-4"><div class="show-grid">.col-flex-xs-6 .col-flex-md-4</div></div>
</div>
<div class="row-flex show-grid">
    <div class="col-flex-xs-6 col-flex-md-4"><div class="show-grid">.col-flex-xs-6 .col-flex-md-4</div></div>
    <div class="col-flex-xs-6 col-flex-md-4"><div class="show-grid">.col-flex-xs-6 .col-flex-md-4</div></div>
    <div class="col-flex-xs-6 col-flex-md-4"><div class="show-grid">.col-flex-xs-6 .col-flex-md-4</div></div>
</div>
<div class="row-flex show-grid">
    <div class="col-flex-xs-6"><div class="show-grid">.col-flex-xs-6</div></div>
    <div class="col-flex-xs-6"><div class="show-grid">.col-flex-xs-6</div></div>
</div>

```
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row-flex">
  <div class="col-flex-xs-12 col-flex-md-8">.col-flex-xs-12 .col-flex-md-8</div>
  <div class="col-flex-xs-6 col-flex-md-4">.col-flex-xs-6 .col-flex-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row-flex">
  <div class="col-flex-xs-6 col-flex-md-4">.col-flex-xs-6 .col-flex-md-4</div>
  <div class="col-flex-xs-6 col-flex-md-4">.col-flex-xs-6 .col-flex-md-4</div>
  <div class="col-flex-xs-6 col-flex-md-4">.col-flex-xs-6 .col-flex-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row-flex">
  <div class="col-flex-xs-6">.col-flex-xs-6</div>
  <div class="col-flex-xs-6">.col-flex-xs-6</div>
</div>
```

## Example: Mobile, tablet, desktop

Build on the previous example by creating even more dynamic and powerful layouts with tablet `.col-flex-sm-*` classes.
<div class="row-flex show-grid">
    <div class="col-flex-xs-12 col-flex-sm-6 col-flex-md-8"><div class="show-grid">.col-flex-xs-12 .col-flex-sm-6 .col-flex-md-8</div></div>
    <div class="col-flex-xs-6 col-flex-md-4"><div class="show-grid">.col-flex-xs-6 .col-flex-md-4</div></div>
</div>

<div class="row-flex show-grid">
    <div class="col-flex-xs-6 col-flex-sm-4"><div class="show-grid">.col-flex-xs-6 .col-flex-sm-4</div></div>
    <div class="col-flex-xs-6 col-flex-sm-4"><div class="show-grid">.col-flex-xs-6 .col-flex-sm-4</div></div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-flex-xs-6 col-flex-sm-4"><div class="show-grid">.col-flex-xs-6 .col-flex-sm-4</div></div>
</div>

```
<div class="row-flex">
  <div class="col-flex-xs-12 col-flex-sm-6 col-flex-md-8">.col-flex-xs-12 .col-flex-sm-6 .col-flex-md-8</div>
  <div class="col-flex-xs-6 col-flex-md-4">.col-flex-xs-6 .col-flex-md-4</div>
</div>
 
<div class="row-flex">
  <div class="col-flex-xs-6 col-flex-sm-4">.col-flex-xs-6 .col-flex-sm-4</div>
  <div class="col-flex-xs-6 col-flex-sm-4">.col-flex-xs-6 .col-flex-sm-4</div>
 
  <!-- Optional: clear the XS cols if their content doesn't match in height -->
  <div class="clearfix visible-xs-block"></div>

  <div class="col-flex-xs-6 col-flex-sm-4">.col-flex-xs-6 .col-flex-sm-4</div>
</div>
```

## Example: Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

<div class="row-flex show-grid">
    <div class="col-flex-xs-9">.col-flex-xs-9</div>
    <div class="col-flex-xs-4">.col-flex-xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-flex-xs-6">.col-flex-xs-6<br>Subsequent columns continue along the new line.</div>
</div>

```
<div class="row-flex">
  <div class="col-flex-xs-9">.col-flex-xs-9</div>
  <div class="col-flex-xs-4">
      .col-flex-xs-4<br>
      Since 9 + 4 = 13 >12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
  </div>
  <div class="col-flex-xs-6">.col-flex-xs-6<br>Subsequent columns continue along the new line.</div>
</div>
```

## Responsive column resets

With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a `.clearfix` and our responsive utility classes.

<div class="row-flex show-grid">
    <div class="col-flex-xs-6 col-flex-sm-3"> .col-flex-xs-6 .col-flex-sm-3 <br> Resize your viewport or check it out on your phone for an example. </div>
    <div class="col-flex-xs-6 col-flex-sm-3">.col-flex-xs-6 .col-flex-sm-3</div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-flex-xs-6 col-flex-sm-3">.col-flex-xs-6 .col-flex-sm-3</div>
    <div class="col-flex-xs-6 col-flex-sm-3">.col-flex-xs-6 .col-flex-sm-3</div>
</div>

```
<div class="row-flex">
  <div class="col-flex-xs-6 col-flex-sm-3">.col-flex-xs-6 .col-flex-sm-3</div>
  <div class="col-flex-xs-6 col-flex-sm-3">.col-flex-xs-6 .col-flex-sm-3</div>
 
  <!-- Add the extra clearfix for only the required viewport -->
  <div class="clearfix visible-xs-block"></div>
 
  <div class="col-flex-xs-6 col-flex-sm-3">.col-flex-xs-6 .col-flex-sm-3</div>
  <div class="col-flex-xs-6 col-flex-sm-3">.col-flex-xs-6 .col-flex-sm-3</div>
</div>
```

In addition to column clearing at responsive breakpoints, you may need to <strong>reset offsets, pushes, or pulls</strong>. See this in action in the grid example.

<div class="row-flex show-grid">
  <div class="col-flex-sm-5 col-flex-md-6">
    .col-flex-sm-5 .col-flex-md-6
  </div>
  <div class="col-flex-sm-5 col-flex-sm-offset-2 col-flex-md-6 col-flex-md-offset-0">
    .col-flex-sm-5 .col-flex-sm-offset-2 .col-flex-md-6 .col-flex-md-offset-0
  </div>
</div>
 
<div class="row-flex show-grid">
  <div class="col-flex-sm-6 col-flex-md-5 col-flex-lg-6">
    .col-flex-sm-6 .col-flex-md-5 .col-flex-lg-6
  </div>
  <div class="col-flex-sm-6 col-flex-md-5 col-flex-md-offset-2 col-flex-lg-6 col-flex-lg-offset-0">
    .col-flex-sm-6 .col-flex-md-5 .col-flex-md-offset-2 .col-flex-lg-6 .col-flex-lg-offset-0
  </div>
</div>

```
<div class="row-flex">
  <div class="col-flex-sm-5 col-flex-md-6">
    .col-flex-sm-5 .col-flex-md-6
  </div>
  <div class="col-flex-sm-5 col-flex-sm-offset-2 col-flex-md-6 col-flex-md-offset-0">
    .col-flex-sm-5 .col-flex-sm-offset-2 .col-flex-md-6 .col-flex-md-offset-0
  </div>
</div>
 
<div class="row-flex">
  <div class="col-flex-sm-6 col-flex-md-5 col-flex-lg-6">
    .col-flex-sm-6 .col-flex-md-5 .col-flex-lg-6
  </div>
  <div class="col-flex-sm-6 col-flex-md-5 col-flex-md-offset-2 col-flex-lg-6 col-flex-lg-offset-0">
    .col-flex-sm-6 .col-flex-md-5 .col-flex-md-offset-2 .col-flex-lg-6 .col-flex-lg-offset-0
  </div>
</div>
```

## Offsetting columns

Move columns to the right using `.col-flex-md-offset-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.col-flex-md-offset-4` moves `.col-flex-md-4` over four columns.

<div class="row-flex show-grid">
    <div class="col-flex-md-4">.col-flex-md-4</div>
    <div class="col-flex-md-4 col-flex-md-offset-4">.col-flex-md-4 .col-flex-md-offset-4</div>
</div>
<div class="row-flex show-grid">
    <div class="col-flex-md-3 col-flex-md-offset-3">.col-flex-md-3 .col-flex-md-offset-3</div>
    <div class="col-flex-md-3 col-flex-md-offset-3">.col-flex-md-3 .col-flex-md-offset-3</div>
</div>
<div class="row-flex show-grid">
    <div class="col-flex-md-6 col-flex-md-offset-3">.col-flex-md-6 .col-flex-md-offset-3</div>
</div>

```
<div class="row-flex">
  <div class="col-flex-md-4">.col-flex-md-4</div>
  <div class="col-flex-md-4 col-flex-md-offset-4"></div>
</div> 

<div class="row-flex">
  <div class="col-flex-md-3 col-flex-md-offset-3"></div>
  <div class="col-flex-md-3 col-flex-md-offset-3"></div>
</div> 

<div class="row-flex">
  <div class="col-flex-md-6 col-flex-md-offset-3"></div>
</div>
```

You can also override offsets from lower grid tiers with `.col-flex-*-offset-0` classes.

<div class="row-flex show-grid">
  <div class="col-flex-xs-6 col-flex-sm-4">
    col-flex-xs-6 </br>
    col-flex-sm-4</br>
  </div>
  <div class="col-flex-xs-6 col-flex-sm-4">
    col-flex-xs-6 </br>
    col-flex-sm-4</br>
  </div>
  <div class="col-flex-xs-6 col-flex-xs-offset-3 col-flex-sm-4 col-flex-sm-offset-0">
    col-flex-xs-6 </br>
    col-flex-xs-offset-3 </br>
    col-flex-sm-4 </br>
    col-flex-sm-offset-0
  </div>
</div>

```
<div class="row-flex">
  <div class="col-flex-xs-6 col-flex-sm-4">
  </div>
  <div class="col-flex-xs-6 col-flex-sm-4">
  </div>
  <div class="col-flex-xs-6 col-flex-xs-offset-3 col-flex-sm-4 col-flex-sm-offset-0">
  </div>
</div>
```

## Nesting columns

To nest your content with the default grid, add a new `.row-flex` and set of `.col-flex-sm-*` columns within an existing `.col-flex-sm-*` column. 

Nested rows should include a set of columns that add up to 12 or fewer. It is not required that you use all 12 available columns.

<div class="row-flex show-grid">
    <div class="col-flex-sm-9">
        Level 1: .col-flex-sm-9 
        <div class="row-flex show-grid">
            <div class="col-flex-xs-8 col-flex-sm-6"> Level 2: .col-flex-xs-8 .col-flex-sm-6</div>
            <div class="col-flex-xs-4 col-flex-sm-6"> Level 2: .col-flex-xs-4 .col-flex-sm-6</div>
        </div>
    </div>
</div>

```
<div class="row-flex">
  <div class="col-flex-sm-9">
    Level 1: .col-flex-sm-9
    <div class="row-flex">
      <div class="col-flex-xs-8 col-flex-sm-6">
        Level 2: .col-flex-xs-8 .col-flex-sm-6
      </div>
      <div class="col-flex-xs-4 col-flex-sm-6">
        Level 2: .col-flex-xs-4 .col-flex-sm-6
      </div>
    </div>
  </div>
</div>
```

<h2>Column ordering</h2>

<div class="show-grid">
  <div class="row-flex">
    <div class="col-flex-xs-3">
      <div class="show-grid">First, but unordered</div>
    </div>
    <div class="col-flex-xs-3 order-0">
      <div class="show-grid">Second, but unordered</div>
    </div>
    <div class="col-flex-xs-3 order-last">
      <div class="show-grid">Third, but last</div>
    </div>
    <div class="col-flex-xs-3 order-first">
      <div class="show-grid">Fourth, but first</div>
    </div>
  </div>
</div>

```
<div class="container">
  <div class="row-flex">
    <div class="col-flex-xs-3">
      First, but unordered
    </div>
    <div class="col-flex-xs-3 order-0">
      Second, but unordered
    </div>
    <div class="col-flex-xs-3 order-last">
      Third, but last
    </div>
    <div class="col-flex-xs-3 order-first">
      Fourth, but first
    </div>
  </div>
</div>
```

## Nested

<div class="show-grid">
  <div class="row-flex">
    <div class="col-flex-md-12">
      <div class="show-grid">.col-flex-md-12
        <div class="row-flex">
          <div class="col-flex-md-2">
            <div class="show-grid">.col-flex-md-2</div>
          </div>
          <div class="col-flex-md-10">
            <div class="show-grid">.col-flex-md-10
              <div class="row-flex">
                <div class="col-flex-md-6">
                  <div class="show-grid">.col-flex-md-6</div>
                </div>
                <div class="col-flex-md-6">
                  <div class="show-grid">.col-flex-md-6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```
<div class="row-flex">
  <div class="col-flex-md-12"> .col-flex-md-12
    <div class="row-flex">
      <div class="col-flex-md-2">.col-flex-md-2</div>
      <div class="col-flex-md-10"> .col-flex-md-10
        <div class="row-flex">
          <div class="col-flex-md-6">.col-flex-md-6</div>
          <div class="col-flex-md-6">.col-flex-md-6</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Vertical and Horizontal Aligments

Using flexbox we can improve the grid system.

### Horizontal Aligment

You may add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.
  And it be like this.

you can add `xs` `md` `lg` to the aligment

`.start-*`

<div class="show-grid">
  <div class="row-flex start-xs">
    <div class="col-flex-xs-6">
      <div class="show-grid"> .col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex start-xs">
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

`.center-*`

<div class="show-grid">
  <div class="row-flex center-xs">
    <div class="col-flex-xs-6">
      <div class="show-grid"> .col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex center-xs">
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

`.end-*`

<div class="show-grid">
  <div class="row-flex end-xs">
    <div class="col-flex-xs-6">
      <div class="show-grid">.col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex end-xs">
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

`.between-*`

<div class="show-grid">
  <div class="row-flex between-xs">
    <div class="col-flex-xs-3">
      <div class="show-grid">.col-flex-xs-3</div>
    </div>
    <div class="col-flex-xs-3">
      <div class="show-grid">.col-flex-xs-3</div>
    </div>
  </div>
</div>

```
<div class="row-flex between-xs">
  <div class="col-flex-xs-3">
    .col-flex-xs-3
  </div>
  <div class="col-flex-xs-3">
    .col-flex-xs-3
  </div>
</div>
```

`.around-*`

<div class="show-grid">
  <div class="row-flex around-xs">
    <div class="col-flex-xs-3">
      <div class="show-grid">.col-flex-xs-3</div>
    </div>
    <div class="col-flex-xs-3">
      <div class="show-grid">.col-flex-xs-3</div>
    </div>
  </div>
</div>

```
<div class="row-flex around-xs">
  <div class="col-flex-xs-3">
    .col-flex-xs-3
  </div>
  <div class="col-flex-xs-3">
    .col-flex-xs-3
  </div>
</div>
```

## Equal Heights

Since `align-items: stretch;`is the default value, you may omit the `.top-*`, `.middle-*`, `.bottom-*` classes or use the `.stretch-*` class to override a previously applied media query style.

you can add `xs` `md` `lg` to the vertical aligment class

`.stretch-*` (default)

<div class="show-grid">
  <div class="row-flex top-md stretch-lg">
    <div class="col-flex-xs-4">
      <div class="show-grid">.col-flex-xs-4<br>.col-flex-xs-4<br>.col-flex-xs-4</div>
    </div>
    <div class="col-flex-xs-4">
      <div class="show-grid">.col-flex-xs-4<br>.col-flex-xs-4</div>
    </div>
    <div class="col-flex-xs-4">
      <div class="show-grid">.col-flex-xs-4</div>
    </div>
  </div>
</div>

```
<div class="row-flex top-md stretch-lg">
    <div class="col-flex-xs-4">
        .col-flex-xs-4<br>.col-flex-xs-4br>.col-flex-xs-4
    </div>
    <div class="col-flex-xs-4br>.col-flex-xs-4">
        .col-flex-xs-4
    </div>
    <div class="col-flex-xs-4">
        .col-flex-xs-4
    </div>
</div>
```

### Vertical Aligment

`.top-*`

<div class="show-grid">
  <div class="row-flex top-xs">
    <div class="col-flex-xs-6">
      <div class="show-grid">.col-flex-xs-6<br>.col-flex-xs-6</div>
    </div>
    <div class="col-flex-xs-6">
      <div class="show-grid">.col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex top-xs">
    <div class="col-flex-xs-6">
        .col-flex-xs-6<br>.col-flex-xs-6
    </div>
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

`.middle-*`

<div class="show-grid">
  <div class="row-flex middle-xs">
    <div class="col-flex-xs-6">
      <div class="show-grid">.col-flex-xs-6<br>.col-flex-xs-6</div>
    </div>
    <div class="col-flex-xs-6">
      <div class="show-grid">.col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex middle-xs">
    <div class="col-flex-xs-6">
        .col-flex-xs-6<br>.col-flex-xs-6
    </div>
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```

`.bottom-*`

<div class="show-grid">
  <div class="row-flex bottom-xs">
    <div class="col-flex-xs-6">
      <div class="show-grid">.col-flex-xs-6<br>.col-flex-xs-6</div>
    </div>
    <div class="col-flex-xs-6">
      <div class="show-grid">.col-flex-xs-6</div>
    </div>
  </div>
</div>

```
<div class="row-flex bottom-xs">
    <div class="col-flex-xs-6">
        .col-flex-xs-6<br>.col-flex-xs-6
    </div>
    <div class="col-flex-xs-6">
        .col-flex-xs-6
    </div>
</div>
```
`.baseline-*`

<div class="show-grid">
  <div class="row-flex baseline-xs">
    <div class="col-flex-xs-4 padding-v-0">
      <div class="show-grid">.col-flex-xs-4</div>
    </div>
    <div class="col-flex-xs-4 padding-v-0">
      <div class="show-grid">.col-flex-xs-4<br>.col-flex-xs-4</div>
    </div>
    <div class="col-flex-xs-4">
      <div class="show-grid">.col-flex-xs-4<br>.col-flex-xs-4<br>.col-flex-xs-4</div>
    </div>
  </div>
</div>

```
<div class="row-flex baseline-xs">
    <div class="col-flex-xs-4 padding-v-0">
        .col-flex-xs-4
    </div>
    <div class="col-flex-xs-4 padding-v-0">
        .col-flex-xs-4
        .col-flex-xs-4
    </div>
    <div class="col-flex-xs-4">
        .col-flex-xs-4
        .col-flex-xs-4
        .col-flex-xs-4
    </div>
</div>
```
you can add `xs` `md` `lg` to the aligment

### Reverse Grid

You can reverse the order of the grid.
<strong>.reverse</strong>

<div class="show-grid">
  <div class="row-flex reverse">
    <div class="col-flex-xs-4">
      <div class="show-grid"> 1</div>
    </div>
    <div class="col-flex-xs-4">
      <div class="show-grid"> 2</div>
    </div>
    <div class="col-flex-xs-4">
      <div class="show-grid"> 3</div>
    </div>
  </div>
</div>

```
<div class="row-flex reverse">
    <div class="col-flex-xs-4"> 1 </div>
    <div class="col-flex-xs-4"> 2 </div>
    <div class="col-flex-xs-4"> 3 </div>
</div>
```

And because the reverse the grid order will be <strong>3</strong> - <strong>2</strong> - <strong>1</strong>. The
    `.reverse` class must be used with the `.row-flex`.

{{/markdown}}
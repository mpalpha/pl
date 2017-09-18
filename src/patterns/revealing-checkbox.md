---
title: Revealing Checkbox
---
{{#markdown}}
Display (or ideally slide down) a set of options only if the user checks the checkbox.

### Example
<div class="library__example">
    <label class="rounded-check" for="rounded-check-suspend">
        <input type="checkbox" id="rounded-check-suspend" class="suspend-change">
        <span class="icon"></span>
        <strong>Suspended</strong>
    </label>
    <p>&nbsp;</p>
    <label class="rounded-check" for="rounded-check-suspend">
        <input type="checkbox" id="rounded-check-suspend" class="suspend-change" checked>
        <span class="icon"></span>
        <strong>Suspended</strong>
    </label>
    <div class="form-group rounded-check-indent" id="suspend-until-section" style="display: block;">
        <select class="form-control suspended-until margin-bottom-5">
            <option val="date">Until</option>
            <option val="Indefinitely">Indefinitely</option>
        </select>
        <div class="input-group inline-form-md suspend-until-date">
            <input type="text" id="suspend-end" class="form-control col-md-2" placeholder="MM/DD/YYYY">
            <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
        </div>
    </div>
</div>

### Code
```html
<label class="rounded-check" for="rounded-check-1">
    <input type="checkbox" id="rounded-check-1" class="">
    <span class="icon"></span>
    <!-- Label -->
</label>
<div class="form-group rounded-check-indent" id="rounded-check-indent1">
    <!-- Options go here -->
</div>
```
{{/markdown}}
---
title: Validation Alert
---
{{#markdown}}
Display an error message below a field so the user can be notified of how to fix the erro.

### Example
<div class="library__example" style="margin-bottom: 60px;">
    <div class="form-group">
        <label for="required-field" class="control-label">Required Field*</label>
        <input id="required-field" type="text" class="form-control ng-invalid aa-had-focus" placeholder="Required field">
        <div class="validation-error" style="display: block;">Field is required</div>
    </div>
</div>

### Code
```html
<div class="form-group">
    <label for="required-field" class="control-label">Required Field*</label>
    <input id="required-field" type="text" class="form-control ng-invalid aa-had-focus" placeholder="Required field">
    <div class="validation-error"><!-- Validation error --></div>
</div>
```
{{/markdown}}
---
title: Add Row
---

{{#markdown}}
Add a row to a table to add additional records.

### Example
<div class="library__example">
    <div class="row">
        <div class="col-md-8">
            <div class="form-group">
                <label>Full name</label>
                <input type="text" class="form-control" value="John Smith">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Date of Birth <i class="fa fa-info-circle info" data-toggle="tooltip" title="" data-original-title="Format: MM/DD/YYYY"></i></label>
                <input type="text" class="form-control" value="10/12/2014">
            </div>
        </div>
    </div>
    <div>
        <a href="#" class="add-additional-visitor"><i class="fa fa-plus-circle"></i> Add Additional Visitor</a>
    </div>
    <p>&nbsp;</p>
    <div class="row">
        <div class="col-md-8">
            <div class="form-group">
                <label>Full name</label>
                <input type="text" class="form-control" value="John Smith">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Date of Birth <i class="fa fa-info-circle info" data-toggle="tooltip" title="" data-original-title="Format: MM/DD/YYYY"></i></label>
                <input type="text" class="form-control" value="10/12/2014">
            </div>
        </div>
    </div>
    <div class="row additional-visitor-field">
        <div class="col-md-8">
            <div class="form-group">
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <input type="date" class="form-control">
            </div>
        </div>
    </div>
    <div>
        <a href="#" class="add-additional-visitor"><i class="fa fa-plus-circle"></i> Add Additional Visitor</a>
    </div>
</div>

### Code
```html
<div class="row">
    <!-- Row goes here -->
</div>
<div>
    <a href="#" class="add-record"><i class="fa fa-plus-circle"></i> Add</a>
</div>
```
{{/markdown}}
---
title: Search Form
---
{{#markdown}}
Standard search pattern to search the database or Elastic Search for data that matches a pattern and display the search results.

### Example
<div class="library__example">

    <div class="row">
        <div class="col-md-7">
            <div class="form-group">
                <label>Search</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="status-field">Status</label>
                <select class="form-control" id="status-field">
                    <option>Active and Inactive</option>
                    <option selected="">Active</option>
                    <option>Inactive</option>
                </select>
            </div>
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <label>&nbsp;</label>
                <button class="btn btn-primary btn-search">Search</button>
            </div>
        </div>
    </div>

</div>

### Code
```html
<div class="row">
    <div class="col-md-7">
        <div class="form-group">
            <label>Search</label>
            <input type="text" class="form-control">
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <label for="ActivityTypeDropdown15">Status</label>
            <select name="ActivityTypeDropdown3" class="form-control" id="ActivityTypeDropdown15">
                <option>Active and Inactive</option>
                <option selected="">Active</option>
                <option>Inactive</option>
            </select>
        </div>
    </div>
    <div class="col-md-2">
        <div class="form-group">
            <label>&nbsp;</label>
            <button class="btn btn-primary btn-search">Search</button>
        </div>
    </div>
</div>
```
{{/markdown}}
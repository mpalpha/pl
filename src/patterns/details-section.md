---
title: Details Section
---
{{#markdown}}
Allows the user to enter basic information on a settings page. There is an optional section at the bottom that displays when the settings were last modified.
This section is required if audit logging is enabled for the app.

### Example
<div class="library__example">
    <div class="form-group permissions-form-background">
        <div class="row form-group">
            <div class="col-md-12">
                <div class="form-group no-margin-bottom">
                    <label class="required">Call Restriction Name</label>
                    <input class="form-control">
                </div>
            </div>
        </div>
        <div class="form-group no-margin-bottom">
            <label>Description</label>
            <textarea class="form-control" rows="2"></textarea>
            <div>Character limit: 255</div>
        </div>
        <div class="view-modified">
            Last modified 9/17/2014 at 12:03PM by jvalentine.
            <a href="#/pages/search/system-logs/">
                <small>View change history →</small>
            </a>
        </div>
    </div>
</div>

### Code
```html
    <div class="form-group permissions-form-background">
        <div class="row form-group">
            <!-- Add first row of settings here -->
        </div>
        <div class="form-group no-margin-bottom">
            <!-- Add second row of settings here -->
        </div>
        <!-- Optional: only necessary if audit logging is enabled -->
        <div class="view-modified">
            Last modified <!-- Date --> at <!-- Time --> by <!-- user -->.
            <a href="">
                <small>View change history →</small>
            </a>
        </div>
        <!-- Optional: only necessary if audit logging is enabled -->
    </div>
```
{{/markdown}}
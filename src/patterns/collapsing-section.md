---
title: Collapsible Section
---
{{#markdown}}
Allows a user to collapse a section of content to surface content further down on the page,
or to temporarily hide other content so the user can focus on a specific section.

### Example
<div class="library__example">
    <h4 class="section-header">
        <a data-toggle="collapse" href="#geofence-settings">
            Geofence settings
            <div class="pull-right">
                <span class="toggle-hide"></span>
                <span class="toggle-show"></span>
            </div>
        </a>
    </h4>
    <div class="collapse in" id="geofence-settings">
        <div class="row">
            <div class="col-md-12">
                <label class="rounded-check" for="rounded-check-reason">
                    <input type="checkbox" name="check" id="rounded-check-reason" value="None" checked="">
                    <span class="icon"></span>
                    <a href="#" data-toggle="tooltip" title="" data-original-title="Sets the geofence as active">Active</a>
                </label>
                <label class="rounded-check" for="rounded-check-reason-1">
                    <input type="checkbox" name="check" id="rounded-check-reason-1" value="None" checked="">
                    <span class="icon"></span>
                    <a href="#" data-toggle="tooltip" title="" data-original-title="Marks the geofence private so that only you see this geofence.">Private Geofence</a>
                </label>
            </div>
        </div>
    </div>
</div>

### Code
```html
<h4 class="section-header">
    <a data-toggle="collapse" href="#section-id">
        <!-- Section Title -->
        <div class="pull-right">
            <span class="toggle-hide"></span>
            <span class="toggle-show"></span>
        </div>
    </a>
</h4>
<div class="collapse in" id="section-id">
<!-- content for collapsible section goes here -->
</div>
```
{{/markdown}}
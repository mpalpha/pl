---
title: Second Level Navigation
---
{{#markdown}}
Allows a user to quickly navigate between second level links.

### Example
<div class="library__example" style="width: 30%">
    <ul class="bsnav bsnav-pills bsnav-stacked">
        <li class="active">
            <a href="#/pages/manage/call-settings/call-forward-numbers">
                <i class="fa securus-forward-call"></i> &nbsp;
                <span>Call Forward Numbers</span>
            </a>
        </li>
        <li>
            <a href="#/pages/manage/call-settings/call-restrictions">
                <i class="fa fa-clock-o"></i> &nbsp;
                <span>Call Restrictions</span>
            </a>
        </li>
        <li>
            <a href="#/pages/manage/call-settings/call-schedules">
                <i class="fa fa-calendar"></i> &nbsp;
                <span>Call Schedules</span>
            </a>
        </li>
        <li>
            <a href="#/pages/manage/call-settings/call-velocity">
                <i class="fa fa-rocket"></i> &nbsp;
                <span>Call Velocity Restrictions</span>
            </a>
        </li>
    </ul>
</div>

### Code
```html
<ul class="bsnav bsnav-pills bsnav-stacked">
    <li class="active">
        <a href="">
            <!-- Replace securus-forward-call with the appropriate icon -->
            <i class="fa securus-forward-call"></i> &nbsp;
            <span><!-- Label --></span>
        </a>
    </li>
</ul>
```
{{/markdown}}

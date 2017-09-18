---
title: Dropdown with Summary
---
{{#markdown}}
Display a summary of information that a user can then view additional details on.

### Example
<div class="library__example">
    <div class="row">
        <div class="col-md-4">
            <div class="form-group facility-and-sites-form-space">
                <select class="form-control">
                    <option>None selected</option>
                    <option selected="">1 Free Call per Month</option>
                    <option>2 hours/month</option>
                    <option>Excessive Use</option>
                </select>
            </div>
            <div class="panel panel-default">
                <div class="panel-body">
                    <p>Inmates are allowed to make <b>all call types</b> and are limited to:</p>
                    <ul class="restriction">
                        <li><b>unlimited</b> call attempts...
                        </li>
                        <li>with <b>1</b> successful connections...
                        </li>
                        <li>and are allowed <b>60</b> minutes of total call time.</li>
                    </ul>
                    <p>This restriction resets every <b>3 days.</b>
                    </p>
                </div>
            </div>
            <a href="#/pages/manage/call-settings/call-restrictions">Manage call restrictions →</a>
        </div>
    </div>
</div>

### Code
```html
<div class="form-group">
    <select class="form-control">
        <option>None selected</option>
        <option selected=""></option>
    </select>
</div>
<div class="panel panel-default">
    <div class="panel-body">
        <!-- summary of what the selected option does -->
    </div>
</div>
<a href="">Manage <!-- name of options group --> →</a>
```
{{/markdown}}
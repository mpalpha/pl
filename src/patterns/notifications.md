---
title: Notifications
---
{{#markdown}}
Display messages to the user on save errors, save successes, info messages, or system alerts.

To stick a notification to the bottom of the screen, add the `.notify--bottom` class to `.notify`.

### Example
<div class="library__example" style="margin-bottom: 60px; top: 16px !important;">
    <div style="position: relative; height: 60px;">
        <div class="notify-container">
            <div class="notify notify-info" style="display: block; top: 16px !important;">
                <div class="text"><i class="fa fa-info-circle"></i> Password changes can take up to 30 minutes to take effect.</div>
                <div class="close"><i class="fa fa-times-circle"></i></div>
            </div>
        </div>
    </div>
    <div style="position: relative; height: 60px;">
        <div class="notify-container">
            <div style="display: block !important; top: 16px !important;" class="notify notify-alert notify-alert-multiple">
                <div class="text"><i class="fa fa-warning"></i> CDR could not be downloaded <span class="badge">3</span></div>
                <div class="close"><i class="fa fa-times-circle"></i></div>
            </div>
        </div>
    </div>
    <div style="position: relative; height: 60px;">
        <div class="notify-container">
            <div style="display: block !important; top: 16px !important;" class="notify notify-alert">
                <div class="text"><i class="fa fa-warning"></i> Please correct the errors in the form before saving.</div>
                <div class="close"><i class="fa fa-times-circle"></i></div>
            </div>
        </div>
    </div>
    <div style="position: relative; height: 60px;">
        <div class="notify-container">
            <div style="display: block !important; top: 16px !important;" class="notify notify-success">
                <div class="text"><i class="fa fa-check-circle"></i> Changes saved.</div>
            </div>
        </div>
    </div>
    <div style="position: relative; height: 60px;">
        <div class="notify-container">
            <div style="display: block !important; top: 16px !important;" class="notify notify-system">
                <div class="text"><i class="fa fa-exclamation-circle"></i> We were unable to save the changes. Please try again later.</div>
                <div class="close"><i class="fa fa-times-circle"></i></div>
            </div>
        </div>
    </div>
</div>

### Code
```html
<div class="notify-container">
    <div class="notify notify-info">
        <div class="text"><i class="fa fa-info-circle"></i> <!-- info message --> </div>
        <div class="close"><i class="fa fa-times-circle"></i></div>
    </div>
    <div class="notify notify-alert notify-alert-multiple">
        <div class="text"><i class="fa fa-warning"></i> <!-- message --> <span class="badge"><!-- count --></span></div>
        <div class="close"><i class="fa fa-times-circle"></i></div>
    </div>
    <div class="notify notify-alert">
        <div class="text"><i class="fa fa-warning"></i> <!-- validation message --></div>
        <div class="close"><i class="fa fa-times-circle"></i></div>
    </div>
    <div class="notify notify-success">
        <div class="text"><i class="fa fa-check-circle"></i> <!-- success message --></div>
    </div>
    <div class="notify notify-system">
        <div class="text"><i class="fa fa-exclamation-circle"></i> <!-- system message --></div>
        <div class="close"><i class="fa fa-times-circle"></i></div>
    </div>
</div>
```
{{/markdown}}

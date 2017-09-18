---
title: User Profile
---
{{#markdown}}
## User Profile

Display the name of the logged in user as well as access to settings for that user.

### Example
<div class="library__example" style="margin-bottom: 120px;">
    <ul class="nav navbar-nav">
        <li class="dropdown current-user-dropdown open">
            <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#" aria-expanded="true">
                <img src="http://fillmurray.com/16/16" style="margin-right: 5px; border-radius: 4px;">
                <span class="username">H. Schrader</span>
                <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#/pages/profile/notifications.html">Profile</a>
                </li>
                <li>
                    <a href="FirstTime/#/Login.html">Log Out</a>
                </li>
            </ul>
        </li>
    </ul>
</div>

### Code
```html
<li class="dropdown current-user-dropdown">
    <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#" aria-expanded="true">
        <img src="" style="margin-right: 5px; border-radius: 4px;">
        <span class="username"><!-- Username --></span>
        <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
        <li>
            <a href=""><!-- User Link --></a>
        </li>
        <li>
            <a href="">Log Out</a>
        </li>
    </ul>
</li>
```
{{/markdown}}
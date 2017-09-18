---
title: Visit Summary
---
{{#markdown}}
Display an error message below a field so the user can be notified of how to fix the erro.

### Example
<div class="library__example" style="margin-bottom: 60px;">
    <div class="row visit-schedule-list hvr-grow">
        <div class="col-md-2">
            <div class="time">3:00 p.m.</div>
            <div class="location">Remote</div>
            <div class="small">30 min. visit</div>
        </div>
        <div class="col-md-4 details-box">
            <div>
                <img src="http://placecage.com/50/50">
            </div>
            <div class="details">
                <dl class="dl-horizontal visit-info">
                    <dt>Visitor:</dt>
                    <dd><a href="#/pages/search/inmates/profile/">Saul Goodman</a>
                    </dd>
                </dl>
                <dl class="dl-horizontal visit-info">
                    <dt class="small text-muted">Email:</dt>
                    <dd class="small text-muted">saul@bettercallme.com</dd>
                </dl>
            </div>
        </div>
        <div class="col-md-4 details-box">
            <div>
                <img src="http://fillmurray.com/50/50">
            </div>
            <div class="details">
                <dl class="dl-horizontal visit-info">
                    <dt>Inmate:</dt>
                    <dd><a href="#/pages/search/inmates/profile/">Mike Ehrmantraut</a>
                    </dd>
                </dl>
                <dl class="dl-horizontal visit-info">
                    <dt class="small text-muted">ID:</dt>
                    <dd class="small text-muted">26234523455</dd>
                </dl>
                <dl class="dl-horizontal visit-info dropdown">
                    <dt class="small text-muted">Terminal:</dt>
                    <div class="dropdown">
                        <dd class="small">
                            <a class="dropdown-toggle" data-toggle="dropdown">HU09-A4-15 <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li><a role="menuitem" href="#">HU16-B2-15</a>
                                </li>
                                <li><a role="menuitem" href="#">HU16-B2-21</a>
                                </li>
                                <li><a role="menuitem" href="#">HU16-B2-32</a>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        <div class="col-md-2">
            <div class="status">In Progress <span><a>View now →</a></span></div>
        </div>
    </div>
</div>

### Code
```html
<div class="row visit-schedule-list hvr-grow">
    <div class="col-md-2">
        <div class="time"><!-- Time --></div>
        <div class="location"><!-- Location --></div>
        <div class="small"><!-- duration of visit --> visit</div>
    </div>
    <div class="col-md-4 details-box">
        <div>
            <!-- Image of visitor -->
        </div>
        <div class="details">
            <dl class="dl-horizontal visit-info">
                <dt>Visitor:</dt>
                <dd><a href=""><!-- Visitor Name --></a>
                </dd>
            </dl>
            <dl class="dl-horizontal visit-info">
                <dt class="small text-muted">Email:</dt>
                <dd class="small text-muted"><!-- Visitor Email --></dd>
            </dl>
        </div>
    </div>
    <div class="col-md-4 details-box">
        <div>
            <!-- Inmate Photo -->
        </div>
        <div class="details">
            <dl class="dl-horizontal visit-info">
                <dt>Inmate:</dt>
                <dd><a href=""><!-- Inmate Name --></a>
                </dd>
            </dl>
            <dl class="dl-horizontal visit-info">
                <dt class="small text-muted">ID:</dt>
                <dd class="small text-muted"><!-- Inmate ID --></dd>
            </dl>
            <dl class="dl-horizontal visit-info dropdown">
                <dt class="small text-muted">Terminal:</dt>
                <div class="dropdown">
                    <dd class="small">
                        <a class="dropdown-toggle" data-toggle="dropdown">
                            <!-- Terminal -->
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                            <li>
                            <a role="menuitem" href="#"><!-- Other Terminal --></a>
                            </li>
                        </ul>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
    <div class="col-md-2">
        <div class="status"><!-- Status of visit --> <span><a>View now →</a></span></div>
    </div>
</div>
```
{{/markdown}}
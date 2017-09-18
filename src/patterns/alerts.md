---
title: Alerts
---

{{#markdown}}
Display an alert for the user for a long running task, where it might take several minutes to hours before the system comes back with results.

### Example
<div class="library__example">
    <div class="col-xs-12">
        <div class="navbar-right">
            <ul class="nav navbar-nav">
                <li class="dropdown open">
                    <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon active" href="#" aria-expanded="true">
                        <i class="fa fa-bell fa-flip-horizontal animated swing"></i>
                        <span>5</span>
                    </a>
                    <ul class="dropdown-menu alert">
                        <li class="header">You have 1 new alert</li>
                        <!-- Video download link. -->
                        <li class="item">
                            <a href="#">
                                <div class="icon">
                                    <i class="fa fa-video-camera fa-2x"></i>
                                </div>
                                <div class="description">
                                    <div class="date-time">9-7-2014 at 12:59 p.m.</div>
                                    <div class="summary"><b>Inmate video</b> is ready for download</div>
                                </div>
                            </a>
                        </li>
                        <!-- Video download link. -->
                        <!-- CD Image link. -->
                        <li class="item">
                            <a href="#">
                                <div class="icon">
                                    <i class="fa securus-cd-image fa-2x"></i>
                                </div>
                                <div class="description">
                                    <div class="date-time">9-7-2014 at 12:59 p.m.</div>
                                    <div class="summary">CD Image: <b>Chavez Case</b> is ready for download</div>
                                </div>
                            </a>
                        </li>
                        <!-- CD Image link. -->
                        <!-- CD Image couldn't be created alert. Note: no link -->
                        <li class="item">
                            <a href="#">
                                <div class="icon">
                                    <i class="fa fa-warning fa-2x"></i>
                                </div>
                                <div class="description">
                                    <div class="date-time">9-7-2014 at 12:59 p.m.</div>
                                    <div class="summary">CD Image: <b>Chavez Case</b> failed. Try again later.</div>
                                </div>
                            </a>
                        </li>
                        <!-- CD Image couldn't be created alert. Note: no link -->
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>

### Code
```html
<a data-toggle="dropdown" class="dropdown-toggle right-nav-icon active" href="#" aria-expanded="true">
    <i class="fa fa-bell fa-flip-horizontal animated swing"></i>
    <span><!-- alert count --></span>
</a>
<ul class="dropdown-menu alert">
    <li class="header">You have <!-- alert count --> new alert</li>
    <li class="item">
        <a href="#">
            <div class="icon">
                <i class="fa fa-video-camera fa-2x"></i>
            </div>
            <div class="description">
                <div class="date-time"></div>
                <div class="summary"><b><!--object--></b> is ready for <!--action--></div>
            </div>
        </a>
    </li>
    <li class="item">
        <a href="#">
            <div class="icon">
                <i class="fa fa-cd-image fa-2x"></i>
            </div>
            <div class="description">
                <div class="date-time">9-7-2014 at 12:59 p.m.</div>
                <div class="summary">CD Image: <b>Chavez Case</b> is ready for download</div>
            </div>
        </a>
    </li>
    <!-- CD Image link. -->
    <!-- CD Image couldn't be created alert. Note: no link -->
    <li class="item">
        <a href="#">
            <div class="icon">
                <i class="fa fa-warning fa-2x"></i>
            </div>
            <div class="description">
                <div class="date-time">9-7-2014 at 12:59 p.m.</div>
                <div class="summary">CD Image: <b>Chavez Case</b> failed. Try again later.</div>
            </div>
        </a>
    </li>
    <!-- CD Image couldn't be created alert. Note: no link -->
</ul>
```
{{/markdown}}
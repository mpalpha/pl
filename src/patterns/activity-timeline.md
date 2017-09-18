---
title: Activity Timeline
---

{{#markdown}}
Display a timeline of activity for a person (in NextGen, the inmate).

### Example
<div class="library__example" style="margin-bottom: 60px; width: 60%;">
    <ul class="timeline">
        <li class="timeline-inverted">
            <div class="timeline-badge badge-date collapsed"><i class="fa fa-calendar"></i>
            </div>
            <div class="timeline-panel collapsed timeline-date">
                <div class="timeline-heading clearfix">
                    <h4 class="timeline-title pull-left">Upcoming</h4>
                </div>
            </div>
        </li>
        <li class="timeline-inverted">
            <div class="timeline-badge primary collapsed"><i class="fa fa-video-camera"></i>
                <sm></sm>
            </div>
            <div class="timeline-panel collapsed">
                <div class="timeline-heading clearfix">
                    <h4 class="timeline-title pull-left">
                        <a href="#" class="play-murray btn-play"><i class="fa fa-play-circle" style="font-size: 22px;"></i></a>
                        Visit with Sarah McCaulkin <i class="fa securus-building8" data-toggle="tooltip" title="" data-original-title="On Site Visit"></i>
                        <small class="text-muted">• in 3 days</small>
                    </h4>
                    <div class="pull-right expand-icon"><a href="#"><i class="fa fa-chevron-down fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-inverted">
            <div class="timeline-badge badge-date collapsed"><i class="fa fa-calendar"></i>
            </div>
            <div class="timeline-panel collapsed timeline-date">
                <div class="timeline-heading clearfix">
                    <h4 class="timeline-title pull-left">Completed Today</h4>
                </div>
            </div>
        </li>
        <li class="timeline-inverted">
            <div class="timeline-badge info collapsed"><i class="fa securus-private-call"></i>
                <sm></sm>
            </div>
            <div class="timeline-panel collapsed">
                <div class="timeline-heading clearfix">
                    <h4 class="timeline-title pull-left">
                        Call to (505) 842-5662
                        <small class="text-muted">• 1 hour ago</small>
                    </h4>
                    <div class="pull-right expand-icon"><a href="#"><i class="fa fa-chevron-down fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-inverted">
            <div class="timeline-badge primary collapsed"><i class="fa fa-phone"></i>
                <sm></sm>
            </div>
            <div class="timeline-panel collapsed">
                <div class="timeline-heading clearfix">
                    <h4 class="timeline-title pull-left">
                        <a href="#" class="play-murray btn-play"><i class="fa fa-play-circle" style="font-size: 22px;"></i></a>
                        Call to (940) 394-2591 <i class="fa securus-mobile-phone-custom" data-toggle="tooltip" title="" data-original-title="Mobile Phone"></i>
                        <small class="text-muted">• 11 hours ago</small>
                    </h4>
                    <div class="pull-right expand-icon"><a href="#"><i class="fa fa-chevron-down fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <p>&nbsp;</p>
    <h2>Expanded View</h2>
    <ul class="timeline">
        <li class="timeline-inverted">
            <div class="timeline-badge warning collapsed"><i class="fa fa-home"></i>
            </div>
            <div class="timeline-panel collapsed">
                <div class="timeline-heading clearfix">
                    <h4 class="timeline-title pull-left">Unsuspended
                        <small class="text-muted">• 13 hours ago</small>
                    </h4>
                    <div class="pull-right expand-icon clicked"><a href="#"><i class="fa fa-chevron-down fa-lg"></i></a>
                    </div>
                </div>
                <div class="timeline-body" style="display: block;">
                    <p><a href="#"><b>jvalentine</b></a> unsuspended Kevin McCaulkin.</p>
                    <dl class="dl-horizontal post-beta">
                        <dt><b>Comment:</b>
                        </dt>
                        <dd>Inmate was verbally abusive to Deputy Burton.
                        </dd>
                    </dl>
                    <p>
                        <small class="text-muted">Suspension was initiated on 8-19-2014.</small>
                    </p>
                </div>
            </div>
        </li>
    </ul>
</div>

### Code
```html
 <ul class="timeline">
    <li class="timeline-inverted">
        <div class="timeline-badge badge-date collapsed"><i class="fa fa-calendar"></i>
        </div>
        <div class="timeline-panel collapsed timeline-date">
            <div class="timeline-heading clearfix">
                <h4 class="timeline-title pull-left">Upcoming</h4>
            </div>
        </div>
    </li>
    <li class="timeline-inverted">
        <div class="timeline-badge primary collapsed">
            <!-- Replace fa-video-camera with the appropriate icon below -->
            <i class="fa fa-video-camera"></i>
            <sm></sm>
        </div>
        <div class="timeline-panel collapsed">
            <div class="timeline-heading clearfix">
                <h4 class="timeline-title pull-left">
                    <!-- Title goes here -->
                    <small class="text-muted">• <!-- nn hours/days ago --></small>
                </h4>
                <div class="pull-right expand-icon">
                    <a href="#"><i class="fa fa-chevron-down fa-lg"></i></a>
                </div>
            </div>
        </div>
    </li>
</ul>
```
{{/markdown}}
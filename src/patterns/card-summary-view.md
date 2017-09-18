---
title: Card Summary View
---
{{#markdown}}
Display a summary of information that a user can then view additional details on.

### Problem summary
The user needs to browse content of varying types and length.

### Usage
* Use to display content composed of different elements
* Use to showcase elements whose size or supported actions vary – like photos with captions of variable length.
* Use when displaying content that…
    * As a collection, consists of multiple data types (images, movies, text)
    * Doesn't require direct comparison
    * Supports content of highly variable length (captions, comments)
    * Contains interactive content
* Use to visually group digestible portions of information that call for an action; like accepting a request, or accessing more details.
* Use to gather various pieces of information about a single subject to form one coherent piece of content.
* Cards are better suited when users browse for information than when they search.
* Cards work best for collections of heterogeneous items (when not all the content is of the same basic type).

### Example
<div class="library__example">
<div class="row">
    <div class="col-md-3">
    <div class="panel panel-default">
        <div class="panel-heading clearfix">
            <a href="#/pages/manage/call-settings/call-restrictions/add/"><b class="pull-left">No calls allowed</b><span class="pull-right"><i class="fa fa-pencil"></i></span></a>
        </div>
        <div class="panel-body call-restriction-panel">
            <div class="call-restriction-detail">
                <p>Inmates are allowed to make <b>all call types</b> and are limited to:</p>
                <ul class="restriction">
                    <li><b>unlimited</b> call attempts...</li>
                    <li>with <b>unlimited</b> successful connections...</li>
                    <li>and are allowed <b>1</b> minutes of total call time.</li>
                </ul>
                <p>This restriction resets every <b>week</b> on <b>Tuesday.</b>
                </p>
            </div>
            <ul class="settings-panel-details">
                <li> <i class="fa fa-check-circle"></i>Active on:
                </li>
                <li><i class="fa fa-building-o"></i>Sites <span class="badge">3</span>
                </li>
                <li><i class="fa fa-sitemap"></i>Terminal Groups <span class="badge">8</span>
                </li>
                <li><i class="fa fa-phone"></i>Terminals <span class="badge">12</span>
                </li>
                <li><i class="fa securus-inmate"></i>Inmates <span class="badge">23</span>
                </li>
            </ul>
        </div>
    </div>
    </div>
    <div class="row">
</div>

### Code
```html
<div class="panel panel-default">
    <div class="panel-heading clearfix">
        <a href=""><b class="pull-left">Title</b><span class="pull-right"><i class="fa fa-pencil"></i></span></a>
    </div>
    <div class="panel-body">
        <div class="">
            Summary of settings.
        </div>
        <!-- Optional section if settings are applied to multiple classes of entities -->
        <ul class="settings-panel-details">
            <li> <i class="fa fa-check-circle"></i>Active on:
            </li>
            <li><i class="fa fa-building-o"></i>Sites <span class="badge">3</span></li>
        </ul>
        <!-- Optional section if settings are applied to multiple classes of entities -->
    </div>
</div>
```
{{/markdown}}
---
title: Contextual Filter
---
{{#markdown}}
Display a list of filters that the user can use to drill down the search results to a more limited set of records.

### Example
<div class="library__example">
    <div class="panel panel-default panel-filters js-yes-filters margin-top-20">
        <h3 class="panel-title clearfix">
            <span class="js-no-results">Refine by:</span>
            <a href="#" class="js-toggle-filters pull-right">Expand All</a>
        </h3>
        <div class="panel-body">
            <!-- Filter by Geo Location -->
            <div>
                <h4 class="panel-header">
                    <a data-toggle="collapse" href="#filter-geo-location">
                        Geo Location
                       <div class="pull-right">
                            <span class="toggle-hide"></span>
                            <span class="toggle-show"></span>
                       </div>
                    </a>
                </h4>
                <div class="collapse" id="filter-geo-location">
                    <div class="filter-select filter-status">
                        <label><input type="checkbox"> No Geo Location</label>
                        <label><input type="checkbox"> Geo Location </label>
                    </div>
                </div>
            </div>
            <!-- Filter by Inmate ID -->
            <div>
                <h4 class="panel-header">
                    <a data-toggle="collapse" href="#filter-custody-account">
                        Inmate ID
                        <div class="pull-right">
                            <span class="toggle-hide"></span>
                            <span class="toggle-show"></span>
                        </div>
                    </a>
                </h4>
                <div class="collapse" id="filter-custody-account">
                    <div class="filter-search">
                        <input type="text" class="form-control" placeholder="Search">
                        <span class="fa fa-search filter-search-icon"></span>
                    </div>
                    <div class="filter-select filter-custody">
                        <label><input type="checkbox">244893726</label>
                        <label><input type="checkbox">413222849</label>
                        <label><input type="checkbox">195968427</label>
                        <label><input type="checkbox">370232884</label>
                        <label><input type="checkbox">771717072</label>
                        <label><input type="checkbox">376309599</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Code
```html
<div class="panel panel-default panel-filters js-yes-filters margin-top-20">
    <h3 class="panel-title clearfix">
        <span class="js-no-results">Refine by:</span>
        <a href="#" class="js-toggle-filters pull-right">Expand All</a>
    </h3>
    <div class="panel-body">
        <div>
            <h4 class="panel-header">
                <a data-toggle="collapse" href="#filter-custody-account">
                    Inmate ID
                    <div class="pull-right">
                        <span class="toggle-hide"></span>
                        <span class="toggle-show"></span>
                    </div>
                </a>
            </h4>
            <div class="collapse" id="filter-custody-account">
                <div class="filter-search">
                    <input type="text" class="form-control" placeholder="Search">
                    <span class="fa fa-search filter-search-icon"></span>
                </div>
                <div class="filter-select filter-custody">
                    <label><input type="checkbox"></label>
                </div>
            </div>
        </div>
    </div>
</div>
```
{{/markdown}}
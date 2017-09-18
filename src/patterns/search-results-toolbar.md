---
title: Search Results Toolbar
---
{{#markdown}}
Displays a list of options that applies to the search results. This includes things like number of records in the results, export,
and batch process multiple records (e.g. to save to a CD, or tag multiple records in one go).

Note that any options that require one or more records be selected first (e.g. batch processing) should be disabled when the control first loads.

### Example
<div class="library__example">
    <div class="panel panel-action clearfix">
        <div class="results-number-container pull-left">
            <span class="results-number">1038</span>&nbsp;
            <span class="results-label">Results</span>
        </div>
        <div class="btn-group btn-group pull-right">
            <div class="btn-group btn-export-results">
                <button class="btn btn-link dropdown-toggle disabled" data-toggle="dropdown">
                    Export Results
                    <i class="fa fa-caret-down"></i>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#">CSV</a>
                    </li>
                    <li><a href="#">Excel</a>
                    </li>
                    <li><a href="#">PDF</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

### Code
```html
<div class="panel panel-action clearfix">
    <div class="results-number-container pull-left">
        <span class="results-number" data-count="1005">1038</span>&nbsp;
        <span class="results-label">Results</span>
    </div>
    <div class="btn-group btn-group pull-right">
        <div class="btn-group btn-export-results">
            <button class="btn btn-link dropdown-toggle disabled" data-toggle="dropdown">
                Export Results
                <i class="fa fa-caret-down"></i>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#">CSV</a>
                </li>
                <li><a href="#">Excel</a>
                </li>
                <li><a href="#">PDF</a>
                </li>
            </ul>
        </div>
    </div>
</div>
```
{{/markdown}}
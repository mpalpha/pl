---
title: Context Drilldown
---
{{#markdown}}
Special breadcrumb for drilling down to a specific context in a hierarchy. For example, in NextGen, this control is used on Live Monitor
to drill down to a specific site, terminal group or terminal in a facility.

### Example
<div class="library__example">
    <div class="breadcrumb live-monitor">
        <h2>
            Activity at:
        </h2>
        <ul>
            <li>
                <i class="fa securus-facility"></i> CI Eden
            </li>
            <li>
                <i class="fa securus-building8"></i>
                <select class="form-control live-monitor-site">
                    <option>King County Community Correction</option>
                    <option>Collin County Jail</option>
                    <option selected="">Frisco City Jail</option>
                </select>
            </li>
            <li>
                <i class="fa fa-sitemap"></i>
                <select class="form-control">
                    <option>All Terminal Groups</option>
                    <option>Primary</option>
                    <option>Restricted</option>
                </select>
            </li>
            <li>
                <i class="fa fa-phone"></i>
                <select class="form-control">
                    <option>All Terminals</option>
                    <option>Active Terminals</option>
                    <option>HU16-B2-1</option>
                    <option>HU16-B2-2</option>
                    <option>HU16-B2-3</option>
                    <option>HU16-B2-4</option>
                    <option>HU16-B2-5</option>
                    <option>HU16-B2-6</option>
                </select>
            </li>
        </ul>
    </div>
</div>

### Code
```html
<div class="breadcrumb live-monitor">
    <h2>
        Activity at:
    </h2>
    <ul>
        <li>
            <i class="fa fa-facility"></i> CI Eden
        </li>
        <li>
            <i class="fa fa-building8"></i>
            <select class="form-control live-monitor-site">
                <option>King County Community Correction</option>
                <option>Collin County Jail</option>
                <option selected="">Frisco City Jail</option>
            </select>
        </li>
        <li>
            <i class="fa fa-sitemap"></i>
            <select class="form-control">
                <option>All Terminal Groups</option>
                <option>Primary</option>
                <option>Restricted</option>
            </select>
        </li>
        <li>
            <i class="fa fa-phone"></i>
            <select class="form-control">
                <option>All Terminals</option>
                <option>Active Terminals</option>
                <option>HU16-B2-1</option>
                <option>HU16-B2-2</option>
                <option>HU16-B2-3</option>
                <option>HU16-B2-4</option>
                <option>HU16-B2-5</option>
                <option>HU16-B2-6</option>
            </select>
        </li>
    </ul>
</div>
```
{{/markdown}}

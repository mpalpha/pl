---
title: Select Entities
---
{{#markdown}}
Show the various entities that a setting has been applied to. For example, Call Restrictions can be applied to Facilities, Sites, and Inmates.

### Example
<div class="library__example">
    <h4 class="settings-headline">
        <div class="step-style">3</div>
        <span class="location-selected">Apply restriction</span>
        <button class="btn btn-link pull-right" data-toggle="modal" data-target="#addCallRestriction">
            <span class="no-location-selected" style="display: inline;"><i class="fa fa-pencil"></i> &nbsp;Manage</span>
        </button>
    </h4>
    <div class="location-selected">
        <p>You can apply call restrictions to facilities, sites, terminal groups, or inmates.</p>
        <p><a data-toggle="modal" data-target="#addCallRestriction" class="btn-add-location">Apply this restriction now
            →</a>
        </p>
    </div>
    <p>&nbsp;</p>
    <h4 class="settings-headline">
        <div class="step-style">3</div>
        <span class="location-selected">Apply restriction</span>
        <span class="no-location-selected" style="display: inline;">Applied locations</span>
        <button class="btn btn-link pull-right" data-toggle="modal" data-target="#addCallRestriction">
            <span class="no-location-selected" style="display: inline;"><i class="fa fa-pencil"></i> &nbsp;Manage</span>
        </button>
    </h4>
    <!-- multi-level menu -->
    <div>
        <ul class="bsnav bsnav-pills bsnav-stacked">
            <li class="sub-menu facilities-nav admin-nav active">
                <a href="#" class="toggle-sub">
                    <i class="fa securus-facility"></i> &nbsp;&nbsp;&nbsp;
                    <span>Facilities</span>&nbsp;
                    <span class="badge">1</span>
                </a>
                <ul class="bsnav bsnav-pills bsnav-stacked sub site-list facility-nav-padding" style="display: block;">
                    <li><a href="#">CI Eden</a>
                    </li>
                </ul>
            </li>
            <li class="sub-menu sites-nav cdr-nav">
                <a href="#" class="toggle-sub">
                    <i class="fa fa-building-o"></i> &nbsp;
                    <span>Sites</span>&nbsp;
                    <span class="badge">5</span>
                </a>
                <ul class="bsnav bsnav-pills bsnav-stacked sub phone-sites-list facility-nav-padding"
                    style="display: none;">
                    <li><a href="#">Belknap Unit</a></li>
                    <li><a href="#">Cold Springs Unit</a></li>
                    <li><a href="#">Collin County Jail</a></li>
                    <li><a href="#">Lon Evans Corrections Center</a></li>
                    <li><a href="#">Tarrant County Jail Corrections Center</a></li>
                </ul>
            </li>
            <li class="sub-menu inmates-nav monitor-nav">
                <a href="#" class="toggle-sub">
                    <i class="fa securus-inmate"></i> &nbsp;
                    <span>Inmates</span>&nbsp;
                    <span class="badge">12</span>
                </a>
                <ul class="bsnav bsnav-pills bsnav-stacked sub terminal-list facility-nav-padding" style="display: none;">
                    <div class="filter-search">
                        <input type="text" class="form-control" placeholder="Search">
                        <span class="fa fa-search filter-search-icon"></span>
                    </div>
                    <li><a href="#">Canfield, Justin</a></li>
                    <li><a href="#">Fittipaldi, Emerson</a></li>
                    <li><a href="#">Cestarte, Jay</a></li>
                    <li><a href="#">Gupta, Dev</a></li>
                    <li><a href="#">Jones, Aaron</a></li>
                    <li><a href="#">Hill, Graham</a></li>
                </ul>
            </li>
            <li class="sub-menu geofences-nav monitor-nav">
                <a href="#" class="toggle-sub">
                    <i class="fa securus-geofence"></i> &nbsp;
                    <span>Geofences</span>&nbsp;
                    <span class="badge">2</span>
                </a>
                <ul class="bsnav bsnav-pills bsnav-stacked sub geofences-list facility-nav-padding" style="display: none;">
                    <div class="filter-search">
                        <input type="text" class="form-control" placeholder="Search">
                        <span class="fa fa-search filter-search-icon"></span>
                    </div>
                    <li><a href="#">Rockwall LBS</a></li>
                    <li><a href="#">Frisco City Jail</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>

### Code
```html
<h4 class="settings-headline">
      <div class="step-style">3</div>
      <span class="location-selected">Apply restriction</span>
      <span class="no-location-selected" style="display: inline;">Applied locations</span>
      <button class="btn btn-link pull-right" data-toggle="modal" data-target="#addCallRestriction">
          <span class="no-location-selected" style="display: inline;"><i class="fa fa-pencil"></i> &nbsp;Manage</span>
      </button>
  </h4>

<div class="location-selected">
    <p>You can apply call restrictions to facilities, sites, terminal groups, or inmates.</p>
    <p><a data-toggle="modal" data-target="#addCallRestriction" class="btn-add-location">Apply this restriction now →</a>
    </p>
</div>


<!-- multi-level menu -->
<div>

    <ul class="bsnav bsnav-pills bsnav-stacked">

        <li class="sub-menu facilities-nav admin-nav active">
            <a href="#" class="toggle-sub">
                <i class="fa fa-facility"></i> &nbsp;&nbsp;&nbsp;
                <span>Facilities</span>&nbsp;
                <span class="badge">1</span>
            </a>
            <ul class="bsnav bsnav-pills bsnav-stacked sub site-list facility-nav-padding" style="display: block;">
                <li><a href="#">CI Eden</a>
                </li>
            </ul>
        </li>

        <li class="sub-menu sites-nav cdr-nav">
            <a href="#" class="toggle-sub">
                <i class="fa fa-building-o"></i> &nbsp;
                <span>Sites</span>&nbsp;
                <span class="badge">5</span>
            </a>
            <ul class="bsnav bsnav-pills bsnav-stacked sub phone-sites-list facility-nav-padding" style="display: none;">
                <li><a href="#">Belknap Unit</a>
                </li>
                <li><a href="#">Cold Springs Unit</a>
                </li>
                <li><a href="#">Collin County Jail</a>
                </li>
                <li><a href="#">Lon Evans Corrections Center</a>
                </li>
                <li><a href="#">Tarrant County Jail Corrections Center</a>
                </li>
            </ul>
        </li>

        <li class="sub-menu inmates-nav monitor-nav">
            <a href="#" class="toggle-sub">
                <i class="fa fa-inmate"></i> &nbsp;
                <span>Inmates</span>&nbsp;
                <span class="badge">12</span>
            </a>
            <ul class="bsnav bsnav-pills bsnav-stacked sub terminal-list facility-nav-padding" style="display: none;">
                <div class="filter-search">
                    <input type="text" class="form-control" placeholder="Search">
                    <span class="fa fa-search filter-search-icon"></span>
                </div>
                <li><a href="#">Canfield, Justin</a>
                </li>
                <li><a href="#">Fittipaldi, Emerson</a>
                </li>
                <li><a href="#">Cestarte, Jay</a>
                </li>
                <li><a href="#">Gupta, Dev</a>
                </li>
                <li><a href="#">Jones, Aaron</a>
                </li>
                <li><a href="#">Hill, Graham</a>
                </li>
            </ul>
        </li>

        <li class="sub-menu geofences-nav monitor-nav">
            <a href="#" class="toggle-sub">
                <i class="fa fa-geofence"></i> &nbsp;
                <span>Geofences</span>&nbsp;
                <span class="badge">2</span>
            </a>
            <ul class="bsnav bsnav-pills bsnav-stacked sub geofences-list facility-nav-padding" style="display: none;">
                <div class="filter-search">
                    <input type="text" class="form-control" placeholder="Search">
                    <span class="fa fa-search filter-search-icon"></span>
                </div>
                <li><a href="#">Rockwall LBS</a></li>
                <li><a href="#">Frisco City Jail</a></li>

            </ul>
        </li>


    </ul>
</div>
```
{{/markdown}}
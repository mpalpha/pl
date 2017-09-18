---
title: Global Navigation
---
{{#markdown}}
DESCRIPTION

Navbar dropdowns works by adding the "open" class to the corresponding li tag.

### Example

<div class="library__example">

  <div id="exampleNavBar" class="navbar" role="navigation" style="z-index: 1">
      <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar icon-bar--whiteOut"></span>
                  <span class="icon-bar icon-bar--whiteOut"></span>
                  <span class="icon-bar icon-bar--whiteOut"></span>
              </button>
              <a class="logo" href="#/Home.html">Securus Technologies</a>
          </div>
          <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                  <!-- Dashboard -->
                  <li>
                      <a href="#/pages/dashboard/">
                          <div class="divider divider-first">
                              <span class="fa fa-dashboard"></span>Dashboard
                          </div>
                      </a>
                  </li>
                  <!-- Monitor Activity -->
                  <li>
                      <a href="#/pages/monitor/">
                          <div class="divider">
                              <span class="fa fa-bar-chart-o"></span>Monitor
                          </div>
                      </a>
                  </li>
                  <!-- Searches -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <div class="divider">
                              <span class="fa fa-search"></span>Search<b class="caret"></b>
                          </div>
                      </a>
                      <ul class="dropdown-menu dropdown--cropped">
                          <li>
                              <a href="#/pages/search/inmates/">Inmates</a>
                          </li>
                          <li>
                              <a href="#/pages/search/communication/">Communication Records</a>
                          </li>
                          <li>
                              <a href="#/pages/search/system-logs/">System Logs</a>
                          </li>
                          <li>
                              <a href="#/pages/search/debit-transactions/">Debit Transactions</a>
                          </li>
                          <li>
                              <a href="#/pages/search/debit-balance/">Inmate Balance</a>
                          </li>
                      </ul>
                  </li>
                  <!-- Investigate -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <div class="divider">
                              <span class="fa fa-eye"></span>
                              <span>Investigate <i class="caret"></i>
                          </span>
                          </div>
                      </a>
                      <ul class="dropdown-menu dropdown--cropped">
                          <li><a href="#">Investigator Pro</a>
                          </li>
                          <li><a href="#/pages/investigate/lbs/">Location Based Services</a>
                          </li>
                          <li><a href="#">THREADS</a>
                          </li>
                      </ul>
                  </li>
                  <!-- Visitation -->
                  <li>
                      <a href="#/pages/visits/">
                          <div class="divider">
                              <span class="fa securus-webcam"></span>Visits</div>
                      </a>
                  </li>
                  <!-- Manage -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <div class="divider divider-last">
                              <span class="fa fa-gear"></span>Manage<b class="caret"></b>
                          </div>
                      </a>
                      <ul class="dropdown-menu dropdown--cropped">
                          <li>
                              <a href="#/pages/manage/facility-and-sites/facility">Facility and Sites</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/phone-numbers/blocked-numbers">Phone Numbers</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/call-settings/call-forward-numbers">Call Settings</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/grievances/">Grievances <span class="badge">13</span></a>
                          </li>
                          <li>
                              <a href="#/pages/manage/sick-calls/">Sick Forms</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/commissary/">Commissary Requests</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/visitors/">Visitors</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/visitor-types/">Visitor Types</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/visit-settings/visit-restrictions">Visit Settings</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/security-roles/">Security Roles</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/users/">Users</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="http://10.88.14.20:7006/eimport/login/entrypage.jsp;jsessionid=tTZGT1GLJyCQ3fbhKHJ4TJhG9tZH2GJj!-1754741843!377768658">E-Import Admin Tool</a>
                          </li>
                      </ul>
                  </li>
                  <!-- Management Level -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle mgmt-level" data-toggle="dropdown">
                          <div class="mgmt-level-button">
                              <div class="mgmt-level-icon">
                                  <i class="mgmt-level-icon-facility fa securus-facility fa-2x"></i>
                                  <i class="mgmt-level-icon-site fa securus-building8 fa-2x" style="display: none;"></i>
                              </div>
                              <div class="mgmt-level-text" data-placement="bottom" data-toggle="tooltip" title="" data-original-title="" tooltip="CI Eden">
                                  <span>CI Eden</span>
                              </div>
                              <div>
                                  <b class="caret"></b>
                              </div>
                          </div>
                      </a>
                      <ul class="mgmt-level-dropdown mgmt-level-dropdown-global-nav" style="display: none;">
                          <li>
                              <div class="form-horizontal">
                                  <div class="form-group">
                                      <label for="FacilityContext"><i class="fa securus-facility"></i>
                                          <span>Facility</span>
                                      </label>
                                      <select id="FacilityContext" class="form-control mgmt-level-select-facility"><option>CI Eden</option><option>RO South Central</option><option>FCC Three Rivers</option></select>
                                  </div>
                                  <div class="form-group">
                                      <label for="SiteContext"><i class="fa securus-building8"></i>Site</label>
                                      <select id="SiteContext" class="form-control mgmt-level-select-site"><option>All Sites</option><option>King County Community Correction Div Wrk Rel, WA</option><option>Collin County Jail</option><option>Frisco City Jail</option></select>
                                  </div>
                                  <div class="form-group">
                                      <a href="#" class="update-mgmt-context btn btn-success form-update-btn">Update</a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </li>
              </ul>
              <div class="navbar-right">
                  <ul class="nav navbar-nav">
                      <li class="dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon active" href="#">
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
                      <li class="dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#">
                              <i class="fa fa-question-circle"></i>
                          </a>
                          <ul class="dropdown-menu">
                              <li>
                                  <a href=" #/pages/profile/">Frequently Asked Questions</a>
                              </li>
                              <li>
                                  <a href="#">Help</a>
                              </li>
                              <li>
                                  <a href="#/pages/help">Service Tickets</a>
                              </li>
                          </ul>
                      </li>
                      <li class="dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#">
                              <i class="fa fa-wrench"></i>
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                                <a href="#/pages/admin/users/">All Users</a>
                            </li>
                            <li>
                                <a href="#/pages/admin/facilities/">All Facilities</a>
                            </li>
                            <li>
                                <a href="#/pages/admin/security-roles/">Securus Security Roles</a>
                            </li>
                            <li class="divider">
                            </li>
                              <li>
                                  <a href="#/pages/admin/cdr-errors">CDR Error Log</a>
                              </li>
                          </ul>
                      </li>
                      <li class="dropdown current-user-dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#">
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
          </div>
      </div>
  </div>
</div>

### Code
```html
  <div class="navbar navbar-fixed-top" role="navigation">
      <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar icon-bar--whiteOut"></span>
                  <span class="icon-bar icon-bar--whiteOut"></span>
                  <span class="icon-bar icon-bar--whiteOut"></span>
              </button>
              <a class="logo" href="#/Home.html">Securus Technologies</a>
          </div>
          <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                  <!-- Dashboard -->
                  <li>
                      <a href="#/pages/dashboard/">
                          <div class="divider divider-first">
                              <span class="fa fa-dashboard"></span>Dashboard
                          </div>
                      </a>
                  </li>
                  <!-- Monitor Activity -->
                  <li>
                      <a href="#/pages/monitor/">
                          <div class="divider">
                              <span class="fa fa-bar-chart-o"></span>Monitor
                          </div>
                      </a>
                  </li>
                  <!-- Searches -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <div class="divider">
                              <span class="fa fa-search"></span>Search<b class="caret"></b>
                          </div>
                      </a>
                      <ul class="dropdown-menu dropdown--cropped">
                          <li>
                              <a href="#/pages/search/inmates/">Inmates</a>
                          </li>
                          <li>
                              <a href="#/pages/search/communication/">Communication Records</a>
                          </li>
                          <li>
                              <a href="#/pages/search/system-logs/">System Logs</a>
                          </li>
                          <li>
                              <a href="#/pages/search/debit-transactions/">Debit Transactions</a>
                          </li>
                          <li>
                              <a href="#/pages/search/debit-balance/">Inmate Balance</a>
                          </li>
                      </ul>
                  </li>
                  <!-- Investigate -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <div class="divider">
                              <span class="fa fa-eye"></span>
                              <span>Investigate <i class="caret"></i>
                          </span>
                          </div>
                      </a>
                      <ul class="dropdown-menu dropdown--cropped">
                          <li><a href="#">Investigator Pro</a>
                          </li>
                          <li><a href="#/pages/investigate/lbs/">Location Based Services</a>
                          </li>
                          <li><a href="#">THREADS</a>
                          </li>
                      </ul>
                  </li>
                  <!-- Visitation -->
                  <li>
                      <a href="#/pages/visits/">
                          <div class="divider">
                              <span class="fa securus-webcam"></span>Visits</div>
                      </a>
                  </li>
                  <!-- Manage -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <div class="divider divider-last">
                              <span class="fa fa-gear"></span>Manage<b class="caret"></b>
                          </div>
                      </a>
                      <ul class="dropdown-menu dropdown--cropped">
                          <li>
                              <a href="#/pages/manage/facility-and-sites/facility">Facility and Sites</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/phone-numbers/blocked-numbers">Phone Numbers</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/call-settings/call-forward-numbers">Call Settings</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/grievances/">Grievances <span class="badge">13</span></a>
                          </li>
                          <li>
                              <a href="#/pages/manage/sick-calls/">Sick Forms</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/commissary/">Commissary Requests</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/visitors/">Visitors</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/visitor-types/">Visitor Types</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/visit-settings/visit-restrictions">Visit Settings</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="#/pages/manage/security-roles/">Security Roles</a>
                          </li>
                          <li>
                              <a href="#/pages/manage/users/">Users</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <a href="http://10.88.14.20:7006/eimport/login/entrypage.jsp;jsessionid=tTZGT1GLJyCQ3fbhKHJ4TJhG9tZH2GJj!-1754741843!377768658">E-Import Admin Tool</a>
                          </li>
                      </ul>
                  </li>
                  <!-- Management Level -->
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle mgmt-level" data-toggle="dropdown">
                          <div class="mgmt-level-button">
                              <div class="mgmt-level-icon">
                                  <i class="mgmt-level-icon-facility fa securus-facility fa-2x"></i>
                                  <i class="mgmt-level-icon-site fa securus-building8 fa-2x" style="display: none;"></i>
                              </div>
                              <div class="mgmt-level-text" data-placement="bottom" data-toggle="tooltip" title="" data-original-title="" tooltip="CI Eden">
                                  <span>CI Eden</span>
                              </div>
                              <div>
                                  <b class="caret"></b>
                              </div>
                          </div>
                      </a>
                      <ul class="mgmt-level-dropdown mgmt-level-dropdown-global-nav" style="display: none;">
                          <li>
                              <div class="form-horizontal">
                                  <div class="form-group">
                                      <label for="FacilityContext"><i class="fa securus-facility"></i>
                                          <span>Facility</span>
                                      </label>
                                      <select id="FacilityContext" class="form-control mgmt-level-select-facility"><option>CI Eden</option><option>RO South Central</option><option>FCC Three Rivers</option></select>
                                  </div>
                                  <div class="form-group">
                                      <label for="SiteContext"><i class="fa securus-building8"></i>Site</label>
                                      <select id="SiteContext" class="form-control mgmt-level-select-site"><option>All Sites</option><option>King County Community Correction Div Wrk Rel, WA</option><option>Collin County Jail</option><option>Frisco City Jail</option></select>
                                  </div>
                                  <div class="form-group">
                                      <a href="#" class="update-mgmt-context btn btn-success form-update-btn">Update</a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </li>
              </ul>
              <div class="navbar-right">
                  <ul class="nav navbar-nav">
                      <li class="dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon active" href="#">
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
                      <li class="dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#">
                              <i class="fa fa-question-circle"></i>
                          </a>
                          <ul class="dropdown-menu dropdown--cropped">
                              <li>
                                  <a href=" #/pages/profile/">Frequently Asked Questions</a>
                              </li>
                              <li>
                                  <a href="#">Help</a>
                              </li>
                              <li>
                                  <a href="#/pages/help">Service Tickets</a>
                              </li>
                          </ul>
                      </li>
                      <li class="dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#">
                              <i class="fa fa-wrench"></i>
                          </a>
                          <ul class="dropdown-menu dropdown--cropped">
                            <li>
                                <a href="#/pages/admin/users/">All Users</a>
                            </li>
                            <li>
                                <a href="#/pages/admin/facilities/">All Facilities</a>
                            </li>
                            <li>
                                <a href="#/pages/admin/security-roles/">Scurus Security Roles</a>
                            </li>
                            <li class="divider">
                            </li>
                              <li>
                                  <a href="#/pages/admin/cdr-errors">CDR Error Log</a>
                              </li>
                          </ul>
                      </li>
                      <li class="dropdown current-user-dropdown">
                          <a data-toggle="dropdown" class="dropdown-toggle right-nav-icon" href="#">
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
          </div>
      </div>
  </div>
```
{{/markdown}}

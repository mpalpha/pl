---
title: Search Field Refiner
---

Filter the initial search based on certain criteria, or let the system exclude certain options from the initial search if they're used less often.

### Example
<div class="library__example">
    <style>
    /* ------------------------------ */
    /*    Search Criteria Dropdown    */
    /* ------------------------------ */
    .search-criteria-dropdown-checkbox .input-group-addon {
      background-color: #eee !important;
      width: 100%;
      max-width: 200px;
      text-overflow: ellipsis;
      overflow-x: hidden;
      height: 34px; }
    .search-criteria-dropdown-checkbox .input-group-addon:after {
      font-family: 'FontAwesome';
      content: '  \f0d7'; }
    .search-criteria-dropdown-checkbox .dropdown-checkbox-content {
      font-size: 14px !important; }
    </style>
  <div style="width: 90%">
    <div class="form-group">
      <label class="control-label">Search</label>
      <div class="input-group">
        <div class="input-group-btn">
          <button class="dropdown-checkbox-toggle input-group-addon" data-toggle="dropdown">Search types</button>
          <input type="text" class="form-control search-text">
      </div>
    </div>
    <!--
          <div class="dropdown-checkbox-content">
          <div class="dropdown-checkbox-header">
            <input class="checkbox-all" type="checkbox"><input type="text" placeholder="Search" class="search">
          </div>
            <ul class="dropdown-checkbox-menu">
              <li>
                  <div class="layout">
                      <input type="checkbox" id="576397613514.749" class="search-type-call">
                      <label for="576397613514.749">Calls</label>
                  </div>
              </li>
                  <li><div class="layout"><input type="checkbox" id="1226092228838.0972"><label for="1226092228838.0972">Videos</label></div></li><li><div class="layout"><input type="checkbox" id="999576888373.8188" class="search-type-crime-tip"><label for="999576888373.8188">Crime Tip</label></div></li><li><div class="layout"><input type="checkbox" id="462536913009.5388" class="search-type-informant-line"><label for="462536913009.5388">Informant Line</label></div></li><li><div class="layout"><input type="checkbox" id="449642352024.64545" class="search-type-emergency-call"><label for="449642352024.64545">Emergency Call</label></div></li><li><div class="layout"><input type="checkbox" id="634979825204.5166" class="search-type-voice-biometrics"><label for="634979825204.5166">Voice Biometrics</label></div></li><li><div class="layout"><input type="checkbox" id="1429240874753.6401" class="search-type-voice-biometrics-failure"><label for="1429240874753.6401">Voice Biometrics Failure</label></div></li>
                  </ul>
        </div>
-->
  </div>
</div>

### Code
```html
```
---
title: Input Dropdown Checkbox
---
{{#markdown}}
DESCRIPTION

### Example
<div class="library__example">
<div style="height:300px; width:100%; float:left;">
<div class="search-criteria-dropdown-checkbox dropdown-checkbox dropdown open">
  <button class="dropdown-checkbox-toggle input-group-addon" data-toggle="dropdown" href="#" aria-expanded="false" style="width:112px;">Search types</button>
  <div class="dropdown-checkbox-content">
      <div class="dropdown-checkbox-header">
        <input class="checkbox-all" type="checkbox" checked><input type="text" placeholder="Search" class="search">
      </div>
      <ul class="dropdown-checkbox-menu">
        <li><div class="layout"><input type="checkbox" id="1373755191307.4465" class="search-type-call" checked><label for="1373755191307.4465" style="padding-left:30px; height:25px; line-height:25px; display:block;">Calls</label></div>
        </li>
        <li><div class="layout"><input type="checkbox" id="1221827789807.2217" checked><label for="1221827789807.2217">Videos</label></div>
        </li>
        <li><div class="layout"><input type="checkbox" id="526283792165.4719" class="search-type-crime-tip" checked><label for="526283792165.4719">Crime Tip</label></div>
        </li>
        <li><div class="layout"><input type="checkbox" id="306649965215.74585" class="search-type-informant-line" checked><label for="306649965215.74585">Informant Line</label></div>
        </li>
        <li><div class="layout"><input type="checkbox" id="136856026720.60788" class="search-type-emergency-call" checked><label for="136856026720.60788">Emergency Call</label></div>
        </li>
        <li><div class="layout"><input type="checkbox" id="836522252811.2626" class="search-type-voice-biometrics" checked><label for="836522252811.2626">Voice Biometrics</label></div>
        </li>
        <li><div class="layout"><input type="checkbox" id="567331255255.8156" class="search-type-voice-biometrics-failure" checked><label for="567331255255.8156">Voice Biometrics Failure</label></div>
        </li>
      </ul>
   </div>
  </div>
</div>

</div>

### Code
```html
    <div class="search-criteria-dropdown-checkbox dropdown-checkbox dropdown open">
      <button class="dropdown-checkbox-toggle input-group-addon" data-toggle="dropdown" href="#" aria-expanded="false">Search types</button>
        <div class="dropdown-checkbox-content">
          <div class="dropdown-checkbox-header">
            <input class="checkbox-all" type="checkbox"><input type="text" placeholder="Search" class="search">
          </div>
          <ul class="dropdown-checkbox-menu">
            <li>
              <div class="layout">
                <input type="checkbox" class="search-type-call">
                <label>Calls</label>
              </div>
            </li>
            <li>
              ...
            </li>
            <li>
              ...
            </li>
          </ul>
        </div>
      </div>
```
{{/markdown}}
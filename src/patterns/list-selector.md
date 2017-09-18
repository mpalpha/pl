---
title: Selectors
---
{{#markdown}}
DESCRIPTION

A method to select or deselect items to or from a list. This can be used to add items to a list or lists.

### Example
<div class="library__example">
      <div class="row" style="margin-top: 20px;">
          <div class="col-md-5">
              <label>Blocked Facilities</label>
              <select id="allowed-facilities" class="form-control" size="6" multiple="" style="height: 120px;">
                  <option>Collin County DOC</option>
                  <option>Denton County DOC</option>
                  <option>TDCJ</option>
              </select>
          </div>
          <div class="col-md-2">
              <button class="btn btn-default form-control" style="margin-top: 40px;">
              <i class="fa fa-lg  fa-arrow-right"></i>
              </button>
              <br>
              <button class="btn btn-default form-control" style="margin-top:20px;">
              <i class="fa fa-lg  fa-arrow-left"></i>
              </button>
          </div>
          <div class="col-md-5">
              <label class="whitelist-blacklist-text">Allowed Facilities</label>
              <select id="blocked-facilities" class="form-control" size="6" multiple="" style="height: 120px;">
              </select>
          </div>
      </div>
</div>

### Code
```html
<div class="row" style="margin-top: 20px;">
     
        <div class="col-md-5">
            <label>Blocked Facilities</label>
            <select id="allowed-facilities" class="form-control" size="6" multiple="" style="height: 120px;">
                <option>Collin County DOC</option>
                <option>Denton County DOC</option>
                <option>TDCJ</option>
            </select>
        </div>

        <div class="col-md-2">
            <button class="btn btn-default form-control" style="margin-top: 40px;"><i class="fa fa-lg  fa-arrow-right"></i>
            </button>
            <br>
            <button class="btn btn-default form-control" style="margin-top:20px;"><i class="fa fa-lg  fa-arrow-left"></i>
            </button>
        </div>

        <div class="col-md-5">
            <label class="whitelist-blacklist-text">Allowed Facilities</label>
            <select id="blocked-facilities" class="form-control" size="6" multiple="" style="height: 120px;">
            </select>
        </div>
     
    </div>
```
{{/markdown}}
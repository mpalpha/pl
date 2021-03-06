---
title: Column Filter
---
{{#markdown}}
Column filter.

### Example
<div class="library__example" style="margin-bottom: 60px; height: 200px;">
<style>
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
  line-height: 0;
}
.clearfix:after {
  clear: both;
}
.hide-text {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.input-block-level {
  display: block;
  width: 100%;
  min-height: 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.dropdown-checkbox {
  position: relative;
}
.dropdown-checkbox.dropdown.open .caret {
  border-top-color: #000000 !important;
}
.dropdown-checkbox .caret {
  margin-top: 8px;
  margin-left: 2px;
}
.dropdown-checkbox .dropdown-checkbox-content {
  display: none;
  position: absolute;
  background: white;
  z-index: 1000;
  top: 100%;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  border-top: 1px solid #999999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.dropdown-checkbox .dropdown-checkbox-content li .layout {
  padding: 0px 10px;
}
.dropdown-checkbox .dropdown-checkbox-content li .layout:hover {
  background: #049cdb;
  color: white;
  cursor: pointer;
}
.dropdown-checkbox .dropdown-checkbox-content li .layout input[type=checkbox] {
  float: left;
  height: 25px;
  margin: 0;
  outline: none;
  padding: 0;
}
.dropdown-checkbox .dropdown-checkbox-content li .layout label {
  display: block;
  white-space: nowrap;
  line-height: 25px;
  padding-left: 30px;
  margin-bottom: 0px;
  height: 25px;
}
.dropdown-checkbox .dropdown-checkbox-content .maxitems {
  margin: 0;
}
.dropdown-checkbox.open .dropdown-checkbox-content {
  display: block;
}
.dropdown-checkbox .dropdown-checkbox-header {
  min-width: 245px;
  background-color: #0064cd;
  padding: 5px 20px;
  -webkit-border-radius: 4px 4px 0px 0px;
  -moz-border-radius: 4px 4px 0px 0px;
  border-radius: 4px 4px 0px 0px;
}
.dropdown-checkbox .dropdown-checkbox-header .search {
  margin: 0;
}
.dropdown-checkbox .dropdown-checkbox-header .checkbox-all {
  margin-right: 10px;
}
.dropdown-checkbox ul.dropdown-checkbox-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 5px 10px 5px 10px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: visible;
}
.dropdown-checkbox ul.dropdown-checkbox-menu li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
   <div class="myDropdownCheckbox dropdown-checkbox dropdown open">
       <a class="" data-toggle="dropdown" href="#" aria-expanded="true">Action <i class="fa fa-filter"></i></a>
       <div class="dropdown-checkbox-content">
           <div class="multiselect">
               <div class="header">
                   <input type="checkbox">
                   <label>Select All Actions</label>
               </div>
               <div class="body">
                   <ul>
                       <li>
                           <input type="checkbox">
                           <label>Add Tag</label>
                       </li>
                       <li>
                           <input type="checkbox">
                           <label>Delete Tag</label>
                       </li>
                       <li>
                           <input type="checkbox">
                           <label>Terminated Call</label>
                       </li>
                       <li>
                           <input type="checkbox">
                           <label>View CDR</label>
                       </li>
                   </ul>
               </div>
               <div class="footer clearfix">
                   <div class="pull-right">
                       <button class="btn btn-link">Cancel</button>
                       <button class="btn btn-primary">Apply Filter</button>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>

### Code
```html
<div class="myDropdownCheckbox dropdown-checkbox dropdown">
    <a class="" data-toggle="dropdown" href="#"><i class="fa fa-filter"></i></a>
    <div class="dropdown-checkbox-content">
        <div class="multiselect">
            <div class="header">
                <input type="checkbox">
                <label>Select All Actions</label>
            </div>
            <div class="body">
                <ul>
                    <li>
                        <input type="checkbox">
                        <label><!-- Option to filter by --></label>
                    </li>
                </ul>
            </div>
            <div class="footer clearfix">
                <div class="pull-right">
                    <button class="btn btn-link">Cancel</button>
                    <button class="btn btn-primary">Apply Filter</button>
                </div>
            </div>
        </div>
    </div>
</div>
```
{{/markdown}}
---
title: Hierarchical Navigation
---
{{#markdown}}
Accordion Style Navigation Menu

### Example
<div class="library__example">
 <div class="wrapper">
  <div class="bff-include panel-group" style="width:250px">
    <ul class="bsnav bsnav-pills bsnav-stacked">
  
      <li class="facility-nav">
          <a href="#/pages/manage/facility-and-sites/facility" class="facility-site-setting-nav"> &nbsp; Facility: CI Eden</a>
      </li>
     
      <li class="sites-nav" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
  
          <a href="#" class="accordion-header">
              <i class="fa fa-building-o"></i> &nbsp;
              <span>Sites</span>&nbsp;
              <span class="badge">5</span>
          </a>
  
          <ul id="collapseOne" class="bsnav bsnav-pills bsnav-stacked site-list panel-collapse collapse in ">
              <li><a href="#/pages/manage/facility-and-sites/sites">Belknap Unit</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/sites">Cold Springs Unit</a>
              </li>
              <li class="active"><a href="#/pages/manage/facility-and-sites/sites">Collin County Jail <span class="pull-right">?</span></a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/sites">Lon Evans Corrections Center</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/sites">Tarrant County Jail Corrections Center</a>
              </li>
          </ul>
  
      </li>
  
      <li class="accordion terminal-groups-nav" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
  
          <a href="#" class="accordion-header">
              <i class="fa fa-sitemap"></i> &nbsp;
              <span>Terminal Groups</span>&nbsp;
              <span class="badge">7</span>
          </a>
  
          <ul id="collapseTwo" class="bsnav bsnav-pills bsnav-stacked terminal-group-list panel-collapse collapse in">
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">Auxillary</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">Disabled</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">Main</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">Primary</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">Restricted</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">Solitary Confinement</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">Visitation</a>
              </li>
          </ul>
      </li>
  
        <li class="accordion terminals-nav" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
  
           <a href="#" class="accordion-header">
              <i class="fa fa-phone"></i> &nbsp;
              <span>Terminals</span>&nbsp;
              <span class="badge">214</span>
           </a>
  
             <div id="collapseThree" class="bsnav bsnav-pills bsnav-stacked terminal-list panel-collapse collapse in">
  
               <div class="filter-search">
                  <input type="text" class="form-control" placeholder="Search">
                  <span class="fa fa-search filter-search-icon"></span>
               </div>
                 <ul class="bsnav bsnav-pills bsnav-stacked">
                   <li>
                     <a href="#">T1</a>
                   </li>
                   <li>
                      <a href="#">T2</a>
                   </li>
                 </ul>
             </div>
        </li>
    </ul>
  </div>
 </div> 
</div>

### Code
```html
<div class="bff-include panel-group" style="width:250px">
    <ul class="bsnav bsnav-pills bsnav-stacked">
  
      <li class="facility-nav">
          <a href="#/pages/manage/facility-and-sites/facility" class="facility-site-setting-nav"> &nbsp; Facility: CI Eden</a>
      </li>
      
      <!-- Add another List by copying this list and pasting it below a full UL tag -->
      <!-- Full list starts here-->
      <li class="sites-nav" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
  
          <a href="#" class="accordion-header">
              <i class="fa fa-building-o"></i> &nbsp;
              <span>ADD TITLE</span>&nbsp;
              <span class="badge">5</span>
          </a>
  
          <ul id="collapseOne" class="bsnav bsnav-pills bsnav-stacked site-list panel-collapse collapse in ">
              <li><a href="#/pages/manage/facility-and-sites/sites">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/sites">ADD SUBTITLE</a>
              </li>
              <!-- Sample of a icon floating to the right -->
              <li class="active"><a href="#/pages/manage/facility-and-sites/sites">ADD SUBTITLE <span class="pull-right">?</span></a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/sites">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/sites">ADD SUBTITLE</a>
              </li>
          </ul>
  
      </li>
      <!-- Full list ends Here -->
      
      <li class="accordion terminal-groups-nav" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
  
          <a href="#" class="accordion-header">
              <i class="fa fa-sitemap"></i> &nbsp;
              <span>Terminal Groups</span>&nbsp;
              <span class="badge">7</span>
          </a>
  
          <ul id="collapseTwo" class="bsnav bsnav-pills bsnav-stacked terminal-group-list panel-collapse collapse in">
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">ADD SUBTITLE</a>
              </li>
              <li><a href="#/pages/manage/facility-and-sites/terminal-groups">ADD SUBTITLE</a>
              </li>
          </ul>
      </li>
  
        <li class="accordion terminals-nav" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
  
           <a href="#" class="accordion-header">
              <i class="fa fa-phone"></i> &nbsp;
              <span>ADD TITLE</span>&nbsp;
              <span class="badge">214</span>
           </a>
  
             <div id="collapseThree" class="bsnav bsnav-pills bsnav-stacked terminal-list panel-collapse collapse in">
               
               <!-- Search Bar -->
               <div class="filter-search">
                  <input type="text" class="form-control" placeholder="Search">
                  <span class="fa fa-search filter-search-icon"></span>
               </div>
                 <ul class="bsnav bsnav-pills bsnav-stacked">
                   <li>
                     <a href="#">ADD SUBTITLE</a>
                   </li>
                   <li>
                      <a href="#">ADD SUBTITLE</a>
                   </li>
                 </ul>
             </div>
        </li>
    </ul>
</div>
```
{{/markdown}}
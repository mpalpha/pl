---
title: Tabs
---
{{#markdown}}
Tab Navigation Menu

###Problem Summary
Content needs to be separated into sections and accessed via a single content area using a flat navigation structure that does not refresh the page when selected. 

###Usage
*  Use when there is limited visual space and content needs to be separated into sections
*  Use when there are between 2 – 9 sections of content that need a flat navigation mode.
*  Use when you need to keep user attention by circumventing page refreshing.
*  Use when section names are relatively short
*  Use when the content of each tab can be viewed separate from each other, and not in context of each other.
*  Use when the content for each tab has similar structure
*  Use when you need to show what tab is currently being viewed
*  Do not use when the content inside each pane would function just as well in its own separate page.

### Example
 <div class="library__example">
       <ul class="nav nav-tabs call-details-tabs" style="width:300px">
           <li class="active"><a href="#pin-settings" data-toggle="tab">PIN</a></li>
           <li class="notes-tab"><a href="#call-settings" data-toggle="tab">Call Settings</a></li>
       </ul>
       <div class="tab-content" style="width:400px">
           <div role="panel" class="tab-pane active" id="pin-settings">
               <div class="bff-include">
                   <div class="well securus-panel-style securus-panel-padding">
                       <h4 class="settings-headline">
                           <a data-toggle="collapse" href="#inmate-pin-details">
                               PIN Settings
                               <div class="pull-right">
                                   <span class="toggle-hide"></span>
                                   <span class="toggle-show"></span>
                               </div>
                           </a>
                       </h4>
                   <div class="collapse in" id="inmate-pin-details">
                       <div class="form-group">
                           <label for="call-duration" class="required">PIN Number</label>
                           <input class="form-control" id="call-duration" placeholder="Ex: 328491239">
                           <span class="help-block">Min. Length 4; Max. 20</span>
                       </div>
                       <div class="form-group">
                           <label for="call-duration">PIN Generation</label>
                           <div class="input-group">
                                <input class="form-control">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button" style="height: 34px;">Generate</button>
                                </span>
                           </div> 
                       </div>
                       <div class="form-group">
                          <label for="call-duration">PIN append length</label>
                             <div class="input-group">
                               <input class="form-control">
                                  <span class="input-group-btn">
                                     <button class="btn btn-primary" type="button" style="height: 34px;">Append</button>
                                  </span>
                             </div> 
                       </div>
                   </div> 
               </div>
           </div>
       </div>
       <div id="call-settings" class="tab-pane fade">
              <title><Edit Inmate Profile</title>
             <div class="well securus-panel-style securus-panel-padding">
                     <h4 class="settings-headline">
                           <a data-toggle="collapse" href="#inmate-call-details">
                               Call Settings
                                   <div class="pull-right">
                                         <span class="toggle-hide"></span>
                                         <span class="toggle-show"></span>
                                   </div>
                           </a>
                     </h4>
                   <div class="collaspe in" id="inmate-call-details">
                         <label class="rounded-check" for="roundedCheck1">
                             <input type="checkbox" name="check" id="roundedCheck1" value="None" checked>
                             <span class="icon"></span>
                             <strong>First Call Free? (One allowed)</strong>
                         </label>
                         <label class="rounded-check" for="roundedCheck2">
                             <input type="checkbox" name="check" id="roundedCheck2" value="None">
                             <span class="icon"></span>
                             <strong>Private on VPM Visitation</strong>
                          </label>
                         <label class="rounded-check" for="roundedCheck3">
                             <input type="checkbox" name="check" id="roundedCheck3" value="None">
                             <span class="icon"></span>
                             <strong>Private on visitation</strong>
                         </label>
                         <label class="rounded-check" for="roundedCheck4">
                             <input type="checkbox" name="check" id="roundedCheck4" value="None">
                             <span class="icon"></span>
                             <strong>Ignore Calling Velocity Rule on Next Call</strong>
                         </label>
                   </div>
             </div>   
       </div>
 </div>

### Code
```html
     
       <!-- Tab navigation -->
       <ul class="nav nav-tabs call-details-tabs" style="width:300px">
           <li class="active"><a href="#pin-settings" data-toggle="tab">PIN</a></li>
           <li class="notes-tab"><a href="#call-settings" data-toggle="tab">Call Settings</a></li>
       </ul>
       
       <!-- First tab Content (sample) -->
       <div class="tab-content" style="width:400px">
           <div role="panel" class="tab-pane active" id="pin-settings">
           <!-- Add Content Here -->
               <div class="bff-include">
                   <div class="well securus-panel-style securus-panel-padding">
                       <h4 class="settings-headline">
                           <a data-toggle="collapse" href="#inmate-pin-details">
                               PIN Settings
                               <div class="pull-right">
                                   <span class="toggle-hide"></span>
                                   <span class="toggle-show"></span>
                               </div>
                           </a>
                       </h4>
                   <div class="collapse in" id="inmate-pin-details">
                       <div class="form-group">
                           <label for="call-duration" class="required">PIN Number</label>
                           <input class="form-control" id="call-duration" placeholder="Ex: 328491239">
                           <span class="help-block">Min. Length 4; Max. 20</span>
                       </div>
                       <div class="form-group">
                           <label for="call-duration">PIN Generation</label>
                           <div class="input-group">
                                <input class="form-control">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button" style="height: 34px;">Generate</button>
                                </span>
                           </div> 
                       </div>
                       <div class="form-group">
                          <label for="call-duration">PIN append length</label>
                             <div class="input-group">
                               <input class="form-control">
                                  <span class="input-group-btn">
                                     <button class="btn btn-primary" type="button" style="height: 34px;">Append</button>
                                  </span>
                             </div> 
                       </div>
                   </div> 
               </div>
           </div>
       </div>
       
       <!-- Second Tab Content (sample)-->
       <div id="call-settings" class="tab-pane fade">
       <!-- Add Content Here -->
              <title><Edit Inmate Profile</title>
             <div class="well securus-panel-style securus-panel-padding">
                   <h4 class="settings-headline">
                         <a data-toggle="collapse" href="#inmate-call-details">
                               Call Settings
                               <div class="pull-right">
                                      <span class="toggle-hide"></span>
                                      <span class="toggle-show"></span>
                               </div>
                         </a>
                   </h4>
                   <div class="collaspe in" id="inmate-call-details">
                         <label class="rounded-check" for="roundedCheck1">
                             <input type="checkbox" name="check" id="roundedCheck1" value="None" checked>
                             <span class="icon"></span>
                             <strong>First Call Free? (One allowed)</strong>
                         </label>
                         <label class="rounded-check" for="roundedCheck2">
                             <input type="checkbox" name="check" id="roundedCheck2" value="None">
                             <span class="icon"></span>
                             <strong>Private on VPM Visitation</strong>
                          </label>
                         <label class="rounded-check" for="roundedCheck3">
                             <input type="checkbox" name="check" id="roundedCheck3" value="None">
                             <span class="icon"></span>
                             <strong>Private on visitation</strong>
                         </label>
                         <label class="rounded-check" for="roundedCheck4">
                             <input type="checkbox" name="check" id="roundedCheck4" value="None">
                             <span class="icon"></span>
                             <strong>Ignore Calling Velocity Rule on Next Call</strong>
                         </label>
                   </div>
             </div>   
       </div>
     
```
{{/markdown}}
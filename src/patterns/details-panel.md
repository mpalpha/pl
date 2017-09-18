---
title: Details Panel
---
{{#markdown}}
Example of the tab navigation detail panel.
   
### Example 
   <div class="library__example">
   <ul class="nav nav-tabs call-details-tabs">
       <li class="active"><a href="#pin-settings" data-toggle="tab">PIN</a></li>
   </ul>
   
   <div class="tab-content">
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
              <div role="panel" class="tab-pane" id="call-settings">
                 <div class="bff-include">
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
          </div>
        </div>
        
### Code
```html
       <ul class="nav nav-tabs call-details-tabs" style="width:300px">
          <li class="active"><a href="#pin-settings" data-toggle="tab">PIN</a></li>
      </ul>
      <!--- The width can be adjusted -->
  <div class="tab-content" style="width:400px">
      <div role="panel" class="tab-pane active" id="pin-settings">
          <div class="bff-include">
              <div class="well securus-panel-style securus-panel-padding">
                    <h4 class="settings-headline">
                       <a data-toggle="collapse" href="#inmate-pin-details">
                         ADD TITLE
                         <div class="pull-right">
                             <span class="toggle-hide"></span>
                             <span class="toggle-show"></span>
                         </div>
                       </a>
                     </h4>
                  <div class="collapse in" id="inmate-pin-details">
                     <div class="form-group">
                         <label for="" class="required">ADD LABEL</label>
                         <input class="form-control" id="">
                         <span class="help-block"></span>
                     </div>
                     <div class="form-group">
                       <label for="call-duration">ADD LABEL</label>
                         <div class="input-group">
                          <input class="form-control">
                          <span class="input-group-btn">
                            <button class="btn btn-primary" type="button" style="height: 34px;">ADD BUTTON</button>
                          </span>
                         </div> 
                     </div>
                     <div class="form-group">
                        <label for="call-duration">ADD LABEL</label>
                           <div class="input-group">
                            <input class="form-control">
                            <span class="input-group-btn">
                               <button class="btn btn-primary" type="button" style="height: 34px;">ADD BUTTONL</button>
                            </span>
                           </div> 
                     </div>
                  </div> 
              </div>
          </div>
      </div>      
  </div>
```
{{/markdown}}
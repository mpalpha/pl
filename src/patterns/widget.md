---
title: Widget
---
{{#markdown}}
Create a widget for the dashboard page

### Example
<div class="library__example">
    <div class="bff-include widget-style" style="width:300px">
        <h4 class="settings-headline">
        Sample Widget
        <!-- pages/dashboard/components/widget-cog-droplist.html-->
        <div class="bff-include pull-right">
            <div class="btn-group pull-right">
              <button type="button" class="btn btn-link info dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-gear"></i></button>
              <ul class="dropdown-menu" role="menu">
                  <li><a href="#" data-toggle="modal" data-target="#addWidgetModal">Change</a></li>
                  <li><a href="#" class="js-rearrange-widgets">Rearrange</a></li>
                  <li><a href="#">Remove</a></li>
              </ul>
            </div>
        </div>
        </h4>
        <div class="row">
            <div class="col-md-12">
                <div align="center">
                    <div id="facility-activity-legend" class="chart-legend">
                    <h4>Sample Information/Data Goes Here</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
### Code
```html
   <!--The width can be modified fit-->
  <div class="bff-include widget-style"><h4 class="settings-headline">
         Sample Widget
         <div class="bff-include pull-right">
             <div class="btn-group pull-right">
               <button type="button" class="btn btn-link info dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-gear"></i></button>
               <ul class="dropdown-menu" role="menu">
                   <li><a href="#" data-toggle="modal" data-target="#addWidgetModal">Change</a></li>
                   <li><a href="#" class="js-rearrange-widgets">Rearrange</a></li>
                   <li><a href="#">Remove</a></li>
               </ul>
             </div>
         </div>
         </h4>
         <div class="row">
             <div class="col-md-12">
                 <div align="center">
                     <div id="facility-activity-legend" class="chart-legend">
                     <h4>Sample Info Goes Here</h4>
                     </div>
                 </div>
             </div>
         </div>
     </div>
```
{{/markdown}}
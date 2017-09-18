---
title: Sub Navigation Grid
---
{{#markdown}}
This is a simple grid that allows the developer to add a sub navigation as a sidebar.

### Example
<div class="library__example">
     <div class="row">
          <div class="col-md-2 sub-nav-padding sub-nav-mobile-col2">
                <h4>Sub Navigation</h4>
                <ul class="bsnav bsnav-pills bsnav-stacked">
                     <li>
                         <a href="#">Sample Data 1</a>
                     </li>
                     <li>
                          <a href="#">Sample Data 2</a>
                     </li>
                     <li>
                          <a href="#">Sample Data 3</a>
                     </li>
                     <li>
                          <a href="#">Sample Data 4</a>
                     </li>
                     <li>
                          <a href="#">Sample Data 5</a>
                     </li>
                     <li>
                          <a href="#">Sample Data 6</a>
                     </li>
                     <li>
                          <a href="#">Sample Data 7</a>
                     </li>
                     <li>
                          <a href="#">Sample Data 8</a>
                     </li>                                                                                                           
                </ul>
          </div>
          <div class="col-md-10 sub-nav-mobile-version">
                <ul class="nav nav-tabs call-details-tabs">
                     <li class="active"><a href="#first" data-toggle="tab">First Tab</a></li>
                     <li class="notes-tab"><a href="#second" data-toggle="tab">Second Tab</a></li>
                </ul>
                <div class="tab-content">
                <!--First tab Content (sample)-->
                     <div role="panel" class="tab-pane active" id="first">
                           <!--Add Content Here-->
                           <div class="collapse-space panel panel-action" data-toggle="collapse" data-target="#grid-collapse">Table Info<b class="caret"></b></div>
                                  <div id="grid-collapse" class="full-table collapse in">                                       
                                         <div class="sub-nav-position-toggle-tables sub-nav-width">
                                         <!--Rows can Dynamically be added here-->
                                               <table class="table table-hover sub-nav-grid striped">
                                                     <tr>
                                                         <td>Example Cell</td>
                                                         <td>Example Cell 2</td>
                                                         <td>Example Cell 3</td>
                                                         <td>Example Cell 4</td>
                                                         <td>Example Cell 5</td>
                                                         <td>Example Cell 6</td>
                                                         <td>Example Cell 7</td>
                                                         <td>Example Cell 8</td>
                                                         <td>Example Cell 9</td>
                                                         <td>Example Cell 10</td>
                                                     </tr>
                                                     <tr class="cell-width-toggle">
                                                         <td>Example Cell A</td>
                                                         <td>Example Cell B</td>
                                                         <td>Example Cell C</td>
                                                         <td>Example Cell D</td>
                                                         <td>Example Cell E</td>
                                                         <td>Example Cell F</td>
                                                         <td>Example Cell G</td>
                                                         <td>Example Cell H</td>
                                                         <td>Example Cell I</td>
                                                         <td>Example Cell J</td>
                                                     </tr>  
                                                     <tr class="cell-width-toggle">
                                                         <td>Example Cell 11</td>
                                                         <td>Example Cell 12</td>
                                                         <td>Example Cell 13</td>
                                                         <td>Example Cell 14</td> 
                                                         <td>Example Cell 15</td> 
                                                         <td>Example Cell 16</td>
                                                         <td>Example Cell 17</td>
                                                         <td>Example Cell 18</td>
                                                         <td>Example Cell 19</td> 
                                                         <td>Example Cell 20</td>
                                                     </tr>
                                                     <tr class="cell-width-toggle">
                                                         <td>Example Cell K</td>
                                                         <td>Example Cell L</td>
                                                         <td>Example Cell M</td>
                                                         <td>Example Cell N</td> 
                                                         <td>Example Cell O</td> 
                                                         <td>Example Cell P</td>
                                                         <td>Example Cell Q</td>
                                                         <td>Example Cell R</td>
                                                         <td>Example Cell S</td> 
                                                         <td>Example Cell T</td> 
                                                     </tr>
                                                     </tr>
                                               </table>     
                                         </div>       
                                  </div>
                           </div>
                     </div> 
                     <!-- Second Tab Content (sample)-->
                     <div class="tab-pane fade" id="second">
                           <!-- Add Content Here -->
                     </div>
                </div>            
          </div>
     </div>
</div>

### Code
```html

```
{{/markdown}}
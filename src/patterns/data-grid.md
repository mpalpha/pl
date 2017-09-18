---
title: Horizontal Data Grid
---
{{#markdown}}
Mobile friendly data grid (Horizontal). In this Grid data is categorized from the far left column

### Example
<div class="library__example">
    <div class="collapse-space panel panel-action" data-toggle="collapse" data-target="#grid-collapse">Table Info<b class="caret"></b></div>
         <div id="grid-collapse" class="full-table collapse in">
                <div class="first-row-fixed">
                      <table class="table-hover first-table-grid striped">                 
                            <tr>
                               <td>CATEGORY 1</td>
                            </tr>
                            <tr>
                                <td>CATEGORY 2</td>
                            </tr>
                            <tr>
                                <td>CATEGORY 3</td>
                            </tr>
                            <tr>
                               <td>CATEGORY 4</td>
                            </tr>
                      </table>
                </div>
                <div class="position-toggle-tables">
                      <table class="table table-hover grid striped">
                            <tr>
                                <td>Example Cell</td>
                                <td>Example Cell 2</td>
                                <td>Example Cell 3</td>
                                <td>Example Cell 4</td>
                                <td>Example Cell 5</td>
                            </tr>
                            <tr class="cell-width-toggle">
                                <td>Example Cell A</td>
                                <td>Example Cell B</td>
                                <td>Example Cell C</td>
                                <td>Example Cell D</td>
                                <td>Example Cell E</td> 
                            </tr>  
                            <tr class="cell-width-toggle">
                                <td>Example Cell 6</td>
                                <td>Example Cell 7</td>
                                <td>Example Cell 8</td>
                                <td>Example Cell 9</td> 
                                <td>Example Cell 10</td> 
                            </tr>
                            <tr class="cell-width-toggle">
                                <td>Example Cell F</td>
                                <td>Example Cell G</td>
                                <td>Example Cell H</td>
                                <td>Example Cell I</td> 
                                <td>Example Cell J</td> 
                            </tr>
                      </table>     
                </div>
         </div>
    </div>     
</div>
### Code
```html
     <div class="collapse-space panel panel-action" data-toggle="collapse" data-target="#grid-collapse">Table Info<b class="caret"></b></div>
              <div id="grid-collapse" class="full-table collapse in">
                     <div class="first-row-fixed">
                     <!--Add Categories here-->
                           <table class="table-hover first-table-grid striped">                 
                                 <tr>
                                    <td>CATEGORY 1</td>
                                 </tr>
                                 <tr>
                                     <td>CATEGORY 2</td>
                                 </tr>
                                 <tr>
                                     <td>CATEGORY 3</td>
                                 </tr>
                                 <tr>
                                    <td>CATEGORY 4</td>
                                 </tr>
                           </table>
                     </div>
                     <div class="position-toggle-tables">
                     <!--Rows can Dynamically be added here-->
                           <table class="table table-hover grid striped">
                                 <tr>
                                     <td>Example Cell</td>
                                     <td>Example Cell 2</td>
                                     <td>Example Cell 3</td>
                                     <td>Example Cell 4</td>
                                     <td>Example Cell 5</td>
                                 </tr>
                                 <tr class="cell-width-toggle">
                                     <td>Example Cell A</td>
                                     <td>Example Cell B</td>
                                     <td>Example Cell C</td>
                                     <td>Example Cell D</td>
                                     <td>Example Cell E</td> 
                                 </tr>  
                                 <tr class="cell-width-toggle">
                                     <td>Example Cell 6</td>
                                     <td>Example Cell 7</td>
                                     <td>Example Cell 8</td>
                                     <td>Example Cell 9</td> 
                                     <td>Example Cell 10</td> 
                                 </tr>
                                 <tr class="cell-width-toggle">
                                     <td>Example Cell F</td>
                                     <td>Example Cell G</td>
                                     <td>Example Cell H</td>
                                     <td>Example Cell I</td> 
                                     <td>Example Cell J</td> 
                                 </tr>
                           </table>     
                     </div>
              </div>
         </div>     
```
{{/markdown}}
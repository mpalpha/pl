---
title: Pagination
---

{{#markdown}}
Pagination for search results that span multiple pages of results. Almost always included with a Search Results table.
### Problem summary
The user needs to view a subset of sorted data in a comprehensible form.


###Usage
*  Use when it is unsuitable to display all the data on a single page/screen.
*  Use when the dataset is in some way ordered.
*  Do not use when you don't want the user to pause for navigating to the next page.

### Example
<div class="library__example">
    <div class="bff-include">
        <div class="center">
          <ul class="pagination">
              <li class="prev disabled"><a href="#"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Previous</a>
              </li><li class="disabled"><a href="#">First</a>
              </li><li class="active"><a href="#">1</a>
              </li><li><a href="#">2</a>
              </li><li><a href="#">3</a>
              </li><li><a href="#">4</a>
              </li><li><a href="#">5</a>
              </li><li><a href="#">Last</a>
              </li><li class="next"><a href="#">Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </li></ul>
        </div>
    </div>
</div>

### Code
```html
<div class="center">
  <ul class="pagination">
      <li class="prev disabled"><a href="#"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> Previous</a></li>
      <li class="disabled"><a href="#">First</a></li>
      <li class="active"><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li class="next"><a href="#">Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
  </li></ul>
</div>
```
{{/markdown}}
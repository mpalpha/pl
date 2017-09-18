---
title: Busy Indicator
---
{{#markdown}}
The busy indicator should be used to indicate activity while content is being loaded or the UI is blocked waiting for a resource to become available.

### Example
<div class="library__example">
  <div id="busyDiv" class="busy section-busy"><div class="busy-icon"><i class="fa fa-cog fa-2x fa-spin"></i></div></div>
  <br>
  <i class="fa fa-cog fa-2x fa-spin"></i>
  <br>
  <br>
  <button onclick="myReload()">Reload Busy Indicator</button>
  <br>
</div>

### Code
```html
Busy Indicator Visible
<div class="busy section-busy"><div class="busy-icon"><i class="fa fa-cog fa-2x fa-spin"></i></div></div>
Busy Indicator Invisible
<div class="busy section-busy" style="display: none;"><div class="busy-icon"><i class="fa fa-cog fa-2x fa-spin"></i></div></div>
```

<script>
 document.getElementById("busyDiv").addEventListener("click", function( event ) {
    document.getElementById("busyDiv").setAttribute("style", "display:none");
  }, false);  
  
  function myReload() {
    location.reload();
  };
</script>
{{/markdown}}
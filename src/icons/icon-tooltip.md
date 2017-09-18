---
title: Tooltips
---
{{#markdown}}
Attaches a tooltip handler to an element collection. The user hovers over icons, links, or buttons to see tooltips.  Four options are available: top, right, bottom, and left aligned.  Remember this tips are called with the hover event of the mouse.  The hover event does not fire with touch screen inputs.  Tooltips need to be activated via your JavaScript library of choice.  This is the [Bootstrap documentation](http://getbootstrap.com/javascript/#tooltips) for implementation of tooltip.js.


### Static Tooltip Directions

<div class="library__example">

  <i class="fa securus-inmate" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i> <a href="#/pages/search/inmates/profile/">Inmate</a> Tooltip on top.<br>
  <i class="fa securus-inmate" data-toggle="tooltip" data-placement="right" title="Tooltip on right"></i> <a href="#/pages/search/inmates/profile/">Inmate</a> Tooltip on right.<br>
  <i class="fa securus-inmate" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"></i> <a href="#/pages/search/inmates/profile/">Inmate</a> Tooltip on bottom.<br>
  <i class="fa securus-inmate" data-toggle="tooltip" data-placement="left" title="Tooltip on left"></i> <a href="#/pages/search/inmates/profile/">Inmate</a> Tooltip on left.<br>
</div>

### Code
```html
<i class="fa securus-inmate" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
<i class="fa securus-inmate" data-toggle="tooltip" data-placement="right" title="Tooltip on right"></i>
<i class="fa securus-inmate" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"></i>
<i class="fa securus-inmate" data-toggle="tooltip" data-placement="left" title="Tooltip on left"></i>
```


## Securus Tooltip Tricks
###HTML Link Tooltip
<div class="library__example">
  <a href="#" id="element" data-toggle="tooltip" data-placement="top" title="Some crazy long tooltip text that you can not believe is hidden in this small hover event!">Hover over me</a>
</div>

### Code
```html
<a href="#" id="element" data-toggle="tooltip" data-placement="top" title="Some crazy long tooltip text that you can not believe is hidden in this small hover event!">Hover over me</a>
```

###HTML Button Tooltip
<div class="library__example">  
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
</div>
 
  
### Code
```html
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
```

###Static Tooltip Checkbox
<div class="library__example">  

  <input  type="checkbox" data-toggle="popover" data-placement="right" data-original-title="Tooltip on right" data-content="This is for on screen information that the user enables with a click.  Helpful text can be read without timing out or disappearing when changing focus.  The information will stay on screen until the user disables it with a click.">
  Static tooltip on right &nbsp;&nbsp;&nbsp;
  </input>

  <input  type="checkbox" data-toggle="popover" data-placement="top" data-original-title="Tooltip on top" data-content="This is for on screen information that the user enables with a click.  Helpful text can be read without timing out or disappearing when changing focus.  The information will stay on screen until the user disables it with a click.">
  Static tooltip on top &nbsp;&nbsp;&nbsp; 
  </input>

  <input  type="checkbox" data-toggle="popover" data-placement="bottom" data-original-title="Tooltip on bottom" data-content="This is for on screen information that the user enables with a click.  Helpful text can be read without timing out or disappearing when changing focus.  The information will stay on screen until the user disables it with a click.">
  Static tooltip on bottom &nbsp;&nbsp;&nbsp;
  </input>

  <input  type="checkbox" data-toggle="popover" data-placement="left" data-original-title="Tooltip on left" data-content="This is for on screen information that the user enables with a click.  Helpful text can be read without timing out or disappearing when changing focus.  The information will stay on screen until the user disables it with a click.">
  Static tooltip on left &nbsp;&nbsp;&nbsp;
  </input>

</div>
 
  
### Jquery Code
```html
<input  type="checkbox" data-toggle="popover" data-placement="right" data-original-title="Right" data-content="information">tooltip on right</input>
<input  type="checkbox" data-toggle="popover" data-placement="top" data-original-title="Top" data-content="information">tooltip on top</input>
<input  type="checkbox" data-toggle="popover" data-placement="bottom" data-original-title="Bottom" data-content="information">tooltip on bottom</input>
<input  type="checkbox" data-toggle="popover" data-placement="left" data-original-title="Left" data-content="information">tooltip on left</input>
```
### Raw HTML
```html
<input type="checkbox" data-toggle="popover" data-placement="right" data-original-title="Tooltip on right" data-content="This is for on screen information that the user enables with a click.  Helpful text can be read without timing out or disappearing when changing focus.  The information will stay on screen until the user disables it with a click." aria-describedby="popover199028"> Static tooltip on right &nbsp;&nbsp;&nbsp;


<div class="popover fade right in" role="tooltip" id="popover199028" style="top: 973.5px; left: 117.5px; display: block;"><div class="arrow" style="top: 50%;"></div><h3 class="popover-title">Tooltip on right</h3><div class="popover-content">This is for on screen information that the user enables with a click.  Helpful text can be read without timing out or disappearing when changing focus.  The information will stay on screen until the user disables it with a click.</div></div>
```
{{/markdown}}


<script>
  $( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

  $("body").popover({
    selector: "[data-toggle='popover']",
    container: "body",
    html: true
  });
  
  });
</script>


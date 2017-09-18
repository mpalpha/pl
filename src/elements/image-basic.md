---
title: Image Basic 
---
{{#markdown}}
Images made responsive-friendly via the addition of the .img-responsive class. This applies max-width: 100%;, height: auto; and display: block; to the image so that it scales nicely to the parent element.

To center images which use the .img-responsive class, use .center-block instead of .text-center.


### Image Border Styles

<div class="library__example" style="width:100%;">
<img src="../assets/images/shared/brand/logos/logo.png" alt="..." class="img-rounded">
<img src="../assets/images/shared/brand/logos/logo.png" alt="..." class="img-circle">
<img src="../assets/images/shared/brand/logos/logo.png" alt="..." class="img-thumbnail">  
</div>

### Code
```html
<img src="../path/logo.png" alt="..." class="img-rounded">
<img src="../path/logo.png" alt="..." class="img-circle">
<img src="../path/logo.png" alt="..." class="img-thumbnail">  
```


### Center Image

Image centered to the parent element

<div class="library__example">
<img src="../assets/images/shared/brand/logos/logo.png" alt="..." class="img-rounded center-block"> 
</div>




### Code
```html
<img src="../assets/images/shared/brand/logos/logo.png" alt="..." class="img-rounded center-block"> 
```



### Shrink Image

Image scaled to the parent element

<div class="library__example" style="width:100px;">
<img src="../assets/images/shared/brand/logos/logo.png" alt="..." class="img-rounded img-responsive">
</div>


### Code
```html
<div style="width:100px;">
    <img src="../path/logo.png" alt="..." class="img-rounded img-responsive">
</div>
```
{{/markdown}}



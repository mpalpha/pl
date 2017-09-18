---
title: Option Box
---
{{#markdown}}
*Only supports IE10+*

An option box is an alternative to a list. It can be used to display several clickable options. An option box will grow vertically to fit the contents of the box.

To get started, add a wrapper, `<div class="option-box__wrapper">`. Inside, you can add multiple `<div class="option-box">` items. By default, they will not be sized properly and must include a size class. Currently available are:

- `.one-third` - The box will fill up 1/3 of the available space, with a max of 3 items across
- `.one-seventh` - The box will fill up 1/7 of the available space, with a max of 7 items across

Several states are available for an option box as well:

- `.is-selected` - A selected state. Only one option box within a list should be selected at once.
- `.is-disabled` - A disabled state. All click events to a disabled option box should be disabled.

## Example
<div class="library__example">
  <div class="option-box__wrapper">
    <div class="option-box one-seventh">
      Thursday
      <span class="option-box__heading">5</span>
      10 available
    </div>
    <div class="option-box one-seventh is-disabled">
      Friday
      <span class="option-box__heading">6</span>
      10 available
    </div>
    <div class="option-box one-seventh">
      Saturday
      <span class="option-box__heading">7</span>
      10 available
    </div>
    <div class="option-box one-seventh">
      Sunday
      <span class="option-box__heading">8</span>
      10 available
    </div>
    <div class="option-box one-seventh is-selected">
      Monday
      <span class="option-box__heading">9</span>
      10 available
    </div>
    <div class="option-box one-seventh">
      Tuesday
      <span class="option-box__heading">10</span>
      10 available
    </div>
    <div class="option-box one-seventh">
      Wednesday
      <span class="option-box__heading">11</span>
      10 available
    </div>
  </div>

  <div id="AssignedTerminal" class="option-box__wrapper">
    <div class="option-box one-third is-selected">
      LP1
    </div>
    <div class="option-box one-third">
      PRQ5
    </div>
    <div class="option-box one-third">
      CPR6
    </div>
    <div class="option-box one-third">
      XYZ1
    </div>
    <div class="option-box one-third">
      LSW2
    </div>
    <div class="option-box one-third">
      CNE3
    </div>
    <div class="option-box one-third">
      PEW2
    </div>
    <div class="option-box one-third">
      MAR3
    </div>
  </div>
</div>

## Code
```html
<div class="option-box__wrapper">
  <div class="option-box one-third">
    ...
  </div>
</div>
```

## Collapsing Option Box

Additionally, an Option Box can contain options that were hidden by default when clicked. The JavaScript will need to be wired up in the implementation, this is only representative.

<div class="library__example">
  <div class="option-box__wrapper">
    <div class="option-box one-third js-available-hour-option">
      10:00am - 11:00am

      <div class="option-box__options js-avilable-hours">
        <a href="#">12:00pm</a>
        <a href="#">12:05pm</a>
        <a href="#">12:10pm</a>
        <a href="#">12:15pm</a>
      </div>
    </div>
  </div>
</div>

```html
<div class="option-box__wrapper">
  <div class="option-box one-third js-available-hour-option">
    10:00am - 11:00am

    <div class="option-box__options js-avilable-hours">
      <a href="#">12:00pm</a>
      <a href="#">12:05pm</a>
      <a href="#">12:10pm</a>
      <a href="#">12:15pm</a>
    </div>
  </div>
</div>
```
{{/markdown}}

<script>
  $(".js-available-hour-option").click(function() {
    $(this).addClass("is-selected");
    $(".js-avilable-hours").slideToggle(150);
  });
</script>
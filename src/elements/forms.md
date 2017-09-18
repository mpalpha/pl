---
title: Forms
---
{{#markdown}}
Use this page to guide your designs and layouts, both online and off, to ensure you're staying consistent with the Base Structures.

### Basic Example

Individual form controls automatically receive some global styling. All textual `<input>`, `<textarea>`, and `<select>` elements with `.form-control` are set to `width: 100%;` by default. Wrap labels and controls in 
`.form-group` for optimum spacing.

<div class="spl-example">
    <form role="form">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile">
            <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">
        <input type="checkbox" id="checkmeout" class="fa checkbox" value="check">
          <label for="checkmeout">Check me out</label>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>
    
```
<form role="form"></form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <input type="checkbox" id="checkmeout" class="fa checkbox" value="check">
      <label for="checkmeout">Check me out</label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
```

## Inline form

Add `.form-inline` to your `<form>` for left-aligned and inline-block controls. <strong>This only applies to forms within viewports that are at least 768px wide.</strong>

#### Requires custom widths

Inputs, selects, and textareas are 100% wide by default in Securus Pattern Library. To use the inline form, you'll have to set a width on the form controls used within.

#### Always add labels

Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class.

<div class="spl-example">
    <form class="form-inline" role="form">
      <div class="form-group">
          <label class="sr-only" for="exampleInputEmail2">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email">
      </div>
      <div class="form-group">
          <label class="sr-only" for="exampleInputPassword2">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
      </div>
      <div class="checkbox">
          <input type="checkbox" id="rememberme" class="fa checkbox" value="check">
            <label for="rememberme">Remember me</label>
      </div>
      <button type="submit" class="btn btn-default">Sign in</button>
    </form>
</div>

```
<form class="form-inline" role="form">
  <div class="form-group">
      <label class="sr-only" for="exampleInputEmail2">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email">
  </div>
  <div class="form-group">
      <label class="sr-only" for="exampleInputPassword2">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
  </div>
  <div class="checkbox">
      <input type="checkbox" id="rememberme" class="fa checkbox" value="check">
        <label for="rememberme">Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Sign in</button>
</form>
``` 

## Horizontal form

Use Securus Pattern Library's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding `.form-horizontal` to the form. Doing so changes `.form-group`s to behave as grid rows, so no need for `.row`.

<div class="spl-example">
    <form class="form-horizontal" role="form">
      <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
          </div>
      </div>
      <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
          </div>
      </div>
      <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <input type="checkbox" id="rememberme2" class="fa checkbox" value="check">
              <label for="rememberme2">Remember me</label>
          </div>
          </div>
      </div>
      <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">Sign in</button>
          </div>
      </div>
    </form>
</div>

```
<form class="form-horizontal" role="form">
  <div class="form-group">
      <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
      </div>
  </div>
  <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
      <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
      </div>
  </div>
  <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <input type="checkbox" id="rememberme2" class="fa checkbox" value="check">
          <label for="rememberme2">Remember me</label>
      </div>
      </div>
  </div>
  <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
      </div>
  </div>
</form>
```

## Supported controls
Examples of standard form controls supported in an example form layout.

### Inputs

Most common form control, text-based input fields. Includes support for all HTML5 types: `text`, `password`, `datetime`, `datetime-local`, `date`, `month`, `time`, `week`, `number`, `email`, `url`, `search`, `tel`, and `color`.

<div class="spl-callout spl-callout-danger">
    <h4>Type declaration required</h4>
    <p>Inputs will only be fully styled if their `type` is properly declared.</p>
</div>
<div class="spl-example">
    <form role="form">
    <input type="text" class="form-control" placeholder="Text input">
    </form>
</div>

```
<input type="text" class="form-control" placeholder="Text input">
```

#### Input groups
To add integrated text or buttons before and/or after any text-based `<input>`, <a href="../components/#input-groups">check out the input group component</a>.

### Textarea

Form control which supports multiple lines of text. Change `rows` attribute as necessary.

<form role="form">
  <textarea class="form-control" rows="3"></textarea>
</form>

```
<textarea class="form-control"  rows="3"></textarea>
```
### Checkboxes and radios

Checkboxes are for selecting one or several options in a list while radios are for selecting one option from many.

#### Default (stacked)
<div class="spl-example">
    <form role="form">
      <div class="checkbox">
        <input type="checkbox" id="default-stacked" class="fa checkbox" value="option1">
          <label for="default-stacked">Option one is this and that—be sure to include why it's great</label>
      </div>
      <br>
      <div class="radio">
          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" class="fa radio">
          <label for="optionsRadios1">
          Option one is this and that—be sure to include why it's great
          </label>
          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" class="fa radio">
          <label for="optionsRadios2">
          Option two can be something else and selecting it will deselect option one
          </label>
      </div>
    </form>
</div>

```
<form role="form">
  <div class="checkbox">
    <input type="checkbox" id="default-stacked" class="fa checkbox" value="option1">
      <label for="default-stacked">Option one is this and that—be sure to include why it's great</label>
  </div>
  <br>
  <div class="radio">
      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" class="fa radio">
      <label for="optionsRadios1">
      Option one is this and that—be sure to include why it's great
      </label>
      <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" class="fa radio">
      <label for="optionsRadios2">
      Option two can be something else and selecting it will deselect option one
      </label>
  </div>
</form>
```

#### Inline checkboxes

Use `.checkbox-inline` or `.radio-inline` class to a series of checkboxes or radios for controls appear on the same line.

<div class="spl-example">
    <form role="form">
      <input type="checkbox" id="inlineCheckbox1" class="fa checkbox" value="option1">
        <label for="inlineCheckbox1" class="checkbox-inline">1</label>
      <input type="checkbox" id="inlineCheckbox2" class="fa checkbox" value="option2">
        <label for="inlineCheckbox2" class="checkbox-inline">2</label>
      <input type="checkbox" id="inlineCheckbox3" class="fa checkbox" value="option3">
        <label for="inlineCheckbox3" class="checkbox-inline">3</label>
    </form>
</div>

```
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
</label>
<label class="checkbox-inline">
  <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
</label>
```
#### Nested checkboxes

Use the `.checkbox-list` class in a definition list to a series of checkboxes which are linked to a parent.

<div class="spl-example">
  <dl class="check-list">
      <dt><input type="checkbox" id="checkinmate0"><label for="checkinmate0">&nbsp;Parent</label></dt>
      <dd><input type="checkbox" id="checkinmate0-0"><label for="checkinmate0-0">&nbsp;First</label></dd>
      <dd><input type="checkbox" id="checkinmate0-1"><label for="checkinmate0-1">&nbsp;Second</label></dd>
      <dd><input type="checkbox" id="checkinmate0-2"><label for="checkinmate0-2">&nbsp;Third</label></dd>
      <dd><input type="checkbox" id="checkinmate0-3"><label for="checkinmate0-3">&nbsp;Fourth</label></dd>
      <dd><input type="checkbox" id="checkinmate0-4"><label for="checkinmate0-4">&nbsp;Fifth</label></dd>
  </dl>
</div>


```
<dl class="check-list">
    <dt><input type="checkbox" id="checkinmate0"><label for="checkinmate0">Parent</label></dt>
    <dd><input type="checkbox" id="checkinmate0-0"><label for="checkinmate0-0">First</label></dd>
    <dd><input type="checkbox" id="checkinmate0-1"><label for="checkinmate0-1">Second</label></dd>
    <dd><input type="checkbox" id="checkinmate0-2"><label for="checkinmate0-2">Third</label></dd>
    <dd><input type="checkbox" id="checkinmate0-3"><label for="checkinmate0-3">Fourth</label></dd>
    <dd><input type="checkbox" id="checkinmate0-4"><label for="checkinmate0-4">Fifth</label></dd>
</dl>
```

<h3>Selects</h3>
<p>Use the default option, or add `multiple` to show multiple options at once.</p>
<div class="spl-example">
    <form role="form">
    <select class="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    <br>
    <select multiple="" class="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    </form>
</div>

```
<select class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
<select  multiple class="form-control">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```

### Static control

When you need to place plain text next to a form label within a horizontal form, use the `.form-control-static` class on a `<p>`.

<div class="spl-example">
    <form class="form-horizontal" role="form">
    <div class="form-group">
        <label class="col-sm-2 control-label">Email</label>       
        <div class="col-sm-10">
        <p class="form-control-static">email@example.com</p>
        </div>
    </div>
    <div class="form-group">
        <label for="inputPassword" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
    </div>
    </form>
</div>

```
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>
```


## Form states

Provide feedback to users or visitors with basic feedback states on form controls and labels.

### Input focus

We remove the default `outline` styles on some form controls and apply a `box-shadow` in its place for `:focus`.

<div class="spl-example">
    <form role="form">
    <input class="form-control" id="focusedInput" type="text" value="This is focused...">
    </form>
</div>

```
<input class="form-control" id="focusedInput" type="text" value="This is focused...">
```

### Disabled inputs

Add the `disabled` attribute on an input to prevent user input and trigger a slightly different look.

<div class="spl-example">
    <form role="form">
    <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here…" disabled="">
    </form>
</div>

```
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
```

###Disabled fieldsets

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within the `<fieldset>` at once.
#### Link functionality of `<a>` not impacted

This class will only change the appearance of `<a class="btn btn-default">` buttons, not their functionality. Use custom JavaScript to disable links here.

#### Cross-browser compatibility

While Securus Pattern Library will apply these styles in all browsers, Internet Explorer 9 and below don't actually support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.

<div class="spl-example">
    <form role="form">
        <fieldset disabled="">
            <div class="form-group">
            <label for="disabledTextInput">Disabled input</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
            </div>
            <div class="form-group">
            <label for="disabledSelect">Disabled select menu</label>
            <select id="disabledSelect" class="form-control">
                <option>Disabled select</option>
            </select>
            </div>
            <div class="checkbox">
            <input type="checkbox" id="cantcheckthis" class="fa checkbox">
              <label for="cantcheckthis">Can't check this</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
    </form>
</div>

```
<form role="form">
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox"> Can't check this
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
```

### Validation states

Securus Pattern Library includes validation styles for error, warning, and success states on form controls. To use, add `.has-warning`, `.has-error`, or `.has-success` to the parent element. Any `.control-label`, `.form-control`, and `.help-block` within that element will receive the validation styles.

<div class="spl-example">
    <form role="form">
    <div class="form-group has-success">
        <label class="control-label" for="inputSuccess">Input with success</label>
        <input type="text" class="form-control" id="inputSuccess">
    </div>
    <div class="form-group has-warning">
        <label class="control-label" for="inputWarning">Input with warning</label>
        <input type="text" class="form-control" id="inputWarning">
    </div>
    <div class="form-group has-error">
        <label class="control-label" for="inputError">Input with error</label>
        <input type="text" class="form-control" id="inputError">
    </div>
    </form>
</div>

```
<div class="form-group has-success">
  <label class="control-label" for="inputSuccess">Input with success</label>
  <input type="text" class="form-control" id="inputSuccess">
</div>
<div class="form-group has-warning">
  <label class="control-label" for="inputWarning">Input with warning</label>
  <input type="text" class="form-control" id="inputWarning">
</div>
<div class="form-group has-error">
  <label class="control-label" for="inputError">Input with error</label>
  <input type="text" class="form-control" id="inputError">
</div>
```

## Control sizing

Set heights using classes like `.input-lg`, and set widths using grid column classes like `.col-lg-*`.

### Height sizing

Create larger or smaller form controls that match button sizes.

<div class="spl-example spl-example-control-sizing">
  <form role="form">
    <div class="spl-controls">
      <input class="form-control input-lg" type="text" placeholder=".input-lg" />
      <input type="text" class="form-control" placeholder="Default input" />
      <input class="form-control input-sm" type="text" placeholder=".input-sm" />
      <select class="form-control input-lg">
        <option value="">.input-lg</option>
      </select>
      <select class="form-control">
        <option value="">Default select</option>
      </select>
      <select class="form-control input-sm">
        <option value="">.input-sm</option>
      </select>
    </div>
  </form>
</div>

```
<input class="form-control input-lg" type="text" placeholder=".input-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control input-sm" type="text" placeholder=".input-sm">
<select class="form-control input-lg">...</select>
<select class="form-control">...</select>
<select class="form-control input-sm">...</select>
```

### Column sizing

Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.

<div class="spl-example">
    <form role="form">
    <div class="row">
        <div class="col-xs-2">
        <input type="text" class="form-control" placeholder=".col-xs-2">
        </div>
        <div class="col-xs-3">
        <input type="text" class="form-control" placeholder=".col-xs-3">
        </div>
        <div class="col-xs-4">
        <input type="text" class="form-control" placeholder=".col-xs-4">
        </div>
    </div>
    </form>
</div>

```
<div class="row">
  <div class="col-xs-2">
    <input type="text" class="form-control" placeholder=".col-xs-2">
  </div>
  <div class="col-xs-3">
    <input type="text" class="form-control" placeholder=".col-xs-3">
  </div>
  <div class="col-xs-4">
    <input type="text" class="form-control" placeholder=".col-xs-4">
  </div>
</div>
```

## Help text

Block level help text for form controls.

<div class="spl-example">
    <form role="form">
    <input type="text" class="form-control">
    <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
    </form>
</div>

```
<span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
```
{{/markdown}}
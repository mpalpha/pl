---
title: Buttons
---
{{#markdown}}
Use this page to guide your designs and layouts, both online and off, to ensure you're staying
consistent with the Base Structures.

<h2 id="buttons-tags">
    <a class="anchorjs-link " href="#buttons-tags" aria-label="Anchor link for: buttons tags" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Button tags</h2>
<p>Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.</p>
<form class="spl-example" data-example-id="btn-tags"> <a href="#" class="btn btn-default" role="button">Link</a>
    <button class="btn btn-default" type="submit">Button</button>
    <input class="btn btn-default" type="button" value="Input">
    <input class="btn btn-default" type="submit" value="Submit"> </form><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">role=</span><span class="s">"button"</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">type=</span><span class="s">"submit"</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">value=</span><span class="s">"Input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"btn btn-default"</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">value=</span><span class="s">"Submit"</span><span class="nt">&gt;</span></code></pre>
</figure>
<div class="spl-callout spl-callout-warning" id="callout-buttons-context-usage">
    <h4>Context-specific usage</h4>
    <p>While button classes can be used on <code>&lt;a&gt;</code> and <code>&lt;button&gt;</code> elements, only <code>&lt;button&gt;</code>        elements are supported within our nav and navbar components.</p>
</div>
<div class="spl-callout spl-callout-warning" id="callout-buttons-anchor-accessibility">
    <h4>Links acting as buttons</h4>
    <p>If the <code>&lt;a&gt;</code> elements are used to act as buttons – triggering in-page functionality, rather than navigating
        to another document or section within the current page – they should also be given an appropriate <code>role="button"</code>.</p>
</div>
<div class="spl-callout spl-callout-warning" id="callout-buttons-ff-height">
    <h4>Cross-browser rendering</h4>
    <p>As a best practice, <strong>we highly recommend using the <code>&lt;button&gt;</code> element whenever possible</strong>        to ensure matching cross-browser rendering.</p>
    <p>Among other things, there's <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=697451">a bug in Firefox &lt;30</a>        that prevents us from setting the <code>line-height</code> of <code>&lt;input&gt;</code>-based buttons, causing them
        to not exactly match the height of other buttons on Firefox.</p>
</div>
<h2 id="buttons-options">
    <a class="anchorjs-link " href="#buttons-options" aria-label="Anchor link for: buttons options" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Options</h2>
<p>Use any of the available button classes to quickly create a styled button.</p>
<div class="spl-example" data-example-id="btn-variants">
    <button type="button" class="btn btn-default">Default</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-link">Link</button>
</div>
<figure class="highlight">
    <pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Standard button --&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">&gt;</span>Default<span class="nt">&lt;/button&gt;</span>

<span class="c">&lt;!-- Provides extra visual weight and identifies the primary action in a set of buttons --></span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">></span>Primary<span class="nt">&lt;/button></span>

<span class="c">&lt;!-- Indicates a successful or positive action --></span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-success"</span><span class="nt">></span>Success<span class="nt">&lt;/button></span>

<span class="c">&lt;!-- Contextual button for informational alert messages --></span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-info"</span><span class="nt">></span>Info<span class="nt">&lt;/button></span>

<span class="c">&lt;!-- Indicates caution should be taken with this action --></span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-warning"</span><span class="nt">></span>Warning<span class="nt">&lt;/button></span>

<span class="c">&lt;!-- Indicates a dangerous or potentially negative action --></span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-danger"</span><span class="nt">></span>Danger<span class="nt">&lt;/button></span>

<span class="c">&lt;!-- Deemphasize a button by making it look like a link while maintaining button behavior --></span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-link"</span><span class="nt">></span>Link<span class="nt">&lt;/button></span></code></pre>

</figure>
<div class="spl-callout spl-callout-warning" id="callout-buttons-color-accessibility">
    <h4>Conveying meaning to assistive technologies</h4>
    <p>Using color to add meaning to a button only provides a visual indication, which will not be conveyed to users of assistive
        technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content
        itself (the visible text of the button), or is included through alternative means, such as additional text hidden
        with the <code>.sr-only</code> class.</p>
</div>
<h2 id="buttons-sizes">
    <a class="anchorjs-link " href="#buttons-sizes" aria-label="Anchor link for: buttons sizes" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Sizes</h2>
<p>Fancy larger or smaller buttons? Add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> for additional sizes.</p>
<div class="spl-example" data-example-id="btn-sizes">
    <p>
        <button type="button" class="btn btn-primary btn-lg">Large button</button>
        <button type="button" class="btn btn-default btn-lg">Large button</button>
    </p>
    <p>
        <button type="button" class="btn btn-primary">Default button</button>
        <button type="button" class="btn btn-default">Default button</button>
    </p>
    <p>
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
        <button type="button" class="btn btn-default btn-sm">Small button</button>
    </p>
    <p>
        <button type="button" class="btn btn-primary btn-xs">Extra small button</button>
        <button type="button" class="btn btn-default btn-xs">Extra small button</button>
    </p>
</div>
<figure class="highlight">
    <pre><code class="language-html" data-lang="html"><span class="nt">&lt;p&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-lg"</span><span class="nt">&gt;</span>Large button<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-lg"</span><span class="nt">&gt;</span>Large button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Default button<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">&gt;</span>Default button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-sm"</span><span class="nt">&gt;</span>Small button<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-sm"</span><span class="nt">&gt;</span>Small button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-xs"</span><span class="nt">&gt;</span>Extra small button<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-xs"</span><span class="nt">&gt;</span>Extra small button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre>
</figure>
<p>Create block level buttons—those that span the full width of a parent— by adding <code>.btn-block</code>.</p>
<div class="spl-example" data-example-id="block-btns">
    <div class="well center-block" style="max-width:400px">
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-default btn-lg btn-block">Block level button</button>
</div>
</div>
<figure class="highlight">
    <pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-lg btn-block"</span><span class="nt">&gt;</span>Block level button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-lg btn-block"</span><span class="nt">&gt;</span>Block level button<span class="nt">&lt;/button&gt;</span></code></pre>
</figure>
<h2 id="buttons-active">
    <a class="anchorjs-link " href="#buttons-active" aria-label="Anchor link for: buttons active" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Active state</h2>
<p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For <code>&lt;button&gt;</code>    elements, this is done via <code>:active</code>. For <code>&lt;a&gt;</code> elements, it's done with <code>.active</code>.
    However, you may use <code>.active</code> on <code>&lt;button&gt;</code>s (and include the <code>aria-pressed="true"</code>    attribute) should you need to replicate the active state programmatically.</p>
<h3 id="button-element">
    <a class="anchorjs-link " href="#button-element" aria-label="Anchor link for: button element" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Button element</h3>
<p>No need to add <code>:active</code> as it's a pseudo-class, but if you need to force the same appearance, go ahead and add
    <code>.active</code>.</p>
<p class="spl-example" data-example-id="active-button-btns">
    <button type="button" class="btn btn-primary btn-lg active">Primary button</button>
    <button type="button" class="btn btn-default btn-lg active">Button</button>
</p>
<figure class="highlight">
    <pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-lg active"</span><span class="nt">&gt;</span>Primary button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-lg active"</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/button&gt;</span></code></pre>
</figure>
<h3 id="anchor-element">
    <a class="anchorjs-link " href="#anchor-element" aria-label="Anchor link for: anchor element" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Anchor element</h3>
<p>Add the <code>.active</code> class to <code>&lt;a&gt;</code> buttons.</p>
<p class="spl-example" data-example-id="active-anchor-btns"> <a href="#" class="btn btn-primary btn-lg active" role="button">Primary link</a> <a href="#" class="btn btn-default btn-lg active"
        role="button">Link</a> </p>
<figure class="highlight">
    <pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-lg active"</span> <span class="na">role=</span><span class="s">"button"</span><span class="nt">&gt;</span>Primary link<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-lg active"</span> <span class="na">role=</span><span class="s">"button"</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/a&gt;</span></code></pre>
</figure>
<h2 id="buttons-disabled">
    <a class="anchorjs-link " href="#buttons-disabled" aria-label="Anchor link for: buttons disabled" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Disabled state</h2>
<p>Make buttons look unclickable by fading them back with <code>opacity</code>.</p>
<h3 id="button-element-1">
    <a class="anchorjs-link " href="#button-element-1" aria-label="Anchor link for: button element 1" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Button element</h3>
<p>Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.</p>
<p class="spl-example" data-example-id="disabled-button-btns">
    <button type="button" class="btn btn-primary btn-lg" disabled="">Primary button</button>
    <button type="button" class="btn btn-default btn-lg" disabled="">Button</button>
</p>
<figure class="highlight">
    <pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-lg btn-primary"</span> <span class="na">disabled=</span><span class="s">"disabled"</span><span class="nt">&gt;</span>Primary button<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-lg"</span> <span class="na">disabled=</span><span class="s">"disabled"</span><span class="nt">&gt;</span>Button<span class="nt">&lt;/button&gt;</span></code></pre>
</figure>
<div class="spl-callout spl-callout-danger" id="callout-buttons-ie-disabled">
    <h4>Cross-browser compatibility</h4>
    <p>If you add the <code>disabled</code> attribute to a <code>&lt;button&gt;</code>, Internet Explorer 9 and below will render
        text gray with a nasty text-shadow.</p>
</div>
<h3 id="anchor-element-1">
    <a class="anchorjs-link " href="#anchor-element-1" aria-label="Anchor link for: anchor element 1" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Anchor element</h3>
<p>Add the <code>.disabled</code> class to <code>&lt;a&gt;</code> buttons.</p>
<p class="spl-example" data-example-id="disabled-anchor-btns"> <a href="#" class="btn btn-primary btn-lg disabled" role="button">Primary link</a> <a href="#" class="btn btn-default btn-lg disabled"
        role="button">Link</a> </p>
<figure class="highlight">
    <pre><code class="language-html" data-lang="html"><span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"btn btn-primary btn-lg disabled"</span> <span class="na">role=</span><span class="s">"button"</span><span class="nt">&gt;</span>Primary link<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"btn btn-default btn-lg disabled"</span> <span class="na">role=</span><span class="s">"button"</span><span class="nt">&gt;</span>Link<span class="nt">&lt;/a&gt;</span></code></pre>
</figure>
<p> We use <code>.disabled</code> as a utility class here, similar to the common <code>.active</code> class, so no prefix is
    required. </p>
<div class="spl-callout spl-callout-warning" id="callout-buttons-disabled-anchor">
    <h4>Link functionality caveat</h4>
    <p>This class uses <code>pointer-events: none</code> to try to disable the link functionality of <code>&lt;a&gt;</code>s,
        but that CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet Explorer
        11. In addition, even in browsers that do support <code>pointer-events: none</code>, keyboard navigation remains
        unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate
        these links. So to be safe, use custom JavaScript to disable such links.</p>
</div>

### Button groups

<p class="lead">Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox
    style behavior with <a href="../javascript/#buttons">our buttons plugin</a>.</p>
<div class="spl-callout spl-callout-warning" id="callout-btn-group-tooltips">
    <h4>Tooltips &amp; popovers in button groups require special setting</h4>
    <p>When using tooltips or popovers on elements within a <code>.btn-group</code>, you'll have to specify the option <code>container: 'body'</code>        to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip
        or popover is triggered).</p>
</div>
<div class="spl-callout spl-callout-warning" id="callout-btn-group-accessibility">
    <h4>Ensure correct <code>role</code> and provide a label</h4>
    <p>In order for assistive technologies – such as screen readers – to convey that a series of buttons is grouped, an appropriate
        <code>role</code> attribute needs to be provided. For button groups, this would be <code>role="group"</code>, while
        toolbars should have a <code>role="toolbar"</code>.</p>
    <p>One exception are groups which only contain a single control (for instance the <a href="#btn-groups-justified">justified button groups</a>        with <code>&lt;button&gt;</code> elements) or a dropdown.</p>
    <p>In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not
        announce them, despite the presence of the correct <code>role</code> attribute. In the examples provided here, we
        use <code>aria-label</code>, but alternatives such as <code>aria-labelledby</code> can also be used.</p>
</div>
<h2 id="btn-groups-single">
    <a class="anchorjs-link " href="#btn-groups-single" aria-label="Anchor link for: btn groups single" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Basic example</h2>
<p>Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.</p>
<div class="spl-example" data-example-id="simple-button-group">
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">&gt;</span>Left<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">&gt;</span>Middle<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">&gt;</span>Right<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<h2 id="btn-groups-toolbar">
    <a class="anchorjs-link " href="#btn-groups-toolbar" aria-label="Anchor link for: btn groups toolbar" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Button toolbar</h2>
<p>Combine sets of <code>&lt;div class="btn-group"&gt;</code> into a <code>&lt;div class="btn-toolbar"&gt;</code> for more complex
    components.</p>
<div class="spl-example" data-example-id="simple-button-toolbar">
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group" role="group" aria-label="First group">
            <button type="button" class="btn btn-default">1</button>
            <button type="button" class="btn btn-default">2</button>
            <button type="button" class="btn btn-default">3</button>
            <button type="button" class="btn btn-default">4</button>
        </div>
        <div class="btn-group" role="group" aria-label="Second group">
            <button type="button" class="btn btn-default">5</button>
            <button type="button" class="btn btn-default">6</button>
            <button type="button" class="btn btn-default">7</button>
        </div>
        <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-default">8</button>
        </div>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-toolbar"</span> <span class="na">role=</span><span class="s">"toolbar"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<h2 id="btn-groups-sizing">
    <a class="anchorjs-link " href="#btn-groups-sizing" aria-label="Anchor link for: btn groups sizing" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Sizing</h2>
<p>Instead of applying button sizing classes to every button in a group, just add <code>.btn-group-*</code> to each <code>.btn-group</code>,
    including when nesting multiple groups.</p>
<div class="spl-example" data-example-id="button-group-sizing">
    <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
    </div>
    <br>
    <div class="btn-group" role="group" aria-label="Default button group">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
    </div>
    <br>
    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
    </div>
    <br>
    <div class="btn-group btn-group-xs" role="group" aria-label="Extra-small button group">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group btn-group-lg"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group btn-group-sm"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group btn-group-xs"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<h2 id="btn-groups-nested">
    <a class="anchorjs-link " href="#btn-groups-nested" aria-label="Anchor link for: btn groups nested" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Nesting</h2>
<p>Place a <code>.btn-group</code> within another <code>.btn-group</code> when you want dropdown menus mixed with a series of
    buttons.</p>
<div class="spl-example" data-example-id="button-group-nesting">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" class="btn btn-default">1</button>
        <button type="button" class="btn btn-default">2</button>
        <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"> Dropdown <span class="caret"></span> </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><a href="#">Dropdown link</a>
                </li>
                <li><a href="#">Dropdown link</a>
                </li>
            </ul>
        </div>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">&gt;</span>1<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">&gt;</span>2<span class="nt">&lt;/button&gt;</span>

  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default dropdown-toggle"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">></span>
      Dropdown
      <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">>&lt;/span></span>
    <span class="nt">&lt;/button></span>
    <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span><span class="nt">></span>
      <span class="nt">&lt;li>&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">></span>Dropdown link<span class="nt">&lt;/a>&lt;/li></span>
      <span class="nt">&lt;li>&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">></span>Dropdown link<span class="nt">&lt;/a>&lt;/li></span>
    <span class="nt">&lt;/ul></span>
  <span class="nt">&lt;/div></span>
<span class="nt">&lt;/div></span></code></pre></figure>
<h2 id="btn-groups-vertical">
    <a class="anchorjs-link " href="#btn-groups-vertical" aria-label="Anchor link for: btn groups vertical" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Vertical variation</h2>
<p>Make a set of buttons appear vertically stacked rather than horizontally. <strong class="text-danger">Split button dropdowns are not supported here.</strong>
</p>
<div class="spl-example" data-example-id="vertical-button-group">
    <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
        <button type="button" class="btn btn-default">Button</button>
        <button type="button" class="btn btn-default">Button</button>
        <div class="btn-group" role="group">
            <button id="btnGroupVerticalDrop1" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"> Dropdown <span class="caret"></span> </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                <li><a href="#">Dropdown link</a>
                </li>
                <li><a href="#">Dropdown link</a>
                </li>
            </ul>
        </div>
        <button type="button" class="btn btn-default">Button</button>
        <button type="button" class="btn btn-default">Button</button>
        <div class="btn-group" role="group">
            <button id="btnGroupVerticalDrop2" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"> Dropdown <span class="caret"></span> </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
                <li><a href="#">Dropdown link</a>
                </li>
                <li><a href="#">Dropdown link</a>
                </li>
            </ul>
        </div>
        <div class="btn-group" role="group">
            <button id="btnGroupVerticalDrop3" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"> Dropdown <span class="caret"></span> </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
                <li><a href="#">Dropdown link</a>
                </li>
                <li><a href="#">Dropdown link</a>
                </li>
            </ul>
        </div>
        <div class="btn-group" role="group">
            <button id="btnGroupVerticalDrop4" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"> Dropdown <span class="caret"></span> </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
                <li><a href="#">Dropdown link</a>
                </li>
                <li><a href="#">Dropdown link</a>
                </li>
            </ul>
        </div>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group-vertical"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">></span>
  ...
<span class="nt">&lt;/div></span></code></pre></figure>
<h2 id="btn-groups-justified">
    <a class="anchorjs-link " href="#btn-groups-justified" aria-label="Anchor link for: btn groups justified" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Justified button groups</h2>
<p>Make a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within
    the button group.</p>
<div class="spl-callout spl-callout-warning" id="callout-btn-group-justified-dbl-border">
    <h4>Handling borders</h4>
    <p>Due to the specific HTML and CSS used to justify buttons (namely <code>display: table-cell</code>), the borders between
        them are doubled. In regular button groups, <code>margin-left: -1px</code> is used to stack the borders instead of
        removing them. However, <code>margin</code> doesn't work with <code>display: table-cell</code>. As a result, depending
        on your customizations to Securus Pattern Library, you may wish to remove or re-color the borders.</p>
</div>
<div class="spl-callout spl-callout-warning" id="callout-btn-group-ie8-border">
    <h4>IE8 and borders</h4>
    <p>Internet Explorer 8 doesn't render borders on buttons in a justified button group, whether it's on <code>&lt;a></code>        or <code>&lt;button></code> elements. To get around that, wrap each button in another <code>.btn-group</code>.</p>
    <p>See <a href="https://github.com/twbs/bootstrap/issues/12476">#12476</a> for more information.</p>
</div>
<h4 id="with-<a>-elements">
    <a class="anchorjs-link " href="#with-&lt;a&gt;-elements" aria-label="Anchor link for: with <a> elements" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>With <code>&lt;a></code> elements</h4>
<p>Just wrap a series of <code>.btn</code>s in <code>.btn-group.btn-group-justified</code>.</p>
<div class="spl-example" data-example-id="simple-justified-button-group">
    <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group"> <a href="#" class="btn btn-default" role="button">Left</a> <a href="#" class="btn btn-default" role="button">Middle</a>        <a href="#" class="btn btn-default" role="button">Right</a> </div>
    <br>
    <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group with nested dropdown"> <a href="#" class="btn btn-default" role="button">Left</a> <a href="#" class="btn btn-default" role="button">Middle</a>
        <div class="btn-group" role="group"> <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Dropdown <span class="caret"></span> </a>
            <ul class="dropdown-menu">
                <li><a href="#">Action</a>
                </li>
                <li><a href="#">Another action</a>
                </li>
                <li><a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a>
                </li>
            </ul>
        </div>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group btn-group-justified"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">></span>
  ...
<span class="nt">&lt;/div></span></code></pre></figure>
<div class="spl-callout spl-callout-warning" id="callout-btn-group-anchor-btn">
    <h4>Links acting as buttons</h4>
    <p>If the <code>&lt;a></code> elements are used to act as buttons – triggering in-page functionality, rather than navigating
        to another document or section within the current page – they should also be given an appropriate <code>role="button"</code>.</p>
</div>
<h4 id="with-<button>-elements">
    <a class="anchorjs-link " href="#with-&lt;button&gt;-elements" aria-label="Anchor link for: with <button> elements" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>With <code>&lt;button></code> elements</h4>
<p>To use justified button groups with <code>&lt;button></code> elements, <strong class="text-danger">you must wrap each button in a button group</strong>.
    Most browsers don't properly apply our CSS for justification to <code>&lt;button></code> elements, but since we support
    button dropdowns, we can work around that.</p>
<div class="spl-example" data-example-id="button-tag-button-group-justified">
    <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-default">Left</button>
        </div>
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-default">Middle</button>
        </div>
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-default">Right</button>
        </div>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group btn-group-justified"</span> <span class="na">role=</span><span class="s">"group"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">></span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">></span>Left<span class="nt">&lt;/button></span>
  <span class="nt">&lt;/div></span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">></span>Middle<span class="nt">&lt;/button></span>
  <span class="nt">&lt;/div></span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span> <span class="na">role=</span><span class="s">"group"</span><span class="nt">></span>
    <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">></span>Right<span class="nt">&lt;/button></span>
  <span class="nt">&lt;/div></span>
<span class="nt">&lt;/div></span></code></pre></figure>

### Button dropdowns

<p class="lead">Use any button to trigger a dropdown menu by placing it within a <code>.btn-group</code> and providing the proper menu markup.</p>
<div class="spl-callout spl-callout-danger" id="callout-btndropdown-dependency">
    <h4>Plugin dependency</h4>
    <p>Button dropdowns require the <a href="../javascript/#dropdowns">dropdown plugin</a> to be included in your version of
        Securus Pattern Library.</p>
</div>
<h2 id="btn-dropdowns-single">
    <a class="anchorjs-link " href="#btn-dropdowns-single" aria-label="Anchor link for: btn dropdowns single" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Single button dropdowns</h2>
<p>Turn a button into a dropdown toggle with some basic markup changes.</p>
<div class="spl-example" data-example-id="single-button-dropdown">
    <div class="btn-group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Default <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Single button --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default dropdown-toggle"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">&gt;</span>
    Action <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">&gt;&lt;/span&gt;</span>
  <span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Action<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Another action<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Something else here<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">role=</span><span class="s">"separator"</span> <span class="na">class=</span><span class="s">"divider"</span><span class="nt">&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Separated link<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<h2 id="btn-dropdowns-split">
    <a class="anchorjs-link " href="#btn-dropdowns-split" aria-label="Anchor link for: btn dropdowns split" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Split button dropdowns</h2>
<p>Similarly, create split button dropdowns with the same markup changes, only with a separate button.</p>
<div class="spl-example" data-example-id="split-button-dropdown">
    <div class="btn-group">
        <button type="button" class="btn btn-default">Default</button>
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a>
            </li>
        </ul>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Split button --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-danger"</span><span class="nt">&gt;</span>Action<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-danger dropdown-toggle"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">&gt;&lt;/span&gt;</span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Toggle Dropdown<span class="nt">&lt;/span&gt;</span>
  <span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Action<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Another action<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Something else here<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li</span> <span class="na">role=</span><span class="s">"separator"</span> <span class="na">class=</span><span class="s">"divider"</span><span class="nt">&gt;&lt;/li&gt;</span>
    <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;</span>Separated link<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
<h2 id="btn-dropdowns-sizing">
    <a class="anchorjs-link " href="#btn-dropdowns-sizing" aria-label="Anchor link for: btn dropdowns sizing" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Sizing</h2>
<p>Button dropdowns work with buttons of all sizes.</p>
<div class="spl-example" data-example-id="button-dropdown-sizing">
    <div class="btn-toolbar" role="toolbar">
        <div class="btn-group">
            <button class="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Large button <span class="caret"></span> </button>
            <ul class="dropdown-menu">
                <li><a href="#">Action</a>
                </li>
                <li><a href="#">Another action</a>
                </li>
                <li><a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="btn-toolbar" role="toolbar">
        <div class="btn-group">
            <button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Small button <span class="caret"></span> </button>
            <ul class="dropdown-menu">
                <li><a href="#">Action</a>
                </li>
                <li><a href="#">Another action</a>
                </li>
                <li><a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="btn-toolbar" role="toolbar">
        <div class="btn-group">
            <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Extra small button <span class="caret"></span> </button>
            <ul class="dropdown-menu">
                <li><a href="#">Action</a>
                </li>
                <li><a href="#">Another action</a>
                </li>
                <li><a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a>
                </li>
            </ul>
        </div>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Large button group --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"btn btn-default btn-lg dropdown-toggle"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">&gt;</span>
    Large button <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">&gt;&lt;/span&gt;</span>
  <span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span><span class="nt">&gt;</span>
    ...
  <span class="nt">&lt;/ul&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="c">&lt;!-- Small button group --></span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span><span class="nt">></span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"btn btn-default btn-sm dropdown-toggle"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">></span>
    Small button <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">>&lt;/span></span>
  <span class="nt">&lt;/button></span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span><span class="nt">></span>
    ...
  <span class="nt">&lt;/ul></span>
<span class="nt">&lt;/div></span>

<span class="c">&lt;!-- Extra small button group --></span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group"</span><span class="nt">></span>
  <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"btn btn-default btn-xs dropdown-toggle"</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">></span>
    Extra small button <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">>&lt;/span></span>
  <span class="nt">&lt;/button></span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span><span class="nt">></span>
    ...
  <span class="nt">&lt;/ul></span>
<span class="nt">&lt;/div></span></code></pre></figure>
<h2 id="btn-dropdowns-dropup">
    <a class="anchorjs-link " href="#btn-dropdowns-dropup" aria-label="Anchor link for: btn dropdowns dropup" data-anchorjs-icon=""
        style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Dropup variation</h2>
<p>Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent.</p>
<div class="spl-example" data-example-id="button-dropdown-dropup">
    <div class="btn-toolbar" role="toolbar">
        <div class="btn-group dropup">
            <button type="button" class="btn btn-default">Dropup</button>
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
            <ul class="dropdown-menu">
                <li><a href="#">Action</a>
                </li>
                <li><a href="#">Another action</a>
                </li>
                <li><a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a>
                </li>
            </ul>
        </div>
        <div class="btn-group dropup">
            <button type="button" class="btn btn-primary">Right dropup</button>
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
            <ul class="dropdown-menu dropdown-menu-right">
                <li><a href="#">Action</a>
                </li>
                <li><a href="#">Another action</a>
                </li>
                <li><a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a>
                </li>
            </ul>
        </div>
    </div>
</div><figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"btn-group dropup"</span><span class="nt">></span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default"</span><span class="nt">></span>Dropup<span class="nt">&lt;/button></span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"button"</span> <span class="na">class=</span><span class="s">"btn btn-default dropdown-toggle"</span> <span class="na">data-toggle=</span><span class="s">"dropdown"</span> <span class="na">aria-haspopup=</span><span class="s">"true"</span> <span class="na">aria-expanded=</span><span class="s">"false"</span><span class="nt">></span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"caret"</span><span class="nt">>&lt;/span></span>
    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">></span>Toggle Dropdown<span class="nt">&lt;/span></span>
  <span class="nt">&lt;/button></span>
  <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"dropdown-menu"</span><span class="nt">></span>
    <span class="c">&lt;!-- Dropdown menu links --></span>
  <span class="nt">&lt;/ul></span>
<span class="nt">&lt;/div></span></code></pre></figure>
{{/markdown}}
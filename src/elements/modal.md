---
title: Modal
---

{{#markdown}}
### Problem summary

Display a modal so the user can view, or edit information without having to navigate away and lose context on the current screen. 

Display a modal with a static header and footer as well as scrollable content area.

### Usage

-   Modal's come in three sizes: small, medium, and large. To change the modal size, change the class `modal-md` to `modal-sm` for a
    small modal or `modal-lg` for a wide modal.
-   The modal header can also have different colors, depending on the action that the user will be performing. To change the color,
    replace `modal-danger` in the code with `modal-success` for Add modals (adding a new entry to the system), `modal-default` for
     editing or displaying information, and leave it as `modal-danger` for any action that involves deleting something.
-   Note that the primary action button in the modal footer should match the modal header color e.g. if the modal is of type `modal-danger`
    the primary action should have the class `btn-danger` and so on.
-   Use when a modal contains inputs/controls that influece the data displayed in the scrollable modal field.
-   Use when you have directions/guidelines/rules/suggestions that are required to be visible at all times while still be able to scroll content.
-   Use when you have key information related to the scrollable field that the user needs to stay visible while scrolling the content field.
-   Do not use when there is only 1 or 2 steps in submitting data to the website.
-   Do not use when the process of filling out data is easily foreseeable.

### Example: Modal with a scrolling body

<div class="library__example">
    <div class="modal-dialog">
        <div class="modal-content modal-md">
            <div class="modal-header modal-danger">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                <h4 class="modal-title" id="DeleteForwardingCallModalLabel">Delete Call Forward Number</h4>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus sed leo vel tempus. Aliquam vestibulum, felis vitae tristique interdum, risus nibh commodo metus, malesuada tempor neque enim vitae libero. Vestibulum augue sem, finibus et sapien id, commodo pretium mauris. Quisque convallis odio eu suscipit ultrices. Maecenas sagittis placerat nibh, eu pretium ipsum egestas nec. Sed placerat vitae purus sed consectetur. Nam id ipsum elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar nunc sapien, at dapibus leo feugiat accumsan.</p>
                    <p>Morbi cursus risus vel ante dapibus, eget fringilla lorem blandit. Vestibulum vehicula malesuada libero non efficitur. Nulla mattis urna a libero consectetur euismod. Etiam sodales mattis aliquam. Cras ac tempus ex. Proin eleifend ut dolor id luctus. Suspendisse lacus nibh, bibendum sed nunc id, ultrices sodales turpis. Aliquam maximus sodales enim a iaculis. Nullam elementum augue non arcu consequat, et dignissim odio interdum. Fusce viverra ligula sit amet aliquet pharetra. Pellentesque ac elit at mauris hendrerit rutrum.</p>
                    <p>Donec in felis luctus, tincidunt velit eu, congue lacus. Nulla a iaculis erat, posuere auctor ex. Donec tristique dui justo, eget sollicitudin turpis ullamcorper et. Praesent a urna a justo porta feugiat at eu arcu. Nullam placerat, purus non porta volutpat, magna libero efficitur tellus, non posuere nisi augue ut purus. Mauris libero nunc, rhoncus at ipsum eget, cursus ornare ex. Cras facilisis lacus non est consequat scelerisque. Sed ac pretium lacus, quis egestas sem. Etiam sit amet metus ornare, porta lorem sit amet, lacinia mauris.</p>
                    <p>Praesent mollis, nisl et molestie mattis, dolor diam volutpat felis, a luctus lectus arcu non justo. Maecenas aliquet, enim non volutpat malesuada, sem sem pulvinar ante, et aliquam ante ante et magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut efficitur magna et egestas finibus. Pellentesque ut libero vulputate, hendrerit arcu id, pretium arcu. Morbi eu malesuada mauris, sed rutrum libero. Sed in dolor id lorem sagittis finibus. Vestibulum ultrices ipsum ac est rutrum, sit amet dapibus quam convallis. Morbi hendrerit magna a erat laoreet, sed congue nunc condimentum.</p>
                    <p>Nulla sit amet turpis enim. Nulla eleifend ipsum sit amet ornare auctor. In vitae molestie tortor, et consequat ante. Duis ac orci eu enim blandit consectetur sit amet eu lectus. Vestibulum porttitor risus eget libero volutpat, nec egestas magna venenatis. Fusce congue faucibus arcu eget consectetur. Phasellus ligula lacus, scelerisque eu congue eget, facilisis non nisi. Nunc volutpat eros non ipsum cursus, vitae dictum est interdum. Fusce posuere velit sed interdum aliquam.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Delete Call Forward Number</button>
            </div>
        </div>
    </div>
</div>

### Code

```html
<div class="library__example">
    <div class="modal-dialog">
        <div class="modal-content modal-md">
            <div class="modal-header modal-danger">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                <h4 class="modal-title" id=""><!-- Modal Title --></h4>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus sed leo vel tempus. Aliquam vestibulum, felis vitae tristique interdum, risus nibh commodo metus, malesuada tempor neque enim vitae libero. Vestibulum augue sem, finibus et sapien id, commodo pretium mauris. Quisque convallis odio eu suscipit ultrices. Maecenas sagittis placerat nibh, eu pretium ipsum egestas nec. Sed placerat vitae purus sed consectetur. Nam id ipsum elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar nunc sapien, at dapibus leo feugiat accumsan.</p>
                    <p>Morbi cursus risus vel ante dapibus, eget fringilla lorem blandit. Vestibulum vehicula malesuada libero non efficitur. Nulla mattis urna a libero consectetur euismod. Etiam sodales mattis aliquam. Cras ac tempus ex. Proin eleifend ut dolor id luctus. Suspendisse lacus nibh, bibendum sed nunc id, ultrices sodales turpis. Aliquam maximus sodales enim a iaculis. Nullam elementum augue non arcu consequat, et dignissim odio interdum. Fusce viverra ligula sit amet aliquet pharetra. Pellentesque ac elit at mauris hendrerit rutrum.</p>
                    <p>Donec in felis luctus, tincidunt velit eu, congue lacus. Nulla a iaculis erat, posuere auctor ex. Donec tristique dui justo, eget sollicitudin turpis ullamcorper et. Praesent a urna a justo porta feugiat at eu arcu. Nullam placerat, purus non porta volutpat, magna libero efficitur tellus, non posuere nisi augue ut purus. Mauris libero nunc, rhoncus at ipsum eget, cursus ornare ex. Cras facilisis lacus non est consequat scelerisque. Sed ac pretium lacus, quis egestas sem. Etiam sit amet metus ornare, porta lorem sit amet, lacinia mauris.</p>
                    <p>Praesent mollis, nisl et molestie mattis, dolor diam volutpat felis, a luctus lectus arcu non justo. Maecenas aliquet, enim non volutpat malesuada, sem sem pulvinar ante, et aliquam ante ante et magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut efficitur magna et egestas finibus. Pellentesque ut libero vulputate, hendrerit arcu id, pretium arcu. Morbi eu malesuada mauris, sed rutrum libero. Sed in dolor id lorem sagittis finibus. Vestibulum ultrices ipsum ac est rutrum, sit amet dapibus quam convallis. Morbi hendrerit magna a erat laoreet, sed congue nunc condimentum.</p>
                    <p>Nulla sit amet turpis enim. Nulla eleifend ipsum sit amet ornare auctor. In vitae molestie tortor, et consequat ante. Duis ac orci eu enim blandit consectetur sit amet eu lectus. Vestibulum porttitor risus eget libero volutpat, nec egestas magna venenatis. Fusce congue faucibus arcu eget consectetur. Phasellus ligula lacus, scelerisque eu congue eget, facilisis non nisi. Nunc volutpat eros non ipsum cursus, vitae dictum est interdum. Fusce posuere velit sed interdum aliquam.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
```

### Example: Modal with a scrolling body content area and static header/footer

<div class="library__example">
    <div class="modal-dialog">
        <div class="modal-content modal-md">
            <div class="modal-header modal-danger">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                <h4 class="modal-title" id="DeleteForwardingCallModalLabel">Delete Call Forward Number</h4>
            </div>
            <div class="modal-body modal-body-flex">
                <div class="modal-body-flex-header padding-bottom-10">
<h4><b>Static Header</b></h4>
</div>
                <div class="modal-body-flex-content">
                <h4><b>Scrollable Content</b></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus sed leo vel tempus. Aliquam vestibulum, felis vitae tristique interdum, risus nibh commodo metus, malesuada tempor neque enim vitae libero. Vestibulum augue sem, finibus et sapien id, commodo pretium mauris. Quisque convallis odio eu suscipit ultrices. Maecenas sagittis placerat nibh, eu pretium ipsum egestas nec. Sed placerat vitae purus sed consectetur. Nam id ipsum elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar nunc sapien, at dapibus leo feugiat accumsan.</p>
                    <p>Morbi cursus risus vel ante dapibus, eget fringilla lorem blandit. Vestibulum vehicula malesuada libero non efficitur. Nulla mattis urna a libero consectetur euismod. Etiam sodales mattis aliquam. Cras ac tempus ex. Proin eleifend ut dolor id luctus. Suspendisse lacus nibh, bibendum sed nunc id, ultrices sodales turpis. Aliquam maximus sodales enim a iaculis. Nullam elementum augue non arcu consequat, et dignissim odio interdum. Fusce viverra ligula sit amet aliquet pharetra. Pellentesque ac elit at mauris hendrerit rutrum.</p>
                    <p>Donec in felis luctus, tincidunt velit eu, congue lacus. Nulla a iaculis erat, posuere auctor ex. Donec tristique dui justo, eget sollicitudin turpis ullamcorper et. Praesent a urna a justo porta feugiat at eu arcu. Nullam placerat, purus non porta volutpat, magna libero efficitur tellus, non posuere nisi augue ut purus. Mauris libero nunc, rhoncus at ipsum eget, cursus ornare ex. Cras facilisis lacus non est consequat scelerisque. Sed ac pretium lacus, quis egestas sem. Etiam sit amet metus ornare, porta lorem sit amet, lacinia mauris.</p>
                    <p>Praesent mollis, nisl et molestie mattis, dolor diam volutpat felis, a luctus lectus arcu non justo. Maecenas aliquet, enim non volutpat malesuada, sem sem pulvinar ante, et aliquam ante ante et magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut efficitur magna et egestas finibus. Pellentesque ut libero vulputate, hendrerit arcu id, pretium arcu. Morbi eu malesuada mauris, sed rutrum libero. Sed in dolor id lorem sagittis finibus. Vestibulum ultrices ipsum ac est rutrum, sit amet dapibus quam convallis. Morbi hendrerit magna a erat laoreet, sed congue nunc condimentum.</p>
                    <p>Nulla sit amet turpis enim. Nulla eleifend ipsum sit amet ornare auctor. In vitae molestie tortor, et consequat ante. Duis ac orci eu enim blandit consectetur sit amet eu lectus. Vestibulum porttitor risus eget libero volutpat, nec egestas magna venenatis. Fusce congue faucibus arcu eget consectetur. Phasellus ligula lacus, scelerisque eu congue eget, facilisis non nisi. Nunc volutpat eros non ipsum cursus, vitae dictum est interdum. Fusce posuere velit sed interdum aliquam.</p>
                </div>
<div class="modal-body-flex-footer">
                   <h4><b>Static Footer</b></h4>
                </div>
</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Delete Call Forward Number</button>
            </div>
        </div>
    </div>

</div>

### Code

```html
<div class="modal fade" id="impactRuleTable" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content modal-lg">

            <div class="modal-header modal-danger">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                <div class="modal-title">
                    Impacted Visits
                </div>
            </div>

            <div class="modal-body modal-body-flex">
                <div class="modal-body-flex-header padding-bottom-10">

                    <h4><b>Static Header</b></h4>

                </div>
                <div class="modal-body-flex-content">
                <h4><b>Scrollable Content</b></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus sed leo vel tempus. Aliquam vestibulum, felis vitae tristique interdum, risus nibh commodo metus, malesuada tempor neque enim vitae libero. Vestibulum augue sem, finibus et sapien id, commodo pretium mauris. Quisque convallis odio eu suscipit ultrices. Maecenas sagittis placerat nibh, eu pretium ipsum egestas nec. Sed placerat vitae purus sed consectetur. Nam id ipsum elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar nunc sapien, at dapibus leo feugiat accumsan.

                    Morbi cursus risus vel ante dapibus, eget fringilla lorem blandit. Vestibulum vehicula malesuada libero non efficitur. Nulla mattis urna a libero consectetur euismod. Etiam sodales mattis aliquam. Cras ac tempus ex. Proin eleifend ut dolor id luctus. Suspendisse lacus nibh, bibendum sed nunc id, ultrices sodales turpis. Aliquam maximus sodales enim a iaculis. Nullam elementum augue non arcu consequat, et dignissim odio interdum. Fusce viverra ligula sit amet aliquet pharetra. Pellentesque ac elit at mauris hendrerit rutrum.

                    Donec in felis luctus, tincidunt velit eu, congue lacus. Nulla a iaculis erat, posuere auctor ex. Donec tristique dui justo, eget sollicitudin turpis ullamcorper et. Praesent a urna a justo porta feugiat at eu arcu. Nullam placerat, purus non porta volutpat, magna libero efficitur tellus, non posuere nisi augue ut purus. Mauris libero nunc, rhoncus at ipsum eget, cursus ornare ex. Cras facilisis lacus non est consequat scelerisque. Sed ac pretium lacus, quis egestas sem. Etiam sit amet metus ornare, porta lorem sit amet, lacinia mauris.

                    Praesent mollis, nisl et molestie mattis, dolor diam volutpat felis, a luctus lectus arcu non justo. Maecenas aliquet, enim non volutpat malesuada, sem sem pulvinar ante, et aliquam ante ante et magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut efficitur magna et egestas finibus. Pellentesque ut libero vulputate, hendrerit arcu id, pretium arcu. Morbi eu malesuada mauris, sed rutrum libero. Sed in dolor id lorem sagittis finibus. Vestibulum ultrices ipsum ac est rutrum, sit amet dapibus quam convallis. Morbi hendrerit magna a erat laoreet, sed congue nunc condimentum.

                    Nulla sit amet turpis enim. Nulla eleifend ipsum sit amet ornare auctor. In vitae molestie tortor, et consequat ante. Duis ac orci eu enim blandit consectetur sit amet eu lectus. Vestibulum porttitor risus eget libero volutpat, nec egestas magna venenatis. Fusce congue faucibus arcu eget consectetur. Phasellus ligula lacus, scelerisque eu congue eget, facilisis non nisi. Nunc volutpat eros non ipsum cursus, vitae dictum est interdum. Fusce posuere velit sed interdum aliquam.</p>
                </div>

                <div class="modal-body-flex-footer">
                   <h4><b>Static Footer</b></h4>
                </div>


            </div>

            <div class="modal-footer">
                <a href class="btn btn-link" data-dismiss="modal">Cancel</a>
                <button type="button" class="btn btn-danger" data-dismiss="modal" disabled>Confirm</button>
            </div>
        </div>
    </div>
</div>
```
{{/markdown}}
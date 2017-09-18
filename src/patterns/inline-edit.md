---
title: Inline Edit
---
{{#markdown}}
Provides the ability to edit, save, and delete a record inline.

### Example
<div class="library__example">
    <table class="table inline-edit">
        <tr>
            <td>Meredith Sanders</td>
            <td>(833) 298-4560</td>
            <td>Belknap Unit</td>
            <td>
                <div class="row-actions" style="display: block;">
                    <button class="btn btn-link btn-edit">
                        <i class="fa fa-pencil"></i> Edit
                    </button>
                    <button class="btn btn-link btn-delete" data-toggle="modal" data-target="#DeleteForwardingCallModal">
                        <i class="fa fa-trash-o"></i> Delete
                    </button>
                </div>
            </td>
        </tr>
        <tr class="edit-row">
            <td>
                <input type="text" class="form-control" value="Meredith Sanders">
            </td>

            <td>
                <input type="text" class="form-control" value="(833) 298-4560">
            </td>
            <td>
                <select class="form-control" id="siteLocation">
                    <option value="site1" selected="">Belknap Unit</option>
                    <option value="site2">Collin County Jail</option>
                    <option value="site3">Frisco Jail</option>
                </select>
            </td>
            <td class="close-edit-row">
                <button class="btn btn-danger btn-link">Cancel</button>
                <button class="btn btn-success"><i class="fa fa-save"> Update</i>
                </button>
            </td>
        </tr>
    </table>
</div>

### Code
```html
<table class="table inline-edit">
    <tr>
        <td></td>
        <td>
            <div class="row-actions" style="display: block;">
                <button class="btn btn-link btn-edit">
                    <i class="fa fa-pencil"></i> Edit
                </button>
                <button class="btn btn-link btn-delete" data-toggle="modal" data-target="#DeleteForwardingCallModal">
                    <i class="fa fa-trash-o"></i> Delete
                </button>
            </div>
        </td>
    </tr>
    <tr class="edit-row">
        <td>
        </td>
        <td>
            <input type="text" class="form-control" value="">
        </td>
        <td class="close-edit-row">
            <button class="btn btn-danger btn-link">Cancel</button>
            <button class="btn btn-success"><i class="fa fa-save"> Update</i>
            </button>
        </td>
    </tr>
</table>
```
{{/markdown}}
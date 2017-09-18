---
title: Tag
---

{{#markdown}}
Enables users to attach a tag to a record so they can group them by logical categories, and search for them later to determine patterns.

### Example
<div class="library__example">
    <div class="add-tag-control" style="margin-bottom: 10px;">
        <div class="input-group tag-container">
            <div class="input-group-btn">
                <label class="sharing-check btn-tag-sharing btn btn-default" for="tag-sharing">
                    <input type="checkbox" name="check" id="tag-sharing" value="None">
                    <span class="icon"></span>
                </label>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#"><i class="fa fa-user"></i> Private</a>
                    </li>
                    <li><a href="#"><i class="fa fa-users"></i> Public</a>
                    </li>
                </ul>
            </div>
            <input type="text" class="form-control tag-input" placeholder="Name of tag">
            <div class="input-group-btn">
                <button class="btn btn-primary btn-tag-add" type="button">Add</button>&nbsp;
            </div>
        </div>
    </div>
    <div class="bff-include tag-list"><ul class="call-tag">
        <li class="private"><a href="#">Heisenberg </a><a class="delete" data-toggle="modal" data-target="#deleteTag"><i class="fa fa-times delete"></i></a>
        </li>
        <li class="private"><a href="#">Blue Meth </a><a class="delete" data-toggle="modal" data-target="#deleteTag"><i class="fa fa-times delete"></i></a>
        </li>
        <li class="private"><a href="#">Cartel Case: 84883821 </a><a class="delete" data-toggle="modal" data-target="#deleteTag"><i class="fa fa-times delete"></i></a>
        </li>
    </ul>
    </div>
</div>

### Code
```html
<!-- Add tag  -->
<div class="add-tag-control">
    <div class="input-group tag-container">
        <div class="input-group-btn">
            <label class="sharing-check btn-tag-sharing btn btn-default" for="tag-sharing">
                <input type="checkbox" name="check" id="tag-sharing" value="None">
                <span class="icon"></span>
            </label>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#"><i class="fa fa-user"></i> Private</a>
                </li>
                <li><a href="#"><i class="fa fa-users"></i> Public</a>
                </li>
            </ul>
        </div>
        <input type="text" class="form-control tag-input" placeholder="Name of tag">
        <div class="input-group-btn">
            <button class="btn btn-primary btn-tag-add" type="button">Add</button>
        </div>
    </div>
</div>
<!-- Add tag -->
<!-- List of tags -->
<div class="tag-list">
    <ul class="call-tag">
        <!-- tag -->
        <li class="public">
            <a href="#"><!-- Tag Name --></a>
            <a class="delete" data-toggle="modal" data-target="#deleteTag">
                <i class="fa fa-times delete"></i>
            </a>
        </li>
        <!-- end tag -->
    </ul>
</div>
```
{{/markdown}}
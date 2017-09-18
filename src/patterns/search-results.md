---
title: Search Results
---
{{#markdown}}
Display the results from a user search.

### Example
<div class="library__example">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>
                    <input type="checkbox">
                </th>
                <th class="release-one"></th>
                <th>
                    <a>Last Name <i class="fa fa-caret-down"></i></a>
                </th>
                <th>
                    <a>First Name</a>
                </th>
                <th>
                    <a>ID</a>
                </th>
                <th class="hide">
                    <a>PIN</a>
                </th>
                <th class="hide">
                    <a>Date of Birth</a>
                </th>
                <th>
                    <a>Status</a>
                </th>
                <th>
                    <a>Suspended</a>
                </th>
                <th>
                    <a>Site</a>
                </th>
                <th>
                    <a>Release Date</a>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr href="#/pages/search/inmates/profile/">
                <td>
                    <input type="checkbox">
                </td>
                <td class="release-one"><img src="http://fillmurray.com/32/32" class="img-rounded"></td>
                <td><a href="#/pages/search/inmates/profile/">Canfield</a>
                </td>
                <td><a href="#/pages/search/inmates/profile/">Justin</a>
                </td>
                <td>087456710</td>
                <td class="hide">3245</td>
                <td class="hide">02/05/1962</td>
                <td>Active</td>
                <td></td>
                <td>Kellway</td>
                <td>1/31/2017</td>
            </tr>
            <tr href="#/pages/search/inmates/profile/">
                <td>
                    <input type="checkbox">
                </td>
                <td class="release-one"><img src="http://fillmurray.com/32/32" class="img-rounded"></td>
                <td><a href="#/pages/search/inmates/profile/">Emerson</a>
                </td>
                <td><a href="#/pages/search/inmates/profile/">Fittipaldi</a>
                </td>
                <td>125236178</td>
                <td class="hide">9567</td>
                <td class="hide">02/11/1971</td>
                <td>Active</td>
                <td></td>
                <td>Kellway National High Security</td>
                <td>5/8/2069</td>
            </tr>
            <tr href="#/pages/search/inmates/profile/">
                <td>
                    <input type="checkbox">
                </td>
                <td class="release-one"><img src="http://fillmurray.com/32/32" class="img-rounded"></td>
                <td><a href="#/pages/search/inmates/profile/">Cestarte</a>
                </td>
                <td><a href="#/pages/search/inmates/profile/">Jay</a>
                </td>
                <td>626234619</td>
                <td class="hide">58564</td>
                <td class="hide">02/11/1971</td>
                <td>Active</td>
                <td><i class="fa fa-check brand-success"></i>
                </td>
                <td>Kellway</td>
                <td>9/25/2014</td>
            </tr>
        </tbody>
    </table>

</div>

### Code
```html
<table class="table table-hover">
    <thead>
        <tr>
            <th>
                <input type="checkbox">
            </th>
            <th></th>
            <th>
                <a>Column Name <i class="fa fa-caret-down"></i></a>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <input type="checkbox">
            </td>
            <td>

            </td>
        </tr>
    </tbody>
</table>
```
{{/markdown}}
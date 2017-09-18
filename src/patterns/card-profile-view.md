---
title: Card Profile View
---
{{#markdown}}
Display a profile view card with attorney or home user information.

### Problem summary
The user needs to browse content of varying types and length.

###Usage
* Use to display content composed of different elements
* Use to showcase elements whose size or supported actions vary – like photos with captions of variable length.
* Use when displaying content that…
    * As a collection, consists of multiple data types (images, movies, text)
    * Doesn't require direct comparison
    * Supports content of highly variable length (captions, comments)
    * Contains interactive content
* Use to visually group digestible portions of information that call for an action; like accepting a request, or accessing more details.
* Use to gather various pieces of information about a single subject to form one coherent piece of content.
* Cards are better suited when users browse for information than when they search.
* Cards work best for collections of heterogeneous items (when not all the content is of the same basic type).

### Example
<div class="library__example">
    <div class="row">
        <div class="card col-xs-12 col-sm-6 col-md-3">
            <a class="card-header card-attorney" href="#">
                <h4 class="v-center">Carol Costello</h4>
            </a>
            <div class="card-image">
                <div class="image" style="background-image:url(http://i2.cdn.cnn.com/cnnnext/dam/assets/150601173014-carole-costello-update-profile-image-super-tease.jpg)"></div>
                <a href="#" class="fa fa-clone"></a>
            </div>
            <div class="card-block-attorney">
                <p class="card-text v-center">
                    Attorney<br> 817-690-9023
                    <br> carol.costello@cnn.com
                </p>
            </div>
            <div class="card-actions">
                <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                    <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                    <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                </div>
            </div>
        </div>
        <div class="card col-xs-12 col-sm-6 col-md-3 removed added">
            <a class="card-header card-homeuser" href="#">
                <h4 class="v-center">Wolf Blitzer</h4>
            </a>
            <div class="card-image">
                <div class="image" style="background-image:url(http://i2.cdn.cnn.com/cnnnext/dam/assets/140324160316-wolf-blitzer-profile-super-tease.jpg)"></div>
                <a href="#" class="fa fa-clone"></a>
            </div>
            <div class="card-block-homeuser">
                <p class="card-text v-center">
                    Home User<br> 817-690-9023
                    <br> wolf.blitzer@cnn.com
                </p>
            </div>
            <div class="card-actions">
                <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                    <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                    <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle remove" />
                </div>
            </div>
        </div>
        <div class="card col-xs-12 col-sm-6 col-md-3">
            <a class="card-header card-attorney" href="#">
                <h4 class="v-center">Ashleigh Banfield</h4>
            </a>
            <div class="card-image">
                <div class="image" style="background-image:url(http://i2.cdn.cnn.com/cnnnext/dam/assets/140926154016-ashleigh-banfield-profile-image-super-tease.jpg)"></div>
                <a href="#" class="fa fa-clone"></a>
            </div>
            <div class="card-block-attorney">
                <p class="card-text v-center">Attorney<br> 817-690-9023
                    <br> ashleigh.banfield@cnn.com
                </p>
            </div>
            <div class="card-actions">
                <div class="col-xs-7 col-sm-6 col-md-7 site v-center">View All Pending</div>
                <div class="col-xs-5 col-sm-6 col-md-5 open v-center">
                    <span class="glyphicon glyphicon-option-vertical" aria-hidden="true"></span>
                </div>
            </div>
            <!--expansion card #4-->
            <div class="card-reveal row">
                <span class="card-title grey-text section-header">
                Pending Requests<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                </span>
                <div class="card-reveal-container row">
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Code
```html
        <div class="card col-xs-12 col-sm-6 col-md-3">
            <a class="card-header card-attorney" href="#">
                <h4 class="v-center">Attorney Name</h4>
            </a>
            <div class="card-image">
                <div class="image" style="background-image:url(http://i2.cdn.cnn.com/cnnnext/dam/assets/150601173014-carole-costello-update-profile-image-super-tease.jpg)"></div>
                <a href="#" class="fa fa-clone"></a>
            </div>
            <div class="card-block-attorney">
                <p class="card-text v-center">
                    Attorney<br> 800-555-1212
                    <br> attorney.name@domain.com
                </p>
            </div>
            <div class="card-actions">
                <div class="col-xs-7 col-sm-6 col-md-7 site v-center">City, State</div>
                <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                    <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                    <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                </div>
            </div>
        </div>
        <div class="card col-xs-12 col-sm-6 col-md-3 removed added">
            <a class="card-header card-homeuser" href="#">
                <h4 class="v-center">Home User Name</h4>
            </a>
            <div class="card-image">
                <div class="image" style="background-image:url(http://i2.cdn.cnn.com/cnnnext/dam/assets/140324160316-wolf-blitzer-profile-super-tease.jpg)"></div>
                <a href="#" class="fa fa-clone"></a>
            </div>
            <div class="card-block-homeuser">
                <p class="card-text v-center">
                    Home User<br> 800-555-1212
                    <br> home.user.name@domain.com
                </p>
            </div>
            <div class="card-actions">
                <div class="col-xs-7 col-sm-6 col-md-7 site v-center">City, State</div>
                <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                    <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                    <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle remove" />
                </div>
            </div>
        </div>
        <div class="card col-xs-12 col-sm-6 col-md-3">
            <a class="card-header card-attorney" href="#">
                <h4 class="v-center">Attorney Name</h4>
            </a>
            <div class="card-image">
                <div class="image" style="background-image:url(http://i2.cdn.cnn.com/cnnnext/dam/assets/140926154016-ashleigh-banfield-profile-image-super-tease.jpg)"></div>
                <a href="#" class="fa fa-clone"></a>
            </div>
            <div class="card-block-attorney">
                <p class="card-text v-center">
                    Attorney<br> 800-555-1212
                    <br> attorney.name@domain.com
                </p>
            </div>
            <div class="card-actions">
                <div class="col-xs-7 col-sm-6 col-md-7 site v-center">View All Pending</div>
                <div class="col-xs-5 col-sm-6 col-md-5 open v-center">
                    <span class="glyphicon glyphicon-option-vertical" aria-hidden="true"></span>
                </div>
            </div>
            <!--expansion card #4-->
            <div class="card-reveal row">
                <span class="card-title grey-text section-header">
                Pending Requests<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                </span>
                <div class="card-reveal-container row">
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                    <div class="card-actions col-xs-12">
                        <div class="col-xs-7 col-sm-6 col-md-7 site v-center">Broward CI, FL</div>
                        <div class="col-xs-5 col-sm-6 col-md-5 v-center">
                            <button type="button" class="btn btn-approve btn-xs glyphicon glyphicon-ok" />
                            <button type="button" class="btn btn-reject btn-xs glyphicon glyphicon-ban-circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
```
<br><br>
Display a profile view side card with extended attorney or home user information.

### Example
<div class="library__example">
    <div class="row">
		<div class="col-md-4 col-lg-3 left-col" id="leftCol">
			<div class="card side">
				<a class="card-header card-attorney" href="#">
					<h4 class="v-center">Ashleigh Banfield</h4>
				</a>
				<div class="card-image">
					<div class="image" style="background-image: url(http://i2.cdn.cnn.com/cnnnext/dam/assets/140926154016-ashleigh-banfield-profile-image-super-tease.jpg)"> </div>
					<a href="javascript:alert('open images modal');" class="fa fa-clone"></a>
				</div>
				<div class="card-block-attorney">
					<p class="card-text">Attorney
						<br>817-690-9023
						<br>1500 Main Street
						<br>Dallas, Texas 75226 USA
						<br>ashleigh.banfield@cnn.com
					</p>
				</div>
				<div class="row card-content">
                    <div class="card-content_row col-xs-12">
                        <div class="col-xs-5 col-md-6">Date of Birth:</div>
                        <div class="col-xs-7 col-md-6">06/13/1969</div>
                    </div>
                    <div class="card-content_row col-xs-12">
                        <div class="col-xs-5 col-md-6">Gov ID #:</div>
                        <div class="col-xs-7 col-md-6">223344</div>
                    </div>
                    <div class="card-content_row col-xs-12">
                        <div class="col-xs-5 col-md-6">Expiration Date:</div>
                        <div class="col-xs-7 col-md-6">06/13/2019</div>
                    </div>
                    <div class="card-content_row col-xs-12">
                        <div class="col-xs-5 col-md-6">Bar ID #:</div>
                        <div class="col-xs-7 col-md-6">223344</div>
                    </div>
                    <div class="card-content_row col-xs-12">
                        <div class="col-xs-5 col-md-6">Issue Date:</div>
                        <div class="col-xs-7 col-md-6">12/12/2016</div>
                    </div>
                    <div class="card-content_row col-xs-12">
                        <div class="col-xs-5 col-md-6">Name of Firm:</div>
                        <div class="col-xs-7 col-md-6">Bon Scott & Associates</div>
                    </div>
				</div>
			</div>
		</div>
    </div>
</div>

### Code
```html
<div class="col-md-4 col-lg-3 left-col" id="leftCol">
    <div class="card side">
        <a class="card-header card-attorney" href="#">
            <h4 class="v-center">Ashleigh Banfield</h4>
        </a>
        <div class="card-image">
            <div class="image" style="background-image: url(http://i2.cdn.cnn.com/cnnnext/dam/assets/140926154016-ashleigh-banfield-profile-image-super-tease.jpg)"> </div>
            <a href="javascript:alert('open images modal');" class="fa fa-clone"></a>
        </div>
        <div class="card-block-attorney">
            <p class="card-text">Attorney
                <br>817-690-9023
                <br>1500 Main Street
                <br>Dallas, Texas 75226 USA
                <br>ashleigh.banfield@cnn.com
            </p>
        </div>
        <div class="row card-content">
                <div class="card-content_row col-xs-12">
                    <div class="col-xs-5 col-md-6">Date of Birth:</div>
                    <div class="col-xs-7 col-md-6">06/13/1969</div>
                </div>
                <div class="card-content_row col-xs-12">
                    <div class="col-xs-5 col-md-6">Gov ID #:</div>
                    <div class="col-xs-7 col-md-6">223344</div>
                </div>
                <div class="card-content_row col-xs-12">
                    <div class="col-xs-5 col-md-6">Expiration Date:</div>
                    <div class="col-xs-7 col-md-6">06/13/2019</div>
                </div>
                <div class="card-content_row col-xs-12">
                    <div class="col-xs-5 col-md-6">Bar ID #:</div>
                    <div class="col-xs-7 col-md-6">223344</div>
                </div>
                <div class="card-content_row col-xs-12">
                    <div class="col-xs-5 col-md-6">Issue Date:</div>
                    <div class="col-xs-7 col-md-6">12/12/2016</div>
                </div>
                <div class="card-content_row col-xs-12">
                    <div class="col-xs-5 col-md-6">Name of Firm:</div>
                    <div class="col-xs-7 col-md-6">Bon Scott & Associates</div>
                </div>
        </div>
    </div>
</div>
```
{{/markdown}}

<script>
    $('.open,.close', '.card').on('click', function (evt) {
      $('.card-reveal').toggleClass('opened', $(evt.target).not().hasClass('open'));
    });
    $('.btn-approve,.btn-reject', '.card > .card-actions').on('click', function () {
      var $removed = $(this).closest('.card');
      // add .scale-out class and remove .scale-in class then bind a single animation end event
      $removed
        .toggleClass('scale-out', true)
        .toggleClass('scale-in', false)
        .one('animationend',
        function (e) {
          // remove classes
          $removed
            .toggleClass('scale-out', false)
            .toggleClass('scale-in', false);
          // append to dom and add .scale-in class
          $removed
            .appendTo($('.removed')
              .parent())
            .toggleClass('scale-in', true);
        });
    });
</script>
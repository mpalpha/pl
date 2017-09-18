---
title: Player
---

{{#markdown}}
Let the user listen to audio or video attached to a record.

### Example
<div class="library__example">
    <!-- Audio Player -->
    <div style="position: relative; height: 240px;">
        <div class="player" style="display: block; position: absolute; ">
            <div class="row video-playback hide">
                <div class="col-md-12">
                    <div class="inmate-video">
                        <img src="//placehold.it/1280x640" class="img-responsive" alt="">
                        <div class="row name no-margin">
                            <div class="col-md-6">
                                <dl class="dl-horizontal">
                                    <dt>Visitor:</dt>
                                    <dd>Jennifer Terrell</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Username:</dt>
                                    <dd>email@address.com</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Location:</dt>
                                    <dd>Visitor Lobby</dd>
                                </dl>
                            </div>
                            <div class="col-md-6">
                                <dl class="dl-horizontal">
                                    <dt>Inmate:</dt>
                                    <dd>Jonathan Smith</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Account:</dt>
                                    <dd>123456789</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Location:</dt>
                                    <dd>Visitor West Wing</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row call-playback">
                <div class="col-md-6 col-md-12">
                    <dl class="dl-horizontal">
                        <dt>Inmate:</dt>
                        <dd>Jonathan Smith</dd>
                    </dl>
                    <dl class="dl-horizontal">
                        <dt>Account:</dt>
                        <dd>123456789</dd>
                    </dl>
                    <dl class="dl-horizontal">
                        <dt>Location:</dt>
                        <dd>Visitor West Wing</dd>
                    </dl>
                </div>
            </div>
            <div class="start-time">02:41</div>
            <div class="end-time pull-right">30:00</div>
            <div class="player-scrubber">
                <div class="play-status"></div>
                <button class="player-scrubber-button"></button>
            </div>
            <div class="controls-container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <button class="rewind">
                            <i class="fa fa-step-backward"></i>
                        </button>
                        <button class="play">
                            <i class="fa fa-play"></i>
                        </button>
                        <button class="forward">
                            <i class="fa fa-step-forward"></i>
                        </button>
                    </div>
                    <div class="col-md-3">
                        <div class="pull-right volume-position">
                            <button class="volume">
                                <i class="fa fa-lg fa-volume-down"></i>
                            </button>
                            <div class="volume-scrubber">
                                <div class="volume-status"></div>
                                <button class="player-scrubber-button"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="close-player">
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>
    <!-- Video Player -->
    <div style="position: relative; height: 500px;">
        <div class="player" style="display: block; position: absolute; ">
            <div class="row video-playback">
                <div class="col-md-12">
                    <div class="inmate-video">
                        <img src="//placehold.it/1280x640" class="img-responsive" alt="">
                        <div class="row name no-margin">
                            <div class="col-md-6">
                                <dl class="dl-horizontal">
                                    <dt>Visitor:</dt>
                                    <dd>Jennifer Terrell</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Username:</dt>
                                    <dd>email@address.com</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Location:</dt>
                                    <dd>Visitor Lobby</dd>
                                </dl>
                            </div>
                            <div class="col-md-6">
                                <dl class="dl-horizontal">
                                    <dt>Inmate:</dt>
                                    <dd>Jonathan Smith</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Account:</dt>
                                    <dd>123456789</dd>
                                </dl>
                                <dl class="dl-horizontal">
                                    <dt>Location:</dt>
                                    <dd>Visitor West Wing</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row call-playback hide">
                <div class="col-md-6 col-md-12">
                    <dl class="dl-horizontal">
                        <dt>Inmate:</dt>
                        <dd>Jonathan Smith</dd>
                    </dl>
                    <dl class="dl-horizontal">
                        <dt>Account:</dt>
                        <dd>123456789</dd>
                    </dl>
                    <dl class="dl-horizontal">
                        <dt>Location:</dt>
                        <dd>Visitor West Wing</dd>
                    </dl>
                </div>
            </div>
            <div class="start-time">02:41</div>
            <div class="end-time pull-right">30:00</div>
            <div class="player-scrubber">
                <div class="play-status"></div>
                <button class="player-scrubber-button"></button>
            </div>
            <div class="controls-container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <button class="rewind">
                            <i class="fa fa-step-backward"></i>
                        </button>
                        <button class="play">
                            <i class="fa fa-play"></i>
                        </button>
                        <button class="forward">
                            <i class="fa fa-step-forward"></i>
                        </button>
                    </div>
                    <div class="col-md-3">
                        <div class="pull-right volume-position">
                            <button class="volume">
                                <i class="fa fa-lg fa-volume-down"></i>
                            </button>
                            <div class="volume-scrubber">
                                <div class="volume-status"></div>
                                <button class="player-scrubber-button"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="close-player">
                <i class="fa fa-times"></i>
            </button>
        </div>
    </div>
</div>

### Code
```html
<div class="player">
    <div class="row video-playback hide">
        <div class="col-md-12">
            <div class="inmate-video">
                <video class="img-responsive">
                    <source id="mp4" src="" type="video/mp4">
                </video>
                <div class="row name no-margin">
                    <div class="col-md-6">
                        <dl class="dl-horizontal">
                            <dt>Visitor:</dt>
                            <dd><!-- Visitor name -->l</dd>
                        </dl>
                        <dl class="dl-horizontal">
                            <dt>Username:</dt>
                            <dd><!-- Visitor email --></dd>
                        </dl>
                        <dl class="dl-horizontal">
                            <dt>Location:</dt>
                            <dd><!-- Visitor location --></dd>
                        </dl>
                    </div>
                    <div class="col-md-6">
                        <dl class="dl-horizontal">
                            <dt>Inmate:</dt>
                            <dd><!-- Inmate name --></dd>
                        </dl>
                        <dl class="dl-horizontal">
                            <dt>Account:</dt>
                            <dd><!-- Inmate account --></dd>
                        </dl>
                        <dl class="dl-horizontal">
                            <dt>Location:</dt>
                            <dd><!-- Visit location --></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row call-playback">
        <div class="col-md-6 col-md-12">
            <dl class="dl-horizontal">
                <dt>Inmate:</dt>
                <dd>Jonathan Smith</dd>
            </dl>
            <dl class="dl-horizontal">
                <dt>Account:</dt>
                <dd>123456789</dd>
            </dl>
            <dl class="dl-horizontal">
                <dt>Location:</dt>
                <dd>Visitor West Wing</dd>
            </dl>
        </div>
    </div>
    <div class="start-time">02:41</div>
    <div class="end-time pull-right">30:00</div>
    <div class="player-scrubber">
        <div class="play-status"></div>
        <button class="player-scrubber-button"></button>
    </div>
    <div class="controls-container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <button class="rewind">
                    <i class="fa fa-step-backward"></i>
                </button>
                <button class="play">
                    <i class="fa fa-play"></i>
                </button>
                <button class="forward">
                    <i class="fa fa-step-forward"></i>
                </button>
            </div>
            <div class="col-md-3">
                <div class="pull-right volume-position">
                    <button class="volume">
                        <i class="fa fa-lg fa-volume-down"></i>
                    </button>
                    <div class="volume-scrubber">
                        <div class="volume-status"></div>
                        <button class="player-scrubber-button"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="close-player">
        <i class="fa fa-times"></i>
    </button>
</div>
```
{{/markdown}}
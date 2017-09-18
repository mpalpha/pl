---
title: Wizard
---
{{#markdown}}
This component is used to create a step wizard. Steps can be added or taken away based on what is needed. The last step in the confirmed button.

### Problem summary
The user is about to go through the process of filling in data over several steps and is in need of guidance.

###Usage
* Use when a user goal can be split into a series of smaller steps that is easier displayed on separate screens.
* Use when the steps of a process is so long that the user might get the impression that it will go on forever without the guidance of steps.
* Do not use when there is only 1 or 2 steps in submitting data to the website.
* Do not use when the process of filling out data is easily foreseeable.

### Example: 6 steps with labels
<div class="bff-include">
    <div class="steps steps-labels">
        <a class="step active" href="#">
            <div class="step-circle"><i class="fa securus-inmate"></i>
                <div class="step-circle--content">
                    <small>Step 1</small>
                        SUBTEXT
                </div>
            </div>
        </a>
        <a class="step" href="#">
            <div class="step-circle text-center"><i class="fa securus-webcam"></i>
                <div class="step-circle--content">
                    <small>Step 2</small>
                        CENTER SUBTEXT
                </div>
            </div>
        </a>
        <a class="step" href="#">
            <div class="step-circle"><i class="fa fa-user"></i>
                <div class="step-circle--content">
                    <small>Step 3</small>
                        SUBTEXT
                </div>
            </div>
        </a>
        <a class="step" href="#">
            <div class="step-circle text-center"><i class="fa fa-list"></i>
                <div class="step-circle--content">
                    <small>Step 4</small>
                </div>
            </div>
        </a>
        <a class="step" href="#">
            <div class="step-circle text-center"><i class="fa fa-calendar"></i>
                <div class="step-circle--content">
                    <small>Step 5</small>
                </div>
            </div>
        </a>
        <a class="step" href="#">
            <div class="step-circle text-center"><i class="fa fa-check"></i>
                <div class="step-circle--content">
                    <small>Finish</small>
                </div>
            </div>
        </a>
    </div>
</div>
   
### Code
```html

<div class="steps steps-labels">
    <a class="step active" href="#">
        <div class="step-circle"><i class="fa securus-inmate"></i>
            <div class="step-circle--content">
                <small>Step 1</small>
                    SUBTEXT
            </div>
        </div>
    </a>
    <a class="step" href="#">
        <div class="step-circle text-center"><i class="fa securus-webcam"></i>
            <div class="step-circle--content">
                <small>Step 2</small>
                    CENTER SUBTEXT
            </div>
        </div>
    </a>
    <a class="step" href="#">
        <div class="step-circle"><i class="fa fa-user"></i>
            <div class="step-circle--content">
                <small>Step 3</small>
                    SUBTEXT
            </div>
        </div>
    </a>
    <a class="step" href="#">
        <div class="step-circle text-center"><i class="fa fa-list"></i>
            <div class="step-circle--content">
                <small>Step 4</small>
            </div>
        </div>
    </a>
    <a class="step" href="#">
        <div class="step-circle text-center"><i class="fa fa-calendar"></i>
            <div class="step-circle--content">
                <small>Step 5</small>
            </div>
        </div>
    </a>
    <a class="step" href="#">
        <div class="step-circle text-center"><i class="fa fa-check"></i>
            <div class="step-circle--content">
                <small>Finish</small>
            </div>
        </div>
    </a>
</div>

```
### Example: 3 steps without labels
<div class="bff-include">
    <div class="steps">
        <a class="step active" href="#">
            <div class="step-circle"><i class="fa securus-inmate"></i></div>
        </a>
        <a class="step" href="#">
            <div class="step-circle text-center"><i class="fa securus-webcam"></i></div>
        </a>
        <a class="step" href="#">
            <div class="step-circle text-center"><i class="fa fa-check"></i></div>
        </a>
    </div>
</div>
   
### Code
```html

<div class="steps">
    <a class="step active" href="#">
        <div class="step-circle"><i class="fa securus-inmate"></i></div>
    </a>
    <a class="step" href="#">
        <div class="step-circle text-center"><i class="fa securus-webcam"></i></div>
    </a>
    <a class="step" href="#">
        <div class="step-circle text-center"><i class="fa fa-check"></i></div>
    </a>
</div>

```
{{/markdown}}

<script>
$('.step').on('click',function(){
    $(this)
        .nextAll('.step')
        .toggleClass('completed', false);
    $(this)
        .prevAll('.step')
        .andSelf()
        .toggleClass('completed', true);
    $(this)
        .toggleClass('active', true)
        .toggleClass('completed', false)
        .siblings('.step')
        .toggleClass('active', false);
});
</script>
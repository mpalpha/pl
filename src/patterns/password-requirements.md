---
title: Password Requirements
---
{{#markdown}}
Display a list of password requirements for a password field. As the user types,
the system should check off the corresponding rules as the password meets the requirements.

### Example
<div class="library__example">
    <div class="strong-password-rules">
        <h3>Password Requirements:</h3>

        <label class="rounded-check" for="lengthCheck">
            <input type="checkbox" name="check" id="lengthCheck" value="None" disabled="">
            <span class="icon"></span>
            Between 8-12 characters.
        </label>

        <label class="rounded-check" for="spacesOmittedCheck">
            <input type="checkbox" name="check" id="spacesOmittedCheck" value="None" disabled="">
            <span class="icon"></span>
            Cannot contain spaces
        </label>

        <label class="rounded-check" for="passwordStrengthCheck">
            <input type="checkbox" name="check" id="passwordStrengthCheck" value="None" disabled="">
            <span class="icon"></span>
            Must have at least three of these characteristics:
            <ul style="display: block">
                <li>English upper case letter</li>
                <li>English lowercase letter</li>
                <li>At least one number</li>
                <li>At least one special character (such as ! $ # % etc.)</li>
            </ul>
        </label>
    </div>
</div>

### Code
```html
<div class="strong-password-rules">
    <h3>Password Requirements:</h3>
    <label class="rounded-check" for="lengthCheck">
        <input type="checkbox" name="check" id="lengthCheck" value="None" disabled="">
        <span class="icon"></span>
        Between 8-12 characters.
    </label>
    <label class="rounded-check" for="spacesOmittedCheck">
        <input type="checkbox" name="check" id="spacesOmittedCheck" value="None" disabled="">
        <span class="icon"></span>
        Cannot contain spaces
    </label>
    <label class="rounded-check" for="passwordStrengthCheck">
        <input type="checkbox" name="check" id="passwordStrengthCheck" value="None" disabled="">
        <span class="icon"></span>
        Must have at least three of these characteristics:
        <ul>
            <li>English upper case letter</li>
            <li>English lowercase letter</li>
            <li>At least one number</li>
            <li>At least one special character (such as ! $ # % etc.)</li>
        </ul>
    </label>
</div>
```
{{/markdown}}
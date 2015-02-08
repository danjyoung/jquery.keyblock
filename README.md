# jquery.keyblock
## Introduction
This [jQuery](http://jquery.com/) plugin binds to input fields keypress event and blocks characters not in the regular expression specified. It also binds to the inputs change event to prevent copy and paste.
## Example
```javascript
// blocks everything except A-Z and 0-9
// case insensitive by default
$("#subject").keyblock('A-Z0-9');

// blocks everything except A-Z and 0-9
// overrides case insensitive default
$("#subject").keyblock('A-Z0-9', {caseSensitive:true});
```

# jquery.keyblock
## Introduction
This [jQuery](http://jquery.com/) plugin binds to input elements keypress event and blocks characters not in the regular expression string specified. It also binds to the elements change event to prevent copy and paste.
## Example
```javascript
// blocks everything except A-Z and 0-9
// case insensitive by default
$("#subject").keyblock('A-Z0-9');

// blocks everything except A-Z and 0-9
// overrides case insensitive default
$("#subject").keyblock('A-Z0-9', {caseSensitive:true});
```

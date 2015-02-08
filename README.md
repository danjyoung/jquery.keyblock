# jquery.keyblock
## Introduction
This [jQuery](http://jquery.com/) plugin binds to input fields and blocks characters on keypress not specified in the regex specified.
## Example
```javascript
// blocks everything except A-Z and 0-9
// case insensitive by default
$("#subject").keyblock('A-Z0-9');
```

(function($) {
	$.fn.keyfilter = function(whitelist, options) {
		var $this = this;
	
		var settings = $.extend( {
			caseSensitive : false
		}, options);
	
		$this.unbind('keypress.inhibit change.inhibit');
	
		var modifiers = settings.caseSensitive ? 'gm' : 'igm';
		var blacklist = new RegExp('[^' + whitelist + ']', modifiers);
	
		var allowKeys = [0, 8, 13];
	
		return $this.bind('keypress.inhibit change.inhibit', function(event) {
	
			if(event.type === 'keypress' && String.fromCharCode(event.which).match(blacklist) && $.inArray(event.which, allowKeys) == -1) {
				event.preventDefault();
			}
			else if (event.type === 'blur' || event.type === 'change') {
				$this.val($this.val().replace(blacklist, ''));
			}
		});
	};
})(jQuery);
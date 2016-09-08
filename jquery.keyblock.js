(function($) {
	$.fn.keyblock = function(whitelist, options) {
		var $this = this;
	
		var settings = $.extend( {
			caseSensitive : false
		}, options);
	
		$this.unbind('keypress.keyblock change.keyblock');
	
		var modifiers = settings.caseSensitive ? 'gm' : 'igm';
		var blacklist = new RegExp('[^' + whitelist + ']', modifiers);
	
		var allowKeys = [0, 8, 13];
	
		return $this.bind('keypress.keyblock change.keyblock', function(event) {
	
			if(event.type === 'keypress' && String.fromCharCode(event.which).match(blacklist) && $.inArray(event.which, allowKeys) == -1) {
				event.preventDefault();
			}
			else if (event.type === 'change') {
				$this.val($this.val().replace(blacklist, ''));
			}
		});
	};
})(jQuery);
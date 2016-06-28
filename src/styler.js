var styler = {
	info: {
		version: '0.5',
		documentation: 'https://github.com/gundvang/styler',
	},
	enabled: true,
};

styler.size = function() {
	$('[data-styler]').each(function( e ) {
		var styler = $(this).data('styler').split(';'),
			css = {};

		for (i = 0; i < styler.length; i++) {
			var style = styler[i].split(':')[0];
			var value = styler[i].split(':')[1];

			if (!style || !value) {	continue; }

			style = style.trim();
			value = value.trim();

			if (value.indexOf('tw') > -1) { // tw = percent of this element width
		    	css[style] = (value.replace('tw', '') / 100) * $(this).width() + 'px';
		    } else if (value.indexOf('th') > -1) { // th = percent of this element height
		    	css[style] = (value.replace('th', '') / 100) * $(this).height() + 'px';
		    } else if (value.indexOf('ww') > -1) { // ww = percent of window element width
		    	css[style] = (value.replace('ww', '') / 100) * $(window).width() + 'px';
		    } else if (value.indexOf('wh') > -1) { // wh = percent of window element height
		    	css[style] = (value.replace('wh', '') / 100) * $(window).height() + 'px';
		    } else if (value.indexOf('dw') > -1) { // ww = percent of window element width
		    	css[style] = (value.replace('dw', '') / 100) * $(document).width() + 'px';
		    } else if (value.indexOf('dh') > -1) { // wh = percent of window element height
		    	css[style] = (value.replace('dh', '') / 100) * $(document).height() + 'px';
		    } else if (value.indexOf('pw') > -1) { // pw = percent of parent element width
		    	css[style] = (value.replace('pw', '') / 100) * $(this).parent().width() + 'px';
		    } else if (value.indexOf('ph') > -1) { // ph = percent of parent element height
		    	css[style] = (value.replace('ph', '') / 100) * $(this).parent().height() + 'px';
		    } else if (value.indexOf('ew') > -1 && $('#'+$(this).data('styler-target')).length) {
		    	css[style] = (value.replace('ew', '') / 100) * $('#'+$(this).data('styler-target')).width() + 'px';
		    } else if (value.indexOf('eh') > -1 && $('#'+$(this).data('styler-target')).length) {
		    	css[style] = (value.replace('eh', '') / 100) * $('#'+$(this).data('styler-target')).height() + 'px';
		    }
		}
		$(this).css( css );
	});
};

styler.init = function() {
	$(window).resize( styler.size );
	$(window).trigger('resize');
}

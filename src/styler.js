var styler = {
	info: {
		version: '0.5',
		documentation: 'https://github.com/gundvang/styler',
	},
	enabled: true,
};

styler.size = function() {
	var elements = document.querySelectorAll('[data-styler]');
	
	[].forEach.call(elements, function( el ) {
		var styler = el.dataset.styler.split(';'),
			css = {};
		
		for (i = 0; i < styler.length; i++) {
			var style = styler[i].split(':')[0];
			var value = styler[i].split(':')[1];
			
			if (!style || !value) {	continue; }
			
			style = style.trim();
			value = value.trim();
			
			if (value.indexOf('ew') > -1) { // ew = percent of the elements width
				css[style] = ((value.replace('ew', '') / 100) * el.offsetWidth) + 'px';
			} else if (value.indexOf('eh') > -1) { // eh = percent of the elements height
				css[style] = ((value.replace('eh', '') / 100) * el.offsetHeight) + 'px';
			} else if (value.indexOf('ww') > -1) { // ww = percent of window width
				css[style] = ((value.replace('ww', '') / 100) * window.offsetWidth) + 'px';
			} else if (value.indexOf('wh') > -1) { // wh = percent of window height
				css[style] = ((value.replace('wh', '') / 100) * window.offsetHeight) + 'px';
			} else if (value.indexOf('dw') > -1) { // dw = percent of document width
				css[style] = ((value.replace('dw', '') / 100) * document.offsetWidth) + 'px';
			} else if (value.indexOf('dh') > -1) { // dh = percent of document height
				css[style] = ((value.replace('dh', '') / 100) * document.offsetHeight) + 'px';
			} else if (value.indexOf('pw') > -1) { // pw = percent of the parent elements width
				css[style] = ((value.replace('pw', '') / 100) * el.parentElement.offsetWidth) + 'px';
			} else if (value.indexOf('ph') > -1) { // ph = percent of the parent elements height
				css[style] = ((value.replace('ph', '') / 100) * el.parentElement.offsetHeight) + 'px';
			} else if (value.indexOf('tw') > -1 && document.querySelectorAll('#'+el.dataset.stylerTarget).length) { // tw = percent of target elements width
				css[style] = ((value.replace('tw', '') / 100) * document.querySelectorAll('#'+el.dataset.stylerTarget).offsetWidth) + 'px';
			} else if (value.indexOf('th') > -1 && document.querySelectorAll('#'+el.dataset.stylerTarget).length) { // th = percent of target elements height
				css[style] = ((value.replace('th', '') / 100) * document.querySelectorAll('#'+el.dataset.stylerTarget).offsetHeight) + 'px';
			}
		}
		$(this).css( css );
	});
};

styler.init = function() {
	var onresize = window.onresize = function() {
		styler.size;
	};
	onresize();
}

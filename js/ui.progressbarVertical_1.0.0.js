/*
 * jQuery UI Progressbar 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   ui.core.js
 */
(function($) {

$.widget("ui.progressbarVertical", {

	_init: function() {

		this.element
			.addClass("ui-progressbar"
				+ " ui-widget"
				+ " ui-widget-content"
				+ " ui-corner-all")
			.attr({
				role: "progressbarVertical",
				"aria-valuemin": this._valueMin(),
				"aria-valuemax": this._valueMax(),
				"aria-valuenow": this._value(),
				//"style" : "width:" + this._width() + "px; height:" + this._height() + "px;"
				"style" : "width:" + this._width() + "px; height:" + this._height() + "px; position:relative;",
			});

		this.valueDiv = $('<div class="ui-progressbar-value ui-widget-header ui-corner-bottom"></div>').appendTo(this.element);

		this._refreshValue();

	},

	destroy: function() {

		this.element
			.removeClass("ui-progressbar"
				+ " ui-widget"
				+ " ui-widget-content"
				+ " ui-corner-all")
			.removeAttr("role")
			.removeAttr("aria-valuemin")
			.removeAttr("aria-valuemax")
			.removeAttr("aria-valuenow")
			.removeData("progressbar")
			.unbind(".progressbar");

		this.valueDiv.remove();

		$.widget.prototype.destroy.apply(this, arguments);

	},

	value: function(newValue) {
		if (newValue === undefined) {
			return this._value();
		}
		
		this._setData('value', newValue);
		return this;
	},

	_setData: function(key, value) {

		switch (key) {
			case 'value':
				this.options.value = value;
				this._refreshValue();
				this._trigger('change', null, {});
				break;
		}

		$.widget.prototype._setData.apply(this, arguments);

	},

	_value: function() {

		var val = this.options.value;
		if (val < this._valueMin()) val = this._valueMin();
		if (val > this._valueMax()) val = this._valueMax();

		return val;

	},

	_valueMin: function() {
		var valueMin = 0;
		return valueMin;
	},

	_valueMax: function() {
		var valueMax = 100;
		return valueMax;
	},
		
	_width: function() {
		return this.options.width;
	},
	
	_height: function() {
		return this.options.height;
	},

	_refreshValue: function() {
		var value = this.value();
		this.valueDiv[value == this._valueMax() ? 'addClass' : 'removeClass']("ui-corner-top");
		this.valueDiv.attr("style", "position:absolute; bottom:0; width:100%;");
		this.valueDiv.height(value + '%');
		this.element.attr("aria-valuenow", value);
	}

});

$.extend($.ui.progressbarVertical, {
	version: "1.0.0",
	defaults: {
		value: 0,
		width: 20,
		height: 300
	}
});

})(jQuery);

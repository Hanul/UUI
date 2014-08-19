/**
 * Full-size textarea class
 */
UUI.FULL_TEXTAREA = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.placeholder
		//OPTIONAL: params.value
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.textareaStyle
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// placeholder
		placeholder = params.placeholder,

		// value
		value = params.value,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// textarea style
		textareaStyle = params.textareaStyle,

		// wrapper
		wrapper,

		// textarea
		textarea,

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// focus.
		focus,

		// blur.
		blur,

		// add wrapper style.
		addWrapperStyle,

		// add input style.
		addTextareaStyle,

		// on.
		on;

		wrapper = DIV({
			style : {
				padding : 5,
				backgroundColor : '#FFF',
				position : 'relative',
				height : 100
			},
			c : textarea = TEXTAREA({
				style : {
					width : '100%',
					height : '100%',
					backgroundColor : 'transparent',
					border : 'none'
				},
				name : name,
				placeholder : placeholder,
				value : value
			})
		});

		inner.setWrapperDom(wrapper);

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return textarea.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			textarea.setValue(value);
		};

		self.select = select = function() {
			textarea.select();
		};

		self.focus = focus = function() {
			textarea.focus();
		};

		self.blur = blur = function() {
			textarea.blur();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addTextareaStyle = addTextareaStyle = function(style) {
			//REQUIRED: style

			textarea.addStyle(style);
		};

		if (textareaStyle !== undefined) {
			addTextareaStyle(textareaStyle);
		}

		self.on = on = function(eventName, eventHandler) {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			EVENT({
				node : self,
				lowNode : textarea,
				name : eventName
			}, eventHandler);
		};
	}
});

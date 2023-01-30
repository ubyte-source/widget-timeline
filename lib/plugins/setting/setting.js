(function (window) {

	'use strict';

	class NotFound {

		static text() {
			return 'developer\\timeline\\search\\not_found';
		}

		constructor(search) {
			this.search = search;
			this.elements = {};

			this.setText(this.constructor.text());
		}

		/**
		* The function getSearch() returns the value of the variable search
		* @returns The search property of the object.
		*/

		getSearch() {
			return this.search;
		}

		/**
		* It returns the content of the element.
		* @returns The content element of the object.
		*/

		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let span = this.getText();
			this.elements.content = document.createElement('li');
			this.elements.content.className = 'not-found';
			this.elements.content.appendChild(span);
			return this.elements.content;
		}

		/**
		* If the elements object has a span property, return it. Otherwise, create a span element 
		* and return it.
		* @returns The span element.
		*/

		getText() {
			if (this.elements.hasOwnProperty('span')) return this.elements.span;
			this.elements.span = document.createElement('span');
			return this.elements.span;
		}

		/**
		* It creates a text node and appends it to the span element.
		* @param text - The text to be displayed.
		* @returns The object itself.
		*/

		setText(text) {
			let node = document.createTextNode(text), span = this.getText();
			span.innerText = '';
			span.appendChild(node);
			return this;
		}

		/**
		* This function returns the content of the current node.
		* @returns The content of the file.
		*/

		out() {
			return this.getContent();
		}
	}

	class Search {

		static icon() {
			return 'material-icons filter_list';
		}

		static placeholder() {
			return 'developer\\timeline\\search\\placeholder';
		}

		constructor(setting) {
			this.setting = setting;

			this.elements = {};
			this.elements.notfound = new window.Timeline.Setting.Search.NotFound(this);
		}

		/**
		* This function returns the value of the setting property
		* @returns The setting property of the object.
		*/

		getSetting() {
			return this.setting;
		}

		/**
		* It returns the element with the id of notfound.
		* @returns The notfound element.
		*/

		getNotFound() {
			return this.elements.notfound;
		}

		/**
		* It creates a div element with the class name of field and appends the input element to it.
		* @returns The field element.
		*/

		getField() {
			if (this.elements.hasOwnProperty('field')) return this.elements.field;
			let input = this.getInput();
			this.elements.field = document.createElement('div');
			this.elements.field.className = 'field';
			this.elements.field.appendChild(input);
			return this.elements.field;
		}

		/**
		* It creates an input element, sets its type to text, sets its placeholder to the value of the
		* static placeholder function, and adds an event listener to it
		* @returns The input element.
		*/

		getInput() {
			if (this.elements.hasOwnProperty('input')) return this.elements.input;
			this.elements.input = document.createElement('input');
			this.elements.input.type = 'text';
			this.elements.input.setAttribute(Timeline.handle(), ':filter');
			this.elements.input.setAttribute('placeholder', this.constructor.placeholder());
			this.elements.input.addEventListener('input', this, false);
			return this.elements.input;
		}

		/**
		* It creates a search bar.
		* @returns The content of the search bar.
		*/

		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let filter = this.constructor.icon(), icon = Timeline.getIcon(filter), field = this.getField();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'search';
			this.elements.content.appendChild(icon);
			this.elements.content.appendChild(field);
			return this.elements.content;
		}

		/**
		* This function returns the content of the current node.
		* @returns The content of the file.
		*/

		out() {
			return this.getContent();
		}

		/**
		* It takes an event, finds the closest attribute that matches the handle, splits the attribute into
		* an array, loops through the array, splits each item into an array, checks if the first item is the
		* event type or empty, checks if the second item is a function, and if so, calls the function
		* @param event - The event object.
		* @returns The function handleEvent() is being returned.
		*/

		handleEvent(event) {
			let attribute = Timeline.closestAttribute(event.target, Timeline.handle());
			if (attribute === null) return;

			let attribute_split = attribute.split(/\s+/);
			for (let item = 0; item < attribute_split.length; item++) {
				let execute = attribute_split[item].split(String.fromCharCode(58));
				if (execute.length !== 2) break;
				if (execute[0] === event.type || 0 === execute[0].length) {
					if (typeof this[execute[1]] !== 'function') continue;

					this[execute[1]].call(this, event);
				}
			}
		}

		/**
		* It removes the "not found" element from the DOM, then it removes the "hide" class from all the
		* list items, then it adds the "hide" class to all the list items that don't contain the search
		* term, and finally it adds the "not found" element back to the DOM if all the list items have the
		* "hide" class
		*/

		filter() {
			let notfound = this.getNotFound().out(), setting = this.getSetting();
			Timeline.removeElementDOM(notfound);

			let value = this.getInput().value.toLowerCase(), ul = setting.getUL(), li = ul.getLI();
			for (let item = 0; item < li.length; item++) li[item].out().classList.remove('hide');

			let hide = 0;
			for (let item = 0; item < li.length; item++) {
				if (li[item].getLabel().innerText.toLowerCase().indexOf(value) !== -1) continue;

				li[item].out().classList.add('hide');
				++hide;
			}

			if (hide === li.length) ul.getUL().appendChild(notfound);
		}
	}

	class Visibility {

		static visibility() {
			return 'visibility';
		}

		static icons() {
			return {
				check: 'visibility',
				blank: 'visibility_off'
			};
		}

		constructor(li) {
			this.li = li;
			this.elements = {};
		}

		/**
		* This function returns the li element
		* @returns The li element.
		*/

		getLI() {
			return this.li;
		}

		/**
		* If the element exists, return it. Otherwise, create it, set its class name, set its click
		* handler, and return it
		* @returns The icon element.
		*/

		getIcon() {
			if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
			this.elements.icon = document.createElement('i');
			this.elements.icon.className = 'material-icons';
			this.elements.icon.setAttribute(Timeline.handle(), ':click');
			this.elements.icon.addEventListener('click', this, false);
			return this.elements.icon;
		}

		/**
		* It takes a string, creates a text node from it, and then appends that text node to the icon
		* element
		* @param material - The material icon to use.
		* @returns The object itself.
		*/

		setIcon(material) {
			let text = document.createTextNode(material), icon = this.getIcon();
			icon.innerText = '';
			icon.appendChild(text);
			return this;
		}

		/**
		* "If the input element exists, return it. Otherwise, create it, set its type to checkbox, set its
		* change attribute to the change handler, and add a change event listener to it. Then return it."
		* 
		* The change handler is a function that is called when the checkbox is checked or unchecked. It's
		* defined in the next function
		* @returns The input element.
		*/

		getInput() {
			if (this.elements.hasOwnProperty('input')) return this.elements.input;
			this.elements.input = document.createElement('input');
			this.elements.input.type = 'checkbox';
			this.elements.input.setAttribute(Timeline.handle(), ':change');
			this.elements.input.addEventListener('change', this, false);
			return this.elements.input;
		}

		/**
		* It sets the checked property of the input element to the value of the checked parameter, and then
		* dispatches a change event on the input element
		* @param checked - Boolean
		* @returns The instance of the class.
		*/

		setInput(checked) {
			let input = this.getInput(), trigger = new Event('change', {
				'cancelable': false,
				'bubbles': true
			});

			input.checked = checked;
			input.dispatchEvent(trigger);

			return this;
		}

		/**
		* It takes an event, finds the closest attribute that matches the handle, splits the attribute into
		* an array, loops through the array, splits each item into an array, checks if the first item is the
		* event type or empty, checks if the second item is a function, and if so, calls the function
		* @param event - The event object.
		* @returns The function handleEvent is being returned.
		*/

		handleEvent(event) {
			let attribute = Timeline.closestAttribute(event.target, Timeline.handle());
			if (attribute === null) return;

			let attribute_split = attribute.split(/\s+/);
			for (let item = 0; item < attribute_split.length; item++) {
				let execute = attribute_split[item].split(String.fromCharCode(58));
				if (execute.length !== 2) break;
				if (execute[0] === event.type || 0 === execute[0].length) {
					if (typeof this[execute[1]] !== 'function') continue;

					this[execute[1]].call(this, event);
				}
			}
		}

		/**
		* `click()` is called when the user clicks on the checkbox
		*/

		click() {
			let input = this.getInput(), checked = input.checked === false;
			this.setInput(checked);
			this.getLI().getUL().getSetting().request();
		}

		/**
		* "If the checkbox is checked, set the icon to the check icon, otherwise set it to the blank icon."
		* 
		* The first line of the function gets the input element. The second line gets the icons object. The
		* third line sets the icon variable to the check icon if the checkbox is checked, otherwise it sets
		* it to the blank icon. The fourth line sets the icon to the icon variable
		*/

		change() {
			let input = this.getInput(), icons = this.constructor.icons(), icon = input.checked === true ? icons.check : icons.blank;
			this.setIcon(icon);
		}
	}

	class Li {

		static data() {
			return 'data-item-id';
		}

		static drag() {
			return 'material-icons drag_handle';
		}

		constructor(ul, matrix) {
			this.ul = ul;
			this.elements = {};
			this.elements.visibility = new window.Timeline.Setting.Ul.Li.Visibility(this);

			let visibility = !matrix.hasOwnProperty(Timeline.Setting.Ul.Li.Visibility.visibility())
				|| matrix[Timeline.Setting.Ul.Li.Visibility.visibility()] === false;

			this.getVisibility().setInput(!visibility);

			if (matrix.hasOwnProperty('name')) this.getLI().setAttribute(this.constructor.data(), matrix.name);
			if (matrix.hasOwnProperty('text')) this.setLabel(matrix.text);
		}

		/**
		* This function returns the ul element
		* @returns The ul property of the object.
		*/

		getUL() {
			return this.ul;
		}

		/**
		* It returns the visibility of the elements.
		* @returns The visibility property of the elements object.
		*/

		getVisibility() {
			return this.elements.visibility;
		}
		
		/**
		* It returns the drag handle element for the option
		* @returns The drag element.
		*/
		
		getDrag() {
			if (this.elements.hasOwnProperty('drag')) return this.elements.drag;
			let icon = Timeline.getIcon(this.constructor.drag());
			this.elements.drag = document.createElement('div');
			this.elements.drag.className = 'option handle';
			this.elements.drag.appendChild(icon);
			return this.elements.drag;
		}

		/**
		* It returns the option element, which is a div containing the visibility icon
		* @returns The option element.
		*/
		
		getOption() {
			if (this.elements.hasOwnProperty('option')) return this.elements.option;
			let visibility = this.getVisibility().getIcon();
			this.elements.option = document.createElement('div');
			this.elements.option.className = 'option right';
			this.elements.option.appendChild(visibility);
			return this.elements.option;
		}

		/**
		* If the `elements` object has a `label` property, return it. Otherwise, create a new `label`
		* element, assign it to the `elements` object's `label` property, and return it
		* @returns The label element.
		*/
		
		getLabel() {
			if (this.elements.hasOwnProperty('label')) return this.elements.label;
			this.elements.label = document.createElement('label');
			return this.elements.label;
		}

		/**
		* It creates a text node, gets the label element, clears the label element, and appends the text
		* node to the label element
		* @param text - The text to be displayed in the label.
		* @returns The label element.
		*/
		
		setLabel(text) {
			let node = document.createTextNode(text), label = this.getLabel();
			label.innerText = '';
			label.appendChild(node);
			return this;
		}

		/**
		* It creates a new `li` element, adds the `drag`, `label`, and `options` elements to it, and returns
		* the `li` element
		* @returns The li element.
		*/
		
		getLI() {
			if (this.elements.hasOwnProperty('li')) return this.elements.li;
			let drag = this.getDrag(), label = this.getLabel(), options = this.getOption();
			this.elements.li = document.createElement('li');
			this.elements.li.className = 'active';
			this.elements.li.appendChild(drag);
			this.elements.li.appendChild(label);
			this.elements.li.appendChild(options);
			return this.elements.li;
		}

		/**
		* This function returns the HTML for the list item.
		* @returns The function getLI() is being returned.
		*/
		
		out() {
			return this.getLI();
		}
	}

	class Ul {

		constructor(setting) {
			this.setting = setting;

			this.elements = {};
			this.elements.li = [];

			this.sortable = null;

			if (typeof window.Sortable === 'function') {
				let ul = this.getUL();
				this.sortable = new Sortable.create(ul, {
					animation: 150,
					ghostClass: 'ghost',
					handle: '.handle',
					reference: this,
					dataIdAttr: window.Timeline.Setting.Ul.Li.data(),
					onEnd: function () {
						this.options.reference.getSetting().request();
					}
				});
			}
		}

		/**
		* This function returns the value of the setting property
		* @returns The setting property of the object.
		*/

		getSetting() {
			return this.setting;
		}

		/**
		* This function returns the value of the sortable property
		* @returns The sortable property of the object.
		*/
		
		getSortable() {
			return this.sortable;
		}

		/**
		* If the `content` element exists, return it. Otherwise, create it, add the `ul` element to it,
		* and return it
		* @returns The content of the list.
		*/
		
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let ul = this.getUL();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'list';
			this.elements.content.appendChild(ul);
			return this.elements.content;
		}

		/**
		* If the elements object has a property called ul, return it. Otherwise, create a new ul element,
		* assign it to the elements object, and return it.
		* @returns The ul element.
		*/
		
		getUL() {
			if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
			this.elements.ul = document.createElement('ul');
			return this.elements.ul;
		}

		/**
		* This function returns the li element.
		* @returns The li element.
		*/
		
		getLI() {
			return this.elements.li;
		}

		/**
		* Finds a list item by name
		* @param name - The name of the timeline you want to find.
		* @returns The li element that has the data attribute of the name passed in.
		*/

		findLI(name) {
			let li = this.getLI();
			for (let item = 0; item < li.length; item++) {
				let data = li[item].out().getAttribute(window.Timeline.Setting.Ul.Li.data());
				if (data === null
					|| data !== name) continue;

				return li[item];
			}

			return null;
		}

		/**
		* It creates a new `li` element, adds it to the `li` array, and appends it to the `ul` element
		* @param structure - The structure of the LI.
		* @returns The object itself.
		*/
		
		addLI(structure) {
			let li = new window.Timeline.Setting.Ul.Li(this, structure);
			this.elements.li.push(li);
			this.getUL().appendChild(li.out());
			return this;
		}

		/**
		* It removes all the elements from the timeline
		* @returns The object itself.
		*/
		
		reset() {
			if (this.elements.li.length === 0) return this;
			for (let item = 0; item < this.elements.li.length; item++) Timeline.removeElementDOM(this.elements.li[item].out());
			this.elements.li = [];
			return this;
		}

		/**
		* It takes the structure and setting from the timeline, merges them, and then adds the merged data
		* to the list
		* @returns The object that the method is being called on.
		*/
		
		update() {
			let timeline = this.getSetting().getTimeline();
			let structure = timeline.getOptionStructure(), setting = timeline.getOptionSetting();
			if (structure === null
				|| setting === null) return this;

			this.reset();

			let map = {};

			for (let item = 0; item < setting.length; item++) {
				map[setting[item].name] = setting[item];
				map[setting[item].name][Timeline.Setting.Ul.Li.Visibility.visibility()] = true;
			}

			for (let item = 0; item < structure.length; item++) {
				if (!map.hasOwnProperty(structure[item].name)) map[structure[item].name] = {};
				map[structure[item].name] = Object.assign(map[structure[item].name], structure[item]);
			}

			for (let item in map) this.addLI(map[item]);

			return this;
		}

		/**
		* "The out() function returns the content of the current page."
		* 
		* The out() function is the only function that is required for a page to work
		* @returns The content of the file.
		*/
		
		out() {
			return this.getContent();
		}
	}

	class Notice {

		static retry() {
			return 'Click here to try again now!';
		}

		constructor(setting) {
			this.setting = setting;
			this.elements = {};
		}

		/**
		* This function returns the value of the setting property
		* @returns The setting property of the object.
		*/
		
		getSetting() {
			return this.setting;
		}

		/**
		* It creates a div element, adds a class to it, adds the message and reload elements to it, and
		* returns it
		* @returns The content of the error message.
		*/
		
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let message = this.getMessage(), reload = this.getReload();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'notice error';
			this.elements.content.appendChild(message);
			this.elements.content.appendChild(reload);
			return this.elements.content;
		}

		/**
		* It returns the message element, creating it if it doesn't exist
		* @returns The message element.
		*/
		
		getMessage() {
			if (this.elements.hasOwnProperty('message')) return this.elements.message;
			this.elements.message = document.createElement('span');
			return this.elements.message;
		}

		/**
		* It takes a message, creates a text node, clears the message element, and appends the text node to
		* the message element
		* @param message - The message to be displayed.
		* @returns The object itself.
		*/
		
		setMessage(message) {
			let node = document.createTextNode(message);
			let new_message = this.getMessage();
			new_message.innerText = '';
			new_message.appendChild(node);
			return this;
		}

		/**
		* It returns a link element that, when clicked, will reload the timeline
		* @returns The reload element.
		*/
		
		getReload() {
			if (this.elements.hasOwnProperty('reload')) return this.elements.reload;
			let setting = this.getSetting(), icon = Timeline.getIcon('material-icons loop'), node = document.createTextNode(this.constructor.retry());
			this.elements.reload = document.createElement('a');
			this.elements.reload.appendChild(node);
			this.elements.reload.setAttribute(Timeline.handle(), ':request');
			this.elements.reload.addEventListener('click', setting, false);
			this.elements.reload.appendChild(icon);
			return this.elements.reload;
		}

		/**
		* It inserts the content of the `<li>` element into the `<ul>` element
		* @returns The object itself.
		*/
		
		show() {
			let content = this.getContent(), list = this.getSetting().getUL().getContent();
			list.insertBefore(content, list.firstChild);
			return this;
		}

		/**
		* It removes the element from the DOM
		* @returns The object itself.
		*/
		
		hide() {
			let content = this.getContent();
			Timeline.removeElementDOM(content);
			return this;
		}
	}

	class Setting {

		static field() {
			return 'value';
		}
		static color() {
			return 'color';
		}

		constructor(timeline) {
			this.timeline = timeline;

			this.elements = {};
			this.elements.ul = new window.Timeline.Setting.Ul(this);
			this.elements.search = new window.Timeline.Setting.Search(this);
			this.elements.notice = new window.Timeline.Setting.Notice(this);

			this.xhr = {
				url: null,
				hardcode: {},
				construct: new XMLHttpRequest()
			};

			this.xhr.construct.onreadystatechange = this.result.bind(this);
		}

		/**
		* This function returns the timeline
		* @returns The timeline property of the object.
		*/
		
		getTimeline() {
			return this.timeline;
		}

		/**
		* Return the ul element.
		* @returns The ul element.
		*/
		
		getUL() {
			return this.elements.ul;
		}

		/**
		* Return the search element.
		* @returns The search input element.
		*/
		
		getSearch() {
			return this.elements.search;
		}

		/**
		* Return the notice element.
		* @returns The notice element.
		*/
		
		getNotice() {
			return this.elements.notice;
		}

		/**
		* "If the XHR object is not already created, create it and return it."
		* 
		* The first thing the function does is check to see if the XHR object has already been created. If
		* it has, it returns the object. If it hasn't, it creates the object and returns it
		* @returns The constructor function for the XHR object.
		*/
		
		getXHR() {
			return this.xhr.construct;
		}

		/**
		* Sets the URL of the request
		* @param url - The URL to send the request to.
		* @returns The object itself.
		*/
		
		setRequestUrl(url) {
			this.xhr.url = url;
			return this;
		}

		/**
		* It returns the URL of the request
		* @returns The url of the request.
		*/
		
		getRequestUrl() {
			return this.xhr.url;
		}

		/**
		* Sets a hardcoded value for the specified key.
		* @param key - The key to set the value to.
		* @param value - The value to set the key to.
		* @returns The object itself.
		*/
		
		setHardcode(key, value) {
			this.xhr.hardcode[key] = value;
			return this;
		}

		/**
		* It returns the hardcode object
		* @returns The hardcode property of the xhr object.
		*/
		
		getHardcode() {
			return this.xhr.hardcode;
		}

		/**
		* It creates a div, adds the search and list elements to it, and returns the div
		* @returns The content of the setting page.
		*/
		
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let list = this.getUL().out(), search = this.getSearch().out();
			this.elements.content = document.createElement('div');
			this.elements.content.id = 'setting';
			this.elements.content.appendChild(search);
			this.elements.content.appendChild(list);
			return this.elements.content;
		}

		/**
		* "Get the index of the timeline item with the given name."
		* 
		* The function starts by getting the option setting
		* @param name - The name of the timeline item.
		* @returns The index of the item in the setting array.
		*/
		
		getK(name) {
			let setting = this.getTimeline().getOptionSetting();
			for (let item = 0, k = 0; item < setting.length; item++) {
				if (true !== setting[item].hasOwnProperty(Timeline.Setting.Ul.Li.Visibility.visibility())) continue;
				if (true !== setting[item][Timeline.Setting.Ul.Li.Visibility.visibility()]) continue;
				if (setting[item].name === name) return k;
				k++
			}
			return null;
		}

		/**
		* Get the width of the branch line
		* @returns The width of the branch.
		*/
		
		getWidth() {
			let setting = this.getTimeline().getOptionSetting(),
				w = 0;
			for (let item = 0; item < setting.length; item++) {
				if (true !== setting[item].hasOwnProperty(Timeline.Setting.Ul.Li.Visibility.visibility())) continue;
				if (true !== setting[item][Timeline.Setting.Ul.Li.Visibility.visibility()]) continue;
				w++
			}

			let margin = w* Timeline.Line.Branch.margin(),
				space = Timeline.width() - Timeline.Grid.start() - margin,
				width = space / w;

			return width > Timeline.Line.Branch.maxWidth()
				? Timeline.Line.Branch.maxWidth()
				: width;
		}

		/**
		* It returns the color of the timeline item with the given name
		* @param name - The name of the option to get the color of.
		* @returns The color of the option.
		*/
		
		getColor(name) {
			let structure = this.getTimeline().getOptionStructure();
			for (let item = 0; item < structure.length; item++)
				if (structure[item].name === name)
					return String.fromCharCode(35)
						+ structure[item][Timeline.Setting.color()];
			return null;
		}

		/**
		* The `out()` function updates the `<ul>` element and returns the `<div>` element
		* @returns The content of the list.
		*/
		
		out() {
			this.getUL().update();
			return this.getContent();
		}

		/**
		* It takes an event, finds the closest attribute that matches the handle, splits the attribute into
		* an array, loops through the array, splits each item into an array, checks if the first item is the
		* event type or empty, checks if the second item is a function, and if so, calls the function
		* @param event - The event object.
		* @returns The function handleEvent is being returned.
		*/
		
		handleEvent(event) {
			let attribute = Timeline.closestAttribute(event.target, Timeline.handle());
			if (attribute === null) return;

			let attribute_split = attribute.split(/\s+/);
			for (let item = 0; item < attribute_split.length; item++) {
				let execute = attribute_split[item].split(String.fromCharCode(58));
				if (execute.length !== 2) break;
				if (execute[0] === event.type || 0 === execute[0].length) {
					if (typeof this[execute[1]] !== 'function') continue;

					this[execute[1]].call(this, event);
				}
			}
		}

		/**
		* It gets the timeline, the XHR, the request URL, the UL, the sortable, the hardcode, the list, the
		* setting, the preloader, the visibility, the name, the option setting, and then it sends the data.
		* @returns the value of the variable `setting`.
		*/
		
		request() {
			this.getNotice().hide();

			let timeline = this.getTimeline(),
				xhr = this.getXHR(),
				url = this.getRequestUrl();
			xhr.open('POST', url, !0);

			let ul = this.getUL(),
				sortable = ul.getSortable();
			if (sortable === null) return;

			let data = new FormData(),
				hardcode = this.getHardcode();
			for (let item in hardcode)
				data.append(item, hardcode[item]);

			let list = sortable.toArray(),
				setting = [];

			for (let item = 0; item < list.length; item++) {
				let li = ul.findLI(list[item]);
				if (li === null) continue;

				let visibility = li.getVisibility().getInput().checked;
				if (true !== visibility) continue;
				
				data.append(this.constructor.field() + '[' + item + '][name]', list[item]);
				setting.push({
					name: list[item],
					[Timeline.Setting.Ul.Li.Visibility.visibility()]: visibility
				});
			}

			let preloader = timeline.getPreloader();
			if (preloader !== null) preloader.show().showSpinner();

			xhr.send(data);
			timeline.setOptionSetting(setting);
		}

		/**
		* If the request is not done or the status is not 200, return; otherwise, hide the preloader and
		* parse the response as JSON. If the status is true, return; otherwise, set the notice message and
		* show it
		* @returns The result of the AJAX request.
		*/
		
		result() {
			let xhr = this.getXHR();

			if (XMLHttpRequest.DONE !== xhr.readyState
				|| 200 !== xhr.status) return;

			let preloader = this.getTimeline().getPreloader();
			if (preloader !== null) preloader.hide();

			let json;
			try {
				json = JSON.parse(xhr.responseText);
			}
			catch (message) {
				json = {
					'status': false,
					'notice': message
				};
			}

			if (json.status === true) return;

			let message = json.hasOwnProperty('notice') ? json.notice : 'Unmanaged error';
			this.getNotice().setMessage(message).show();
		}
	}

	window.Timeline.Plugin.Setting = Setting;
	window.Timeline.Plugin.Setting.Search = Search;
	window.Timeline.Plugin.Setting.Search.NotFound = NotFound;
	window.Timeline.Plugin.Setting.Notice = Notice;
	window.Timeline.Plugin.Setting.Ul = Ul;
	window.Timeline.Plugin.Setting.Ul.Li = Li;
	window.Timeline.Plugin.Setting.Ul.Li.Visibility = Visibility;

})(window);

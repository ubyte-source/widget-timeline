(function (window) {

    'use strict';

    class Palette {

        /**
        * It converts a hexadecimal color code to an RGB color code
        * @param hex - The hexadecimal color code.
        * @param alpha - The alpha value of the color.
        * @returns A string.
        */

        static hexToRgb(hex, alpha) {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (false === result) return null;

            let rgb = 'rgb'
                + String.fromCharCode(40)
                + parseInt(result[1], 16) + String.fromCharCode(44) + String.fromCharCode(32)
                + parseInt(result[2], 16) + String.fromCharCode(44) + String.fromCharCode(32)
                + parseInt(result[3], 16);
            if (typeof alpha !== 'undefined')
                rgb = rgb + String.fromCharCode(44) + String.fromCharCode(32) + alpha

            return rgb + String.fromCharCode(41);
        }
    }

    class Rectangle {

        static width() {
            return 100;
        }
        static height() {
            return 50;
        }
        static round() {
            return 2;
        }
        static stroke() {
            return '#000000';
        }
        static strokeWidth() {
            return 2;
        }
        static fill() {
            return '#f1f1f1';
        }

        constructor() {
            this.elements = {};
            this.attributes = {};

            this.setAttribute('width', this.constructor.width());
            this.setAttribute('height', this.constructor.height());
            this.setAttribute('stroke', this.constructor.stroke());
            this.setAttribute('stroke-width', this.constructor.strokeWidth());
            this.setAttribute('fill', this.constructor.fill());
            this.setAttribute('rx', this.constructor.round());
        }

        /**
        * This function sets the value of the attribute of the element with the given key to the given
        * value
        * @param key - The name of the attribute.
        * @param value - The value to set the attribute to.
        * @returns The element itself.
        */

        setAttribute(key, value) {
            this.attributes[key] = value;
            this.get().setAttribute(key, value);
            return this;
        }

        /**
        * If the key exists in the attributes object, return the value of that key. Otherwise, return
        * null
        * @param key - The name of the attribute to get.
        * @returns The value of the key in the attributes object.
        */

        getAttribute(key) {
            return this.attributes.hasOwnProperty(key)
                ? this.attributes[key]
                : null;
        }

        /**
        * If the `elements` object has a property called `group`, return that property. Otherwise,
        * create a new `g` element, append the `path` element to it, and return the `g` element
        * @returns The group element.
        */

        getGroup() {
            if (this.elements.hasOwnProperty('group')) return this.elements.group;
            this.elements.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this.elements.group.appendChild(this.get());
            return this.elements.group;
        }

        /**
        * "If the elements object has a property named rect, return that property, otherwise create a
        * new rect element and return it."
        * 
        * The elements object is a property of the class, and it's used to store references to the SVG
        * elements that are created
        * @returns The rect element.
        */

        get() {
            if (this.elements.hasOwnProperty('rect')) return this.elements.rect;
            this.elements.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            return this.elements.rect;
        }

        /**
        * The function `out()` returns the value of the function `getGroup()`
        * @returns The group that the user is in.
        */

        out() {
            return this.getGroup();
        }
    }

    class Line {

        static stroke() {
            return String.fromCharCode(35) + '666666';
        }
        static strokeWidth() {
            return 2;
        }

        constructor() {
            this.elements = {};
            this.attributes = {};

            this.setAttribute('stroke', this.constructor.stroke());
            this.setAttribute('stroke-width', this.constructor.strokeWidth());
        }

        /**
        * If the `elements` object has a property called `group`, return that property. Otherwise,
        * create a new `g` element, set its `class` attribute to `line`, and append a `line` element
        * to it
        * @returns The group element.
        */

        getGroup() {
            if (this.elements.hasOwnProperty('group')) return this.elements.group;
            this.elements.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this.elements.group.setAttribute('class', 'line');
            this.elements.group.appendChild(this.getLine());
            return this.elements.group;
        }

        /**
        * If the `elements` object has a property called `line`, return that property. Otherwise,
        * create a new `line` element and return it
        * @returns The line element.
        */

        getLine() {
            if (this.elements.hasOwnProperty('line')) return this.elements.line;
            this.elements.line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            return this.elements.line;
        }

        /**
        * This function sets  the value to the attribute of the key
        * @param key - The name of the attribute.
        * @param value - The value to set the attribute to.
        * @returns The line object.
        */

        setAttribute(key, value) {
            this.attributes[key] = value;
            this.getLine().setAttribute(key, value);
            return this;
        }

        /**
        * If the key exists in the attributes object, return the value of that key. Otherwise, return
        * null
        * @param key - The name of the attribute to get.
        * @returns The value of the key in the attributes object.
        */

        getAttribute(key) {
            return this.attributes.hasOwnProperty(key)
                ? this.attributes[key]
                : null;
        }

        /**
        * The function `out()` returns the value of the function `getGroup()`
        * @returns The group of the current user.
        */

        out() {
            return this.getGroup();
        }
    }

    class Text {

        static size() {
            return 24;
        }

        constructor() {
            this.elements = {};
            this.elements.tspan = [];
            this.attributes = {};

            this.setAttribute('font-size', this.constructor.size());
        }

        /**
        * This function sets the value of the attribute of the element with the given key to the given
        * value
        * @param key - The name of the attribute.
        * @param value - The value to set the attribute to.
        * @returns The element itself.
        */

        setAttribute(key, value) {
            this.attributes[key] = value;
            this.get().setAttribute(key, value);
            return this;
        }

        /**
        * If the key exists in the attributes object, return the value of the key, otherwise return
        * null
        * @param key - The name of the attribute to get.
        * @returns The value of the key in the attributes object.
        */

        getAttribute(key) {
            return this.attributes.hasOwnProperty(key)
                ? this.attributes[key]
                : null;
        }

        /**
        * It returns the tspan element.
        * @returns The elements.tspan property.
        */

        getTspan() {
            return this.elements.tspan;
        }

        /**
        * It creates a tspan element and appends it to the text element.
        * @param text - The text to be displayed.
        * @returns The tspan element.
        */

        addTspan(text) {
            let tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
            tspan.appendChild(document.createTextNode(text));
            this.getTspan().push(tspan);
            return tspan;
        }

        /**
        * It resets the text.
        * @returns The text object.
        */

        reset() {
            let text = this.get();
            this.elements.tspan = [];
            text.innerHTML = '';
            return this;
        }

        /**
        * If the `elements` object has a property called `text`, return that property. Otherwise,
        * create a new `text` element and return it
        * @returns The text element.
        */

        get() {
            if (this.elements.hasOwnProperty('text')) return this.elements.text;
            this.elements.text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            return this.elements.text;
        }

        /**
        * The function takes a string and splits it into an array of strings. If the array is empty,
        * the function returns. Otherwise, it loops through the array and appends a tspan element to
        * the text element for each item in the array
        * @param label - The text to be displayed.
        * @returns The label is being returned.
        */

        set(label) {
            this.reset();

            let split = this.constructor.toArray(label);
            if (0 === split.length) return this;
            for (let item = 0; item < split.length; item++)
                this.get().appendChild(this.addTspan(split[item]));

            return this;
        }

        /**
        * This function returns the value of the get() function.
        * @returns The value of the variable.
        */

        out() {
            return this.get();
        }

        /**
        * It takes a string and returns an array of strings, where each string is a line from the
        * original string
        * @param label - The label to be split into an array.
        * @returns An array of strings.
        */

        static toArray(label) {
            return label.split(/\r?\n/);
        }
    }

    class Basic { }

    window.Basic = Basic;
    window.Basic.Text = Text;
    window.Basic.Line = Line;
    window.Basic.Palette = Palette;
    window.Basic.Rectangle = Rectangle;

})(window);

(function (window) {

    'use strict';

    class Circle {

        static fill() {
            return '#ffffff';
        }
        static ray() {
            return 6;
        }
        static strokeWidth() {
            return 4;
        }

        constructor(branch, name) {
            this.name = name;
            this.branch = branch;

            this.style = {};
            this.position = {};
            this.elements = {};

            this.setStroke(branch.getStroke());
            this.setStrokeWidth(this.constructor.strokeWidth());
            this.setFill(this.constructor.fill());
            this.setRay(this.constructor.ray());
        }

        /**
        * This function returns the branch of the bank
        * @returns The branch of the bank.
        */

        getBranch() {
            return this.branch;
        }

        /**
        * The function getName() returns the value of the name property
        * @returns The name of the person.
        */

        getName() {
            return this.name;
        }

        /**
        * It returns the stroke of the style.
        * @returns The stroke color of the shape.
        */

        getStroke() {
            return this.style.stroke;
        }

        /**
        * It sets the stroke color of the SVG element.
        * @param color - The color of the stroke.
        * @returns The object itself.
        */

        setStroke(color) {
            this.style.stroke = color;
            this.get().setAttribute('stroke', color);
            return this;
        }

        /**
        * It returns the stroke width of the current style.
        * @returns The strokeWidth property of the style object.
        */

        getStrokeWidth() {
            return this.style.strokeWidth;
        }

        /**
        * Sets the stroke width of the SVG element.
        * @param size - The size of the stroke.
        * @returns The object itself.
        */

        setStrokeWidth(size) {
            this.style.strokeWidth = size;
            this.get().setAttribute('stroke-width', size);
            return this;
        }

        /**
        * The function getFill() returns the value of the fill property of the style object
        * @returns The fill property of the style object.
        */

        getFill() {
            return this.style.fill;
        }

        /**
        * It sets the fill color of the SVG element.
        * @param color - The color to set the fill to.
        * @returns The object itself.
        */

        setFill(color) {
            this.style.fill = color;
            this.get().setAttribute('fill', color);
            return this;
        }

        /**
        * `getRay()` returns the ray value of style property
        * @returns The ray of the style.
        */

        getRay() {
            return this.style.ray;
        }

        /**
        * It sets the ray of the circle.
        * @param size - The size of the ray.
        * @returns The object itself.
        */

        setRay(size) {
            this.style.ray = size;
            this.get().setAttribute('r', size);
            return this;
        }

        /**
        * `getCx()` returns the `cx` property of the `position` object
        * @returns The cx property of the position object.
        */

        getCx() {
            return this.position.cx;
        }

        /**
        * Set the cx attribute of the circle to the value of the cx parameter.
        * @param cx - The x-coordinate of the center of the circle
        * @returns The object itself.
        */

        setCx(cx) {
            this.position.cx = cx;
            this.get().setAttribute('cx', cx);
            return this;
        }

        /**
        * `getCy()` returns the `cy` value of the `position` object
        * @returns The value of the cy property of the position object.
        */

        getCy() {
            return this.position.cy;
        }

        /**
        * It sets the cy attribute of the SVG element to the value of the cy parameter.
        * @param cy - The y-axis coordinate of the center of the circle.
        * @returns The object itself.
        */

        setCy(cy) {
            this.position.cy = cy;
            this.get().setAttribute('cy', cy);
            return this;
        }

        /**
        * If the elements object has a property called circle, return that property, otherwise create
        * a new circle element and return it.
        * @returns The circle element.
        */

        get() {
            if (this.elements.hasOwnProperty('circle')) return this.elements.circle;
            this.elements.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            return this.elements.circle;
        }

        /**
        * This function sets the cx, cy, r, stroke, width, and fill properties of the circle
        * @param cx - The x coordinate of the center of the circle.
        * @param cy - The y-coordinate of the center of the circle.
        * @param r - The radius of the circle.
        * @param stroke - The color of the circle's outline.
        * @param width - The width of the circle's stroke.
        * @param fill - The fill color of the circle.
        * @returns The object itself.
        */

        set(cx, cy, r, stroke, width, fill) {

            this.setCx(cx);
            this.setCy(cy);

            if (typeof r === 'number') this.setRay(r);
            if (typeof stroke === 'string') this.setStroke(stroke);
            if (typeof width === 'number') this.setWidth(width);
            if (typeof fill === 'string') this.setFill(fill);

            return this;
        }

        /**
        * This function returns the value of the get() function.
        * @returns The value of the variable.
        */

        out() {
            return this.get();
        }

        /**
        * It deletes the circle from the branch.
        * @returns The branch is being returned.
        */

        destroy() {
            return this.getBranch().delCircle(this);
        }
    }

    class ID extends Basic.Text {

        constructor(branch) {
            super();

            this.branch = branch;
        }

        /**
        * This function returns the branch of the bank
        * @returns The branch of the bank.
        */

        getBranch() {
            return this.branch;
        }

        /**
        * The function redraw() is called when the branch is resized. It sets the position of the text
        * to the center of the branch
        */

        redraw() {
            let x = this.getBranch().getAttribute('x'),
                width = this.getBranch().getAttribute('width') / 2;

            for (let item = 0, tspan = this.getTspan(); item < tspan.length; item++) {
                tspan[item].setAttribute('dy', this.getAttribute('font-size'));
                tspan[item].setAttribute('x', x + width);
            }

            let y = this.getBranch().getAttribute('y'),
                height = this.getBranch().getAttribute('height') / 2;

            this.setAttribute('x', x + width);
            this.setAttribute('y', y + height - this.getAttribute('font-size'));
        }
    }

    class Branch extends Basic.Rectangle {

        static margin() {
            return 8;
        }
        static opacity() {
            return 0.8;
        }
        static fontSize() {
            return 12;
        }
        static maxWidth() {
            return 120;
        }

        constructor(line, id) {
            super();

            this.id = id;
            this.line = line;

            this.property = {};
            this.elements = {};
            this.event = {};

            this.getGroup().setAttribute('class', 'branch');
            this.getGroup().appendChild(this.getText().out());
            this.getGroup().setAttribute(Timeline.handle(), ':click');
            this.getGroup().addEventListener('click', this);
            this.getText().set(this.getID());
        }

        /**
        * It returns the line number of the error.
        * @returns The line property of the object.
        */

        getLine() {
            return this.line;
        }

        /**
        * The function getID() returns the value of the id property of the object that called it
        * @returns The id of the object.
        */

        getID() {
            return this.id;
        }

        /**
        * The function returns the value of the click property of the event object
        * @returns The event.click property of the object.
        */

        getEventOnClick() {
            return this.event.click;
        }

        /**
        * It sets the event on click to the function that is passed in.
        * @param func - The function to be called when the button is clicked.
        * @returns The object itself.
        */

        setEventOnClick(func) {
            this.event.click = func;
            return this;
        }

        /**
        * It sets the extrenes attribute of the Branch.
        * @param extremes - A calss Extremes containes the start and end values of the time range.
        * @returns The object itself.
        */

        setExtremes(extremes) {
            this.property.extremes = extremes;
            return this;
        }

        /**
        * This function returns the extremes of the property
        * @returns The extremes of the property.
        */

        getExtremes() {
            return this.property.extremes;
        }

        /**
        * The function returns the text element of the branch
        * @returns The text element of the branch.
        */

        getText() {
            if (this.elements.hasOwnProperty('text')) return this.elements.text;
            this.elements.text = new Timeline.Line.Branch.ID(this);
            this.elements.text.setAttribute('dominant-baseline', 'middle');
            this.elements.text.setAttribute('text-anchor', 'middle');
            this.elements.text.setAttribute('font-size', this.constructor.fontSize());
            return this.elements.text;
        }

        /**
        * It sets the start and end dates of the timeline, sorts the branches, and returns the
        * timeline
        * @param start - The start date of the period.
        * @param end - The end date of the period.
        * @returns The current instance of the class.
        */

        setPeriod(start, end) {
            this.setExtremes(new Timeline.Line.Extremes(start, end));
            this.getLine().getBranch().sort(function (a, b) {
                return a.getExtremes().getStart() - b.getExtremes().getStart();
            });
            return this;
        }

        /**
        * It deletes the branch.
        * @returns The return value of the delBranch method of the line object.
        */

        destroy() {
            return this.getLine().delBranch(this);
        }

        /**
        * It removes the element from the DOM
        */

        hide() {
            Timeline.removeElementDOM(this.getGroup());
        }

        /**
        * Adds the Branch element to the SVG element of the timeline
        */

        show() {
            this.getLine().getTimeline().getSvg().appendChild(this.out());
        }

        /**
        * It draws the rectangle
        */

        redraw() {
            let id = this.getID(),
                group = this.getGroup(),
                setting = this.getLine().getTimeline().getSetting(),
                k = setting.getK(id);
            if (k === null) {
                this.hide();
                return;
            }

            if (group.parentNode === null) this.show();
            let extremes = this.getExtremes(),
                color = setting.getColor(id),
                width = setting.getWidth(),
                y = this.getLine().conversion(extremes.getEnd());

            this.setAttribute('x', Timeline.Grid.start() + (k * (width + this.constructor.margin())));
            this.setAttribute('y', y);
            this.setAttribute('height', this.getLine().conversion(extremes.getStart()) - y);
            this.setAttribute('width', width);
            this.setAttribute('stroke', Basic.Palette.hexToRgb(color));
            this.setAttribute('rx', 2);
            if (null !== color)
                this.setAttribute('fill', Basic.Palette.hexToRgb(color, this.constructor.opacity()));

            this.getText().redraw();
        }

        /**
        * It calls the function that is returned by the getEventOnClick() method.
        */
        click() {
            let func = this.getEventOnClick();
            if (typeof func === 'function') func.call(this);
        }

        /**
        * It takes an event, finds the closest attribute that matches the event type, and then
        * executes the function that matches the attribute
        * @param event - The event object.
        * @returns the closest attribute to the event target.
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
    }

    class Text extends Basic.Text {

        constructor(rectangle) {
            super();

            this.rectangle = rectangle;
        }

        /**
        * The function getRectangle() returns the rectangle
        * @returns The rectangle object.
        */

        getRectangle() {
            return this.rectangle;
        }

        /**
        * The function sets the label of the rectangle, then sets the height of the rectangle to the
        * number of lines in the label times the font size plus the margin times two
        * @param label - The label to be displayed.
        * @returns The instance of the class.
        */

        set(label) {
            super.set(label);
            let split = this.constructor.toArray(label),
                height = (split.length * this.getAttribute('font-size')) + (Timeline.Line.Rectangle.margin() * 2);
            this.getRectangle().setAttribute('height', height);
            return this;
        }

        /**
        * The function redraw() sets the x and y attributes of the text element to the x and y 
        * attributes of the rectangle
        */

        redraw() {
            let x = this.getRectangle().getLine().getAttribute('x1');

            for (let item = 0, tspan = this.getTspan(); item < tspan.length; item++) {
                tspan[item].setAttribute('dy', this.getAttribute('font-size'));
                tspan[item].setAttribute('x', x);
            }

            this.setAttribute('x', x);
            this.setAttribute('y', this.getRectangle().calculate());
        }
    }

    class Rectangle extends Basic.Rectangle {

        static TypeHeader() {
            return 0x1;
        }
        static TypeFooter() {
            return 0x2;
        }
        static margin() {
            return 16;
        }

        constructor(line, type) {
            super();

            this.line = line;
            this.type = type;

            this.getGroup().appendChild(this.getText().out());
        }

        /**
        * This function returns the line number of the current line
        * @returns The line property of the object.
        */

        getLine() {
            return this.line;
        }

        /**
        * The function getType() returns the value of the type property of the object that called it
        * @returns The type of the object.
        */

        getType() {
            return this.type;
        }

        /**
        * If the object has a property called 'text', return that property. Otherwise, create a new
        * object called 'text' and return that
        * @returns The text element of the rectangle.
        */

        getText() {
            if (this.elements.hasOwnProperty('text')) return this.elements.text;
            this.elements.text = new Timeline.Line.Rectangle.Text(this);
            this.elements.text.setAttribute('dominant-baseline', 'middle');
            this.elements.text.setAttribute('text-anchor', 'middle');
            return this.elements.text;
        }

        /**
        * The function calculates the y-coordinate of the rectangle
        * @returns The y-coordinate of the rectangle.
        */

        calculate() {
            let e = this.getLine().calculateExtremes();
            return Timeline.Line.Rectangle.TypeHeader() === this.getType()
                ? this.getLine().conversion(e.getEnd()) - this.getAttribute('height') - this.constructor.margin()
                : this.constructor.margin() + this.getLine().conversion(e.getStart());
        }

        /**
        * The function redraws the point by setting its x and y attributes to the x and y coordinates
        * of the point
        * @returns The object itself.
        */

        redraw() {
            let x = this.getLine().getAttribute('x1');
            this.setAttribute('x', x - (this.getAttribute('width') / 2));
            this.setAttribute('y', this.calculate());
            this.getText().redraw();
            return this;
        }
    }

    class Inbox extends Basic.Text {

        constructor(note) {
            super();

            this.note = note;
            this.property = {};
        }

        /**
        * The function getNote() returns the value of the variable note
        * @returns The note property of the object.
        */

        getNote() {
            return this.note;
        }

        /**
        * The function getMessage() returns the value of the property message.
        * @returns The message property of the property object.
        */

        getMessage() {
            return this.property.message;
        }

        /**
        * This function sets the message property of the object to the number passed in, then sets the
        * value of the object to the string version of the number, and finally returns the object
        * @param number - The number to be displayed.
        * @returns The object itself.
        */

        setMessage(number) {
            this.property.message = number;
            this.set(number.toString());
            return this;
        }

        /**
        * The function redraw() is called when the note is resized. It sets the position of the text
        * to the center of the note
        */

        redraw() {
            let x = this.getNote().getAttribute('x'),
                width = this.getNote().getAttribute('width') / 2;

            for (let item = 0, tspan = this.getTspan(); item < tspan.length; item++) {
                tspan[item].setAttribute('dy', this.getAttribute('font-size'));
                tspan[item].setAttribute('x', x + width);
            }

            let y = this.getNote().getAttribute('y'),
                height = this.getNote().getAttribute('height') / 2;

            this.setAttribute('x', x + width);
            this.setAttribute('y', y + height - this.getAttribute('font-size'));
        }
    }

    class Note extends Basic.Rectangle {

        static margin() {
            return 8;
        }
        static opacity() {
            return 0.8;
        }
        static fontSize() {
            return 12;
        }
        static maxWidth() {
            return 120;
        }

        constructor(line, timestamp) {
            super();

            this.line = line;
            this.timestamp = Timeline.Grid.midnight(timestamp);
            this.elements = {};
            this.event = {};

            this.getGroup().setAttribute('class', 'note');
            this.getGroup().appendChild(this.getInbox().out());
            this.getGroup().setAttribute(Timeline.handle(), ':click');
            this.getGroup().addEventListener('click', this);
        }

        /**
        * This function returns the line number of the current line
        * @returns The line property of the object.
        */

        getLine() {
            return this.line;
        }

        /**
        * This function returns the timestamp of the current time
        * @returns The timestamp of the message.
        */

        getTimestamp() {
            return this.timestamp;
        }

        /**
        * The function returns the value of the click property of the event object
        * @returns The event.click property of the object.
        */

        getEventOnClick() {
            return this.event.click;
        }

        /**
        * It sets the event on click to the function that is passed in.
        * @param func - The function to be called when the button is clicked.
        * @returns The object itself.
        */

        setEventOnClick(func) {
            this.event.click = func;
            return this;
        }

        /**
        * It returns a new instance of the `Timeline.Line.Note.Inbox` class, which is a subclass of
        * the `Timeline.Line.Note` class
        * @returns The Inbox element.
        */

        getInbox() {
            if (this.elements.hasOwnProperty('inbox')) return this.elements.inbox;
            this.elements.inbox = new Timeline.Line.Note.Inbox(this);
            this.elements.inbox.setAttribute('dominant-baseline', 'middle');
            this.elements.inbox.setAttribute('text-anchor', 'middle');
            this.elements.inbox.setAttribute('font-size', this.constructor.fontSize());
            this.elements.inbox.setMessage(1);
            return this.elements.inbox;
        }

        /**
        * It deletes the note from the line.
        * @returns The return value of the delNote method of the line object.
        */

        destroy() {
            return this.getLine().delNote(this);
        }

        /**
        * It draws the note with new coordinate
        */

        redraw() {
            let timestamp = this.getTimestamp(),
                y = this.getLine().conversion(timestamp);
            if (y < 0) return;

            this.setAttribute('x', this.constructor.margin());
            this.setAttribute('y', y + this.constructor.margin());
            this.setAttribute('height', y - this.getLine().conversion(timestamp + Timeline.day()) - (2 * this.constructor.margin()));
            this.setAttribute('width', Timeline.Line.x() - (2 * this.constructor.margin()));
            this.setAttribute('stroke', Basic.Palette.hexToRgb('666666'));
            this.setAttribute('fill', Basic.Palette.hexToRgb('f1f1f1', this.constructor.opacity()));
            this.setAttribute('rx', 2);
            this.getInbox().redraw();
        }

        /**
        * If the value returned from the function getEventOnClick is a function, then call it
        */

        click() {
            let func = this.getEventOnClick();
            if (typeof func === 'function') func.call(this);
        }

        /**
        * It takes an event, finds the closest attribute that matches the event type, and then
        * executes the function that matches the attribute
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
    }

    class Extremes {

        constructor(start, end) {
            this.y = {};
            this.y.end = parseInt(end);
            this.y.start = parseInt(start);
        }

        /**
        * This function returns the start value of the y axis
        * @returns The start of the range.
        */

        getStart() {
            return this.y.start;
        }

        /**
        * This function returns the end of the y axis
        * @returns The end of the range.
        */

        getEnd() {
            return this.y.end;
        }
    }

    class Time {

        static fill() {
            return '#e7e7e7';
        }
        static stroke() {
            return '#e7e7e7';
        }
        static strokeWidth() {
            return 1;
        }
        static margin() {
            return 3;
        }
        static fontSize() {
            return 12;
        }
        static sunday() {
            return String.fromCharCode(35) + 'ed9391';
        }
        static saturday() {
            return String.fromCharCode(35) + 'd3c9ac';
        }

        constructor(grid, timestamp) {
            this.grid = grid;
            this.timestamp = timestamp;

            this.elements = {};

            let line = this.getGrid().getTimeline().getLine(),
                converted = line.conversion(timestamp);

            this.getHorizontal().setAttribute('stroke', this.constructor.stroke());
            this.getHorizontal().setAttribute('stroke-width', this.constructor.strokeWidth());
            this.getHorizontal().setAttribute('y1', converted);
            this.getHorizontal().setAttribute('y2', converted);
            this.getHorizontal().setAttribute('x2', Timeline.width());
            this.getHorizontal().setAttribute('x1', 0);

            this.getText().setAttribute('x', line.getAttribute('x1') + this.constructor.margin())
            this.getText().setAttribute('y', converted - this.constructor.margin());
            this.getText().setAttribute('font-size', this.constructor.fontSize());
            this.getText().setAttribute('fill', this.constructor.fill());

            if (typeof Timeline.Moment === 'function') {
                let moment = Timeline.Moment(timestamp, 'X');
                this.getText().set(moment.format('DD/MM/YYYY').toUpperCase());
                if (6 == moment.format('d')) this.getText().setAttribute('fill', this.constructor.saturday());
                if (0 == moment.format('d')) this.getText().setAttribute('fill', this.constructor.sunday());
            } else {
                this.getText().set(timestamp);
            }
        }

        /**
        * The function getGrid() returns the grid
        * @returns The grid.
        */

        getGrid() {
            return this.grid;
        }

        /**
        * This function returns the timestamp of the current time
        * @returns The timestamp of the message.
        */

        getTimestamp() {
            return this.timestamp;
        }

        /**
        * It creates a group element, adds the horizontal line and text elements to it, and returns
        * the group element
        * @returns The group element.
        */

        getGroup() {
            if (this.elements.hasOwnProperty('group')) return this.elements.group;
            this.elements.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this.elements.group.setAttribute('class', 'time');
            this.elements.group.appendChild(this.getHorizontal().out());
            this.elements.group.appendChild(this.getText().out());
            return this.elements.group;
        }

        /**
        * This function returns a line object that is used to draw the horizontal axis
        * @returns The horizontal line.
        */

        getHorizontal() {
            if (this.elements.hasOwnProperty('hosrizontal')) return this.elements.hosrizontal;
            this.elements.hosrizontal = new window.Basic.Line();
            return this.elements.hosrizontal;
        }

        /**
        * If the object has a property called 'text', return that property. Otherwise, create a new
        * Basic.Text object and assign it to the 'text' property
        * @returns The text element.
        */

        getText() {
            if (this.elements.hasOwnProperty('text')) return this.elements.text;
            this.elements.text = new Basic.Text();
            return this.elements.text;
        }

        /**
        * Returns the group of the current object
        * @returns The group that the user belongs to.
        */

        out() {
            return this.getGroup();
        }
    }

    class Grid {

        static start() {
            return Timeline.Line.x() + 80;
        }

        constructor(timeline) {
            this.timeline = timeline;
            this.elements = {};
            this.elements.time = [];
        }

        /**
        * The function getTimeline() returns the value of the variable timeline
        * @returns The timeline property of the object.
        */

        getTimeline() {
            return this.timeline;
        }

        /**
        * This function returns the time element
        * @returns The time element.
        */

        getTime() {
            return this.elements.time;
        }

        /**
        * If the `elements` object has a property called `group`, return that property. Otherwise,
        * create a new SVG `g` element, set its `class` attribute to `grid`, and return it
        * @returns The group element.
        */

        getGroup() {
            if (this.elements.hasOwnProperty('group')) return this.elements.group;
            this.elements.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this.elements.group.setAttribute('class', 'grid');
            return this.elements.group;
        }

        /**
        * It adds a time object to the grid
        * @param timestamp - The timestamp of the time to add.
        * @param last - The last time object that was added to the grid.
        * @returns The last time object.
        */

        addTime(timestamp, last) {
            let time = new Timeline.Grid.Time(this, timestamp);
            if (null !== last
                && last.getHorizontal().getAttribute('y1') - time.getHorizontal().getAttribute('y1')
                < (time.getText().getAttribute('font-size') + Timeline.Grid.Time.margin())) return last;

            this.getGroup().appendChild(time.out());
            this.getTime().push(time);

            return time;
        }

        /**
        * It removes all the time elements from the timeline.
        * @returns The Timeline object.
        */

        delTime() {
            while (true) {
                let t = this.getTime();
                if (t.length === 0) break;
                Timeline.removeElementDOM(t[0].out());
                this.getTime().shift();
            }
            return this;
        }

        /**
        * This function returns the group of the current user
        * @returns The group of the current user.
        */

        out() {
            return this.getGroup();
        }

        /**
         * It adds a new time to the timeline if it's not already there
         */
        

        redraw() {
            this.delTime();

            let e = this.getTimeline().getLine().calculateExtremes(),
                stop = e.getEnd(),
                time = this.constructor.midnight(e.getStart()),
                last = null;

            for (; time < stop; time += Timeline.day())
                last = this.addTime(time, last);
        }

        /**
        * It deletes the time.
        * @returns The delTime() method is being returned.
        */

        clean() {
            return this.delTime();
        }

        /**
        * It takes a timestamp and returns the timestamp of the next midnight
        * @param timestamp - The timestamp to be converted.
        * @returns The timestamp of the next midnight.
        */

        static midnight(timestamp) {
            return parseInt(Timeline.Moment(timestamp, 'X').add(1, 'days').startOf('day').format('X'));
        }
    }

    class Line extends Basic.Line {

        static padding() {
            return 36;
        }
        static unit() {
            return 100;
        }
        static x() {
            return 260;
        }

        constructor(timeline) {
            super();

            this.timeline = timeline;
            this.elements.note = [];
            this.elements.branch = [];

            this.setAttribute('x1', this.constructor.x());
            this.setAttribute('x2', this.constructor.x());
        }

        /**
        * The function getTimeline() returns the value of the variable timeline
        * @returns The timeline property of the object.
        */

        getTimeline() {
            return this.timeline;
        }

        /**
        * This function returns the height of the header and footer of a timeline
        * @param flag - A bitmask of the following values: Ox1 & 0x2
        * @returns The height of the header and footer.
        */

        getMargin(flag) {
            let i = 0;
            if ((flag & Timeline.Line.Rectangle.TypeHeader()) === Timeline.Line.Rectangle.TypeHeader() && this.hasHeader()) i += this.getHeader().getAttribute('height');
            if ((flag & Timeline.Line.Rectangle.TypeFooter()) === Timeline.Line.Rectangle.TypeFooter() && this.hasFooter()) i += this.getFooter().getAttribute('height');
            return i;
        }

        /**
        * This function returns true if the elements object has a property called header
        * @returns A boolean value.
        */

        hasHeader() {
            return this.elements.hasOwnProperty('header');
        }

        /**
        * If the timeline has a header, return it. Otherwise, create a new header, append it to the
        * timeline's group, and return it
        * @returns The header element of the timeline.
        */

        getHeader() {
            if (this.hasHeader()) return this.elements.header;
            this.elements.header = new Timeline.Line.Rectangle(this, Timeline.Line.Rectangle.TypeHeader());
            this.getGroup().appendChild(this.elements.header.out());
            return this.elements.header;
        }

        /**
        * Removes the header element from the timeline
        * @returns The Timeline object.
        */

        delHeader() {
            Timeline.removeElementDOM(this.getHeader().out());
            delete this.elements.header;
            return this;
        }

        /**
        * This function returns true if the elements object have footer
        * @returns A boolean value.
        */

        hasFooter() {
            return this.elements.hasOwnProperty('footer');
        }

        /**
        * If the line has a footer, return it. Otherwise, create a new footer, add it to the line's
        * group, and return it
        * @returns The footer element of the timeline.
        */

        getFooter() {
            if (this.hasFooter()) return this.elements.footer;
            this.elements.footer = new Timeline.Line.Rectangle(this, Timeline.Line.Rectangle.TypeFooter());
            this.getGroup().appendChild(this.elements.footer.out());
            return this.elements.footer;
        }

        /**
        * Removes the footer element from the timeline
        * @returns The object itself.
        */

        delFooter() {
            Timeline.removeElementDOM(this.getFooter().out());
            delete this.elements.footer;
            return this;
        }

        /**
        * This function returns the branch element
        * @returns The branch element.
        */

        getBranch() {
            return this.elements.branch;
        }

        /**
        * It returns the start and end times of the first and last events in the branch
        * @returns An object with two properties: min and max.
        */

        getBranchExtremes() {
            let branch = this.getBranch();
            if (false === branch.hasOwnProperty(0)) return new Timeline.Line.Extremes(0, 0);

            let min = branch[0].getExtremes().getStart(),
                max = null;
            for (let item = 0; item < branch.length; item++) {
                let end = branch[item].getExtremes().getEnd();
                if (max === null
                    || end > max) max = end;
            }

            return new Timeline.Line.Extremes(min, max);
        }

        /**
        * It creates a new branch, adds it to the timeline, and returns it
        * @param id - The id of the branch.
        * @returns The branch that was just created.
        */

        addBranch(id) {
            let branch = new Timeline.Line.Branch(this, id);
            this.getTimeline().getSvg().appendChild(branch.out());
            this.getBranch().push(branch);
            return branch;
        }

        /**
        * It removes a branch from the timeline.
        * @param branch - The branch to be deleted. If it is not specified, all branches will be
        * deleted.
        * @returns The timeline object.
        */

        delBranch(branch) {
            if (typeof branch === 'undefined') {
                while (true) {
                    let b = this.getBranch();
                    if (b.length === 0) break;
                    Timeline.removeElementDOM(b[0].out());
                    this.getBranch().shift();
                }
                return this;
            }
            let b = this.getBranch(),
                index = b.indexOf(branch);
            if (0 > index) return this;

            Timeline.removeElementDOM(b[index].out());
            this.getBranch().splice(index, 1);

            return this;
        }

        /**
        * It returns the value of the note property of the elements object
        * @returns The note element.
        */

        getNote() {
            return this.elements.note;
        }

        /**
        * Get the extremes of the note.
        * @returns An object Timeline.Line.Extremes with two properties: start and end.
        */

        getNoteExtremes() {
            let note = this.getNote();
            if (false === note.hasOwnProperty(0)) return new Timeline.Line.Extremes(0, 0);

            let min = null,
                max = null;
            for (let item = 0; item < note.length; item++) {
                let timestamp = note[item].getTimestamp();
                if (max === null || timestamp > max) max = timestamp;
                if (min === null || min > timestamp) min = timestamp;
            }

            return new Timeline.Line.Extremes(min, max);
        }

        /**
        * Find the note for the given timestamp
        * @param timestamp - The timestamp of the note you want to find.
        * @returns The note that matches the timestamp.
        */

        findNote(timestamp) {
            let note = this.getNote(),
                midnight = Timeline.Grid.midnight(timestamp);
            for (let item = 0; item < note.length; item++)
                if (midnight === note[item].getTimestamp())
                    return note[item];
            return null;
        }

        /**
        * This function adds a note to the timeline
        * @param timestamp - The timestamp of the note.
        * @returns The note object.
        */

        addNote(timestamp) {
            let note = this.findNote(timestamp);
            if (note !== null) {
                note.getInbox().setMessage(1 + note.getInbox().getMessage());
            } else {
                note = new Timeline.Line.Note(this, timestamp);
                this.getTimeline().getSvg().appendChild(note.out());
                this.getNote().push(note);
            }
            return note;
        }

        /**
        * It removes a note from the timeline.
        * @param note - The note to be deleted. If it is not specified, all notes will be deleted.
        * @returns The note that is being deleted.
        */

        delNote(note) {
            if (typeof note === 'undefined') {
                while (true) {
                    let b = this.getNote();
                    if (b.length === 0) break;
                    Timeline.removeElementDOM(b[0].out());
                    this.getNote().shift();
                }
                return this;
            }
            let b = this.getNote(),
                index = b.indexOf(note);
            if (0 > index) return this;

            Timeline.removeElementDOM(b[index].out());
            this.getNote().splice(index, 1);

            return this;
        }

        /**
        * This function first gets the extremes of the branch and the note. 
        * Then it adds the extremes to an array. Then it finds the minimum
        * and maximum of the extremes
        * @returns An object Timeline.Line.Extremes with a start and end property.
        */

        calculateExtremes() {
            let branch = this.getBranchExtremes(),
                note = this.getNoteExtremes(),
                extremes = [];

            if (branch.getStart()) extremes.push(branch.getStart());
            if (branch.getEnd()) extremes.push(branch.getEnd());
            if (note.getStart()) extremes.push(note.getStart());
            if (note.getEnd()) extremes.push(note.getEnd());

            if (0 === extremes.length) return null;

            return new Timeline.Line.Extremes(
                Math.min.apply(null, extremes),
                Math.max.apply(null, extremes)
            );
        }

        /**
        * The function converts a timestamp to a pixel value
        * @param timestamp - The timestamp to convert to a position.
        * @returns The x-coordinate of the timestamp.
        */

        conversion(timestamp) {
            let margin = this.getMargin(Timeline.Line.Rectangle.TypeHeader()),
                end = this.calculateExtremes().getEnd();
            return ((end - timestamp) * this.getTimeline().getUnit())
                + Timeline.padding()
                + margin;
        }

        /**
        * The function redraw() is called when the timeline is redrawn
        * @returns The redraw method is being returned.
        */

        redraw() {
            let extremes = this.calculateExtremes();
            if (extremes === null) return this;

            this.setAttribute('y1', this.conversion(extremes.getStart()));
            this.setAttribute('y2', this.conversion(extremes.getEnd()));

            this.getTimeline().redraw();

            if (this.hasHeader()) this.getHeader().redraw();
            if (this.hasFooter()) this.getFooter().redraw();

            for (let item = 0, elements = this.getBranch().concat(this.getNote()); item < elements.length; item++)
                elements[item].redraw();

            return this;
        }

        /**
        * It deletes the branch and the note.
        * @returns The return value of the last method called.
        */

        clean() {
            return this.delBranch().delNote();
        }
    }

    class Preloader {

        constructor(timeline) {
            this.timeline = timeline;
            this.elements = {};
        }

        /**
        * The function getTimeline() returns the value of the variable timeline
        * @returns The timeline property of the object.
        */

        getTimeline() {
            return this.timeline;
        }

        /**
        * It returns the preloader element if it exists, otherwise it creates it and returns it
        * @returns The preloader element.
        */

        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;

            this.elements.preloader = document.createElement('div');
            this.elements.preloader.className = 'timeline-preloader';

            return this.elements.preloader;
        }

        /**
        * It creates a spinner element and returns it
        * @returns The spinner element.
        */

        getSpinner() {
            if (this.elements.hasOwnProperty('spinner')) return this.elements.spinner;
            this.elements.spinner = document.createElement('div');
            this.elements.spinner.className = 'spinner';

            for (let item = 0; item < 3; item++) {
                let bounce = document.createElement('div');
                bounce.className = 'bounce-' + item;
                this.elements.spinner.appendChild(bounce);
            }

            return this.elements.spinner;
        }

        /**
        * It gets the spinner element, appends it to the preloader element, and returns the preloader
        * element
        * @returns The object itself.
        */

        showSpinner() {
            let spinner = this.getSpinner();
            this.getPreloader().appendChild(spinner);
            return this;
        }

        /**
        * Removes the spinner from the DOM
        * @returns The object itself.
        */

        hideSpinner() {
            let spinner = this.getSpinner();
            Timeline.removeElementDOM(spinner);
            return this;
        }

        /**
        * The function `show()` appends a preloader to the timeline wrapper
        * @returns The preloader element.
        */

        show() {
            let preloader = this.getPreloader();
            this.getTimeline().getWrapper().appendChild(preloader);
            return this;
        }

        /**
        * It removes the preloader from the DOM.
        * @returns The object itself.
        */

        hide() {
            let preloader = this.getPreloader();
            Timeline.removeElementDOM(preloader);
            return this;
        }

        /**
        * If the preloader's parent node is not null, then the preloader is visible.
        * @returns True if the preloader is shown otherwise returns false.
        */

        status() {
            return this.getPreloader().parentNode !== null;
        }
    }

    class Timeline {

        static day() {
            return 0x15180;
        }
        static width() {
            return 1920;
        }
        static pixel() {
            return 480;
        }
        static padding() {
            return 20;
        }
        static handle() {
            return 'data-handle-event';
        }

        constructor() {
            this.debug = true;
            this.sampling = 31 * this.constructor.day();
            this.elements = {};

            this.option = {};
            this.option.setting = [];
            this.option.structure = [];

            if (typeof Timeline.Plugin.Setting === 'function')
                this.elements.setting = new Timeline.Plugin.Setting(this);
        }

        /**
        * The function returns the number of pixels per unit of measurement
        * @returns The pixel size divided by the sampling rate.
        */

        getUnit() {
            return this.constructor.pixel() / this.getSampling();
        }

        /**
        * It returns the value of the debug variable.
        * @returns The debug variable is being returned.
        */

        getDebug() {
            return this.debug;
        }

        /**
        * If the preloader element exists, return it. Otherwise, create it and return it.
        * @returns The preloader object.
        */

        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
            this.elements.preloader = new Timeline.Preloader(this);
            return this.elements.preloader;
        }

        /**
        * If the grid element exists, return it. Otherwise, create a new grid element and return it
        * @returns The grid object.
        */

        getGrid() {
            if (this.elements.hasOwnProperty('grid')) return this.elements.grid;
            this.elements.grid = new Timeline.Grid(this);
            return this.elements.grid;
        }

        /**
        * It creates an SVG element, sets its attributes, and appends the grid and line elements to it
        * @returns The SVG element.
        */

        getSvg() {
            if (this.elements.hasOwnProperty('svg')) return this.elements.svg;
            this.elements.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.elements.svg.setAttribute('version', '1.1');
            this.elements.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            this.elements.svg.setAttribute('width', this.constructor.width());
            this.elements.svg.appendChild(this.getGrid().out());
            this.elements.svg.appendChild(this.getLine().out());
            return this.elements.svg;
        }

        /**
        * If the object has a property called 'line', return that property. Otherwise, create a new
        * Timeline.Line object and assign it to the 'line' property
        * @returns The line element of the timeline.
        */

        getLine() {
            if (this.elements.hasOwnProperty('line')) return this.elements.line;
            this.elements.line = new Timeline.Line(this);
            return this.elements.line;
        }

        /**
        * This function returns the sampling value
        * @returns The sampling variable is being returned.
        */

        getSampling() {
            return this.sampling;
        }

        /**
        * This function sets the sampling rate of the data
        * @param seconds - The number of seconds between each sample.
        * @returns The object itself.
        */

        setSampling(seconds) {
            this.sampling = seconds;
            return this;
        }

        /**
        * It sets the height of the SVG element
        * @param size - The height of the SVG element.
        * @returns The object itself.
        */

        setHieght(size) {
            this.getSvg().setAttribute('height', size);
            this.getSvg().setAttribute('viewBox', '0 0'
                + String.fromCharCode(32)
                + this.constructor.width()
                + String.fromCharCode(32)
                + size);
            return this;
        }

        /**
        * It creates a div element, adds a class to it, and then adds the SVG element to it
        * @returns The wrapper element.
        */

        getWrapper() {
            if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
            let svg = this.getSvg();
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.className = 'timeline pure-g';
            this.elements.wrapper.appendChild(svg);
            return this.elements.wrapper;
        }

        /**
        * It returns the setting element
        * @returns The setting element.
        */

        getSetting() {
            return this.elements.setting;
        }

        /**
        * It returns the structure of the option.
        * @returns The structure of the option.
        */

        getOptionStructure() {
            return this.option.structure;
        }

        /**
        * This function sets the option structure to the given human
        * @param human - The human-readable structure of the timeline.
        * @returns The Timeline.Plugin.Setting object.
        */

        setOptionStructure(human) {
            this.option.structure = human;

            let setting = this.getSetting();
            if (setting === null
                || typeof Timeline.Plugin.Setting !== 'function'
                || false === setting instanceof Timeline.Plugin.Setting) return this;

            setting.out();

            return this;
        }

        /**
        * It returns the setting property of the option object.
        * @returns The setting property of the option object.
        */

        getOptionSetting() {
            return this.option.setting;
        }

        /**
        * This function sets the option setting of the line
        * @param setting - The setting object for the line.
        * @returns The object itself.
        */

        setOptionSetting(setting) {
            this.option.setting = setting;
            this.getLine().redraw();
            return this;
        }

        /**
        * This function returns the wrapper.
        * @returns The wrapper is being returned.
        */

        out() {
            return this.getWrapper();
        }

        /**
        * It takes an event, finds the closest attribute that matches the event type, and then
        * executes the function that matches the attribute
        * @param event - The event object.
        * @returns the closest attribute to the handle.
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
        * This function redraws the timeline by setting the height of the timeline to the height of
        * the line plus the margin of the line plus the padding of the timeline
        * @returns The object itself.
        */

        redraw() {
            let y = this.getLine().getAttribute('y1'),
                margin = this.getLine().getMargin(Timeline.Line.Rectangle.TypeFooter());

            this.setHieght(y
                + margin
                + this.constructor.padding()
                + this.constructor.padding());

            this.getGrid().redraw();

            return this;
        }

        /**
        * Clean the line and grid.
        * @returns The object itself.
        */

        clean() {
            this.getLine().clean();
            this.getGrid().clean();
            return this;
        }

        /**
        * It returns the value of the first attribute found on the target element or any of its
        * parents, or the parent element itself if the html parameter is set to true
        * @param target - The element that was clicked on.
        * @param attribute - The attribute to search for.
        * @param html - If true, the function will return the element that contains the attribute. If
        * false, it will return the attribute value.
        * @returns The closest attribute to the target element.
        */

        static closestAttribute(target, attribute, html) {
            if (typeof attribute === 'undefined'
                || !attribute.length) return null;

            let result = null, element = target;

            do {
                let tagname = element.tagName.toLowerCase();
                if (tagname === 'body') return null;

                result = element.getAttribute(attribute);
                if (result !== null) {
                    result = result.toString();
                    if (result.length) break;
                }

                element = element.parentNode;
            } while (element !== null
                || typeof element === 'undefined');

            if (typeof html === 'undefined'
                || html !== true) return result;

            return element;
        }

        /**
        * Remove an element from the DOM.
        * @param element - The element to remove from the DOM.
        * @returns A boolean value.
        */

        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }

        /**
        * It takes a string, and returns an icon element
        * @param name - The name of the icon.
        * @returns An icon element with the class name of the name parameter.
        */

        static getIcon(name) {
            if (name === null
                || typeof name !== 'string') name = 'material-icons lens_blur';
            let icon = document.createElement('i'), clean = name.replace(/(material\-icons(\S(\w+))?(\s+))?/, '');

            icon.className = name;
            if (clean === name) return icon;
            let text = document.createTextNode(clean);
            icon.appendChild(text);
            return icon;
        }
    }

    window.Timeline = Timeline;
    window.Timeline.Preloader = Preloader;
    window.Timeline.Grid = Grid;
    window.Timeline.Grid.Time = Time;
    window.Timeline.Line = Line;
    window.Timeline.Line.Extremes = Extremes;
    window.Timeline.Line.Rectangle = Rectangle;
    window.Timeline.Line.Rectangle.Text = Text;
    window.Timeline.Line.Branch = Branch;
    window.Timeline.Line.Branch.ID = ID;
    window.Timeline.Line.Branch.Circle = Circle;
    window.Timeline.Line.Note = Note;
    window.Timeline.Line.Note.Inbox = Inbox;

    try {
        if (typeof window.moment !== 'function')
            throw "This library require locale. Please visit https://momentjs.com/";
        window.Timeline.Moment = window.moment;
    }
    catch (e) {
        console.log(e);
    }

})(window);

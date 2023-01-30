# Documentation widget-timeline

Widget Javascript Timeline is a library used to create a timeline to display various event and notes on your web page.

## Structure

library:
- [window.Basic.Rectangle](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowbasicrectangle-usable-methods)
- [window.Basic.Line](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowbasicline-usable-methods)
- [window.Basic.Text](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowbasictext-usable-methods)
- [window.Timeline.Line.Note.Inbox]](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelinenoteinbox-usable-methods)
- [window.Timeline.Line.Note](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelinenote-usable-methods)
- [window.Timeline.Line.Branch.Circle](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelinebranchcircle-usable-methods)
- [window.Timeline.Line.Branch.ID](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelinebranchid-usable-methods)
- [window.Timeline.Line.Branch](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelinebranch-usable-methods)
- [window.Timeline.Line.Rectangle.Text](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelinerectangletext-usable-methods)
- [window.Timeline.Line.Rectangle](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelinerectangle-usable-methods)
- [window.Timeline.Line.Extremes](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinelineextremes-usable-methods)
- [window.Timeline.Line](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelineline-usable-methods)
- [window.Timeline.Grid.Time](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinegridtime-usable-methods)
- [window.Timeline.Grid](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinegrid-usable-methods)
- [window.Timeline.Preloader](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelinepreloader-usable-methods)
- [window.Timeline](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimeline-usable-methods)

<br>

#### ***Class window.Basic.Rectangle usable methods***

##### `setAttribute(key, value)`

This function sets the value of the attribute of the element with the given key to the given value

 * **Parameters:**
   * `key` — - The name of the attribute.
   * `value` — - The value to set the attribute to.
 * **Returns:** The element itself.

##### `getAttribute(key)`

If the key exists in the attributes object, return the value of that key. Otherwise, return null

 * **Parameters:** `key` — - The name of the attribute to get.
 * **Returns:** The value of the key in the attributes object.

##### `getGroup()`

If the `elements` object has a property called `group`, return that property. Otherwise, create a new `g` element, append the `path` element to it, and return the `g` element

 * **Returns:** The group element.

##### `get()`

"If the elements object has a property named rect, return that property, otherwise create a new rect element and return it."

The elements object is a property of the class, and it's used to store references to the SVG elements that are created

 * **Returns:** The rect element.

##### `out()`

The function `out()` returns the value of the function `getGroup()`

 * **Returns:** The group that the user is in.
 
#### ***Class window.Basic.Line usable methods***

##### `getGroup()`

If the `elements` object has a property called `group`, return that property. Otherwise, create a new `g` element, set its `class` attribute to `line`, and append a `line` element to it

 * **Returns:** The group element.

##### `getLine()`

If the `elements` object has a property called `line`, return that property. Otherwise, create a new `line` element and return it

 * **Returns:** The line element.

##### `setAttribute(key, value)`

This function sets the value to the attribute of the key

 * **Parameters:**
   * `key` — - The name of the attribute.
   * `value` — - The value to set the attribute to.
 * **Returns:** The line object.

##### `getAttribute(key)`

If the key exists in the attributes object, return the value of that key. Otherwise, return null

 * **Parameters:** `key` — - The name of the attribute to get.
 * **Returns:** The value of the key in the attributes object.

##### `out()`

The function `out()` returns the value of the function `getGroup()`

 * **Returns:** The group of the current user.
 
#### ***Class window.Basic.Text usable methods***

##### `setAttribute(key, value)`

This function sets the value of the attribute of the element with the given key to the given value

 * **Parameters:**
   * `key` — - The name of the attribute.
   * `value` — - The value to set the attribute to.
 * **Returns:** The element itself.

##### `getAttribute(key)`

If the key exists in the attributes object, return the value of the key, otherwise return null

 * **Parameters:** `key` — - The name of the attribute to get.
 * **Returns:** The value of the key in the attributes object.

##### `getTspan()`

It returns the tspan element.

 * **Returns:** The elements.tspan property.

##### `addTspan(text)`

It creates a tspan element and appends it to the text element.

 * **Parameters:** `text` — - The text to be displayed.
 * **Returns:** The tspan element.

##### `reset()`

It resets the text.

 * **Returns:** The text object.

##### `get()`

If the `elements` object has a property called `text`, return that property. Otherwise, create a new `text` element and return it

 * **Returns:** The text element.

##### `set(label)`

The function takes a string and splits it into an array of strings. If the array is empty, the function returns. Otherwise, it loops through the array and appends a tspan element to the text element for each item in the array

 * **Parameters:** `label` — - The text to be displayed.
 * **Returns:** The label is being returned.

##### `out()`

This function returns the value of the get() function.

 * **Returns:** The value of the variable.
 
#### ***Class window.Timeline.Line.Branch.Circle usable methods***

##### `getBranch()`

This function returns the branch of the bank

 * **Returns:** The branch of the bank.

##### `getName()`

The function getName() returns the value of the name property

 * **Returns:** The name of the person.

##### `getStroke()`

It returns the stroke of the style.

 * **Returns:** The stroke color of the shape.

##### `setStroke(color)`

It sets the stroke color of the SVG element.

 * **Parameters:** `color` — - The color of the stroke.
 * **Returns:** The object itself.

##### `getStrokeWidth()`

It returns the stroke width of the current style.

 * **Returns:** The strokeWidth property of the style object.

##### `setStrokeWidth(size)`

Sets the stroke width of the SVG element.

 * **Parameters:** `size` — - The size of the stroke.
 * **Returns:** The object itself.

##### `getFill()`

The function getFill() returns the value of the fill property of the style object

 * **Returns:** The fill property of the style object.

##### `setFill(color)`

It sets the fill color of the SVG element.

 * **Parameters:** `color` — - The color to set the fill to.
 * **Returns:** The object itself.

##### `getRay()`

`getRay()` returns the ray value of style property

 * **Returns:** The ray of the style.

##### `setRay(size)`

It sets the ray of the circle.

 * **Parameters:** `size` — - The size of the ray.
 * **Returns:** The object itself.

##### `getCx()`

`getCx()` returns the `cx` property of the `position` object

 * **Returns:** The cx property of the position object.

##### `setCx(cx)`

Set the cx attribute of the circle to the value of the cx parameter.

 * **Parameters:** `cx` — - The x-coordinate of the center of the circle
 * **Returns:** The object itself.

##### `getCy()`

`getCy()` returns the `cy` value of the `position` object

 * **Returns:** The value of the cy property of the position object.

##### `setCy(cy)`

It sets the cy attribute of the SVG element to the value of the cy parameter.

 * **Parameters:** `cy` — - The y-axis coordinate of the center of the circle.
 * **Returns:** The object itself.

##### `get()`

If the elements object has a property called circle, return that property, otherwise create a new circle element and return it.

 * **Returns:** The circle element.

##### `set(cx, cy, r, stroke, width, fill)`

This function sets the cx, cy, r, stroke, width, and fill properties of the circle

 * **Parameters:**
   * `cx` — - The x coordinate of the center of the circle.
   * `cy` — - The y-coordinate of the center of the circle.
   * `r` — - The radius of the circle.
   * `stroke` — - The color of the circle's outline.
   * `width` — - The width of the circle's stroke.
   * `fill` — - The fill color of the circle.
 * **Returns:** The object itself.

##### `out()`

This function returns the value of the get() function.

 * **Returns:** The value of the variable.

##### `destroy()`

It deletes the circle from the branch.

 * **Returns:** The branch is being returned.

#### ***Class window.Timeline.Line.Branch.ID usable methods***

##### `getBranch()`

This function returns the branch of the bank

 * **Returns:** The branch of the bank.

##### `redraw()`

The function redraw() is called when the branch is resized. It sets the position of the text to the center of the branch

#### ***Class window.Timeline.Line.Branch usable methods***

##### `getLine()`

It returns the line number of the error.

 * **Returns:** The line property of the object.

##### `getID()`

The function getID() returns the value of the id property of the object that called it

 * **Returns:** The id of the object.

##### `getEventOnClick()`

The function returns the value of the click property of the event object

 * **Returns:** The event.click property of the object.

##### `setEventOnClick(func)`

It sets the event on click to the function that is passed in.

 * **Parameters:** `func` — - The function to be called when the button is clicked.
 * **Returns:** The object itself.

##### `setExtremes(extremes)`

It sets the extrenes attribute of the Branch.

 * **Parameters:** `extremes` — - A calss Extremes containes the start and end values of the time range.
 * **Returns:** The object itself.

##### `getExtremes()`

This function returns the extremes of the property

 * **Returns:** The extremes of the property.

##### `getText()`

The function returns the text element of the branch

 * **Returns:** The text element of the branch.

##### `setPeriod(start, end)`

It sets the start and end dates of the timeline, sorts the branches, and returns the timeline

 * **Parameters:**
   * `start` — - The start date of the period.
   * `end` — - The end date of the period.
 * **Returns:** The current instance of the class.

##### `destroy()`

It deletes the branch.

 * **Returns:** The return value of the delBranch method of the line object.

##### `hide()`

It removes the element from the DOM

##### `show()`

Adds the Branch element to the SVG element of the timeline

##### `redraw()`

It draws the rectangle

##### `click()`

It calls the function that is returned by the getEventOnClick() method.

##### `handleEvent(event)`

It takes an event, finds the closest attribute that matches the event type, and then executes the function that matches the attribute

 * **Parameters:** `event` — - The event object.
 * **Returns:** the closest attribute to the event target.

#### ***Class  window.Timeline.Line.Rectangle.Text usable methods***

##### `getRectangle()`

The function getRectangle() returns the rectangle

 * **Returns:** The rectangle object.

##### `set(label)`

The function sets the label of the rectangle, then sets the height of the rectangle to the number of lines in the label times the font size plus the margin times two

 * **Parameters:** `label` — - The label to be displayed.
 * **Returns:** The instance of the class.

##### `redraw()`

The function redraw() sets the x and y attributes of the text element to the x and y attributes of the rectangle

##### `getLine()`

This function returns the line number of the current line

 * **Returns:** The line property of the object.

##### `getType()`

The function getType() returns the value of the type property of the object that called it

 * **Returns:** The type of the object.

##### `getText()`

If the object has a property called 'text', return that property. Otherwise, create a new object called 'text' and return that

 * **Returns:** The text element of the rectangle.

##### `calculate()`

The function calculates the y-coordinate of the rectangle

 * **Returns:** The y-coordinate of the rectangle.

##### `redraw()`

The function redraws the point by setting its x and y attributes to the x and y coordinates of the point

 * **Returns:** The object itself.
 
#### ***Class  window.Timeline.Line.Note.Inbox usable methods***

##### `getNote()`

The function getNote() returns the value of the variable note

 * **Returns:** The note property of the object.

##### `getMessage()`

The function getMessage() returns the value of the property message.

 * **Returns:** The message property of the property object.

##### `setMessage(number)`

This function sets the message property of the object to the number passed in, then sets the value of the object to the string version of the number, and finally returns the object

 * **Parameters:** `number` — - The number to be displayed.
 * **Returns:** The object itself.

##### `redraw()`

The function redraw() is called when the note is resized. It sets the position of the text to the center of the note

#### ***Class  window.Timeline.Line.Note usable methods***

##### `getLine()`

This function returns the line number of the current line

 * **Returns:** The line property of the object.

##### `getTimestamp()`

This function returns the timestamp of the current time

 * **Returns:** The timestamp of the message.

##### `getEventOnClick()`

The function returns the value of the click property of the event object

 * **Returns:** The event.click property of the object.

##### `setEventOnClick(func)`

It sets the event on click to the function that is passed in.

 * **Parameters:** `func` — - The function to be called when the button is clicked.
 * **Returns:** The object itself.

##### `getInbox()`

It returns a new instance of the `Timeline.Line.Note.Inbox` class, which is a subclass of the `Timeline.Line.Note` class

 * **Returns:** The Inbox element.

##### `destroy()`

It deletes the note from the line.

 * **Returns:** The return value of the delNote method of the line object.

##### `redraw()`

It draws the note with new coordinate

##### `click()`

If the value returned from the function getEventOnClick is a function, then call it

##### `handleEvent(event)`

It takes an event, finds the closest attribute that matches the event type, and then executes the function that matches the attribute

 * **Parameters:** `event` — - The event object.
 * **Returns:** The function handleEvent is being returned.
 
#### ***Class  window.Timeline.Line.Extremes usable methods***

##### `getStart()`

This function returns the start value of the y axis

 * **Returns:** The start of the range.

##### `getEnd()`

This function returns the end of the y axis

 * **Returns:** The end of the range.
 
#### ***Class  window.Timeline.Grid.Time usable methods***

##### `getGrid()`

The function getGrid() returns the grid

 * **Returns:** The grid.

##### `getTimestamp()`

This function returns the timestamp of the current time

 * **Returns:** The timestamp of the message.

##### `getGroup()`

It creates a group element, adds the horizontal line and text elements to it, and returns the group element

 * **Returns:** The group element.

##### `getHorizontal()`

This function returns a line object that is used to draw the horizontal axis

 * **Returns:** The horizontal line.

##### `getText()`

If the object has a property called 'text', return that property. Otherwise, create a new Basic.Text object and assign it to the 'text' property

 * **Returns:** The text element.

##### `out()`

Returns the group of the current object

 * **Returns:** The group that the user belongs to.
 
#### ***Class  window.Timeline.Grid usable methods***

##### `getTimeline()`

The function getTimeline() returns the value of the variable timeline

 * **Returns:** The timeline property of the object.

##### `getTime()`

This function returns the time element

 * **Returns:** The time element.

##### `getGroup()`

If the `elements` object has a property called `group`, return that property. Otherwise, create a new SVG `g` element, set its `class` attribute to `grid`, and return it

 * **Returns:** The group element.

##### `addTime(timestamp, last)`

It adds a time object to the grid

 * **Parameters:**
   * `timestamp` — - The timestamp of the time to add.
   * `last` — - The last time object that was added to the grid.
 * **Returns:** The last time object.

##### `delTime()`

It removes all the time elements from the timeline.

 * **Returns:** The Timeline object.

##### `out()`

This function returns the group of the current user

 * **Returns:** The group of the current user.

##### `redraw()`

It adds a new time to the timeline if it's not already there

##### `clean()`

It deletes the time.

#### ***Class  window.Timeline.Line usable methods***

 * **Returns:** The delTime() method is being returned.

##### `getTimeline()`

The function getTimeline() returns the value of the variable timeline

 * **Returns:** The timeline property of the object.

##### `getMargin(flag)`

This function returns the height of the header and footer of a timeline

 * **Parameters:** `flag` — - A bitmask of the following values: Ox1 & 0x2
 * **Returns:** The height of the header and footer.

##### `hasHeader()`

This function returns true if the elements object has a property called header

 * **Returns:** A boolean value.

##### `getHeader()`

If the timeline has a header, return it. Otherwise, create a new header, append it to the timeline's group, and return it

 * **Returns:** The header element of the timeline.

##### `delHeader()`

Removes the header element from the timeline

 * **Returns:** The Timeline object.

##### `hasFooter()`

This function returns true if the elements object have footer

 * **Returns:** A boolean value.

##### `getFooter()`

If the line has a footer, return it. Otherwise, create a new footer, add it to the line's group, and return it

 * **Returns:** The footer element of the timeline.

##### `delFooter()`

Removes the footer element from the timeline

 * **Returns:** The object itself.

##### `getBranch()`

This function returns the branch element

 * **Returns:** The branch element.

##### `getBranchExtremes()`

It returns the start and end times of the first and last events in the branch

 * **Returns:** An object with two properties: min and max.

##### `addBranch(id)`

It creates a new branch, adds it to the timeline, and returns it

 * **Parameters:** `id` — - The id of the branch.
 * **Returns:** The branch that was just created.

##### `delBranch(branch)`

It removes a branch from the timeline.

 * **Parameters:** `branch` — - The branch to be deleted. If it is not specified, all branches will be

     deleted.
 * **Returns:** The timeline object.

##### `getNote()`

It returns the value of the note property of the elements object

 * **Returns:** The note element.

##### `getNoteExtremes()`

Get the extremes of the note.

 * **Returns:** An object Timeline.Line.Extremes with two properties: start and end.

##### `findNote(timestamp)`

Find the note for the given timestamp

 * **Parameters:** `timestamp` — - The timestamp of the note you want to find.
 * **Returns:** The note that matches the timestamp.

##### `addNote(timestamp)`

This function adds a note to the timeline

 * **Parameters:** `timestamp` — - The timestamp of the note.
 * **Returns:** The note object.

##### `delNote(note)`

It removes a note from the timeline.

 * **Parameters:** `note` — - The note to be deleted. If it is not specified, all notes will be deleted.
 * **Returns:** The note that is being deleted.

##### `calculateExtremes()`

This function first gets the extremes of the branch and the note. Then it adds the extremes to an array. Then it finds the minimum and maximum of the extremes

 * **Returns:** An object Timeline.Line.Extremes with a start and end property.

##### `conversion(timestamp)`

The function converts a timestamp to a pixel value

 * **Parameters:** `timestamp` — - The timestamp to convert to a position.
 * **Returns:** The x-coordinate of the timestamp.

##### `redraw()`

The function redraw() is called when the timeline is redrawn

 * **Returns:** The redraw method is being returned.

##### `clean()`

It deletes the branch and the note.

 * **Returns:** The return value of the last method called.

#### ***Class  window.Timeline.Preloader usable methods***

##### `getTimeline()`

The function getTimeline() returns the value of the variable timeline

 * **Returns:** The timeline property of the object.

##### `getPreloader()`

It returns the preloader element if it exists, otherwise it creates it and returns it

 * **Returns:** The preloader element.

##### `getSpinner()`

It creates a spinner element and returns it

 * **Returns:** The spinner element.

##### `showSpinner()`

It gets the spinner element, appends it to the preloader element, and returns the preloader element

 * **Returns:** The object itself.

##### `hideSpinner()`

Removes the spinner from the DOM

 * **Returns:** The object itself.

##### `show()`

The function `show()` appends a preloader to the timeline wrapper

 * **Returns:** The preloader element.

##### `hide()`

It removes the preloader from the DOM.

 * **Returns:** The object itself.

##### `status()`

If the preloader's parent node is not null, then the preloader is visible.

 * **Returns:** True if the preloader is shown otherwise returns false.
 
#### ***Class  window.Timeline usable methods***

##### `getUnit()`

The function returns the number of pixels per unit of measurement

 * **Returns:** The pixel size divided by the sampling rate.

##### `getDebug()`

It returns the value of the debug variable.

 * **Returns:** The debug variable is being returned.

##### `getPreloader()`

If the preloader element exists, return it. Otherwise, create it and return it.

 * **Returns:** The preloader object.

##### `getGrid()`

If the grid element exists, return it. Otherwise, create a new grid element and return it

 * **Returns:** The grid object.

##### `getSvg()`

It creates an SVG element, sets its attributes, and appends the grid and line elements to it

 * **Returns:** The SVG element.

##### `getLine()`

If the object has a property called 'line', return that property. Otherwise, create a new Timeline.Line object and assign it to the 'line' property

 * **Returns:** The line element of the timeline.

##### `getSampling()`

This function returns the sampling value

 * **Returns:** The sampling variable is being returned.

##### `setSampling(seconds)`

This function sets the sampling rate of the data

 * **Parameters:** `seconds` — - The number of seconds between each sample.
 * **Returns:** The object itself.

##### `setHieght(size)`

It sets the height of the SVG element

 * **Parameters:** `size` — - The height of the SVG element.
 * **Returns:** The object itself.

##### `getWrapper()`

It creates a div element, adds a class to it, and then adds the SVG element to it

 * **Returns:** The wrapper element.

##### `getSetting()`

It returns the setting element

 * **Returns:** The setting element.

##### `getOptionStructure()`

It returns the structure of the option.

 * **Returns:** The structure of the option.

##### `setOptionStructure(human)`

This function sets the option structure to the given human

 * **Parameters:** `human` — - The human-readable structure of the timeline.
 * **Returns:** The Timeline.Plugin.Setting object.

##### `getOptionSetting()`

It returns the setting property of the option object.

 * **Returns:** The setting property of the option object.

##### `setOptionSetting(setting)`

This function sets the option setting of the line

 * **Parameters:** `setting` — - The setting object for the line.
 * **Returns:** The object itself.

##### `out()`

This function returns the wrapper.

 * **Returns:** The wrapper is being returned.

##### `handleEvent(event)`

It takes an event, finds the closest attribute that matches the event type, and then executes the function that matches the attribute

 * **Parameters:** `event` — - The event object.
 * **Returns:** the closest attribute to the handle.

##### `redraw()`

This function redraws the timeline by setting the height of the timeline to the height of the line plus the margin of the line plus the padding of the timeline

 * **Returns:** The object itself.

##### `clean()`

Clean the line and grid.

 * **Returns:** The object itself.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript

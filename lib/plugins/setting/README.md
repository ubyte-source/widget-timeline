# Documentation widget-timeline

Widget Javascript Timeline is a library used to create a timeline to display various event and notes on your web page.

## Usage

Here an example of a Setting Plugin:

```
timeline.setOptionSetting(
  [
    {
      "name": "field_1",
      "visibility": true
    },
    {
      "name": "field_2",
      "visibility": true
    },
    {
      "name": "field_3",
      "visibility": true
    }
  ]
);

```

Here an example of how to display the setting of a timeline:

```
let timeline_setting = timeline.getSetting();
document.appendChild(timeline_setting.out());

```
## Structure

library:
- [window.Timeline.Plugin.Setting](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins/setting#class-windowtimelinepluginsetting-usable-methods)
- [window.Timeline.Plugin.Setting.Search](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins/setting#class-windowtimelinepluginsettingsearch-usable-methods)
- [window.Timeline.Plugin.Setting.Search.NotFound](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins/setting#class-windowtimelinepluginsettingsearchnotfound-usable-methods)
- [window.Timeline.Plugin.Setting.Notice](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins/setting#class-windowtimelinepluginsettingnotice-usable-methods)
- [window.Timeline.Plugin.Setting.Ul](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins/setting#class-windowtimelinepluginsettingul-usable-methods)
- [window.Timeline.Plugin.Setting.Ul.Li](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins/setting#class-windowtimelinepluginsettingulli-usable-methods)
- [window.Timeline.Plugin.Setting.Ul.Li.CheckboxVisibility](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins/setting#class-windowtimelinepluginsettingullicheckboxvisinbility-usable-methods)

<br>

#### ***Class window.Timeline.Plugin.Setting.Search.NotFound usable methods***

##### `getSearch()`

The function getSearch() returns the value of the variable search

 * **Returns:** The search property of the object.

##### `getContent()`

It returns the content of the element.

 * **Returns:** The content element of the object.

##### `getText()`

If the elements object has a span property, return it. Otherwise, create a span element and return it.

 * **Returns:** The span element.

##### `setText(text)`

It creates a text node and appends it to the span element.

 * **Parameters:** `text`- The text to be displayed.
 * **Returns:** The object itself.

##### `out()`

This function returns the content of the current node.

 * **Returns:** The content of the file.
 
#### ***Class window.Timeline.Plugin.Setting.Search usable methods***

##### `getSetting()`

This function returns the value of the setting property

 * **Returns:** The setting property of the object.

##### `getNotFound()`

It returns the element with the id of notfound.

 * **Returns:** The notfound element.

##### `getField()`

It creates a div element with the class name of field and appends the input element to it.

 * **Returns:** The field element.

##### `getInput()`

It creates an input element, sets its type to text, sets its placeholder to the value of the static placeholder function, and adds an event listener to it

 * **Returns:** The input element.

##### `getContent()`

It creates a search bar.

 * **Returns:** The content of the search bar.

##### `out()`

This function returns the content of the current node.

 * **Returns:** The content of the file.

##### `handleEvent(event)`

It takes an event, finds the closest attribute that matches the handle, splits the attribute into an array, loops through the array, splits each item into an array, checks if the first item is the event type or empty, checks if the second item is a function, and if so, calls the function

 * **Parameters:** `event`- The event object.
 * **Returns:** The function handleEvent() is being returned.

##### `filter()`

It removes the "not found" element from the DOM, then it removes the "hide" class from all the list items, then it adds the "hide" class to all the list items that don't contain the search term, and finally it adds the "not found" element back to the DOM if all the list items have the "hide" class

#### ***Class window.Timeline.Plugin.Setting.Li.Visibility usable methods***

##### `getLI()`

This function returns the li element

 * **Returns:** The li element.

##### `getIcon()`

If the element exists, return it. Otherwise, create it, set its class name, set its click handler, and return it

 * **Returns:** The icon element.

##### `setIcon(material)`

It takes a string, creates a text node from it, and then appends that text node to the icon element

 * **Parameters:** `material`- The material icon to use.
 * **Returns:** The object itself.

##### `getInput()`

"If the input element exists, return it. Otherwise, create it, set its type to checkbox, set its change attribute to the change handler, and add a change event listener to it. Then return it."

The change handler is a function that is called when the checkbox is checked or unchecked. It's defined in the next function

 * **Returns:** The input element.

##### `setInput(checked)`

It sets the checked property of the input element to the value of the checked parameter, and then dispatches a change event on the input element

 * **Parameters:** `checked`- Boolean
 * **Returns:** The instance of the class.

##### `handleEvent(event)`

It takes an event, finds the closest attribute that matches the handle, splits the attribute into an array, loops through the array, splits each item into an array, checks if the first item is the event type or empty, checks if the second item is a function, and if so, calls the function

 * **Parameters:** `event`- The event object.
 * **Returns:** The function handleEvent is being returned.

##### `click()`

`click()` is called when the user clicks on the checkbox

##### `change()`

"If the checkbox is checked, set the icon to the check icon, otherwise set it to the blank icon."

The first line of the function gets the input element. The second line gets the icons object. The third line sets the icon variable to the check icon if the checkbox is checked, otherwise it sets it to the blank icon. The fourth line sets the icon to the icon variable

#### ***Class window.Timeline.Plugin.Setting.li usable methods***

##### `getUL()`

This function returns the ul element

 * **Returns:** The ul property of the object.

##### `getVisibility()`

It returns the visibility of the elements.

 * **Returns:** The visibility property of the elements object.

##### `getDrag()`

It returns the drag handle element for the option

 * **Returns:** The drag element.

##### `getOption()`

It returns the option element, which is a div containing the visibility icon

 * **Returns:** The option element.

##### `getLabel()`

If the `elements` object has a `label` property, return it. Otherwise, create a new `label` element, assign it to the `elements` object's `label` property, and return it

 * **Returns:** The label element.

##### `setLabel(text)`

It creates a text node, gets the label element, clears the label element, and appends the text node to the label element

 * **Parameters:** `text`- The text to be displayed in the label.
 * **Returns:** The label element.

##### `getLI()`

It creates a new `li` element, adds the `drag`, `label`, and `options` elements to it, and returns the `li` element

 * **Returns:** The li element.

##### `out()`

This function returns the HTML for the list item.

 * **Returns:** The function getLI() is being returned.
 
#### ***Class window.Timeline.Plugin.Setting.Ul usable methods***

##### `getSetting()`

This function returns the value of the setting property

 * **Returns:** The setting property of the object.

##### `getSortable()`

This function returns the value of the sortable property

 * **Returns:** The sortable property of the object.

##### `getContent()`

If the `content` element exists, return it. Otherwise, create it, add the `ul` element to it, and return it

 * **Returns:** The content of the list.

##### `getUL()`

If the elements object has a property called ul, return it. Otherwise, create a new ul element, assign it to the elements object, and return it.

 * **Returns:** The ul element.

##### `getLI()`

This function returns the li element.

 * **Returns:** The li element.

##### `findLI(name)`

Finds a list item by name

 * **Parameters:** `name`- The name of the timeline you want to find.
 * **Returns:** The li element that has the data attribute of the name passed in.

##### `addLI(structure)`

It creates a new `li` element, adds it to the `li` array, and appends it to the `ul` element

 * **Parameters:** `structure`- The structure of the LI.
 * **Returns:** The object itself.

##### `reset()`

It removes all the elements from the timeline

 * **Returns:** The object itself.

##### `update()`

It takes the structure and setting from the timeline, merges them, and then adds the merged data to the list

 * **Returns:** The object that the method is being called on.

##### `out()`

"The out() function returns the content of the current page."

The out() function is the only function that is required for a page to work

 * **Returns:** The content of the file.
 
#### ***Class window.Timeline.Plugin.Setting.Notice usable methods***

##### `getSetting()`

This function returns the value of the setting property

 * **Returns:** The setting property of the object.

##### `getContent()`

It creates a div element, adds a class to it, adds the message and reload elements to it, and returns it

 * **Returns:** The content of the error message.

##### `getMessage()`

It returns the message element, creating it if it doesn't exist

 * **Returns:** The message element.

##### `setMessage(message)`

It takes a message, creates a text node, clears the message element, and appends the text node to the message element

 * **Parameters:** `message`- The message to be displayed.
 * **Returns:** The object itself.

##### `getReload()`

It returns a link element that, when clicked, will reload the timeline

 * **Returns:** The reload element.

##### `show()`

It inserts the content of the `<li>` element into the `<ul>` element

 * **Returns:** The object itself.

##### `hide()`

It removes the element from the DOM

 * **Returns:** The object itself.
 
#### ***Class window.Timeline.Plugin.Setting usable methods***

##### `getTimeline()`

This function returns the timeline

 * **Returns:** The timeline property of the object.

##### `getUL()`

Return the ul element.

 * **Returns:** The ul element.

##### `getSearch()`

Return the search element.

 * **Returns:** The search input element.

##### `getNotice()`

Return the notice element.

 * **Returns:** The notice element.

##### `getXHR()`

"If the XHR object is not already created, create it and return it."

The first thing the function does is check to see if the XHR object has already been created. If it has, it returns the object. If it hasn't, it creates the object and returns it

 * **Returns:** The constructor function for the XHR object.

##### `setRequestUrl(url)`

Sets the URL of the request

 * **Parameters:** `url`- The URL to send the request to.
 * **Returns:** The object itself.

##### `getRequestUrl()`

It returns the URL of the request

 * **Returns:** The url of the request.

##### `setHardcode(key, value)`

Sets a hardcoded value for the specified key.

 * **Parameters:**
  * `key`- The key to set the value to.
  * `value`- The value to set the key to.
 * **Returns:** The object itself.

##### `getHardcode()`

It returns the hardcode object

 * **Returns:** The hardcode property of the xhr object.

##### `getContent()`

It creates a div, adds the search and list elements to it, and returns the div

 * **Returns:** The content of the setting page.

##### `getK(name)`

"Get the index of the timeline item with the given name."

The function starts by getting the option setting

 * **Parameters:** `name`- The name of the timeline item.
 * **Returns:** The index of the item in the setting array.

##### `getWidth()`

Get the width of the branch line

 * **Returns:** The width of the branch.

##### `getColor(name)`

It returns the color of the timeline item with the given name

 * **Parameters:** `name`- The name of the option to get the color of.
 * **Returns:** The color of the option.

##### `out()`

The `out()` function updates the `<ul>` element and returns the `<div>` element

 * **Returns:** The content of the list.

##### `handleEvent(event)`

It takes an event, finds the closest attribute that matches the handle, splits the attribute into an array, loops through the array, splits each item into an array, checks if the first item is the event type or empty, checks if the second item is a function, and if so, calls the function

 * **Parameters:** `event`- The event object.
 * **Returns:** The function handleEvent is being returned.

##### `request()`

It gets the timeline, the XHR, the request URL, the UL, the sortable, the hardcode, the list, the setting, the preloader, the visibility, the name, the option setting, and then it sends the data.

 * **Returns:** the value of the variable `setting`.

##### `result()`

If the request is not done or the status is not 200, return; otherwise, hide the preloader and parse the response as JSON. If the status is true, return; otherwise, set the notice message and show it

 * **Returns:** The result of the AJAX request.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript

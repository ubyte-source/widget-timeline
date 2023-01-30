# Documentation widget-timeline

Widget Javascript Timeline is a library used to create a timeline to display various event and notes on your web page.

## Structure

library:
- [window.Timeline.Plugin.Group](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelineplugingroup-usable-methods)
- [window.Timeline.Plugin.Group.Intersection](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelineplugingroupintersection-usable-methods)
- [window.Timeline.Plugin.Group.Intersection.K](https://github.com/energia-source/widget-timeline/tree/main/lib/plugins#class-windowtimelineplugingroupintersectionk-usable-methods)

<br>

#### ***Class window.Timeline.Plugin.Group.Intersection.K usable methods***

##### `getEnd()`

It returns the end timestamp of the event.

 * **Returns:** The end of the timestamp.

##### `setEnd(end)`

It sets the end time of the timestamp.

 * **Parameters:** `end` - The end time of the event.
 * **Returns:** The object itself.

##### `getStart()`

Get the start time of the current request

 * **Returns:** The start time of the timestamp.

##### `setStart(start)`

`setStart()` sets the start timestamp of the `Timer` object

 * **Parameters:** `start` - The start time of the event.
 * **Returns:** The object itself.

##### `getIssue()`

It returns the value of the issue property

 * **Returns:** The issue property of the object.

##### `push(start, end, issue)`

This function pushes an issue into the issues array, and updates the start and end values if the start or end values of the issue are less than the start or end values of the current object

 * **Parameters:**
  * `start` - The start of the issue
  * `end` - The end of the issue.
  * `issue` - The issue object that is being pushed into the array.
 * **Returns:** The object itself.

#### ***Class window.Timeline.Plugin.Group.Intersection usable methods***

##### `getK()`

It returns the value of the variable `k` in the object `this`

 * **Returns:** The value of the variable k.

##### `addCollision(start, end, issue)`

It takes a start and end time, and an issue, and adds the issue to the list of issues that are in the intersection of the start and end time

 * **Parameters:**
  * `start` - the start of the collision
  * `end` - the end of the collision
  * `issue` - The issue that is being added to the collision list.
 * **Returns:** the array element with the new values

##### `deleteK(k)`

It deletes a key from the list of keys

 * **Parameters:** `k` - The key to be deleted.
 * **Returns:** The object itself.

#### ***Class window.Timeline.Plugin.Group usable methods***

##### `getGroup(name)`

If the name is a string, return the group with that name, or create a new group with that name if it doesn't exist

 * **Parameters:** `name` - The name of the group.
 * **Returns:** The group with the name that was passed in.
## Built With

* [Javascript](https://www.javascript.com/) - Javascript

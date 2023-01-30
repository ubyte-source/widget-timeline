(function (window) {

    'use strict';

    class K {

        constructor(start, end) {
            this.issue = [];
            this.timestamp = {};

            this.setEnd(end);
            this.setStart(start);
        }

        /**
        * It returns the end timestamp of the event.
        * @returns The end of the timestamp.
        */
        
        getEnd() {
            return this.timestamp.end;
        }

        /**
        * It sets the end time of the timestamp.
        * @param end - The end time of the event.
        * @returns The object itself.
        */
        
        setEnd(end) {
            this.timestamp.end = end;
            return this;
        }

        /**
        * Get the start time of the current request
        * @returns The start time of the timestamp.
        */
        
        getStart() {
            return this.timestamp.start;
        }

        /**
        * `setStart()` sets the start timestamp of the `Timer` object
        * @param start - The start time of the event.
        * @returns The object itself.
        */
        
        setStart(start) {
            this.timestamp.start = start;
            return this;
        }

        /**
        * It returns the value of the issue property
        * @returns The issue property of the object.
        */
        
        getIssue() {
            return this.issue;
        }

        /**
        * This function pushes an issue into the issues array, and updates the start and end values
        * if the start or end values of the issue are less than the start or end values of the current
        * object
        * @param start - The start of the issue
        * @param end - The end of the issue.
        * @param issue - The issue object that is being pushed into the array.
        * @returns The object itself.
        */
        
        push(start, end, issue) {
            this.getIssue().push(issue);

            if (start < this.getStart()) this.setStart(start);
            if (end > this.getEnd()) this.setEnd(end);

            return this;
        }
    }

    class Intersection {

        constructor() {
            this.k = [];
        }

        /**
        * It returns the value of the variable `k` in the object `this`
        * @returns The value of the variable k.
        */
        
        getK() {
            return this.k;
        }

        /**
        * It takes a start and end time, and an issue, and adds the issue to the list of issues that
        * are in the intersection of the start and end time
        * @param start - the start of the collision
        * @param end - the end of the collision
        * @param issue - The issue that is being added to the collision list.
        * @returns the array element with the new values
        */
        
        addCollision(start, end, issue) {
            let response = this.getK().filter(function (item) {
                return end <= item.getEnd()
                    && item.getStart() <= start;
            });
            if (response.length === 1) return response[0].push(start, end, issue);
            if (response.length === 0) {
                let k = new Timeline.Plugin.Group.Intersection.K(start, end);
                this.getK().push(k);
                return k.push(start, end, issue);
            }
            for (let item = 1; item < response.length; item++) {
                Array.prototype.push.apply(response[0].getIssue(), response[item].getIssue());
                this.deleteK(response[item]);
            }
            return response[0].push(start, end, issue);
        }

        /**
        * It deletes a key from the list of keys
        * @param k - The key to be deleted.
        * @returns The object itself.
        */
        
        deleteK(k) {
            let all = this.getK(),
                index = all.indexOf(k);
            if (index !== -1) this.getK().splice(index, 1);
            return this;
        }
    }

    class Group {

        constructor() {
            this.groups = {};
        }

        /**
        * If the name is a string, return the group with that name, or create a new group with that
        * name if it doesn't exist
        * @param name - The name of the group.
        * @returns The group with the name that was passed in.
        */

        getGroup(name) {
            if (typeof name !== 'string') return this.groups;
            if (this.groups.hasOwnProperty(name)) return this.groups[name];
            this.groups[name] = new Timeline.Plugin.Group.Intersection();
            return this.groups[name];
        }
    }

    window.Timeline.Plugin.Group = Group;
    window.Timeline.Plugin.Group.Intersection = Intersection;
    window.Timeline.Plugin.Group.Intersection.K = K;

})(window);
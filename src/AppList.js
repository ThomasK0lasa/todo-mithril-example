import m from "mithril";
import {list, getElements} from "./API"
import AppListItem from "./AppListItem"

const AppList = {
    oninit: getElements,
    view: function() {
        if (list.length > 0) {
            return m("ul", list.map(function(task) {
                return m(AppListItem, {id: task._id, name: task.name, done: task.done})
            }))
        } else {
            return m("p", "Seems that You don't have any pending tasks. Use form to add new ones. :)")
        }
    }
}

export default AppList;
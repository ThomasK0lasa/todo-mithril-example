import m from "mithril";
import {list, getElements} from "./API"
import AppListItem from "./AppListItem"

const AppList = {
    oninit: getElements,
    view: function() {
        return m("ul", list.map(function(task) {
            return m(AppListItem, {id: task._id, name: task.name, done: task.done})
        }))
    }
}

export default AppList;
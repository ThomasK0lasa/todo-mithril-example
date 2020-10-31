import m from "mithril";
import AppForm from "./AppForm";
import AppList from "./AppList";
import { canConnect, getElements } from "./API";

const AppMain = {
    oninit: getElements,
    view: function () {
        return m("AppMain", [
            m('main.app', [
                m('header.app-header',[m('h1', "ToDo Mithril")]),
                canConnect===null
                ? [ m("p", "Loading...")]
                : canConnect===true ? [ m(AppForm), m(AppList) ]
                : [ m("p.error", "Error when trying to connect to DB. :(")]
            ])
        ])
    }
}

export default AppMain;
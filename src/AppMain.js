import m from "mithril";
import AppForm from "./AppForm";
import AppList from "./AppList";
import {canConnect} from "./API";

const AppMain = {
    view: function () {
        return m("AppMain", [
            m('main.app', [
                m('header.app-header',[m('h1', "ToDo Mithril")]),
                canConnect
                ? [ m(AppForm), m(AppList) ]
                : [ m("p.error", "Error when trying to connect to DB. :(")]
            ])
        ])
    }
}

export default AppMain;
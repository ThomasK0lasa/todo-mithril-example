import m from "mithril";
import AppForm from "./AppForm";
import AppList from "./AppList";

const AppMain = {
    view: function () {
        return m("AppMain", [
            m('main.app', [
                m('header.app-header',[m('h1', "ToDo Mithril")]),
                m(AppForm),
                m(AppList)
            ])
        ])
    }
}

export default AppMain;
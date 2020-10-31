import m from "mithril";
import { addElement } from "./API";

let task = '';

const AppForm = {
    submit: function (e) {
        e.preventDefault();
        addElement(task);
        task = "";
    },
    view: function() {
        return m("appform", [
            m('div.form__group.field', [
                m('form', {
                    onsubmit: this.submit
                }, [
                    m('input.form__field', {
                        type: 'text',
                        placeholder: "Task",
                        name: "name",
                        required: 'required',
                        value: task,
                        oninput: function(e) {
                            task = e.target.value;
                        }
                    }),
                    m('label.form__label', {for: 'name'}, "Task"),
                    m('input.form__submit', {type: "submit", value: "+"})
                ])
            ])
        ])
    }
}

export default AppForm;
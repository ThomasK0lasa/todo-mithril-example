import m from "mithril";
import { removeElement, updateElement } from "./API";

let li = {
    done: function(state) {
        return state ? 'done' : null;
    },

    view: function(vnode) {
        return m('li', {class: this.done(vnode.attrs.done), onclick: function(e) { updateEl(vnode.attrs.id)}}, [
            m('span.text', vnode.attrs.name),
            m('button', { onclick: function(e) { removeEl(vnode.attrs.id) }}, 'x'),
        ])
    }
}

function removeEl(id) {
    event.stopPropagation();
    removeElement(id);
}

function updateEl(id) {
    updateElement(id);
}

export default li;
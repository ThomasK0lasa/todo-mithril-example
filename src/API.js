import m from "mithril";

const APIurl = "http://localhost:3001/v1/elements/";

export let list = [];
export let canConnect = true;

export function getElements() {
    m.request({
        method: "GET",
        url: APIurl,
    })
    .then(function(result) {
        list = result;
    })
    .catch(function(error) {
        canConnect = false;
    })
}

export function addElement(newtask) {
    m.request({
        method: "POST",
        url: APIurl,
        body: {element: newtask}
    })
    .then(function(result) {
        getElements();
    })
}

export function updateElement(index, element) {
    m.request({
        method: "PUT",
        url: APIurl+index,
        params: {id: index}
    })
    .then(function(result) {
        getElements();
    }).catch(function(e) {
        console.log(e.message);
    });
}

export function removeElement(index) {
    m.request({
        method: "DELETE",
        url: APIurl+index,
        params: {id: index}
    })
    .then(function(result) {
        getElements();
    })
}
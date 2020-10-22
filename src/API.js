import m from "mithril";

const APIurl = "http://localhost:3001/v1/elements/";

export let list = [];

export function getElements() {
    m.request({
        method: "GET",
        url: APIurl,
    })
    .then(function(result) {
        list = result;
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

export async function updateElement(index, element) {
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

export async function removeElement(index) {
    m.request({
        method: "DELETE",
        url: APIurl+index,
        params: {id: index}
    })
    .then(function(result) {
        getElements();
    })
}
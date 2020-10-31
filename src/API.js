import m from "mithril";

const APIurl = "http://localhost:3001/v1/elements/";

export let list = [];
export let canConnect = null;

export function getElements() {
    m.request({
        method: "GET",
        url: APIurl,
    })
    .then(function(result) {
        canConnect = true;
        list = result;
    })
    .catch(function(error) {
        canConnect = false;
        console.error("Can't connect to db server");
        throw error;
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
    .catch(function(error) {
        console.error('addElement Error');
        throw error;
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
    })
    .catch(function(error) {
        console.error('updateElement Error');
        throw error;
    })
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
    .catch(function(error) {
        console.error('removeElement Error');
        throw error;
    })
}
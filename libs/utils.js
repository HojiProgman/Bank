export function reload(arr, place, component) {
    place.innerHTML = ""

    for(let item of arr) {
        const elem = component(item, arr)

        place.append(elem)
    }
    
}

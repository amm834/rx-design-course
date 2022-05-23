import {fromEvent} from "rxjs";

let observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    observable.subscribe(
        (x: any) => console.log(x),
    )
}, 2000)
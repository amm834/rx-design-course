import {Observable, skipUntil, Subject, Subscriber} from "rxjs";

let publisher = Observable.create((subscriber: Subscriber<string | number>) => {
    let i = 0;
    setInterval(() => subscriber.next(i++))
});



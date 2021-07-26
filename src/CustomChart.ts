import asciichart, {plot, blue, green, magenta, red} from 'asciichart';

const data = {
    updatesPerSecond: [],
    errors: [],
    requests: [],
}

const draw = (updatesPerSecond: number, errors: number, requests: number) => {
    // @ts-ignore
    data.updatesPerSecond.push(updatesPerSecond);
    // @ts-ignore
    data.errors.push(errors);
    // @ts-ignore
    data.requests.push(requests);

    const config = {
        height: 15,
        colors: [green, red, blue]
    };
    return plot([ data.updatesPerSecond, data.errors, data.requests], config);
}

let updatesPerSecond = 0;
let errors = 0;
let requests = 0;

setInterval(() => {
    console.clear();
    updatesPerSecond += 10;
    errors += Math.floor(Math.random() * 2);
    requests += 3;
    console.log(draw(updatesPerSecond, errors, requests));
    console.log("blue: requests count");
    console.log("red: errors");
    console.log("green: updates per second");
}, 1000)

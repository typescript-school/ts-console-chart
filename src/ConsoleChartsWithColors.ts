import asciichart, {plot, blue, green, magenta, red} from 'asciichart';

const draw = (size: number) => {
    var arr1 = new Array (size)
    arr1[0] = Math.round (Math.random () * 15)
    for (let i = 1; i < arr1.length; i++)
        arr1[i] = arr1[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))

    var arr2 = new Array (size)
    arr2[0] = Math.round (Math.random () * 15)
    for (let i = 1; i < arr2.length; i++)
        arr2[i] = arr2[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))

    var arr3 = new Array (size)
    arr3[0] = Math.round (Math.random () * 15)
    for (let i = 1; i < arr3.length; i++)
        arr3[i] = arr3[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))

    var arr4 = new Array (size)
    arr4[0] = Math.round (Math.random () * 15)
    for (let i = 1; i < arr4.length; i++)
        arr4[i] = arr4[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))

    var config = {
        height: 5,
        colors: [
            blue,
            green,
            red,
            magenta,
        ]
    };
    return plot([ arr1, arr2, arr3, arr4 ], config);
}
draw(20);

setInterval(() => {
    console.clear();
    console.log(draw(20));
}, 1000)

zone.fork().run(function () {
    zone.inTheZone = true;

    setTimeout(function () {
        console.log(!!zone.inTheZone + ' === true ');
    }, 0);
});

console.log(!!zone.inTheZone + ' === false');
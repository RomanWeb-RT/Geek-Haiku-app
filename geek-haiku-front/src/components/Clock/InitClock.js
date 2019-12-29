import style from "./Clock.css";

class InitClock {

    static init() {
        let
            clock = {
                clocktime: {},
                dots: document.querySelectorAll(' .dots'),
                dotsState: false,
                updateClock: function () {
                    let time = new Date();
                    clock.clocktime.hour = time.getHours();
                    clock.clocktime.minute = time.getMinutes();
                    clock.clocktime.second = time.getSeconds();
                    for (let timeUnit in clock.clocktime) {
                        clock.clocktime[timeUnit] = clock.clocktime[timeUnit].toString();
                        if (clock.clocktime[timeUnit].length === 1) {
                            clock.clocktime[timeUnit] = '0' + clock.clocktime[timeUnit];
                        }
                        clock.clocktime[timeUnit] = clock.clocktime[timeUnit].split('');

                        for (let i = 0; i < 2; i++) {
                            let selector = ' .' + timeUnit + '.digit-' + (i + 1);
                            let className = 'number-is-' + clock.clocktime[timeUnit][i];
                            for (let j = 0; j < 10; j++) {
                                let oldClass = 'number-is-' + j;
                                if (document.querySelector(selector) !== null)
                                    document.querySelector(selector).classList.remove(oldClass);
                            }
                            if (document.querySelector(selector) !== null)
                                document.querySelector(selector).classList.add(className);
                        }
                    }
                    clock.toggleDots();
                },

                toggleDots: function () {
                    let num_dots = clock.dots.length;

                    for (let i = 0; i < num_dots; i++) {
                        if (clock.dotsState === false) {
                            clock.dots[i].classList.add('lcd-element-active');
                        } else {
                            clock.dots[i].classList.remove('lcd-element-active');
                        }
                    }
                    clock.dotsState = !clock.dotsState;
                },

                init: function () {
                    clock.toggleDots();
                    clock.updateClock();
                    setInterval(clock.updateClock, 500);
                }
            };
        clock.init();
    }
}

export default InitClock;
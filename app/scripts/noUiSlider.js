"use strict";

/* noUiSlider - JavaScript Range Slider */
const uiSlider = (() => {
    let keypressSlider = document.getElementById('noUiSliderPickPrice') || false;
    let input0 = document.getElementById('noUiSliderPickPriceInput1') || false;
    let input1 = document.getElementById('noUiSliderPickPriceInput2') || false;
    let inputs = [input0, input1];
    if (keypressSlider) {
        noUiSlider.create(keypressSlider, {
            start: [240, 2600],
            connect: true,
            // direction: 'rtl',
            range: {
                'min': 0,
                'max': 5000
            },
            step: 1,
            // tooltips: true,
            format: {
                from: function(value) {
                        return parseInt(value);
                    },
                to: function(value) {
                        return parseInt(value);
                    }
            }
        });

        // Set value for input
        keypressSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].setAttribute("value", values[handle]);
        });

        function setSliderHandle(i, value) {
            let r = [null];
            r[i] = value;
            keypressSlider.noUiSlider.set(r);
        }

        // Listen to keydown events on the input field.
        inputs.forEach(function (input, handle) {

            input.addEventListener('change', function () {
                setSliderHandle(handle, this.value);
            });

            input.addEventListener('keydown', function (e) {

                let values = keypressSlider.noUiSlider.get();
                let value = Number(values[handle]);
                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                let steps = keypressSlider.noUiSlider.steps();
                // [down, up]
                let step = steps[handle];
                let position;
                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {
                    case 13:
                        setSliderHandle(handle, this.value);
                        break;
                    case 38:
                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }
                        // null = edge of slider
                        if (position !== null) {
                            setSliderHandle(handle, value + position);
                        }
                        break;
                    case 40:
                        position = step[0];
                        if (position === false) {
                            position = 1;
                        }
                        if (position !== null) {
                            setSliderHandle(handle, value - position);
                        }
                        break;
                }
            });
        });
    }

    let connectSliderArea = document.getElementById('noUiSliderPickArea') || false;
    let connectSliderPrice = document.getElementById('noUiSliderPickAdAHousePrice') || false;
    let connectSliderPriceEuro = document.getElementById('noUiSliderPickAdAHousePriceEuro') || false;
    if (connectSliderArea) {
        noUiSlider.create(connectSliderArea, {
            start: 300,
            connect: [true, false],
            step: 1,
            range: {
              'min': 0,
              'max': 600
            },
            format: ({
                from: function(value) {
                        return parseInt(value);
                    },
                to: function(value) {
                        return parseInt(value);
                    }
            })
        });
    }
    if (connectSliderPrice) {
        noUiSlider.create(connectSliderPrice, {
            start: 2600,
            connect: [true, false],
            step: 1,
            range: {
              'min': 0,
              'max': 5000
            },
            format: ({
                from: function(value) {
                        return parseInt(value);
                    },
                to: function(value) {
                        return parseInt(value);
                    }
            })
        });
    }
    if (connectSliderPriceEuro) {
        noUiSlider.create(connectSliderPriceEuro, {
            start: 1000,
            connect: [true, false],
            step: 1,
            range: {
              'min': 0,
              'max': 2000
            },
            format: ({
                from: function(value) {
                        return parseInt(value);
                    },
                to: function(value) {
                        return parseInt(value);
                    }
            })
        });
    }

    let inputAreaValue = document.getElementById('noUiSliderPickAreaValue') || false;
    if (inputAreaValue) {
        connectSliderArea.noUiSlider.on('update', function ( values, handle ) {
            if ( values ) {
                inputAreaValue.innerHTML = values;
            }
        });
    }
    let inputPriceValue = document.getElementById('noUiSliderPickPriceValue') || false;
    if (inputPriceValue) {
        connectSliderPrice.noUiSlider.on('update', function ( values, handle ) {
            if ( values ) {
                inputPriceValue.innerHTML = values;
            }
        });
    }
    let inputPriceEuroValue = document.getElementById('noUiSliderPickPriceEuroValue') || false;
    if (inputPriceEuroValue) {
        connectSliderPriceEuro.noUiSlider.on('update', function ( values, handle ) {
            if ( values ) {
                inputPriceEuroValue.innerHTML = values;
            }
        });
    }

})();

export default uiSlider;
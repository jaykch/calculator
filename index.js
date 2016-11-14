/**
 * Created by Jay on 11/13/2016.
 */
$(document).ready(function () {
    calculator.init();
    calculator.render(placeholder);
});

//todo: calculate every time an action is triggered

function log() {
    console.log(arguments);
}

var placeholder = 0;


var calculator = (function () {

    var prevVal = 0;
    var curVal = 0;
    var actionType = "";
    var result = 0;

    function init() {
        _clear();
        _addHandler();
        _subtractHandler();
        _multiplyHandler();
        _divideHandler();
        _input();
        _response();
    }

    function _input() {
        for (var i = 0; i < 10; i++) {
            $('[data-id=' + i + ']').click(function () {
                placeholder = placeholder * 10 + parseInt($(this).attr("data-id"));
                curVal = placeholder;
                log(prevVal, curVal, "result: " + result);
                render(placeholder);
            });
        }
    }

    function _initialAction(scope) {
        if (actionType === "") {
            _setAction(scope);
        }
    }

    function _addHandler() {
        $('[data-id="add"]').click(function () {
            render("+");
            _initialAction($(this));
            _calculate();
            _setAction($(this));
            log(prevVal, curVal, "result: " + result);
        });
    }

    function _subtractHandler() {
        $('[data-id="sub"]').click(function () {
            render("-");
            _initialAction($(this));
            _calculate();
            _setAction($(this));
            log(prevVal, curVal, "result: " + result);
        });
    }

    function _multiplyHandler() {
        $('[data-id="mult"]').click(function () {
            render("x");
            _initialAction($(this));
            _calculate();
            _setAction($(this));
            log(prevVal, curVal, "result: " + result);
        });
    }

    function _divideHandler() {
        $('[data-id="div"]').click(function () {
            render("&divide;");
            _initialAction($(this));
            _calculate();
            _setAction($(this));
            log(prevVal, curVal, "result: " + result);
        });
    }

    function _reset() {
        placeholder = 0;
        prevVal = 0;
        curVal = 0;
        actionType = "";
        result = 0;
    }

    function _clear() {
        $('[data-id="clear"]').click(function () {
            _reset();
            render(placeholder);
        });
    }

    function _setAction(scope) {
        actionType = scope.attr("data-id");
    }

    function _adjustValues() {
        placeholder = 0;
        curVal = 0;
    }

    function _calculate() {
        if (actionType) {
            switch (actionType) {
                case "add":
                    result = prevVal + curVal;
                    prevVal = result;
                    _adjustValues();
                    break;
                case "sub":
                    if (prevVal === 0) {
                        prevVal = curVal;
                    } else {
                        result = prevVal - curVal;
                        prevVal = result;
                    }
                    _adjustValues();
                    break;
                case "mult":
                    if (prevVal !== 0) {
                        result = prevVal * curVal;
                        prevVal = result;
                    } else {
                        prevVal = curVal;
                    }
                    _adjustValues();
                    break;
                case "div":
                    if (prevVal !== 0) {
                        result = prevVal / curVal;
                        prevVal = result;
                    } else {
                        prevVal = curVal;
                    }
                    _adjustValues();
                    break;
            }
        }
    }

    function _response() {
        $('[data-id="res"]').click(function () {
            _calculate();
            curVal = 0;
            placeholder = 0;
            render("Answer: " + result);
            log(prevVal, curVal, "result: " + result);
        });
    }

    function render(x) {
        $("#screen").html("<span>"
            + x
            + "</span>");
    }

    return {
        init: init,
        render: render
    }

})();
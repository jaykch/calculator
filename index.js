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

var placeholder = "";


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
                placeholder += $(this).attr("data-id");
                render(placeholder);
            });
        }
    }

    function _addHandler() {
        $('[data-id="add"]').click(function () {
            _setAction($(this));
            placeholder = "+";
            render(placeholder);
            placeholder = "";
            log(placeholder);
            _calculate();
        });
    }

    function _subtractHandler() {
        $('[data-id="sub"]').click(function () {
            _setAction($(this));
            placeholder = "-";
            render(placeholder);
            placeholder = "";
            _calculate();
        });
    }

    function _multiplyHandler() {
        $('[data-id="mult"]').click(function () {
            _setAction($(this));
            placeholder = "x";
            render(placeholder);
            placeholder = "";
            _calculate();
        });
    }

    function _divideHandler() {
        $('[data-id="div"]').click(function () {
            _setAction($(this));
            placeholder = "&divide;";
            render(placeholder);
            placeholder = "";
            _calculate();
        });
    }

    function _reset(){
        placeholder = "";
        prevVal = 0;
        curVal = 0;
        actionType = "";
        result = 0;
    }

    function _clear() {
        $('[data-id="clear"]').click(function () {
            _reset()
            render(placeholder);
        });
    }

    function _setAction(scope) {
        _adjustValues();
        actionType = scope.attr("data-id");
    }

    function _adjustValues(){
        prevVal = curVal;
        curVal = parseInt(placeholder);
    }

    function _calculate() {
        if (actionType) {
            switch (actionType) {
                case "add":
                    result = prevVal + curVal;
                    curVal = result;
                    break;
                case "sub":
                    result = prevVal - curVal;
                    curVal = result;
                    break;
                case "mult":
                    result = prevVal * curVal;
                    curVal = result;
                    break;
                case "div":
                    result = prevVal / curVal;
                    curVal = result;
                    break;
            }
        }
    }

    function _response() {
        $('[data-id="res"]').click(function () {
            _adjustValues();
            _calculate();
            render("Answer: " + result + " Please Clear");
            _reset();
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
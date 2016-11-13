/**
 * Created by Jay on 11/13/2016.
 */
$(document).ready(function(){
    console.log("testing");
    calculator.render(placeholder);
    calculator.init();
});

function log(){
    console.log(arguments);
}

var placeholder = "";


var calculator = (function () {

    var prevVal = 0;
    var action = "";

    function init(){
        _clear();
        _add();
        _subtract();
        _multiply();
        _divide();
        _input();
    }

    function _input(){
        for (var i = 0; i < 10; i++) {
            $('[data-id=' + i +']').click(function(){
                placeholder += $(this).attr("data-id");
                render(placeholder);
            });
        }
    }

    function _add() {
        $('[data-id="add"]').click(function(){
            prevVal = parseInt(placeholder);
            log(prevVal, placeholder);
            placeholder = "+";
            render(placeholder);
            placeholder = "";
        });
    }

    function _subtract() {
        $('[data-id="sub"]').click(function(){
            placeholder = "-";
            render(placeholder);
            placeholder = "";
        });
    }

    function _multiply() {
        $('[data-id="mult"]').click(function(){
            placeholder = "x";
            render(placeholder);
            placeholder = "";
        });
    }

    function _divide() {
        $('[data-id="div"]').click(function(){
            placeholder = "&divide;";
            render(placeholder);
            placeholder = "";
        });
    }

    function _clear() {
        $('[data-id="clear"]').click(function(){
            placeholder = "";
            render(placeholder);
        });
    }

    function response() {

    }
    function render(x) {
        $("#screen").html("<span>"
            + x
            + "</span>");
    }

    return {
        init: init,
        response: response,
        render: render
    }

})();
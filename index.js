/**
 * Created by Jay on 11/13/2016.
 */
$(document).ready(function(){
    console.log("testing");
    calculator.render(placeholder);
    calculator.input();
    calculator.clear();
    calculator.add();
    calculator.subtract();
    calculator.multiply();
    calculator.divide();
});

var placeholder = "";


var calculator = (function () {


    function input(){
        for (var i = 0; i < 10; i++) {
            $('[data-id=' + i +']').click(function(){
                placeholder += $(this).attr("data-id");
                render(placeholder);
            });
        }
    }

    function add() {
        $('[data-id="add"]').click(function(){
            placeholder = "+";
            render(placeholder);
            placeholder = "";
        });
    }

    function subtract() {
        $('[data-id="sub"]').click(function(){
            placeholder = "-";
            render(placeholder);
            placeholder = "";
        });
    }

    function multiply() {
        $('[data-id="mult"]').click(function(){
            placeholder = "x";
            render(placeholder);
            placeholder = "";
        });
    }

    function divide() {
        $('[data-id="div"]').click(function(){
            placeholder = "&divide;";
            render(placeholder);
            placeholder = "";
        });
    }

    function clear() {
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
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        clear: clear,
        response: response,
        render: render,
        input:input
    }

})();
function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    console.log(a)
    var b = parseInt(document.querySelector("#value2").value);
    console.log(b);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add") {
        calculate = a + b;
    } else if (op == "sub") {
        calculate = a - b;
    } else if(op == "mul") {
        calculate = a * b;
    } else if(op == "div") {
        calculate = a / b;
    } 


    document.querySelector("#result").innerHTML = calculate;
}

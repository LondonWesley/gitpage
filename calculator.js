
var x = [];
var operator = [];
var y = [];
var result = [];
var validOperations = ["*","%","+","/","-"]


function calculateAnswer() {
    for(i = 0; i < x.length; i++){
        var xVal = Number(x[i])
        var yVal = Number(y[i])
        if(isNaN(xVal) || isNaN(yVal)){
            result.push("wrong number input");
            console.log("WRONG NIMBA");
            
        } else if(!validOperations.includes(operator[i])){
            result.push("computation error");
            console.log( "WRONG SUMBUL");
        } else if(operator[i] == "*"){
            console.log(xVal * yVal);
            result.push((xVal * yVal));
        } else if(operator[i] == "/"){
            console.log(xVal / yVal);
            result.push((xVal / yVal));
        } else if (operator[i] == "+"){
            console.log(xVal + yVal);
            result.push((xVal + yVal));
        } else if (operator[i] == "-"){
            console.log(xVal - yVal);
            result.push((xVal - yVal));
        } else {
           console.log(xVal % yVal);
           result.push((xVal % yVal));
        }
        
    }
}

function getMin(){
    var min = Number.MAX_VALUE;
    for(i = 0; i < result.length; i++){
        curRes = Number(result[i]);
        if(!isNaN(curRes)){
            if(min>curRes){
                min = curRes;
            }
        }
    }
    return min;
}
function getMax(){
    var max = Number.MIN_VALUE;
    for(i = 0; i < result.length; i++){
        curRes = Number(result[i]);
        if(!isNaN(curRes)){
            if(max<curRes){
                max = curRes;
            }
        }
    }
    return max;
}

function getAvg(){
    var average = 0;
    var totalNumbers = 0;
    for(i = 0; i < result.length; i++){
        curRes = Number(result[i]);
        if(!isNaN(curRes)){
            totalNumbers++;
            average+=curRes;
        }
    }
    average/=totalNumbers;
    return average;
}

function getTotal(){
    var tot = 0;
    for(i = 0; i < result.length; i++){
        curRes = Number(result[i]);
        if(!isNaN(curRes)){
            tot+=curRes;
        }
    }
    return tot;
}

function makeTables(){
    document.write("<table>");
    document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
    for(i = 0; i < x.length; i++){
        document.write("<tr>");
        document.write("<td>" + x[i]+ "</td>");
        document.write("<td>" + operator[i]+ "</td>");
        document.write("<td>" + y[i]+ "</td>");
        document.write("<td>" + result[i]+ "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("<table>");
    document.write("<tr><th>min</th><th>max</th><th>average</th><th>total</th></tr>");
    var minimum = getMin();
    var maximum = getMax();
    var avg = getAvg();
    var total = getTotal();

    document.write("<tr>");
    document.write("<td>" + minimum + "</td>");
    document.write("<td>" + maximum + "</td>");
    document.write("<td>" + avg + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
    document.write("</table>");
}

function calculatoring(){
var keepPrompting = 1;
    while(keepPrompting == 1){
        var xValue = prompt("value of x","");
        x.push(xValue);
        var op = prompt("operator","");
        operator.push(op);
        var yValue = prompt("value of x","");
        y.push(yValue);
        if (confirm("Continue?")) {
            
          } else {
            keepPrompting = 0;
          } 
    }
    calculateAnswer()
    makeTables()
}
calculatoring()
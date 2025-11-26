# javascript100-ques
100 problems solution in javascript
// js problem 1
// create  a program in which you can change  the paragraph onclick with the help of html and js
// html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="first">the first js program</p>
   <button id="btn">press</button>
</body>
<script >document.getElementById("btn").onclick = function() {
    document.getElementById("first").innerHTML = "say something";};</script>
</html>


// Default parameter
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>
<h2>Default Parameter Values</h2>
<p>If y is not passed or undefined, then y = 10:</p>

<p id="demo"></p>

<script>
  function myfunction(x, y = 10){
    retuen x + y;
  }
document.getElementById("demo").innerHTML = myFunction(5);
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>

<p>Accessing a function without () returns the function and NOT the function result:</p>

<p id="demo"></p>

<script>
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius;
document.getElementById("demo").innerHTML = value;
</script>

</body>
</html>
// ToCelsius refers to the function object . toCelsius() refers to the function result.

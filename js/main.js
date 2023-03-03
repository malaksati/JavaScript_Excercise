var firstname = prompt("Enter your name?")
var x = 0
while (x < 20) {
    x++;
    if (x == 5) {
        console.log(firstname)
        continue
    }
    console.log(x + "\n")
}
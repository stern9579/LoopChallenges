for(x=0; x<=20; x++) {
    if(x % 2 != 0) {
        console.log(x);
    }
}


for(x=100; x>=0; x--) {
    if (x % 3 == 0) {
        console.log(x);
    }
}

for(x=4; x>=-3.5; x = x - 1.5) {
    console.log(x)
}

var sum = 0 

for(x=0; x<=100; x++) {
    sum += x;
}

console.log(sum)

var product = 0

for (x=1; x<=12; x++) {
    product = product*x;
}

console.log (product)
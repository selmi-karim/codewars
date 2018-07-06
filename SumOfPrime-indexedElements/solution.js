
let primes = []
for (let i = 0; i <= 5000; i++) primes[i] = true
primes[0] = primes[1] = false
function erathosthen() {
    for (let i = 2; i <= 5000; i++) {
        if (primes[i]){
            for (let j = i*2; j <= 5000; j+=i) {
                primes[j] = false
            }
        }
    }
}
function total(arr) {
    erathosthen()
    let res = 0;
    arr.forEach((element,index) => {
        if(primes[index]) res+=element
    });
    return res
};

total(['15','45','5'])

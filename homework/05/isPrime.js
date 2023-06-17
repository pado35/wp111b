function isPrime(n){
    let a,m=Math.sqrt(n);
    for(a=2;a<m;a+=1)
        if(n%a==0) return false;
        return true;
}

console.log("isPrime(537):" + isPrime(537))
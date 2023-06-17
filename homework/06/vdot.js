function vadd(a,b){
    let n,s = 0;
    for(n=0;n<a.length;n+=1)
        s+=a[n]*b[n];
    return s;
}

let a=[1,5,3], b=[4,5,6];
console.log(vadd(a,b));
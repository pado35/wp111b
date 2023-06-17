function vadd(a,b){
    let n,s = [];
    for(n=0;n<a.length;n+=1)
        s[n]=a[n]+b[n];
    return s;
}

let a=[1,3,5], b=[4,5,6];
console.log(vadd(a,b));
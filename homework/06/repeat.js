function repeat(f,n){
    let a,s=[];
    for(a=0;a<n;a+=1)
        s[a]=f();
    return s;
}

console.log(repeat(Math.random, 10));
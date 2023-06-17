function truthTable(n){
    let a, m=Math.pow(2,n);
    for(a=0;a<m;a+=1)
        console.log(a.toString(2).padStart(n,'0'));
}

truthTable(4);
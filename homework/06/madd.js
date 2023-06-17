function madd(a,b){
    let n,m,s = [];
    
    for(n=0; n<a.length; n+=1){
        s[n]=[];
        for(m=0; m<a[n].length; m+=1)
            s[n][m]=a[n][m]+b[n][m];
    }

    return s;
}

let a=[[1,3,5],[5,2,4]], b=[[4,5,6],[5,7,4]];
console.log(madd(a,b));
function mmul(a,b){
    let n,m,k,sum,s = [];
    for(n=0; n<a.length; n+=1){
        s[n]=[];
        for(m=0; m<a[n].length; m+=1){
            sum=0;
            for(k=0; k<a[n].length; k+=1)
                sum+=a[n][k]*b[k][m];
            s[n][m]=sum;
        }
    }
    return s;
}

let a=[[1,3,5],[5,2,4],[5,1,8]], b=[[4,5,6],[5,7,4],[2,1,5]];
console.log(mmul(a,b));
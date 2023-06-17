class Matrix {
    constructor(a) {
        this.a = a;
    }

    add(b) {
        let n,m,s = [];
        for(n=0; n<this.a.length; n+=1){
            s[n]=[];
            for(m=0; m<this.a[n].length; m+=1)
                s[n][m]=this.a[n][m]+b[n][m];
        }
        return s;
    }

    mul(b) {
        let n,m,k,sum,s = [];
        for(n=0; n<this.a.length; n+=1){
            s[n]=[];
            for(m=0; m<this.a[n].length; m+=1){
                sum=0;
                for(k=0; k<this.a[n].length; k+=1)
                    sum += this.a[n][k] * b[k][m];
                s[n][m]=sum;
            }
        }
        return s;
    }

}

let a=[[1,3,5],[5,2,4],[5,1,8]], b=[[4,5,6],[5,7,4],[2,1,5]];
let c=new Matrix(a);

console.log(c.add(b));
console.log(c.mul(b));
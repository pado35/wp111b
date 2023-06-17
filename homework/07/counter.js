function counter(list){
    let n,dict={};
    for(n of list){
        if(n in dict) dict[n]++;
        else dict[n]=1;
    }
    return dict;
}

let list = ['a', 'dog', 'chase', 'a', 'cat'];
console.log(counter(list))
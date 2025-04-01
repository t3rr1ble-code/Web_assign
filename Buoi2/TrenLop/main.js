document.write('hello')
var global = 'global'
if(global == 'global') {
    let local = 'local'
    document.write(global+"<br>")
}
document.write('local'+"<br>")


const Sort = (ar) => {
    for(let i = 0; i < ar.length-1; i++) {
        for(let j = i+1; j < ar.length; j++) {
            if(ar[i] > ar[j]) {
                let temp = ar[i]
                ar[i] = ar[j]
                ar[j] = temp
            }
        }
    }
    return ar;
}

let ar = [5,6,3,8,1]
const arr = Sort(ar)
for(let i of arr) {
    document.write(i)
}
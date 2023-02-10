var arrays =  [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк']
var srt = []
var nll = []
var numb = []
var und = []
for (var i = 0 ; i < arrays.length; i++){
    srt. push(arrays[i])
    var p = srt.filter(o => {return typeof (o) === "string"})
    nll. push(arrays[i])
    var h = nll.filter(c => {return typeof (c) === "object"})
    numb. push(arrays[i])
    var f = numb.filter(v => {return typeof (v) === "number"})
    und. push(arrays[i])
    var d = und.filter(x => {return typeof (x) === "undefined"})
}
console.log(p)
console.log(h)
console.log(f)
console.log(d)
var  sorArays = []
sorArays.push(p,h,f,d)
sorArays.sort((h,p) => {return p.length - h.length})
console.log(sorArays)
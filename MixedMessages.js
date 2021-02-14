const sentenceArr = [['Every time I ask someone about you, I hear these 3 words: '], ['You should stop being so: '], ['20 years ago people were more:  '], ['You always expect people to tell you that you are: ']]
const firstQual = [['good'], ['honest'], ['friendly'], ['loyal']]
const secondQual = [['ambitious'], ['lazy'], ['dishonest'], ['fair']]
const thirdQual = [['sneaky'], ['gregarious'], ['forgiving'], ['brave']]


let a = sentenceArr[Math.floor(Math.random()*4)]
let b = firstQual[Math.floor(Math.random()*4)]
let c = secondQual[Math.floor(Math.random()*4)]
let d = thirdQual[Math.floor(Math.random()*4)]
let theMessage = a + b + ' ' + c + ' and ' + d
console.log(theMessage);


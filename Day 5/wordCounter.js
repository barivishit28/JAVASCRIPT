function wordCounter(sentence) {
    let arr = sentence.split(" ");
    
    let cleanedArr = arr.filter((item) => {
        return item !== ""
    });
    return cleanedArr.length;
}
let res = wordCounter("I am a smart  and very   intelligent  boy");
console.log(res);
// 三項演算子の練習
// 条件演算子の評価結果は値を返すため、constを使って宣言と同時に代入できる

//何も指定がなければ通常衣装、指定があればその衣装を着ているまゆずみ
const addPrefix = (string, option)=>{
    const pre = typeof option === "string" ? option : "通常衣装";
    return pre + string;
}

console.log(addPrefix("まゆずみ"));  //通常衣装まゆずみ
console.log(addPrefix("まゆずみ","ライバーTシャツ")); //ライバーTシャツまゆずみ



//if文を使った場合は、宣言と代入を分ける必要があるため、constを使うことができない

//自分が書いたコード
const addPrefixIf = (string,option)=>{
    if(typeof option === "string"){
        return option + string;
    }else{
        return "通常衣装" + string;
    }
}

//お手本のコード
// function addPrefix(text, prefix) {
//     let pre = "デフォルト:";
//     if (typeof prefix === "string") {
//         pre = prefix;
//     }
//     return pre + text;
// }

console.log(addPrefixIf("まゆずみ"));  //通常衣装まゆずみ
console.log(addPrefixIf("まゆずみ","黒シャツ")); //黒シャツまゆずみ
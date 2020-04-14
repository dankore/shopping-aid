module.exports = function uniqId(){
    const idx = random50();
    const num = random10000();

    return data[idx].concat(num).concat("-list")
}


function random50(){
    // GENERATE A RANDOM NUM FROM 0 TO 50 BOTH EDGES INCLUDED
    const min = 0, max = 51;
    return Math.floor(Math.random() * (max-min))+min;
}

function random10000(){
    // GENERATE A RANDOM NUM FROM 0 TO 10,000 BOTH EDGES INCLUDED
    const min = 0, max = 100;
    return Math.floor(Math.random() * (max-min))+min;
}





const data = [
"funny",
"adorable",
"accepted",
"acclaimed",
'ethical',
'easy',
'ecstatic',
'action',
"active",
"admire",
"adventure",
"earnest",
"affluent",
"agree",
"agreeable",
"amazing",
"angelic",
"appealing",
"approve",
"aptitude",
"friendly",
"awesome",
'beaming',
'imagine',
'believe',
'fun',
'bliss',
'fresh',
'bounty',
'brave',
'bravo',
'bgood',
'bubbly',
'calm',
'esteemed',
'certain',
'champ',
'champion',
'charming',
'cheery',
'choice',
'classic',
'ideal',
'clean',
'commend',
'composed',
'free',
'constant',
'cool',
'joy'
]

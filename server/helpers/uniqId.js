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
    const min = 0, max = 10000;
    return Math.floor(Math.random() * (max-min))+min;
}

const data = [
"absolutely",
"adorable",
"accepted",
"acclaimed",
'accomplish',
'accomplishment',
'achievement',
'action',
"active",
"admire",
"adventure",
"affirmative",
"affluent",
"agree",
"agreeable",
"amazing",
"angelic",
"appealing",
"approve",
"aptitude",
"attractive",
"awesome",
'beaming',
'beautiful',
'believe',
'beneficial',
'bliss',
'bountiful',
'bounty',
'brave',
'bravo',
'brilliant',
'bubbly',
'calm',
'celebrated',
'certain',
'champ',
'champion',
'charming',
'cheery',
'choice',
'classic',
'classical',
'clean',
'commend',
'composed',
'congratulation',
'constant',
'cool',
'courageous'
]

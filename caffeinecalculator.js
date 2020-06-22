function mg(food, amount){
    let caff = 0;
    if(food === 'chocolate'){return caff = (amount*12)/ 28.4;}
    if(food === 'coffee'){return caff = amount * 11/ 29.57;}
    if(food === 'espresso'){return caff = amount * 60/ 29.57;}
    if(food === 'cola'){return caff = amount * 2/ 29.57;}
    if(food === 'redbull'){return caff = amount * 9/ 29.57;}
    if(food === 'tea'){return caff = amount * 6/ 29.57;}
}

module.exports = mg;

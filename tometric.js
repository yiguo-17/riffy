function metric( amount,unit,food){
    let mass = 0;
    let volume = 0;
    if (food ==='chocolate'){return mass = amount * 28.4;}
    else if (unit === 'tall cup'||unit === 'small cup'||unit === 'can'||unit === 'cup'){return volume = amount *29.57 * 12;}
    else if (unit === 'grande cup'||unit === 'medium cup'){return volume = amount *29.57 * 16;}
    else if (unit === 'venti cup'||unit === 'large cup'){return volume = amount *29.57 * 20;}
    else {return volume = amount * 29.57;}
}

module.exports = metric;
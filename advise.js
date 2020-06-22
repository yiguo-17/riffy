function advise(caffeine){
    const hour = (new Date).getHours();
    if(caffeine <= 200){return 'You have take healthy amount. Have a nice day.';}
    else if(caffeine > 200 && caffeine <400 && hour < 14){return 'Long day ahead. Take a break.'}
    else if(caffeine > 200 && caffeine <400){return 'Hard working day. Keep on going.'}
    else {return 'You have exceeded the recommended amount(400 mg). Watch out your diet.'}
}

module.exports = advise;

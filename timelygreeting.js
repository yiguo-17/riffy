function greeting(){
    let message = 'Thank you for using this app. Please entry the food or drink containing caffeine with the amount you taken today, e.g. 1 cup coffee';
    const hour = (new Date).getHours();
    if(hour >= 5 && hour <12) {return message = 'Good morning! ' + message;} 
    else if(hour >= 12 && hour <14) {return message = 'Good day! ' + message;}
    else if(hour >= 14 && hour <19) {return message = 'Good afternoon! ' + message;}
    else {return message = 'Good evening! ' + message;}
}

module.exports = greeting;

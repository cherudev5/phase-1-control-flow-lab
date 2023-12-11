function scuberGreetingForFeet(feet){
      let result;
    if (feet <= 400) {
      return'This one is on me!';
    } else if (feet > 2000 && feet < 2500) {
      return'I will gladly take your thirty bucks.';
    } else if (feet >= 2500) {
      return'No can do.';
    }
    return result;
  }
  
function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }

function switchOnCharmFromTip(tip) {
    let response;
    switch (tip) {
      case 'generous':
        return'Thank you so much.';
        break;
      case 'not as generous':
        return'Thank you.';
        break;
      default:
        return'Bye.';
        break;
    }
    return response;
  }
  


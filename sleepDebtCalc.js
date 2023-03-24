const getSleepHours = day => {
switch(day){
  case 'monday':
  return 8;
  break;
  case 'tuesday':
  return 7;
  break;
  case 'wednesday':
  return 6;
  break;
  case 'thursday':
  return 12;
  break;
  case 'friday':
  return 4;
  break;
  case 'saturday':
  return 3;
  break;
  case 'sunday':
  return 2;
  default:
  return 'erorr'
  
}

};

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours ('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours ('saturday') + getSleepHours('sunday');
 
const getIdealSleepHours = () =>{
const idealHours = 8;
return idealHours * 7;
};

const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours) {
  console.log('You got' + (idealSleepHours -actualSleepHours ) + 'more hours this week');
}
else if(actualSleepHours > idealSleepHours){
console.log('You should get some more rest because you got slept' + (idealSleepHours -actualSleepHours) + 'hour less then you should this week');
}
 else if(actualSleepHours < idealSleepHours) {
  console.log('get some rest ' + (idealSleepHours -actualSleepHours) + ' not good');
} else {
  console.log('something is wrong');
}
};
calculateSleepDebt();


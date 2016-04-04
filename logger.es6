/**
 * Created by root on 4/1/16.
 */
let checkName= (firstName, lastName) => {
    if(firstName !== 'nader' || lastName !== 'dabit') {
        console.log('You are not Nader Dabit');
    } else {
        console.log('You are Nader Dabit');
    }
}
checkName('nader', 'jackson');
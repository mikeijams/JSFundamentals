//switch statements

let friend ;

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring sourdugh bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your backyard?')
        break;
    case 'Alecx':
        console.log('Hey Alecx, how many Magic cards do you own?');
        break;
    default:
        console.log(`Im sorry, ${friend}, but do i know you?`);

}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
        default:
            console.log('yep, is a string or a number');
}
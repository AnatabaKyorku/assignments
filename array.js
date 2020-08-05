let shoppinglist =['milk','bread','toffee'];

let input = prompt('what do you want to do?');
while(input!='quit'){
   if(input= 'list'){
    console.log(shoppinglist);
    } else if(input= 'new'){
    let item = prompt('add new shopping item');
    shoppinglist.push(item);
    }
    input=prompt('what do you want to do?');
}


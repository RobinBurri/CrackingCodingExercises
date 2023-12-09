import {Node, SingleLL} from './0_sandbox.js'

const possiblities = [1,2,3,4,5,6,7,8,9];
// I want to return one element randomly from the array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let list = new SingleLL();

for (let i = 0; i < 20; i++) {

    for (let j = 0; j < 10; j++) {
        list.addToTail(new Node(getRandomElement(possiblities)));
    }


}

list.removeDup();
list.printNodes();


const prompt = document.querySelector('#search input');
const add = document.querySelector('#search button');
const list = document.querySelector('#list');

//array, with every elem as note for the list
let notes = [];


//func, highlighting clicked dom-element
const on_pointer_down = function(event) {

}

//func, adding/removing notes and corresponding dom-elems
const on_pointer_up = function(event) {

}

//removes notes- and dom-elems
const on_remove = function(event) {

}

//adds notes- and dom-elems
const on_add = function(event) {
	
}


document.addEventListener('pointerdown', on_pointer_down);
document.ddEventListener('pointerup', on_pointer_up);

/*custom events:
-remove - removes element from notes and corresponding dom-elem
-add - adds elem to notes and inserts corresponding dom-elem*/
document.addEventListener('remove', on_remove);
document.addEventListener('add', on_add);
const prompt = document.querySelector('#search input');
const add = document.querySelector('#search button');
const list = document.querySelector('#list');

//array, with every elem as note for the list
//let notes = [];


const add_elem = function() {
	const text = prompt.value;

	if (text === '') return;

	//creating li
	const note = document.createElement('li');
	//creating paragraph
	const p = document.createElement('p');
	p.append(text);
	//creating button
	const btn = document.createElement('button');
	btn.classList.add('outline');
	btn.classList.add('btn');
	btn.classList.add('remove');
	btn.append('remove');

	note.append(p);
	note.append(btn);

	list.append(note);

	prompt.value = '';
}

//func, highlighting clicked dom-element
const on_pointer_down = function(event) {
	//toggles highlighting
	const elem = event.target;
	if ( elem.className.search('btn') > -1 ) {
		event.target.classList.toggle('down');
	}
}

//func, adding/removing notes and corresponding dom-elems
const on_pointer_up = function(event) {
	//toggles highlighting
	const elem = event.target;
	if ( elem.className.search('btn') > -1 ) {
		event.target.classList.toggle('down');
	}

	//adds note if it's 'add' button
	if ( elem.className.search('add') > -1 ) {
		add_elem();
	}

	//remove note if it's 'remove' button
	if ( elem.className.search('remove') > -1 ) {
		elem.parentElement.remove();
	}
}

//the func processes adding elems via etner
const on_key_down = function(event) {
	if (event.code !== 'Enter') return;
	add_elem();
}

//removes notes- and dom-elems
const on_remove = function(event) {

}

//adds notes- and dom-elems
const on_add = function(event) {

}


document.addEventListener('pointerdown', on_pointer_down);
document.addEventListener('pointerup', on_pointer_up);
document.addEventListener('keydown', on_key_down);

/*custom events:
-remove - removes element from notes and corresponding dom-elem
-add - adds elem to notes and inserts corresponding dom-elem*/
document.addEventListener('remove', on_remove);
document.addEventListener('add', on_add);
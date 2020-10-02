const prompt = document.querySelector('#search input');
const add = document.querySelector('#search button');
const list = document.querySelector('#list');


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

	//animation via pure JS & CSS
	/*note.style = `
		animation: emerging .5s;
		animation-fill-mode: backwards`;*/

	//animation via animate.css
	note.className = `animate__animated 
		animate__fadeInRight
		animate__faster`;

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

//func, adding/removing notes
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
		//fading with pure JS & CSS
		/*elem.parentElement.style = `
			animation: fading .5s;
			animation-fill-mode: forwards;`;*/
		elem.parentElement.className = `animate__animated
			animate__fadeOutRight
			animate__faster`;
		setTimeout( () => elem.parentElement.remove(), 500 );
	}
}

//the func processes adding notes via etner
const on_key_down = function(event) {
	if (event.code !== 'Enter') return;
	add_elem();
}


document.addEventListener('pointerdown', on_pointer_down);
document.addEventListener('pointerup', on_pointer_up);
document.addEventListener('keydown', on_key_down);
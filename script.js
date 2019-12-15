const submit = document.getElementById('submit');

const checkEmail = () => {
	event.preventDefault();
	let form = document.forms['form']['email'].value;
	const email = /\S+@\S+\.\S+/;
	// Validate input
	if (!form.match(email) || form === ''){
		document.getElementById('inputField').classList.remove('inactive');
		document.getElementById('inputField').classList.add('empty-field');
		document.getElementById('err').style.display ='inline';
	} else if (form.match(email)) {
		document.querySelector('form').reset();
		document.getElementById('err').style.display ='none';
		document.getElementById('inputField').classList.add('inactive');
		document.getElementById('inputField').classList.remove('empty-field');
  	}
}
  
submit.addEventListener('click', checkEmail)


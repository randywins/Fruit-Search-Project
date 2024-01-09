// Randy Nguyen
// Fruit Search Project

//constant variables

//creates constant variable input that pulls out the fruit id in the DOM
const input = document.querySelector('#fruit'); 
//creates constant variable suggestions that pulls out the suggestions class then selects the ul
const suggestions = document.querySelector('.suggestions ul');

//creates constant variable fruit that contains an array of different types of fruit
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 
'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 
'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 
'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 
'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 
'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// The search function goes through the fruit array and picks out those that contain the string 
// the user types in the search input field, and adds them to the results array to be returned
// while checking for cases too
function search(str) {
	let results = [];
	 
	results = str != ''? fruit.filter(e => e.toLowerCase().includes(str.toLowerCase())) : [];

	return results;
}

// The searchHandler function takes the target value and puts it into a variable
// then puts it into the search function and creates a new variable called searchResults
// then the two values searchStr and searchResults is run through the showSuggestions function
// to populate the drop down menu
function searchHandler(e) {
	let searchStr = e.target.value;
	let searchResults= search(searchStr);
	showSuggestions(searchResults, searchStr);
}

// The showSuggestions function then creates an suggestions variable and includes a forEach function that
// takes the input value and creates a drop down list that have the same characters that the user types
// and also replaces the user input with a <strong> value
// Then it adds the event listener when the user clicks on the result wanted it then appends the input value
// in search box by adding it to the suggestions value
function showSuggestions(results, inputVal) {

	suggestions.innerHTML = '';

	results.forEach(item => {
		let itemEl = document.createElement('li');
		let newText = item.replace(inputVal, `<strong>${inputVal}</strong>`);
		itemEl.innerHTML = newText;
		itemEl.addEventListener('click', useSuggestion)
		suggestions.appendChild(itemEl);
	});
}

// The useSuggestion function grabs the fruit element by ID and creates the textContent variable
// This function is used inside the showSuggestions function so that the users input is displayed when
// the element is clicked in the drop down list
function useSuggestion(e) {
	document.getElementById('fruit').value = e.target.textContent;
	suggestions.innerHTML = '';

	console.log(e.target.textContent);

}

//this are event listeners for the constant variables that includes the type of event listener
// and contains the searchHandler and useSuggestion functions
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
//chrome.runtime.onInstalled.addListener( () => {
const text = document.createElement('p');
text.innerText = 'Array: \n For Loop:';
text.style.color = 'white';
text.style.position = 'fixed';
text.style.top = '100px';
text.style.right = '20px';
text.style.backgroundColor = 'black';
text.style.padding = '10px';
text.style.zIndex = '1000'; // Ensure it stays on top

document.querySelector('body').appendChild(text);

// const value = document.querySelector(
//   '.unit-progress text-right col-xs-12 p'
// ).innerText;
// console.log(value);
//});

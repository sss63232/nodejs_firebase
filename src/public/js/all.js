let content = document.getElementById('content');
let send = document.getElementById('send');
let list = document.getElementById('list');

send.addEventListener('click', e => {
  e.preventDefault();
  let string = content.value;
  fetch('http://127.0.0.1:3000/addtodoitem', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: string }),
  })
    .then(res => res.json())
    .then(data => showItems(data));
});

list.addEventListener('click', e => {
  if (e.target.nodeName === 'INPUT') {
    e.preventDefault();
    fetch('http://127.0.0.1:3000/removeitem', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: e.target.dataset.id }),
    })
      .then(res => res.json())
      .then(data => showItems(data));
  }
});

function showItems(data) {
  if (data.success) {
    list.innerHTML = '';
    let valueObj = data.value;
    let liString="";
    for (const key in valueObj) {
      if (valueObj.hasOwnProperty(key)) {
        const elem = valueObj[key];
        liString+=
        `
        <li>
            ${elem.content}
            <input data-id=${key} type='button' value='remove'>
        </li>
        `
      }
    }
    list.innerHTML = liString;
  } else {
    console.log('------------------------------------');
    console.log('wrong');
    console.log('------------------------------------');
  }
}

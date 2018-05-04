let txt = document.getElementById("txt");
let send = document.getElementById("send");
let list = document.getElementById("list");

let todos = firebase.database().ref("todos");

$.ajax({
    url: 'https://randomuser.me/api/?results=5',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
        

send.addEventListener("click", () => {
    todos.push({
        content: txt.value
    });
    txt.value = "";
});

// 資料一有變動，自動執行 callback
todos.on("value", snapshot => {
    list.innerHTML="";
    let data = snapshot.val();
    for (let key in data) {
        let li = document.createElement("li");
        li.textContent = data[key].content;
        li.setAttribute('data-key',key);
        list.appendChild(li);
    }

    list.addEventListener("click", e=>{
        let key = e.target.dataset.key;
        if(key){
            todos.child(key).remove();
        }
    })
});
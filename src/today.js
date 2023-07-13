
const displayTodaysTasks = (parent, name, list) => {
    parent.innerHTML = "";

    const listName = document.createElement('p');
    listName.innerHTML = name;
    parent.appendChild(listName);

    const viewListDiv = document.createElement('div');
    parent.appendChild(viewListDiv);

    viewListDiv.innerHTML = "";
        for(let i = 0; i < list.length; i++){
            console.log(list[i].getDueDate);
            if(isToday(new Date(list[i].getDueDate+'T00:00:00'))){
                let item = document.createElement('div');
                item.classList.add('item');
                item.innerHTML = list[i].getDescription + "   " + list[i].getDueDate;
                viewListDiv.appendChild(item);
            }
        }
}

const isToday = (someDate) => {
    const today = new Date();
    
    console.log(someDate.getFullYear());
    console.log(someDate.getDate());
    console.log(someDate.getMonth());
    console.log('--------');
    console.log(today.getFullYear());
    console.log(today.getDate());
    console.log(today.getMonth());

    return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}

export {
    displayTodaysTasks
}
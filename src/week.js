
const displayWeeksTasks = (parent, name, list) => {
    parent.innerHTML = "";

    const listName = document.createElement('p');
    listName.innerHTML = name;
    parent.appendChild(listName);

    const viewListDiv = document.createElement('div');
    parent.appendChild(viewListDiv);

    viewListDiv.innerHTML = "";
        for(let i = 0; i < list.length; i++){
            console.log(list[i].getDueDate);
            if(isWeek(new Date(list[i].getDueDate+'T00:00:00'))){
                let item = document.createElement('div');
                item.classList.add('item');
                item.innerHTML = list[i].getDescription + "   " + list[i].getDueDate;
                viewListDiv.appendChild(item);
            }
        }
}

const isWeek = (someDate) => {
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();
  
    // get first date of week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
  
    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
  
    // if date is equal or within the first and last dates of the week
    return someDate >= firstDayOfWeek && someDate <= lastDayOfWeek;
}

export {
    displayWeeksTasks
}
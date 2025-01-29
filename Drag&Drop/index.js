/* Things to know
1). Conform which section has to be dragged
2). Notice where the element has dropped

*/

const draggables= document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

// First the item will be dragged by triggering event
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', ()=>{
        // console.log("drag-start")
        draggable.classList.add('dragging');//On dragging container item will be equipped means add classname on clicked within container
    })
    draggable.addEventListener("dragend",  ()=>{
        draggable.classList.remove('dragging')
    })
});

containers.forEach(container=>{
    container.addEventListener('dragover', e => {
        // console.log("dragover");
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null){
            container.appendChild(draggable);}
            else{
                container.insertBefore(draggable, afterElement);
            }
    })
})

function getDragAfterElement(container, y){
    // will drag not everyitems but only that element that has classname draggable and dragging
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child)=>{
        const box= child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        // console.log(box);
        if(offset < 0 && offset > closest.offset){
            return{offset: offset, element: child}
        }else{
            return closest
        }
    },{offset: Number.NEGATIVE_INFINITY, element:null}).element;
}
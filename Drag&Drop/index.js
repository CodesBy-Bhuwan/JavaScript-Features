/* Things to know
1). Conform which section has to be dragged
2). Notice where the element has dropped

*/

const dragges= document.querySelector(".draggable");
const containers = document.querySelector(".containers");

// First the item will be dragged by triggering event
dragges.forEach(dragges => {
    dragges.addEventListener('dragstart', ()=>{
        // console.log("drag-start")
        dragges.classList.add('dragging');//On dragging container item will be equipped means add classname on clicked within container
    })
    dragges.addEventListener("dragstop",  ()=>{
        dragges.classList.remove('dragging')
    })
    
});
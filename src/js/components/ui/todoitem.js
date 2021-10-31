import makeElement from "../../utils/makeElement"
import button from "./button"
const todoitem = function (elementType='li', className="list-item", id="", title="", category="", endDate="", isComplete=""){
     const template = `
     <${elementType} class="${className}" id="${id}"> 
        <h3>${title}</h3>
        <h4>${category}</h4>
        <p>Due: ${endDate}</p>
        <p class="${isComplete}">Completed:</p>
        <p><a href="">Edit</a></p> 
        <p><a href="">Delete</a></p>
     </ ${elementType}>`
     const element = makeElement(template)

     return element
}

export default todoitem
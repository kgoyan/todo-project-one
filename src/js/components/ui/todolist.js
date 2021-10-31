import makeElement from "../../utils/makeElement"

const levelHeading = function (elementType='ul', label="ui list", className="ui-list"){
     const template = `
        <${elementType} class="${className}"> 
        </ ${elementType}>`
     const element = makeElement(template)

     return element
}

export default levelHeading
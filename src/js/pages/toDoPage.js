import levelHeading from '../components/ui/levelHeading'
import button from '../components/ui/button'
import todolist from '../components/ui/todolist'
import todoitem from '../components/ui/todoitem'
import link from '../components/ui/link'
import titleIcon from '../components/icons/logo'
const toDoPage = function (){
   

    const brandingheader = document.createElement('header')
    const todoMain = document.createElement('main')
    // header//
    const back = link('go back', '/', 'return-link')
    const h1 = levelHeading('h1','Kainers app!')
    const h2 = levelHeading('h2','An app deigned by me, for me!' )
    const ul = todolist('ul')
    const li1 = todoitem('li', 'list-item', '1', 'School', 'Education' , 'Wednesday, December 69th', 'completed',)
    const li2 = todoitem('li', 'list-item', '2', 'Work', 'Labor' , 'Tuesday, December 27th', 'incomplete',)
    const li3 = todoitem('li', 'list-item', '3', 'Tapdancing', 'Dance' , 'Monday, August 24th', 'completed',)
    const li4 = todoitem('li', 'list-item', '4', 'Tuba Practice', 'Music' , 'Wednesday, December 69th', 'incomplete',)
    const li5 = todoitem('li', 'list-item', '5', 'Football', 'Sports' , 'Wednesday, December 69th', 'incomplete',)
    brandingheader.append(titleIcon())
    brandingheader.append(h1)
    brandingheader.append(h2)
    brandingheader.append(back)
    brandingheader.append(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)

    const addToDo = button('+')
    brandingheader.append(addToDo)

    return brandingheader
      
}

export default toDoPage
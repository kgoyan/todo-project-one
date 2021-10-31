import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'
import titleIcon from '../components/icons/logo'
const homePage = function (){
   

    const header = document.createElement('header')
    const h1 = levelHeading('h1','Kainers app!')
    const h2 = levelHeading('h2', 'Holy Smokes!')
    const toDo = link('To the App!', '/todo', 'home-link')
    const noPage = link('404 page', '/notfound', 'home-link')
    header.append(titleIcon())
    header.append(h1)
    header.append(h2)
    header.append(toDo)
    header.append(noPage)

    return header
      
}

export default homePage
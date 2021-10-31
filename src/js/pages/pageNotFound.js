import levelHeading from "../components/ui/levelHeading";
import link from "../components/ui/link";
import titleIcon from '../components/icons/logo'

const pageNotFound = function (){
    const backToSafety = link("back to safety", '/', 'return-link')
    const header = document.createElement('header')
    const h1 = levelHeading('h1','404 page!')
    const h2 = levelHeading('h2', 'Holy Smokes!')
    header.append(titleIcon())
    header.append(h1)
    header.append(h2)
    header.append(backToSafety)

    return header
}

export default pageNotFound
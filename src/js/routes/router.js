import homePage from "../pages/homePage";
import toDoPage from "../pages/toDoPage";
import pageNotFound from "../pages/pageNotFound";


/* 
    Object 
    Routes  
     key       value
    route    page.js
*/

 

const routes = {
    '/':homePage(),
    '/todo':toDoPage(),
    '/notfound':pageNotFound()
    
    
    
}

const Router = function(pathname){

    console.log(pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''
    
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )
    
        app.appendChild(routes[window.location.pathname])
    
    }

export {routes}

export default Router
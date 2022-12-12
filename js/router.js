export class Router {
    routes = {}
        add(routeName , page) {
    this.routes[routeName] = page
        } 
    
        route(event) {
            event = event || window.event
            event.preventDefault()
            window.history.pushState({}, "", event.target.href )
            this.handle()
            }
              
     handle (){
        const {pathname }= window.location
        const route = this.routes[pathname] || this.routes[404]
        const urls = {
            '/': './assets/mountains-universe-1.svg',
            '/universe': './assets/mountains-universe-2.svg',
            '/exploration': './assets/mountains-universe-3.svg',
            404: './assets/mountains-universe-3.svg'
          }
        fetch(route)
        .then(data => data.text())
        .then(html => {document.querySelector('#app').innerHTML = html})
        document.querySelector('.image').setAttribute('src', urls[pathname])
    }
    }
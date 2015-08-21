import { Start } from './components/start';
import { About } from './components/about';
import { Contact } from './components/contact';

@RouteConfig([
    { path: '/', component: Start, as: 'start'}
    { path: '/about', component: About, as: 'about'}
    { path: '/contact', component: Contact, as: 'contact'}
])
class App {
....
}

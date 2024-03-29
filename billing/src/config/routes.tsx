import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { Welcome } from "../views/Welcome";
import { Footer } from "../components/welcome/Footer";
import { StartPage } from "../views/StartPage";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    { 
        path: '/welcome', 
        component: Welcome,
        children: [
            { path: '', redirect: '/welcome/1' },
            { path: '1', name:'welcome1', components: { main: First, footer: Footer } },
            { path: '2', name:'welcome2', components: { main: Second, footer: Footer } },
            { path: '3', name:'welcome3', components: { main: Third, footer: Footer } },
            { path: '4', name:'welcome4', components: { main: Forth, footer: Footer } },
        ] 
    },
    {
        path: '/start',
        component: StartPage
    }
]
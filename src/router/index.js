import Home from "@/components/Home";
import Login from "@/components/Login";
import tableView from "@/components/tableView";
const routers=[
    {
        path:"/home",
        component:Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/",
        component: tableView
    }


]
export   {routers};
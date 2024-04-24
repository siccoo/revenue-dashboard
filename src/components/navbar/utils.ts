import { TNavMenu, TProfileItem, TUser } from "../../types";
import { bug, group, home, insert_chart, payments, purchaseHistory, referAndEarn, settings, signout, switchUser, widgets } from "./assets";

export const navMenu: TNavMenu[] = [
    {
        name: 'Home',
        image: home
    },
    {
        name: 'Analytics',
        image: insert_chart
    },
    {
        name: 'Revenue',
        image: payments
    },
    {
        name: 'CRM',
        image: group
    },
    {
        name: 'Apps',
        image: widgets
    },
]

export const userProfileItems: TProfileItem[] = [
    {title: 'Settings', img: settings},
    {title: 'Purchase History', img: purchaseHistory},
    {title: 'Refer and Earn', img: referAndEarn},
    {title: 'Integrations', img: widgets},
    {title: 'Report Bug', img: bug},
    {title: 'Switch Account', img: switchUser},
    {title: 'Logout', img: signout}
]


export const getInitials = (user: TUser): string=> {
    const first = user.first_name.charAt(0)
    const second = user.last_name.charAt(0)
    const initials = first + second
    return initials.toUpperCase()
}
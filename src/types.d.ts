export type TUser = {
  email: string;
  first_name: string;
  last_name: string;
};

export type TNavMenu = {
    name: 'Home' | 'Analytics' | 'Revenue' | 'CRM' | 'Apps'
    image: string
}

export type TProfileItem = {
    title: 'Settings' | 'Purchase History' | 'Refer and Earn' |'Integrations' |'Report Bug' |'Switch Account' | 'Logout'
    img: string
}

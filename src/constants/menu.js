
export const menuItems = ['Services', 'Technologies', 'Solutions', 'Industries'];
export const subMenuItems = [
    {
        parent: 'Services',
        child: ['Social Media Marketing', 'Product Engineering', 'Web & Mobile App Development', 'API Development']
    },
    {
        parent: 'Technologies',
        child: ['Flutter', 'Laravel', 'React.js', 'Python & Swift']
    },
    {
        parent: 'Solutions',
        child: ['Customer Relationship Management', 'Enterprise Resource Planning', 'Inventory Management']
    },
    {
        parent: 'Industries',
        child: ['Healthcare', 'Education', 'Retail', 'Media & Publishing']
    },
];

let menu = false;
export default menu;
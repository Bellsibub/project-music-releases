// Trigger: User clicks on hamburger menu
export const toggleSidebar = () => {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('display');
};

export default toggleSidebar;

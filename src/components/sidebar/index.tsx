import { useEffect } from 'react';

interface SidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen, children }: SidebarProps) => {
  useEffect(() => {
    const closeSidebar = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', closeSidebar);

    return () => {
      window.removeEventListener('keydown', closeSidebar);
    };
  }, [setIsOpen]);

  return (
    <div className={`fixed inset-0 z-10 overflow-y-auto transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setIsOpen(false)}></div>
      <div className={`mt-4 shadow-lg rounded-md p-3 fixed top-0 right-3 h-[96%] w-[450px] bg-white z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

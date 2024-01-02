'use client';
interface MobileMenuProps {
  visible?: boolean;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-4 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center hover:underline select-none">
          Home
        </div>
        <div className="px-3 text-center hover:underline select-none">
          Series
        </div>
        <div className="px-3 text-center hover:underline select-none">
          Films
        </div>
        <div className="px-3 text-center hover:underline select-none">
          New & Popular
        </div>
        <div className="px-3 text-center hover:underline select-none">
          My List
        </div>
        <div className="px-3 text-center hover:underline select-none">
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

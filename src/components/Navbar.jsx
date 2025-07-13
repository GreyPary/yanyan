import {
  HiOutlineSearch,
  HiOutlineX,
  HiOutlineAdjustments,
  HiOutlineMoon,
} from "react-icons/hi";

const Navbar = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex w-full h-14 items-center justify-between bg-stone-200 dark:bg-stone-800 shadow-xl px-6 py-2">
      <h1 className="font-bold text-2xl text-black/90 dark:text-white/90">
        Yan Yan
      </h1>
      <div className="hidden md:flex w-full max-w-lg h-full items-center rounded-full bg-stone-300 px-4 py-2 gap-2">
        <HiOutlineSearch size={18} />
        <input
          type="text"
          placeholder="Search recipes..."
          className="flex flex-1 h-full focus:outline-none"
        />
        <HiOutlineX size={18} />
        <HiOutlineAdjustments size={18} />
      </div>
      <button onClick={() => toggleTheme()}>
        <HiOutlineMoon size={22} className="text-black/90 dark:text-white/90" />
      </button>
    </div>
  );
};

export default Navbar;

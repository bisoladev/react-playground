import { cn } from "../lib/utils";
import TopSidebar from "./TopSidebar";

const Sidebar = () => {
  return (
    <aside
      className={cn("bg-[#1c232e] w-52 lg:w-72 flex-shrink-0 rounded-r-xl")}
    >
      <TopSidebar />
    </aside>
  );
};

export default Sidebar;

import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <main className="bg-[#F5F7FA] flex min-h-dvh">
      <Sidebar />
      <div className="flex-1">Content</div>
    </main>
  );
};

export default AppLayout;

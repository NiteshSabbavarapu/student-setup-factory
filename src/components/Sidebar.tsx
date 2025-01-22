import { Home, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-[64px] h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 z-40">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-mit-primary mb-4">Navigation</h2>
        <div className="space-y-2">
          <SidebarItem icon={Home} label="Student Marketplace" active />
          <SidebarItem icon={BookOpen} label="Student Resources" />
        </div>
      </div>
    </aside>
  );
};

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  active 
}: { 
  icon: any; 
  label: string; 
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors",
        active ? "bg-mit-primary text-white" : "hover:bg-gray-100"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </div>
  );
};
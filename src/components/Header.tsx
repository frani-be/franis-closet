import { Sparkles } from "lucide-react";
import avatarImg from "../assets/avatar.png";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-8 md:px-12">
      <div className="flex items-center gap-3">
        <Sparkles className="h-8 w-8 text-frani-purple-50" strokeWidth={1.5} />
        <h1 className="text-3xl font-bold text-frani-gray-800 md:text-4xl">
          Frani's Closet
        </h1>
      </div>
      
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
        <img 
          src={avatarImg} 
          alt="Frani's avatar" 
          className="h-full w-full object-cover"
        />
      </div>
    </header>
  );
};

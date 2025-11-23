import { Sparkles } from "lucide-react";
import type { OutfitData } from "./InputArea";

interface OutputAreaProps {
  outfitData: OutfitData;
}

export const OutputArea = ({ outfitData }: OutputAreaProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Sparkles className="h-8 w-8 text-frani-purple-500" strokeWidth={1.5} />
        <h2 className="text-2xl font-bold text-frani-gray-800">
          Tu Outfit Perfecto
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="rounded-lg bg-frani-purple-50 p-6">
          <p className="text-lg leading-relaxed text-frani-gray-700">
            <span className="font-bold text-frani-purple-600">
              Para tu charla en el GDG:
            </span>
            {" "}
            Jeans negros de tiro alto, la polera negra de Windsurf y tus botines favoritos. 
            <span className="ml-2 font-semibold text-frani-purple-500">
              ¡Éxito! 🚀
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
          <div className="rounded-lg bg-frani-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-frani-gray-500">
              Fecha
            </p>
            <p className="mt-1 text-sm font-medium text-frani-gray-800">
              {new Date(outfitData.date).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>

          <div className="rounded-lg bg-frani-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-frani-gray-500">
              Clima
            </p>
            <p className="mt-1 text-sm font-medium text-frani-gray-800">
              {outfitData.weather}
            </p>
          </div>

          <div className="rounded-lg bg-frani-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-frani-gray-500">
              Ocasión
            </p>
            <p className="mt-1 text-sm font-medium text-frani-gray-800">
              {outfitData.vibe}
            </p>
          </div>

          <div className="rounded-lg bg-frani-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-frani-gray-500">
              Comodidad
            </p>
            <p className="mt-1 text-sm font-medium text-frani-gray-800">
              {outfitData.comfort}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

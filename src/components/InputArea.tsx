import { Calendar, Cloud, Heart, Smile, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface InputAreaProps {
  onGenerate: (data: OutfitData) => void;
  isLoading: boolean;
}

export interface OutfitData {
  date: string;
  weather: string;
  vibe: string;
  comfort: string;
}

const weatherOptions = [
  { value: "sunny", label: "Soleado", icon: "☀️" },
  { value: "rainy", label: "Lluvia", icon: "🌧️" },
  { value: "cold", label: "Frío", icon: "❄️" },
  { value: "hot", label: "Calor infernal", icon: "🔥" },
];

const vibeOptions = [
  { value: "gdg", label: "Charla GDG", icon: "🎤" },
  { value: "date", label: "Cita", icon: "💕" },
  { value: "party", label: "Fiesta", icon: "🎉" },
  { value: "office", label: "Oficina", icon: "💼" },
  { value: "zombie", label: "Modo Zombie", icon: "🧟" },
];

const comfortOptions = [
  { value: "pijama", label: "Pijama accepted", icon: "😴" },
  { value: "casual", label: "Casual", icon: "👕" },
  { value: "fancy", label: "Fancy", icon: "✨" },
];

export const InputArea = ({ onGenerate, isLoading }: InputAreaProps) => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [vibe, setVibe] = useState("");
  const [comfort, setComfort] = useState("");

  const handleGenerate = () => {
    if (date && weather && vibe && comfort) {
      onGenerate({ date, weather, vibe, comfort });
    }
  };

  const isFormComplete = date && weather && vibe && comfort;

  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-6 md:px-12">
      {/* Date Selector */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-lg font-semibold text-frani-gray-800">
          <Calendar className="h-5 w-5" strokeWidth={1.5} />
          Fecha
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-lg border-2 border-frani-purple-200 bg-white px-4 py-3 text-frani-gray-800 transition-all focus:border-frani-purple-400 focus:outline-none focus:ring-2 focus:ring-frani-purple-200"
          aria-label="Seleccionar fecha"
        />
      </div>

      {/* Weather Selector */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-lg font-semibold text-frani-gray-800">
          <Cloud className="h-5 w-5" strokeWidth={1.5} />
          Clima
        </label>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {weatherOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setWeather(option.value)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-lg border-2 bg-white px-4 py-4 transition-all hover:scale-105",
                weather === option.value
                  ? "border-frani-purple-400 bg-frani-purple-50 shadow-lg"
                  : "border-frani-purple-200 hover:border-frani-purple-300"
              )}
              aria-label={`Seleccionar clima ${option.label}`}
            >
              <span className="text-3xl">{option.icon}</span>
              <span className="text-sm font-medium text-frani-gray-700">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Vibe Selector */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-lg font-semibold text-frani-gray-800">
          <Heart className="h-5 w-5" strokeWidth={1.5} />
          Vibe / Ocasión
        </label>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {vibeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setVibe(option.value)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-lg border-2 bg-white px-4 py-4 transition-all hover:scale-105",
                vibe === option.value
                  ? "border-frani-purple-400 bg-frani-purple-50 shadow-lg"
                  : "border-frani-purple-200 hover:border-frani-purple-300"
              )}
              aria-label={`Seleccionar ocasión ${option.label}`}
            >
              <span className="text-3xl">{option.icon}</span>
              <span className="text-sm font-medium text-frani-gray-700">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Comfort Selector */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-lg font-semibold text-frani-gray-800">
          <Smile className="h-5 w-5" strokeWidth={1.5} />
          Nivel de comodidad
        </label>
        <div className="grid grid-cols-3 gap-3">
          {comfortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setComfort(option.value)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-lg border-2 bg-white px-4 py-4 transition-all hover:scale-105",
                comfort === option.value
                  ? "border-frani-purple-400 bg-frani-purple-50 shadow-lg"
                  : "border-frani-purple-200 hover:border-frani-purple-300"
              )}
              aria-label={`Seleccionar nivel de comodidad ${option.label}`}
            >
              <span className="text-3xl">{option.icon}</span>
              <span className="text-sm font-medium text-frani-gray-700">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Magic Button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={handleGenerate}
          disabled={!isFormComplete || isLoading}
          className={cn(
            "flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl transition-all",
            isFormComplete && !isLoading
              ? "bg-frani-purple-500 hover:scale-105 hover:bg-frani-purple-600 hover:shadow-2xl"
              : "cursor-not-allowed bg-frani-gray-400 opacity-50"
          )}
          aria-label="Generar outfit con IA"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin" strokeWidth={1.5} />
              Creando tu outfit...
            </>
          ) : (
            <>
              <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              ¡Vísteme, IA!
            </>
          )}
        </button>
      </div>
    </div>
  );
};

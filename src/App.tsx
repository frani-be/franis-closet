import { useState } from "react";
import { Header } from "./components/Header";
import { InputArea, type OutfitData } from "./components/InputArea";
import { OutputArea } from "./components/OutputArea";

function App() {
  const [outfitData, setOutfitData] = useState<OutfitData | null>(null);

  const handleGenerate = (data: OutfitData) => {
    setOutfitData(data);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="space-y-12 pb-12">
        <InputArea onGenerate={handleGenerate} />
        <OutputArea outfitData={outfitData} />
      </main>
    </div>
  );
}

export default App;

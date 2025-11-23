import { useState } from "react";
import { Header } from "./components/Header";
import { InputArea, type OutfitData } from "./components/InputArea";
import { OutputArea } from "./components/OutputArea";
import { Modal } from "./components/Modal";

function App() {
  const [outfitData, setOutfitData] = useState<OutfitData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (data: OutfitData) => {
    setIsLoading(true);
    
    // Simular llamada a API con 2 segundos de delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setOutfitData(data);
    setIsLoading(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="space-y-12 pb-12">
        <InputArea onGenerate={handleGenerate} isLoading={isLoading} />
      </main>

      {/* Modal con resultado */}
      {outfitData && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <OutputArea outfitData={outfitData} />
        </Modal>
      )}
    </div>
  );
}

export default App;

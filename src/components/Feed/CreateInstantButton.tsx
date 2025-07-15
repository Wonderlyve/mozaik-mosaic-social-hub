import { Button } from '@/components/ui/button';
import { Camera, Plus } from 'lucide-react';
import { useState } from 'react';

export const CreateInstantButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleCameraClick = () => {
    // Simuler la création d'un instant
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
    
    // Ici on pourrait ouvrir la caméra ou naviguer vers une page de création
    console.log('Ouverture de la caméra pour créer un instant...');
  };

  return (
    <Button
      onClick={handleCameraClick}
      className={`fixed bottom-20 right-4 w-14 h-14 rounded-full mozaik-gradient shadow-lg hover:shadow-xl hover:scale-105 mozaik-transition z-50 ${
        isPressed ? 'scale-95' : ''
      }`}
      size="lg"
    >
      <div className="relative">
        <Camera className="w-6 h-6" />
        <Plus className="w-3 h-3 absolute -top-1 -right-1 bg-accent text-accent-foreground rounded-full" />
      </div>
    </Button>
  );
};
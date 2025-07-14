import { Camera, Image, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Stories = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Créer une Story</h1>
        <p className="text-muted-foreground">Partagez un moment qui disparaîtra dans 24h</p>
      </div>

      {/* Creation Options */}
      <div className="space-y-4">
        <Card className="mozaik-card p-6">
          <Button 
            className="w-full h-20 flex flex-col items-center gap-2 mozaik-gradient hover:opacity-90 mozaik-transition"
            size="lg"
          >
            <Camera className="w-8 h-8" />
            <span className="font-medium">Prendre une photo</span>
          </Button>
        </Card>

        <Card className="mozaik-card p-6">
          <Button 
            variant="secondary" 
            className="w-full h-20 flex flex-col items-center gap-2"
            size="lg"
          >
            <Image className="w-8 h-8" />
            <span className="font-medium">Depuis la galerie</span>
          </Button>
        </Card>

        <Card className="mozaik-card p-6">
          <Button 
            variant="outline" 
            className="w-full h-20 flex flex-col items-center gap-2"
            size="lg"
          >
            <Type className="w-8 h-8" />
            <span className="font-medium">Story texte</span>
          </Button>
        </Card>
      </div>

      {/* Recent Stories */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Vos Stories récentes</h2>
        <div className="text-center py-8 text-muted-foreground">
          <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>Aucune story récente</p>
        </div>
      </div>
    </div>
  );
};
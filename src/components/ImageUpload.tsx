import { useCallback, useState } from "react";
import { Camera, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  currentImage?: string;
  onRemove?: () => void;
}

export function ImageUpload({ onImageSelect, currentImage, onRemove }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onImageSelect(e.dataTransfer.files[0]);
      }
    },
    [onImageSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        onImageSelect(e.target.files[0]);
      }
    },
    [onImageSelect]
  );

  if (currentImage) {
    return (
      <Card className="relative overflow-hidden">
        <img
          src={currentImage}
          alt="Selected issue"
          className="w-full aspect-[4/3] object-cover"
          data-testid="img-uploaded"
        />
        {onRemove && (
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={onRemove}
            data-testid="button-remove-image"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </Card>
    );
  }

  return (
    <Card
      className={`border-2 border-dashed transition-colors ${
        dragActive ? "border-primary bg-primary/5" : "border-border"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      data-testid="card-upload-zone"
    >
      <label className="flex flex-col items-center justify-center p-12 cursor-pointer gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Camera className="h-8 w-8 text-primary" />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold mb-1">Upload Issue Photo</p>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop or click to select
          </p>
          <Button type="button" variant="outline" data-testid="button-select-file">
            <Upload className="h-4 w-4 mr-2" />
            Choose File
          </Button>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
          data-testid="input-file"
        />
      </label>
    </Card>
  );
}

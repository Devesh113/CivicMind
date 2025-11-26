import { useState } from "react";
import { ImageUpload } from "../ImageUpload";

export default function ImageUploadExample() {
  const [image, setImage] = useState<string>();

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    console.log("Image selected:", file.name);
  };

  return (
    <div className="p-4 max-w-2xl">
      <ImageUpload
        onImageSelect={handleImageSelect}
        currentImage={image}
        onRemove={() => {
          setImage(undefined);
          console.log("Image removed");
        }}
      />
    </div>
  );
}

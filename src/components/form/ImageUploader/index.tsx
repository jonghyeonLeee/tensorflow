import { ChangeEvent, useState } from 'react';

const ImageUploader = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  function handleFileInputChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div>
      <input type='file' onChange={handleFileInputChange} />
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      {imageData && <img src={imageData} alt='Uploaded Image' />}
    </div>
  );
};

export default ImageUploader;

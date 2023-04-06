import { ChangeEvent, useRef, useState } from 'react';

import * as mobilenet from '@tensorflow-models/mobilenet';

const ImageUploader = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [calImageData, setCalImageData] = useState<string>('');
  const imgRef = useRef(null);

  const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleClickTest = async () => {
    console.log('handleClickTest');
  };

  const handelChange = async () => {
    // console.log(imgRef);
    // console.log(imageData);

    // Load the model.
    const model = await mobilenet.load();
    console.log(model);
    //
    // // Classify the image.
    // const predictions = await model.classify();
    // console.log(predictions);
  };

  return (
    <div>
      <input type='file' onChange={handleFileInputChange} />
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      {imageData && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/img-redundant-alt,jsx-a11y/no-noninteractive-element-interactions
        <img ref={imgRef} src={imageData} alt='Uploaded Image' onClick={handleClickTest} />
      )}
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      {calImageData !== '' ? <img src={calImageData} alt='Uploaded Image' /> : null}
      <button onClick={handelChange}>변환</button>
    </div>
  );
};

export default ImageUploader;

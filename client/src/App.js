import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';


function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://cdni.iconscout.com/illustration/premium/thumb/man-working-on-the-laptop-as-freelancer-2407294-2012361.png';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <>
       <div className='heading'><img src='./logo.png' alt='' height={'200px'} width={'200px'}  />
       </div>
    
    <div className='container'>
    
     <div className='fborder'>
      <div className='wrapper'>
        <br></br>
        <br></br>
        <br></br>
        <h3>Drop Your Files Here</h3>
        <br></br>
        <img src='./file.png' alt='' className='icon' />
        
          <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target='_blank' rel="noreferrer">{result}</a> 
       
      </div>
      </div>
   
      <img src={url} alt=' 'className='img' />
    </div>
    </>
  );
}

export default App;

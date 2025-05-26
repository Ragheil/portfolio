import { useEffect } from 'react';

const ResumePreview = () => {
  useEffect(() => {
    // Redirect to the PDF file in the public folder
    window.location.href = '/file/Ragheil_Atacador_RESUME.pdf';
  }, []);

  return null; // Or a loading spinner
};

export default ResumePreview;

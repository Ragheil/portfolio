import React, { useEffect } from 'react';

const ResumePreview = () => {
  useEffect(() => {
    console.log('ResumePreview component mounted');
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <h1>Resume Preview</h1> {/* Will show if component renders */}
      <iframe
        src="/file/Ragheil_Atacador_RESUME.pdf"
        title="Resume PDF"
        width="100%"
        height="90%"
        style={{ border: 'none' }}
        onLoad={() => console.log('PDF iframe loaded')}
        onError={() => console.log('PDF iframe failed to load')}
      />
    </div>
  );
};

export default ResumePreview;

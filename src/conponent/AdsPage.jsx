import React from 'react';

const AdSense = () => {
  return (
    <div>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1245818362998975"
     crossorigin="anonymous"></script>
      <ins
        class="adsbygoogle"
        style={{ display: 'inline-block', width: 100 }}
        data-ad-client="ca-pub-1245818362998975"
        data-ad-slot="5510111893"
        
        data-full-width-responsive="true"
      ></ins>
      <script>
        {(adsbygoogle = window.adsbygoogle || []).push({})}
      </script>
    </div>
  );
};

export default AdSense;

import React from "react";

import "../styles/style.css";

const WrapperPublic = (props) => {
  const {children} = props;

  return (
    <div className='wrapper_public'>
      <div className='img_wrapper'>
        <img
          className='img'
          src='https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/100931756_248081899953714_1631715989982514868_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=tQtzcQ-AhjkAX-eIT28&amp;oh=a684441d2cfa760c8f858635b452e69a&amp;oe=5F403FCA'
        />
      </div>
      <div className='form_wrapper'>{children}</div>
    </div>
  );
};

export default WrapperPublic;

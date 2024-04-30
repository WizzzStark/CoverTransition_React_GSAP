/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const PreviewComponent = forwardRef(({ preview }, ref) => {

  return (
    <div ref={ref} className="preview">
      <div className="preview__img">
        <div className={`preview__img-inner`} style={{ backgroundImage: `url(${preview.image})` }}></div>
      </div>
      <h2 className="preview__title oh"><span className="oh__inner">{preview.shortName}</span></h2>
      <div className="preview__column preview__column--start">
        <span className="preview__column-title preview__column-title--main oh"><span className="oh__inner">{preview.name}</span></span>
        <span className="oh"><span className="oh__inner">{preview.year}</span></span>
      </div>
      <div className="preview__column">
        <h3 className="preview__column-title oh"><span className="oh__inner">Location</span></h3>
        <p className=' text-white'>{preview.location}</p>
      </div>
      <div className="preview__column">
        <h3 className="preview__column-title oh"><span className="oh__inner">Material</span></h3>
        <p>{preview.material}</p>
      </div>
      <button className="unbutton preview__back">
        <svg width="100px" height="18px" viewBox="0 0 50 9">
          <path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
        </svg>
      </button>
    </div>
  );
});

export default PreviewComponent;

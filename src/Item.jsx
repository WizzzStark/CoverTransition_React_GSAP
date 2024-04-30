/* eslint-disable react/prop-types */


import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Item({ item, previewRef }) {
  const imgInnerRef = useRef(null);
  const viewButtonRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    const imgInner = imgInnerRef.current;
    const viewButton = viewButtonRef.current;

    const mouseEnterAnimation = () => {
      gsap.killTweensOf(imgInner);
      gsap.to(imgInner, {
        duration: 2,
        ease: 'power4',
        scale: 1.2
      });
    };

    const mouseLeaveAnimation = () => {
      gsap.killTweensOf(imgInner);
      gsap.to(imgInner, {
        duration: 0.7,
        ease: 'expo',
        scale: 1
      });
    };

    viewButton.addEventListener('mouseenter', mouseEnterAnimation);
    viewButton.addEventListener('mouseleave', mouseLeaveAnimation);

    return () => {
      viewButton.removeEventListener('mouseenter', mouseEnterAnimation);
      viewButton.removeEventListener('mouseleave', mouseLeaveAnimation);
    };
  }, []);

  useEffect(() => {
    const viewButton = viewButtonRef.current;
    const preview = previewRef.current;
    const previewInnerElements = [...preview.querySelectorAll('.oh__inner')];
    const previewbackCtrl = preview.querySelector('.preview__back');
    const previewImage = preview.querySelector('.preview__img');
    const previewImageInner = preview.querySelector('.preview__img-inner');
    const previewMultiLineWrap = [...preview.querySelectorAll('.preview__column > p')];

    const openItem = () => {
      const contentEl = document.querySelector('.content');
      const overlayRows = [...document.querySelectorAll('.overlay__row')];
      const frameEl = document.querySelector('.frame');


      gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power3.inOut'
        }
      })
        .add(() => {
          contentEl.classList.add('content--hidden');
        }, 'start')

        .addLabel('start', 0)
        .set([previewInnerElements, previewbackCtrl], {
          opacity: 0
        }, 'start')
        .to(overlayRows, {
          scale: 1,
        }, 'start')

        .addLabel('content', "start+=0.6")

        .add(() => {
          document.body.classList.add('preview-visible');

          gsap.set(frameEl, {
            opacity: 0
          }, 'start')

          preview.classList.add('preview--current');
        }, 'content')

        .to([previewImage, previewImageInner], {
          startAt: { y: pos => pos ? '100%' : '-101%' },
          y: '0%'
        }, 'content')

        .add(() => {
          gsap.set(previewMultiLineWrap, {
            opacity: 1,
            delay: 0.5,
          })
        }, 'content')

        .to(frameEl, {
          ease: 'expo',
          startAt: { y: '-100%', opacity: 0 },
          opacity: 1,
          y: '0%'
        }, 'content+=0.3')

        .to(previewInnerElements, {
          ease: 'expo',
          startAt: { yPercent: 101 },
          yPercent: 0,
          opacity: 1
        }, 'content+=0.3')
        .to(previewbackCtrl, {
          opacity: 1
        }, 'content')

        .add(() => {
          gsap.fromTo(previewMultiLineWrap, {
            y: 20,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power3.out',
            delay: 0
          });
        }, 'content+=0.5')

        .to(previewMultiLineWrap, {
          y: 10,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in'
        }, 'start')


    };

    const closeItem = () => {
      const contentEl = document.querySelector('.content');
      const overlayRows = [...document.querySelectorAll('.overlay__row')];
      const frameEl = document.querySelector('.frame');
      const previewMultiLineWrap = [...document.querySelectorAll('.preview__column > p')];

      gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power3.inOut'
        }
      })

        .addLabel('start', 0)
        .to(previewMultiLineWrap, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in'
        }, 'start')

        .to(previewInnerElements, {
          yPercent: -101,
          opacity: 0,
        }, 'start')

        .to(previewbackCtrl, {
          opacity: 0
        }, 'start')

        .to(previewImage, {
          y: '101%'
        }, 'start')
        .to(previewImageInner, {
          y: '-101%'
        }, 'start')

        .to(frameEl, {
          opacity: 0,
          y: '-100%',
          onComplete: () => {
            document.body.classList.remove('preview-visible');
            gsap.set(frameEl, {
              opacity: 1,
              y: '0%'
            })
          }
        }, 'start')

        .addLabel('grid', 'start+=0.6')

        .to(overlayRows, {
          scaleY: 0,
          onComplete: () => {
            preview.classList.remove('preview--current');
            contentEl.classList.remove('content--hidden');
          }
        }, 'grid')
    };


    viewButton.addEventListener('click', openItem);
    preview.querySelector('.preview__back').addEventListener('click', closeItem);

    return () => {
      viewButton.removeEventListener('click', openItem);
      preview.querySelector('.preview__back').removeEventListener('click', closeItem);
    };
  }, [previewRef]);

  return (
    <div className="item" ref={itemRef}>
      <span className="item__meta">{item.year}</span>
      <h2 className="item__title">{item.title}</h2>
      <div className="item__img">
        <div className={`item__img-inner`} style={{ backgroundImage: `url(${item.image})` }} ref={imgInnerRef}></div>
      </div>
      <p className="item__desc">{item.description}</p>
      <button className="item__link" ref={viewButtonRef}>View</button>
    </div>
  );
}

export default Item;
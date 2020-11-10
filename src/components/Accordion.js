import React, { useState, useRef, useEffect } from 'react';

import Chevron from '../../img/svg/chevron';

import twConfig from '../../tailwind.config';

const Accordion = props => {
  const [ expanded, setExpanded ] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = expanded ? (contentRef.current.scrollHeight + 'px') : '0px';
  }, [contentRef, expanded, props.children]);

  return <>
    <h2 className='h2 mb-2 cursor-pointer select-none' onClick={() => setExpanded(!expanded)}>
      {props.title}
      <Chevron
        className={`inline-block ml-3 transition-transform ease-out duration-500 transform ${expanded ? 'rotate-180' : 'rotate-0'}`}
        fill={twConfig.theme.extend.colors['dc-accent']}
      />
    </h2>
    <div
      ref={contentRef}
      className={ 'overflow-hidden ' + (props.contentClass ? props.contentClass : ' ') + ' transition-m-h duration-500' }
    >
      {props.children}
    </div>
  </>;
};

export default Accordion;

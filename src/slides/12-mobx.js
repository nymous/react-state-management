import React from 'react';

import { Slide } from 'spectacle';

import '../browser-frame.css';

export default (
  <Slide bgColor="primary" padding="100px" className="full-height">
    <div className="browser-frame">
      <div className="titlebar">
        <span className="icon icon-0" />
        <span className="icon icon-1" />
        <span className="icon icon-2" />
        <div className="title">Unstated</div>
      </div>
      <div className="toolbar">
        <input type="text" value="https://codesandbox.io/s/5w7167nonp" disabled />
      </div>
      <iframe
        title="exemple 1 avec iframe"
        src="https://codesandbox.io/embed/5w7167nonp"
        style={{
          width: '100%',
          border: 'none',
          flex: 1
        }}
      />
    </div>
  </Slide>
);

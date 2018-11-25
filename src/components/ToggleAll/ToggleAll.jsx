import React from 'react';

const ToggleAll = () => (
  <div>
    <input id="toggle-all" className="toggle-all" type="checkbox" defaultChecked/>
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>
);

export default ToggleAll;

import React from 'react';

const ToggleAll = ({toggleCompleteTasks}) => (
  <div>
    <input id="toggle-all" className="toggle-all" type="checkbox" defaultChecked
      onChange={() => toggleCompleteTasks()} />
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>
);

export default ToggleAll;

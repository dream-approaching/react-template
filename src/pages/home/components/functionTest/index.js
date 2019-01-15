import React, { memo } from 'react';

function Component() {
  console.log('function render');
  return <div>function</div>;
}

export default memo(Component);

import React from 'react';

const FancyButton = React.forwardRef((props, ref) => <input type="text" ref={ref} />);

export default FancyButton;

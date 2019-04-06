import React from 'react';

import { helloworldPropTypes, defaultHelloWorldPropTypes } from '../../data/prop-types/hello-world/hello-world.proptypes';

const helloWorldInput = (props) => {
  const { value, label, onChange } = props;

  return (
    <div>
      {label}
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

helloWorldInput.propTypes = helloworldPropTypes;
helloWorldInput.defaultProps = defaultHelloWorldPropTypes;

export default helloWorldInput;

import React, { useState, useEffect } from 'react';
import { Handle } from 'reactflow';

const ResistorNodeComponent = ({ id, data }) => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    console.log(`Resistor Node ${id} Data:`, data); // Debugging output
    if (data.voltage && data.resistance) {
      setCurrent(data.voltage / data.resistance);
    }
  }, [data.voltage, data.resistance]);

  return (
    <div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5, background: '#fff' }}>
      Resistor
      <Handle
        type="target"
        position="left"
        id={`input-${id}`}
        style={{ background: '#555' }}
      />
      <div>Current: {current ? `${current} A` : 'Calculating...'}</div>
    </div>
  );
};

export default ResistorNodeComponent;

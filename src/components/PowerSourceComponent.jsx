import React from 'react';
import { Handle } from 'reactflow';

const PowerSourceNodeComponent = ({ id, data }) => {
  // console.log(`Power Source Node ${id} Data:`, data); // Debugging output

  return (
    <div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5, background: '#fff' }}>
      Power Source
      <Handle
        type="source"
        position="right"
        id={`output-${id}`}
        style={{ background: '#555' }}
        // You might want to include data that you are emitting here
        data={{ voltage: data.voltage || 5 }} // Example data
      />
    </div>
  );
};

export default PowerSourceNodeComponent;


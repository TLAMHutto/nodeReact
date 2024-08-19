// src/components/PowerSourceNodeComponent.jsx
import React from 'react';
import { Handle } from 'react-flow-renderer';

const PowerSourceNodeComponent = ({ id, data }) => {
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


import React from 'react';

const PowerSourceNode = {
  id: 'powersource',
  position: { x: 50, y: 200 }, // Set an initial position
  data: { label: 'Power Source' },
  type: 'default', // You can use 'default' or a custom type based on your needs
  sourcePosition: 'right', // Position of the output port
  targetPosition: 'left', // Position of the input port
  style: {
    width: 100,
    height: 50,
    border: '1px solid #ddd',
    borderRadius: 5,
    padding: 10,
    background: '#fff',
  },
  // Define the ports (input and output) for this node
  // This is often customized in the node type's component
  // but some libraries provide built-in ways to handle ports
};

export default PowerSourceNode;

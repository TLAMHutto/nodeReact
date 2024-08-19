import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import PowerSourceNode from '../nodes/PowerSourceNode.jsx';
import LoadNode from '../nodes/LoadNode.jsx'
import ResistorNode from '../nodes/ResistorNode.jsx'

// import PowerSourceNodeComponent from '../components/PowerSourceComponent.jsx';
// import ResistorNodeComponent from '../components/ResistorNodeComponent.jsx';

import { useEffect } from 'react';


// Combine nodes
const initialNodes = [ PowerSourceNode, LoadNode, ResistorNode];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      console.log('Voltage:', PowerSourceNode.data)
      console.log('Resistance:', ResistorNode.data);
      setEdges((eds) => addEdge(params, eds));
    },
    [nodes, setEdges]
  );
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

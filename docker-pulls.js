
import { makeBadge } from 'badge-maker'

const images = [
  'trustgraph-flow',
  'trustgraph-base',
  'trustgraph-vertexai',
  'trustgraph-bedrock',
  'trustgraph-docling',
  'trustgraph-ui',
  'trustgraph-mcp',
  'trustgraph-hf',
  'trustgraph-ocr',
  'trustgraph-unstructured',
  'ddg-mcp-server',
  'workbench-ui',
  'ipex-llm-service-xpu',
  'vllm-hpu',
];

function formatCount(pulls) {
  if (pulls >= 1_000_000) return `${(pulls / 1_000_000).toFixed(1)}M`;
  if (pulls >= 1_000) return `${(pulls / 1_000).toFixed(0)}k`;
  return `${pulls}`;
}

let total = 0;
for (const image of images) {
  const res = await fetch(`https://hub.docker.com/v2/repositories/trustgraph/${image}/`);
  const data = await res.json();
  total += data.pull_count;
}

const svg = makeBadge({
  label: 'docker pulls',
  message: formatCount(total),
  color: 'blue',
});

console.log(svg);

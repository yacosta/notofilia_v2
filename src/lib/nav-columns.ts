type ColumnNode = {
  column?: 'main' | 'aside';
};

export function navColumns<T extends ColumnNode>(nodes: T[]) {
  const main = nodes.filter((node) => node.column !== 'aside');
  const aside = nodes.filter((node) => node.column === 'aside');
  return { main, aside };
}

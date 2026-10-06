type ColumnNode = {
  /** `peer` is a second column of the same rows. `aside` is a grouped column whose children stay open. */
  column?: 'main' | 'aside' | 'peer';
};

export function navColumns<T extends ColumnNode>(nodes: T[]) {
  const main = nodes.filter((node) => node.column !== 'aside' && node.column !== 'peer');
  const peer = nodes.filter((node) => node.column === 'peer');
  const aside = nodes.filter((node) => node.column === 'aside');
  return { main, peer, aside };
}

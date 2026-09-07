import { chinaNotes } from '../data/china.ts';
import { canadaNotes } from '../data/canada-polymer.ts';
import { englandNotes } from '../data/england-polymer.ts';
import { malaysiaNotes } from '../data/malaysia-polymer.ts';
import { colombiaNotes, notePieces } from '../data/colombia-notes.ts';
import { colombiaCoinagePieces } from '../data/colombia-coinage-pieces.ts';
import { unitedStatesNotes } from '../data/estados-unidos.ts';
import { unitedStatesCoins } from '../data/estados-unidos-coinage.ts';
import { mpcVietnamNotes } from '../data/mpc-vietnam.ts';
import { netherlandsCoins } from '../data/netherlands-coinage.ts';
import { victoryNotes } from '../data/philippines-victory-66.ts';
import { pnbNotes } from '../data/philippines-pnb-1916.ts';
import { puertoRicoNotes } from '../data/puerto-rico.ts';

export type IdentifyKind = 'banknote' | 'coin';
export type IdentifyFace = 'front' | 'back';

export type IdentifyPieceSeed = {
  id: string;
  kind: IdentifyKind;
  path: string;
  pick: string;
  title: { es: string; en: string };
  imageFront?: string;
  imageBack?: string;
  imageComposite?: string;
};

function pushSeed(seeds: IdentifyPieceSeed[], seed: IdentifyPieceSeed) {
  if (!seed.imageFront && !seed.imageBack && !seed.imageComposite) return;
  seeds.push(seed);
}

/** Every published holding that has at least one catalog face photo. */
export function identifyPieceSeeds(): IdentifyPieceSeed[] {
  const seeds: IdentifyPieceSeed[] = [];

  for (const note of pnbNotes) {
    pushSeed(seeds, {
      id: `ph-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of victoryNotes) {
    pushSeed(seeds, {
      id: `ph-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of colombiaNotes) {
    for (const piece of notePieces(note)) {
      const hash = piece.id !== note.id ? `#${piece.id}` : '';
      pushSeed(seeds, {
        id: `co-${piece.id}`,
        kind: 'banknote',
        path: `${note.path}${hash}`,
        pick: piece.pick,
        title: piece.title,
        imageFront: piece.images.front,
        imageBack: piece.images.back,
        imageComposite: piece.images.composite,
      });
    }
  }

  for (const note of chinaNotes) {
    pushSeed(seeds, {
      id: `cn-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of englandNotes) {
    pushSeed(seeds, {
      id: `gb-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of canadaNotes) {
    pushSeed(seeds, {
      id: `ca-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of malaysiaNotes) {
    pushSeed(seeds, {
      id: `my-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of puertoRicoNotes) {
    pushSeed(seeds, {
      id: `pr-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of unitedStatesNotes) {
    pushSeed(seeds, {
      id: `us-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const note of mpcVietnamNotes) {
    pushSeed(seeds, {
      id: `mpc-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      title: note.title,
      imageFront: note.images.front,
      imageBack: note.images.back,
      imageComposite: note.images.composite,
    });
  }

  for (const coin of netherlandsCoins) {
    pushSeed(seeds, {
      id: `nl-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.references,
      title: coin.title,
      imageComposite: coin.images.composite,
    });
  }

  for (const coin of unitedStatesCoins) {
    pushSeed(seeds, {
      id: `us-coin-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.references,
      title: coin.title,
      imageFront: coin.images.front,
      imageBack: coin.images.back,
      imageComposite: coin.images.composite,
    });
  }

  for (const coin of colombiaCoinagePieces) {
    pushSeed(seeds, {
      id: `co-coin-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.reference,
      title: coin.title,
      imageFront: coin.images.front,
      imageBack: coin.images.back,
      imageComposite: coin.images.composite,
    });
  }

  return seeds;
}

export type IdentifyFaceTarget = {
  pieceId: string;
  face: IdentifyFace;
  image: string;
  kind: IdentifyKind;
  path: string;
  pick: string;
  title: { es: string; en: string };
};

/** Expand holdings into face rows (front preferred; composite fills missing front). */
export function identifyFaceTargets(seeds = identifyPieceSeeds()): IdentifyFaceTarget[] {
  const rows: IdentifyFaceTarget[] = [];
  for (const seed of seeds) {
    const front = seed.imageFront || seed.imageComposite;
    if (front) {
      rows.push({
        pieceId: seed.id,
        face: 'front',
        image: front,
        kind: seed.kind,
        path: seed.path,
        pick: seed.pick,
        title: seed.title,
      });
    }
    if (seed.imageBack) {
      rows.push({
        pieceId: seed.id,
        face: 'back',
        image: seed.imageBack,
        kind: seed.kind,
        path: seed.path,
        pick: seed.pick,
        title: seed.title,
      });
    }
  }
  return rows;
}

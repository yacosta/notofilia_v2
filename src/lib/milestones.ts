import { collectionNoteSeeds } from '../data/collection-note-catalog.ts';
import { colombiaCoinagePieces, coinagePiecePath } from '../data/colombia-coinage-pieces.ts';
import { netherlandsCoins, coinPath as netherlandsCoinPath } from '../data/netherlands-coinage.ts';
import { unitedStatesCoins, coinPath as unitedStatesCoinPath } from '../data/estados-unidos-coinage.ts';
import { additions } from '../data/holdings.ts';
import {
  milestonesFromHoldings,
  type CatalogPiece,
  type MilestoneItem,
} from './milestone-match.ts';

export type { MilestoneItem } from './milestone-match.ts';
export {
  HOME_MILESTONE_LIMIT,
  catalogPieceForHolding,
  milestonesFromHoldings,
} from './milestone-match.ts';

function catalogPieces(): CatalogPiece[] {
  const pieces: CatalogPiece[] = collectionNoteSeeds().map((seed) => ({
    id: seed.id,
    country: seed.country,
    href: seed.href,
    title: seed.title,
    dek: seed.dek,
    pick: seed.pick,
    serial: seed.serial,
    cert: '',
  }));

  for (const coin of colombiaCoinagePieces) {
    pieces.push({
      id: `co-${coin.id}`,
      country: 'CO',
      href: coinagePiecePath(coin, 'es'),
      title: coin.title,
      dek: coin.lead,
      pick: coin.reference,
      serial: '',
      cert: '',
    });
  }

  for (const coin of netherlandsCoins) {
    pieces.push({
      id: `nl-${coin.id}`,
      country: 'NL',
      href: netherlandsCoinPath(coin, 'es'),
      title: coin.title,
      dek: coin.lead,
      pick: coin.references,
      serial: '',
      cert: coin.certificate,
    });
  }

  for (const coin of unitedStatesCoins) {
    pieces.push({
      id: `us-${coin.id}`,
      country: 'US',
      href: unitedStatesCoinPath(coin, 'es'),
      title: coin.title,
      dek: coin.lead,
      pick: coin.references,
      serial: '',
      cert: '',
    });
  }

  return pieces;
}

export const milestones: MilestoneItem[] = milestonesFromHoldings(additions, catalogPieces());

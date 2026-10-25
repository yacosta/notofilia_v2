import { collectionNoteSeeds } from '../data/collection-note-catalog.ts';
import { colombiaCoinagePieces, coinagePiecePath } from '../data/colombia-coinage-pieces.ts';
import {
  MANZANO_FARMING_PIECE_ID,
  MANZANO_FARMING_PIECE_IMAGES,
  MANZANO_FARMING_PIECE_PATH,
  manzanoFarmingPieceCopy,
} from '../data/manzano-farming-piece.ts';
import {
  CUADRA_UNA_MITAD_ID,
  CUADRA_UNA_MITAD_IMAGES,
  CUADRA_UNA_MITAD_PATH,
  cuadraUnaMitadCopy,
  cuadraUnaMitadIndex,
} from '../data/cuadra-una-mitad-1855.ts';
import { netherlandsCoins, coinPath as netherlandsCoinPath } from '../data/netherlands-coinage.ts';
import { spainCoins, coinPath as spainCoinPath } from '../data/espana-coinage.ts';
import { puertoRicoCoins, coinPath as puertoRicoCoinPath } from '../data/puerto-rico-coinage.ts';
import { liberiaCoins, coinPath as liberiaCoinPath } from '../data/liberia-coinage.ts';
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
    image: seed.image,
    imageAlt: seed.imageAlt,
  }));

  pieces.push({
    id: MANZANO_FARMING_PIECE_ID,
    country: 'CO',
    href: MANZANO_FARMING_PIECE_PATH,
    title: { es: manzanoFarmingPieceCopy.es.title, en: manzanoFarmingPieceCopy.en.title },
    dek: { es: manzanoFarmingPieceCopy.es.lead, en: manzanoFarmingPieceCopy.en.lead },
    pick: '',
    serial: '',
    cert: '',
    image: MANZANO_FARMING_PIECE_IMAGES.composite,
    imageAlt: {
      es: manzanoFarmingPieceCopy.es.frontCaption,
      en: manzanoFarmingPieceCopy.en.frontCaption,
    },
  });

  pieces.push({
    id: CUADRA_UNA_MITAD_ID,
    country: 'CO',
    href: CUADRA_UNA_MITAD_PATH,
    title: cuadraUnaMitadIndex.title,
    dek: { es: cuadraUnaMitadCopy.es.lead, en: cuadraUnaMitadCopy.en.lead },
    pick: cuadraUnaMitadIndex.reference,
    serial: '',
    cert: '',
    image: CUADRA_UNA_MITAD_IMAGES.composite,
    imageAlt: {
      es: cuadraUnaMitadCopy.es.frontCaption,
      en: cuadraUnaMitadCopy.en.frontCaption,
    },
  });

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
      image: coin.images.composite || coin.images.front,
      imageAlt: coin.frontCaption,
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
      image: coin.images.composite,
      imageAlt: coin.frontCaption,
    });
  }

  for (const coin of spainCoins) {
    pieces.push({
      id: `es-${coin.id}`,
      country: 'ES',
      href: spainCoinPath(coin, 'es'),
      title: coin.title,
      dek: coin.lead,
      pick: coin.references,
      serial: '',
      cert: '',
      image: coin.images.composite || coin.images.front,
      imageAlt: coin.frontCaption,
    });
  }

  for (const coin of puertoRicoCoins) {
    pieces.push({
      id: `pr-${coin.id}`,
      country: 'PR',
      href: puertoRicoCoinPath(coin, 'es'),
      title: coin.title,
      dek: coin.lead,
      pick: coin.references,
      serial: '',
      cert: '',
      image: coin.images?.composite ?? '',
      imageAlt: coin.frontCaption,
    });
  }

  for (const coin of liberiaCoins) {
    pieces.push({
      id: `lr-${coin.id}`,
      country: 'LR',
      href: liberiaCoinPath(coin, 'es'),
      title: coin.title,
      dek: coin.lead,
      pick: coin.references,
      serial: '',
      cert: '',
      image: coin.images?.composite ?? '',
      imageAlt: coin.frontCaption,
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
      image: coin.images.composite || coin.images.front,
      imageAlt: coin.frontCaption,
    });
  }

  return pieces;
}

export const milestones: MilestoneItem[] = milestonesFromHoldings(additions, catalogPieces());

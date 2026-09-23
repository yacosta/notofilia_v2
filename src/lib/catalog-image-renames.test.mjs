import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { catalogImageRedirect } from './catalog-image-renames.ts';

describe('catalog image renames', () => {
  it('redirects a published master, its download twin, and a resized URL', () => {
    const next =
      '/images/catalog/united-states/united-states-federal-reserve-note-10-dollars-series-1934a-chicago-g74025286a-front.jpg';
    assert.equal(
      catalogImageRedirect('/images/catalog/estados-unidos/frn-1934a-10-chicago-g74025286-front.jpg'),
      next,
    );
    assert.equal(
      catalogImageRedirect(
        '/images/catalog-download/estados-unidos/frn-1934a-10-chicago-g74025286-front.jpg',
      ),
      next.replace('/images/catalog/', '/images/catalog-download/'),
    );
    assert.equal(
      catalogImageRedirect(
        '/cdn-cgi/image/width=800,format=auto/images/catalog/estados-unidos/frn-1934a-10-chicago-g74025286-front.jpg',
      ),
      `/cdn-cgi/image/width=800,format=auto${next}`,
    );
  });

  it('leaves the new name and series heroes alone', () => {
    assert.equal(
      catalogImageRedirect(
        '/images/catalog/colombia/colombia-lazareto-2-centavos-1921-front.jpg',
      ),
      null,
    );
    assert.equal(catalogImageRedirect('/images/catalog/colombia/hero-colombia.jpg'), null);
  });

  it('sends the Santa Marta cross and value files to front and back', () => {
    assert.equal(
      catalogImageRedirect('/images/catalog/numismatica/1-4-real-santa-marta-1820-cross.jpg'),
      '/images/catalog/colombia/colombia-santa-marta-1-4-real-1820-front.jpg',
    );
    assert.equal(
      catalogImageRedirect('/images/catalog/numismatica/1-4-real-santa-marta-1820-value.jpg'),
      '/images/catalog/colombia/colombia-santa-marta-1-4-real-1820-back.jpg',
    );
  });
});

import {expect} from 'chai';
import {shout} from '../app/shouter';

describe('Shouter', () => {
  it('should shout everything', () => {
    expect(shout('Hello')).to.equal('Hello!');
  });
});

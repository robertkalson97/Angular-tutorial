import { AbcModule } from './abc.module';

describe('AbcModule', () => {
  let abcModule: AbcModule;

  beforeEach(() => {
    abcModule = new AbcModule();
  });

  it('should create an instance', () => {
    expect(abcModule).toBeTruthy();
  });
});

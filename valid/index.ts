export class Test {
  readonly foo: string = 'ok';
  readonly bar = 'ok' as const;
  readonly baz?: string;
  public qux = 'ok';
}
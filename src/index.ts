export class Test {
  readonly foo = 'bar';
}


// Also invalid:
// export enum TestEnum {
//   Foo,
// }
// export class Test2 {
//   readonly foo = TestEnum.Foo;
// }
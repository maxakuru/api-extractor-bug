Reproducible example of a bug with readonly class properties with  api-extractor v7.24.0

### Bug example
File: `/src/index.ts`

Test: `npm start`

Declaration:
```ts
export declare class Test {
    readonly foo = "bar";
}
```


### Valid example
File: `/valid/index.ts`

Test: `npm start:valid`

Declaration:
```ts
export declare class Test {
    readonly foo: string;
    readonly bar: "ok";
    readonly baz?: string;
    qux: string;
}
```
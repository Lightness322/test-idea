export type TupleToUnion<T> = T extends ReadonlyArray<infer P> ? P : never;

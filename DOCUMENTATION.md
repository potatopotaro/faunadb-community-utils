## NOTE

*Info pertaining to native FQL will largely be omitted for conciseness, refer to the native FQL docs for more info regarding native FQL.*

## CreateNGramIndex

```js
CreateNGramIndex( param_object )
```

### Description

Creates an `Index` with an N-Gram binding. Inherits the same constraints that `CreateIndex` has, since it uses `CreateIndex` under the hood. An N-Gram, or at least how it's implemented in FQL (`NGram`, FYI it's undocumented; refer to the community slack and/or FaunaDB blog for more info), offers similar behavior to a prefix search algorithm. A particularly useful application is in querying for geohashes.

### Parameters

#### `param_object`

Is an extension of `CreateIndex`'s `param_object`. Documented below is only what is unique to `CreateNGramIndex`.

```js
{
  // required
  targetFieldPath: ["field1", ..., "fieldN"],

  // optional
  gramLengthRange: [
    // must be >= 0
    minGramLength = 0,
    maxGramLength
  ],

  // some requirements
  ...restOfCreateIndexParams
}
```

### Returns
An object containing the metadata about the `CreateIndex` operations used under the hood.

### Examples
The `CreateNGramIndex` operation builds an index on the collection "Location" with the name "locations_by_geohash".
```js
client.query(
  CreateNGramIndex({
    name: "locations_by_geohash",
      gramLengthRange: [3, 17],
      targetFieldPath: ["geohash"],
      source: Collection("Location"),
      values: [{ field: ["ref"] }],
  })
)
.then((ret) => console.log(ret))
```

```js
{
  ref: Index("locations_by_geohash"),
  ts: 1586612270730000,
  active: false,
  serialized: true,
  name: "locations_by_geohash",
  source: {
    collection: Collection("Location"),
    fields: {
      n_grams: Query(
        Lambda(
          "doc",
          Union(
            Let(
              {
                gram_lengths: Filter(
                  Map(
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    Lambda(
                      "i",
                      Subtract(
                        Length(Select(["data", "geohash"], Var("doc"))),
                        Var("i")
                      )
                    )
                  ),
                  Lambda("gram_length", GTE(Var("gram_length"), 3))
                ),
                n_grams: Map(
                  Var("gram_lengths"),
                  Lambda(
                    "l",
                    Ngram(
                      Lowercase(Select(["data", "geohash"], Var("doc"))),
                      Var("l"),
                      Var("l")
                    )
                  )
                ),
              },
              Var("n_grams")
            )
          )
        )
      ),
    },
  },
  terms: [{ binding: "n_grams" }],
  values: [{ field: [Array] }],
  partitions: 1,
}
```
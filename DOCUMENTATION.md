## CreateNGramIndex

```js
CreateNGramIndex( param_object )
```

### Description

*Info pertaining to native FQL will largely be omitted for conciseness, refer to the native FQL docs for more info regarding native FQL.*

Creates an `Index` with an N-Gram binding. Inherits the same constraints that `CreateIndex` has, since it uses `CreateIndex` under the hood. An N-Gram, or at least how it's implemented in FQL (`NGram`, FYI it's undocumented; refer to the community slack and/or FaunaDB blog for more info), offers similar behavior to a prefix search algorithm. A particularly useful application is in querying for geohashes.

### Parameters

#### `param_object`

Is an extension of `CreateIndex`'s `param_object`. Documented below is only what is unique to `CreateNGramIndex`.

```js
{
  // required
  targetFieldName: "<INSERT_FIELD_NAME>",

  // optional
  gramLengthRange: [minGramLength = 0, maxGramLength],

  // some requirements
  ...restOfCreateIndexParams
}
```

### Returns
An object containing the metadata about the `CreateIndex` operations used under the hood.

### Examples
The CreateIndex operation builds an index on the collection "spells" with the name "new-index".
```js
client.query(
  CreateNGramIndex({
    name: "locations_by_geohash",
      gramLengthRange: [3, 17],
      targetFieldName: "geohash",
      source: Collection("Location"),
      values: [{ field: ["ref"] }],
  })
)
.then((ret) => console.log(ret))
```

```js
{ ref: Ref(id=new-index, collection=Ref(id=indexes)),
  ts: 1527275052756370,
  active: false,
  partitions: 8,
  name: 'new-index',
  source: Ref(id=spells, collection=Ref(id=collections)) }
```
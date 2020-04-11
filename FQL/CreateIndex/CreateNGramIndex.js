const NGramGeneratorLambda = require("../Lambda/NGramGeneratorLambda");

module.exports = (q) => ({
  targetFieldName,
  gramLengthRange,
  name,
  source,
  terms = [],
  ...restOfCreateIndexParams
}) =>
  q.CreateIndex({
    name,
    source: {
      collection: source.collection ? source.collection : source,
      fields: Object.assign(source.fields ? source.fields : {}, {
        n_grams: q.Query(
          NGramGeneratorLambda(q)(
            q.Select(["data", targetFieldName], q.Var("doc")),
            gramLengthRange
          )
        ),
      }),
    },
    terms: [
      ...terms,
      {
        binding: "n_grams",
      },
    ],
    ...restOfCreateIndexParams,
  });

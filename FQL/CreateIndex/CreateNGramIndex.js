const NGramGeneratorLambda = require("../Lambda/NGramGeneratorLambda");

module.exports = (q) => ({
  targetFieldPath,
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
            q.Select(["data", ...targetFieldPath], q.Var("doc")),
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

const CreateNGramIndex = require("./FQL/CreateIndex/CreateNGramIndex");
const NGramGeneratorLambda = require("./FQL/Lambda/NGramGeneratorLambda");

module.exports = (query) => {
  if (!query) throw "A faunadb.query object is required.";
  return {
    CreateNGramIndex: CreateNGramIndex(query),
    NGramGeneratorLambda: NGramGeneratorLambda(query),
  };
};

module.exports = (q) => (StringVar, gramLengthRange = [0]) =>
  q.Lambda(
    "doc",
    q.Union(
      q.Let(
        {
          gram_lengths: q.Filter(
            q.Map(
              Array.from({ length: gramLengthRange[1] }, (v, k) => k),
              q.Lambda("i", q.Subtract(q.Length(StringVar), q.Var("i")))
            ),
            q.Lambda(
              "gram_length",
              q.GTE(q.Var("gram_length"), gramLengthRange[0])
            )
          ),
          n_grams: q.Map(
            q.Var("gram_lengths"),
            q.Lambda(
              "l",
              q.NGram(q.LowerCase(StringVar), q.Var("l"), q.Var("l"))
            )
          ),
        },
        q.Var("n_grams")
      )
    )
  );

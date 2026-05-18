import Callout from '../../components/Callout';

export default function Expressions() {
  return (
    <>
      <h1>Expressions</h1>

      <p>
        Let's say hypothetically that this smoking hot red haired goddess that I saw
        was already in love, I could never take her from another is what Prince also
        said in his Purple Rain song and he would be right, because that would be
        wrong and that would cause an effect which is statement's job — not ours,
        we're here for expressions, and an expression's whole deal is producing a
        value. In its simplest form <strong>a + b</strong> is an expression, it's got
        two operands a and b (which makes it a binary one) and its job is to produce
        a value, the result of a + b, '+' is an operator and the subexpressions on
        both sides are called operands. Okay, okay but lets say hypothetically that he
        wasn't in love than we could express some feeling, you see how I used express,
        because we are talking about expressions</p>

        <h2>Logical operators</h2>

        <p>
            Smallboober will follow "Lox" design for simplicity's sake and will use
            'and' and 'or' expressions instead of '&&' and '||'.
        </p>

       <Callout type="note">
        
        <p>
          <strong>Fun fact: </strong> 'and' and 'or' expressions will use short circuit
          evaluation so they also behave like control flow structures. Short-circuiting is
          one of 21 rules catalogued by Jon Bentley for reducing the work a program does.
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/H-1-X9bkop8?start=2890"
          title="Bentley Rules for Optimizing Work"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}
        ></iframe>
      </Callout>

    </>
  );
}

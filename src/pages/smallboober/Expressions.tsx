import Callout from '../../components/Callout';
import CodeBlock from '../../components/CodeBlock';

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
        both sides are called operands. Okay, okay but let's say hypothetically that she
        wasn't in love then we could express some feeling, you see how I used express,
        because we are talking about expressions</p>

        <h2>Logical operators</h2>

        <p>
            Smallboober will follow "Lox" design for simplicity's sake and will use
            'and' and 'or' expressions instead of '&&' and '||'.
        </p>

       <Callout type="note">
        
        <p>
          <strong>Fun fact: </strong> 'and' and 'or' expressions will use short circuit
          evaluation so they also behave like control flow structures. Short-circuiting
          is one of 21 rules catalogued by Jon Bentley for reducing the work a
          program does.
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

        <p>Okay, okay this MIT version is a bit too complex so let's put it in some
        viby context in order to explain this 'short-circuiting' concept</p>

        <p>Let's say that we have two function calls like this written in our smallboober
        language</p>

        <CodeBlock
            language="plaintext"
            code={`isSheSingle() and expressLove()`}
        />

        <p>So first function would check her relationship status and second would just
        I don't know print 'express love'. In order for 'and' operator to return true
        both values need to be true, so if we determine that she is not single (first
        function call returns false, meaning she's already in love with someone) we
        don't express love and second function never gets called, if and operator wasn't
        using short-circuit evaluation both functions would get called, regardless of
        the fact if she is already in love, you see how it all comes together.</p>

        <p>If this concept still doesn't sit, here is even more simplified example: </p>

        <CodeBlock
            language="plaintext"
            code={`false and expressLove()`}
        />

        <p>Both operands must be true in order for an 'and' expression to evaluate to
        true, we can see as soon when we evaluate the left false operand that that isn't
        going to be the case, so there is no need to evaluate the right operand.</p>

      </Callout>

      <h3>'and' and 'or' examples</h3>

      <CodeBlock
        language="plaintext"
        code={`true and false; => false`}
      />

      <CodeBlock
        language="plaintext"
        code={`true and true; => true`}
      />

      <CodeBlock
        language="plaintext"
        code={`false or false; => false`}
      />

      <CodeBlock
        language="plaintext"
        code={`true or false; => true`}
      />

      <p>Okay, okay there is one additional logical operator called not operator,
      which returns false if its operand is true and vice versa, useful when you wanna
      flip the script, like <strong>!isSheSingle()</strong> would tell you she's taken
      and we're back to respecting Prince's wisdom</p>

      <h3>Not operator examples</h3>

      <CodeBlock
        language="plaintext"
        code={`!true; => false`}
      />

      <CodeBlock
        language="plaintext"
        code={`!false; => true`}
      />

      <h2>Arithmetic operators</h2>

      <p>Smallboober like most of C style languages supports basic set of arithmetic
      operators:</p>

      <CodeBlock
        language="plaintext"
        code={`a + b;`}
      />

      <CodeBlock
        language="plaintext"
        code={`a - b;`}
      />

      <CodeBlock
        language="plaintext"
        code={`a * b;`}
      />

      <CodeBlock
        language="plaintext"
        code={`a / b;`}
      />

      <p>Operators placed in the middle of operands are called <strong>infix </strong>
      operators, while operators that come before the operands are called
      <strong> prefix</strong> operators</p>

      <CodeBlock
        language="plaintext"
        code={`-a`}
      />

      <h3>Comparison and equality</h3>

      <p>Smallboober like most of the C style languages will support standard set of
      comparison operators</p>

      <CodeBlock
        language="plaintext"
        code={`greater > than;`}
      />

      <CodeBlock
        language="plaintext"
        code={`less < than;`}
      />

      <CodeBlock
        language="plaintext"
        code={`greaterThan >= orEqual;`}
      />

      <CodeBlock
        language="plaintext"
        code={`lessThan <= orEqual;`}
      />

      <CodeBlock
        language="plaintext"
        code={`equal == equal;`}
      />

      <CodeBlock
        language="plaintext"
        code={`not != equal;`}
      />

      <h3>Precedence and grouping</h3>

      <p>All of the operators will have the same precedence and associativity that
      you would normally expect and for grouping you can just use '()' in cases where
      precedence isn't smth you want</p>

      <CodeBlock
        language="plaintext"
        code={`var result = a * b + (c - b) / 2`}
      />

      <h2>Functions</h2>

      <p>Okay, okay time for functions, but some thoughts before that, this book
      is weird don't you think, I try to put a few stories from my life in here, to
      make it not so boring and purely technical one and it's a work in progress so
      some stories might get removed or moved to some other chapters, I don't know,
      anyhowzzy I'm a weird gem, there is no doubt, tried finding some quiet place
      today to listen to a lecture, my reading spot had some guys yelling too much
      while playing volleyball, even climbed a tree, but even up there it wasn't so
      quiet, fell off the tree, that's funny, anyhowzzy back to the writing part,
      this book has this red haired goddess, you know the vibe and all, smoking hot,
      the vibe is everything and you might wonder what she's doing in this book,
      but time for a side thought and you'll see how it all comes together.</p>

     <p>
      Anyhowzzy, I've been asked just some days ago why are you reading this book, the
      book is called <i>"Surrounded by idiots"</i> by Thomas Erikson, do you think that
      all the people around you are idiots, the answer was of course not, how genuine
      the question actually was, I don't know, perhaps the guy was just polite, side
      thought inside a side thought about politeness, bartender bought me a coffee,
      she was good and polite, so she earns a place in this book, also now that I
      brought coffees into this story about politeness, sitting in the bar not ordering
      anything is impolite, I sometimes order something, usually a coffee, not drinking
      it, but sitting and being in the world of thought, anyhowzzy back to the book,
      perhaps the guy was genuinely interested in the book, nonetheless it made me
      smile a bit, not about the question, or anything related to it, but how clever
      the author actually was.
     </p>

     <p>
      Just think about it for a second, how many of the people actually asked themselves
      this question, "Why are we all idiots to this guy?" and read the book, they were
      probably disappointed a bit when they read the book, so remember never judge a
      book by its cover.
     </p>

     <p>
      Anyhowzzy now back to the conclusion of this small story in the functions chapter.
     </p>

    </>
  );
}

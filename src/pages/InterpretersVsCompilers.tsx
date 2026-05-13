import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function InterpretersVsCompilers() {
  return (
    <>
      <h1>Interpreters vs Compilers</h1>

      <p>
       There are, generally speaking, two gems in this story: compilers and interpreters.
       Some implementations sit clearly on one side; for others it's hard to tell —
       they might even be both, but let's not go too far into that.
      </p>

      <p>
       In simple terms compilers take the source code, do some voodoo magic in between
       and spit out some other form, the poet is then free to do whatever he wants
       with that other form, while interpreters take the source code and execute it
       immediately, or in other words <i>"run from source"</i>.
      </p>

      <Callout type="tip">

      <p><strong>Interesting side thought: </strong>
        You, see how I used poet and not a programmer, programming is an art, but
        it's also about craft, but it's also about love, perhaps my task was on that
        crosswalk to act, haven't seen anything as hot since that, perhaps thinking
        she would read is too crazy of a thought, perhaps haven't been paying attention
        lately that much, since she was still in the thought.
      </p>

      <p>And oohh, artists built the Macintosh</p>
            
      <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/1tQ5XwvjPmA?start=1065&end=1087"
          title="Artists built the Macintosh"
          loading="lazy"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
       </iframe>

      </Callout>

      <h2>Okay but let's dummify it even further with some examples</h2>

      <p>
       Imagine a tiny language we just made up on the spot, call it SmallBoober, it has no
       semicolons, no curly braces, no committees, just vibes. A program might look
       like this:
      </p>

      <CodeBlock
        language="plaintext"
        code={`print "She was smoking hot" + ", " + " mind blown!"`}
      />

      <p>
        Let's say, hypothetically that this is a compiled language, that would mean that
        user would need to compile this nonsense, generate some usually lower level
        form, let's say an executable. User could then execute this program, which
        would result in this beautiful and truthful printout: <i>"She was smoking hot,
        mind blown!"</i>
      </p>

      <p>
        On the other hand if this language implementation was an interpreter, user
        would take this source and execute it immediately, giving him this beautiful
        and truthful printout: <i>"She was smoking hot, mind blown!"</i>
      </p>

      <p>
        So let's lose few additional brain cells now, let's say that in SmallBoober you could 
        do something like this:
      </p>

      <CodeBlock
        language="plaintext"
        code={`sb compile main.sb`}
      />

      <p>
       But you could also do something like this:
      </p>

      <CodeBlock
        language="plaintext"
        code={`sb execute main.sb`}
      />

      <p>
        The <strong>`compile`</strong> command would generate machine code, while the
        <strong>`execute`</strong> command would do the same but immediately execute it
        afterwards. This would mean that sb can be used as both an interpreter and a
        compiler and when you interpret code you are compiling internally. Brainfuck,
        isn't it? There are also a bunch of shortcuts and subvariants of these two
        pokemons, for example: single pass compilers, tree-walk interpreters, transpilers,
        JIT compilers. But that's all too much in here we just dummify, keep it fun,
        viby and cool and if you want all the boring stuff you can read all about it
        in the actual book.
      </p>

     <h2>Okay this might be too viby and all so let's see concrete examples</h2>

     <h3>C++ — a compiled language</h3>

     <p>
        C++ is a compiled language, right, so this is what needs to happen for a program
        to run, of course in simple terms but nonetheless concrete example it is.
     </p>

    <p>
      So for a C++ program to run it has to be processed by a compiler which would then
      generate a lower level form, in this case object files, which then get combined
      by a linker generating an executable program, the executable gets generated for a
      specific hardware/system combination, so it would run fast — but that's also the
      downside, portability suffers. Nonetheless, C++ source is still a portable one.
    </p>

    </>
  );
}

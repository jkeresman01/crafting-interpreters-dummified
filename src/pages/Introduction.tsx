import CodeBlock from '../components/CodeBlock';

export default function Introduction() {
  return (
    <>
      <h1>Introduction</h1>

      <p>
        What are we cooking in here, you probably might wonder, is it beautiful soups,
        is it a react website that my grandma could write, is it a .NET application
        written in an overbloated IDE/editor called Visual Studio for which you need a
        2 years course in order to learn what all the buttons do while some work only
        during full blood moon. Like yes, yes you really need 14567 different options
        for creating a controller.
       </p>

       <p>
        The answer is of course not, we do some actual programming in here. We will vibe,
        we will code and we will write, five times we will implement an interpreter and
        five different languages we will use. No sciency boring stuff, just pure fun.
        Before all that we need to introduce some jargon, so we will talk about love
        towards programming, about "Statements" of intent and "Expression's" of feelings,
        alognside some other stuff. But first lets see what this interpreter thing
        actually is and be aware if your background is too sciency, you will lose
        few brain cells along the way I promise you that.
       </p>

      <h1>Interpreters vs Compilers</h1>

      <p>
       There are two gems, generally speaking in this story. Compilers and interpreters
       and while some implementations are clearly on one side for some it's hard to
       tell, perhaps might even be both, but let's not go too far into that.
      </p>

      <p>
       In simple terms compilers take the source code, do some voodoo magic in between
       and spit out some other form, the poet is then free to do whatever he wants
       with that other form, while interpreters take the source code and execute it
       immediately. Of course it's not as simple as that, but let's leave it there.
      </p>

      <h2>Okay but let's dummify it even further with some examples</h2>

      <p>
       Imagine a tiny language we just made up on the spot, call it SmallBoober, it has no
       semicolons, no curly braces, no committees, just vibes. A program might look
       like this:
      </p>

      <CodeBlock
        language="plaintext"
        code={`print "I prefer" + " " + "women with smaller tits"`}
      />

      <p>
        Let's say for example that this was compiled language, that would mean that
        user would need to compile this nonsene, generate some ussually lower level
        form, let's say an executable. User could than execute this program, which
        would result in this beautiful and truthful printout: <i>"I prefer women with
        smaller tits"</i>
      </p>

      <p>
        On the other hand if this language implementation was an interpreter, user
        would take this source and execute it immediately, giving him this beautiful
        and truthful printout: <i>"I prefer women with smaller tits"</i>
      </p>

      <p>
        But now it's time to really loose few brain cells, let's say that in SmallBoober 
        you could do something like this:
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
        The <strong>`compile`</strong> command would generate a machine code, while
        <strong>`execute`</strong> command would do the same but immediately execute it
        afterwards. This would mean that sb can both be used as an interpreter and as
        a compiler and when you interpret code you are compiling internaly. Brainfuck
        isn't it. There are also a bunch of shortcuts and subvariants of this two
        pokemons, for example: single pass compilers, tree walk interpretes, transpilers,
        JIT compilers.  But that's all too much in here we just dummify, keep it fun,
        viby and cool and if you want all the boring stuff you can read all about it
        in the actual book.
      </p>

    </>
  );
}

import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

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
        for creating a controller and deleting WeatherForecasts is such a fun activity.
       </p>

       <p>
        The answer is of course not, we do some actual programming in here. We will vibe,
        we will code and we will write, five times we will implement an interpreter
        and five different languages we will use. No sciency boring stuff, just pure
        fun. Before all that we need to introduce some jargon, so we will talk about
        love towards programming, about "Statements" of intent and "Expression's" of
        feelings, alognside some other stuff. 
       </p>

       <p>

        Five languages or not — does it really matter? Given an implementation in
        one, AI can handle the rest. But with all of that, the joy of programming
        has disappeared. <strong>Don't you agree?</strong>  We've lost that sense of
        building something slowly, step by step. You know to write a small piece of
        software and you can't really tell if it works — you have to test how it
        behaves, step by step, day by day.
      </p>

      <p>
        So I'll do it in the ways of old and share some thoughts along the way. Maybe
        even spin up a debugger — you know, those confusing tools meant for old
        people and ohhhhh boy are they confusing, but the thing about debugging
        sessions is to just embrace the meaningless of it all, you don't fight it,
        you just embrace it and click step over, step into buttons all day long,
        until you realize that you forgot someting stupid like seven hours ago.
      </p>

      <Callout type="tip">
        <strong>I don't understand my debugger</strong>

        <br />

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/QfIOCyXBttY"
            title="I don't understand my debugger"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <Callout type="note">
          <p><strong>Interesting side tought: </strong>
            Philosophy is important Bjarne Stroustrup also thinks that, of course he
            talks about language design, debuggers are tools of old, I will acknowledge
            that, young's are faster to learn and adapt, young in age, or young is
            spirit, still minds are quite bright, "Young people walk ahead of the adults"
            all concepts that came from the book, perhaps "you doubt" could be the
            moment of subjective reality trap, perhaps I needed to test this concept
            out, the subjective reallity one,  genuine look, on first walk by proved
            just that, nonetheless it did brought an <strong> interest</strong>ing
            thought <strong>of mine</strong>. Keep looking at debugger or not? AI is
            here to stay and putting few breakpoints in could generally be just huge
            waste of time, vibes are important, and that's that. Anyhowzzy, on the
            second tought, one debugging session afterwards, perhaps second walk by
            trought the codebase, failed to prove that, deubugging in the ways of old
            is quite fun. You see, it's all subjective reality trap, perhaps for some,
            stepping trough debugger is the only way, but we should try to see things
            objectivly, perhaps one different look, or viewpoint can change your mind,
            AI is also quite fun.
          </p>
       </Callout>

       <p>
        Okay, okay, enough chit chat and stuff let's see what this interpreter thing
        is all about and be aware if your background is too sciency, you will lose
        few brain cells along the way I promise you that.
       </p>

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

      <p><strong>Interesting side tought: </strong>
        You, see how I used poet and not a programmer, programming is an art, but
        it's also about craft, but I's also about love, perhaps my task was on that
        crosswalk to act, haven't seen anything as hot since that, perhaps thinking
        she would read is too crazy of a tought, perhaps haven't been paying attention
        lately that much, since she was still in the tought.
      </p>

      <p>And oohh, artists built the machithos</p>
            
      <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/1tQ5XwvjPmA?start=1065&end=1087"
          title="Artist build the machinthos"
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
        So let's loose few brain cells now, let's say that in SmallBoober you could 
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

      <h1> Phases of a compiler/interpreter </h1>

      <p>
       Okay now that we understand what are we building, let's see which phases
       we need to go through, but of course dummified a lot, so the main question is:
       <i><strong>"How do we get from the high level language like SmallBoober to
       series of instructions that CPU can actually execute?"</strong></i>
      </p>

      <Callout type="tip">

        <p>
          The phases are roughly three: <strong>front end</strong>, <strong>middle
          end</strong> and <strong>back end</strong>
        </p>

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/BT2Cv-Tjq7Q?start=48&end=61"
            title="Artist builds the machinthos"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <p>
        So just listen, listen she was mindblowing, smoking hot and beauty is subjective
        btw, but phases are three: <strong>front end</strong> which is usually specific
        to the source language that we are dealing with or in other words here we
        are trying to figure out what the poet was trying to say, <strong>middle end
        </strong> where we optimize a bunch of stuff, like do some constant folding,
        unroll some loops etc. or in other words when we understand what poet tried
        to say, we can swap it a bit while keeping the same semantics and finally
        at the end of the story there comes <strong>back end</strong> so we have now
        optimized everything that comes to mind and now is time to generate some machine
        instructions and here the two most obvious things we can do are generate some
        bytecode or target a specific chip architecture (x86, ARM...) or in other words
        we go back from poetry to reality, pure on logic and instructions. Ofcourse
        it's quite more complex than that, but lets leave it there.
      </p>

      <Callout type="note">

      <p><strong>Offtopic: </strong>
        Okay if your mind isn't blown yet, like mine was, just listen to this next bit.
        This dude in the video drops this thing called IR (Intermediate Representation),
        and ohhhhh boy is it neat. It saves us from the dreaded MxN problem and makes
        optimizations way easier on top of that. You see, if you want to ship compilers
        for a bunch of languages and target a bunch of architectures, naively you'd need
        MxN implementations — sounds painful, right? But just listen to this crazy idea:
        each frontend targets some intermediate representation, and the backend takes
        that IR and spits out native code. Boom, problem solved. The reason GCC supports
        so many languages and so many chips is exactly this — every frontend targets an
        IR, mostly GIMPLE and RTL, and that's that.
      </p>

      </Callout>


      <h2>Okay but let's talk about this phases a bit more</h2>

      <h3>Frontend</h3>

      <p>
        Let's start with the frontend, here roughly we also have three phases,
        scanning(lexing), parsing and static analysis.
      </p>

      <h4>Scanning</h4>
       
      <p>
        This phase pretty much boils down to one big dumb ass switch statement. We
        take a stream of characters and group them into tokens (words) that make up
        our language grammar. There really aren't some better words that come to mind,
        but just stay with me it will all make sense after some dummified examples.
      </p>

      <p>
        There are a few terms that get used in here, "Scanning" and "Lexing", we will
        use scanning but "Lexing" could be more correct, it comes from Greek root "lex"
        meaning "word" <strong>and that's that</strong>. This mystery was quite easy.
        We are essentially just grouping this stream of characters into "words", while 
        ignoring all the noise, like comments and whitespace.
      </p>

      <Callout type="tip">

      <p><strong>Fun fact: </strong>
        In ancient times, like two bilion years ago, human ancestors—such as Homo
        erectus discovered how to control fire and somewhere in that period when memory
        was precious resours <strong>"Scanner"</strong> refered to part of code that
        read raw source code characters from disk and <strong>"Lexer"</strong> actually
        did something useful with those characters, today no one cares anymore.
      </p>

      </Callout>

      </>
  );
}

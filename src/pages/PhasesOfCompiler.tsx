import Callout from '../components/Callout';

export default function PhasesOfCompiler() {
  return (
    <>
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
            title="Artists built the Macintosh"
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
        at the end of the story there comes <strong>back end</strong> so we have
        now optimized everything that comes to mind and now is time to generate some
        machine instructions and here the two most obvious things that come to mind
        would be to generate some bytecode or target a specific chip architecture
        (x86, ARM...) or in other words we go back from poetry to reality, pure on
        logic and instructions. Of course it's quite more complex than that, but lets
        leave it there.
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
        In ancient times, like two billion years ago, human ancestors—such as Homo
        erectus discovered how to control fire and somewhere in that period when memory
        was precious resource <strong>"Scanner"</strong> referred to part of code that
        read raw source code characters from disk and <strong>"Lexer"</strong> actually
        did something useful with those characters, today no one cares anymore.
      </p>

      </Callout>

      <h4>Parsing</h4>

      <p>...</p>

      <h4>Static Analysis</h4>

      <p>
        Okay, okay and while first two stages like scanning and parsing tend to be boring
        and dull, pretty much the same accross all implementations. Static analysis
        is where individual quirks and characteristics of each langauge come into play.
      </p>

      <h3>Middle end</h3>

      <p>Okay, okay we now understand what the poet tried to say, so we can swap it out
      while keeping the same semantics, and we sneak in some optimizations along the way.</p>

      <p>Optimizations are just a weird and complex topic on its own, most of them happen
      on intermidiate representation, but not all of them, and one can spend decades
      trying to figure it all out, it's a huge rabbit hole on its own with a bunch
      of fancy words like: "strength reduction", "scalar replacement of aggregates",
      "loop invariant code motion", "common subexpression elimination"...  </p>

      <p>Like what does this even mean, while some languages just keep it cute and
      simple, generate relatively unoptimized code and just roll on, Lua tends to do
      just that.</p>

      <p>Seriously people can spend their entire carrers only thinking about
      optimizations and performance, it can become and obsession of it's own, we will
      just give a small overview of what can be done: </p>


   <Callout type="note">
        <h4>What compilers can and cannot do</h4>
        <p>
         We won't go too much into that, since as I said you can spend decades learning
         only about optimizations, but here is a short summary of what compilers generally
         can and cannot do in terms of Bentley rules for optimizing work and some more:
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ulJm7_aTiQM?start=828&end=1070"
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

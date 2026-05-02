import Callout from '../components/Callout';

export default function Preface() {
  return (
    <>
      <h1>How did it start?</h1>

      <p>
          Yesterday I closed one important chapter of my life. I finished my first
          book and left with one last piece of wisdom that will carry me through
          this one: <i>"<strong>Just talk, don't walk</strong>: The continuation of
          the thought, 5 languages one interpreter"</i>
      </p>

      <p>
        That book started with a funny story; this one is a bit different, so let's
        go back to where it started. That same <i>"closing chapter day"</i>. I was
        sipping coffee, talking nonsense in the same bar — perhaps more of a <i>"hole"</i> —
        and decided to go for a walk, you know, to shift back into the world of
        thought. Just before my return to the said "hole", I was struck by lightning:
        that one smoking hot red-haired badass goddess I just saw. The weather was fairly 
        sunny that day and I continued to walk but that single moment brought back my inspiration to 
        write and the idea to dummify the concepts taught in the "Crafting Interpreters" book, 
        speak a bit about different programming languages, how to implement an interpreter in them,
        and to answer the question: "Why do I walk? Is it to bring me into the world of thought?"
      </p>

      <Callout type="tip">
        <strong>Fun fact:</strong> Steve Jobs walked seven miles across town every Sunday
        to get one good meal a week at the Hare Krishna temple.

        <br />

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/UF8uR6Z6KLc?start=184&end=283"
            title="Steve Jobs on starting Pixar and Next"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <p>
        Five languages or not — does it really matter today? Given an implementation
        in one, AI can handle the rest pretty easily.
      </p>

      <p>
        But with all of that, the joy of programming has disappeared. Don't you agree?
        We've lost that sense of building something slowly, step by step. You write a
        small piece of software and you can't really tell if it works — you have to
        test how it behaves. So I'll do it the old way and share some thoughts along
        the way. Maybe even spin up a debugger — you know, those confusing tools
        meant for old people and ohhhh boy are they confusing, but the thing about debugging 
        sessions is to just embrace the meaningless of it all, you don't fight it, you just
        embrace it and click step over, step into buttons all day along, or in other words
        you just play along.
      </p>

      <Callout type="tip">
        <strong>I don't understand my debugger</strong>

        <br />

        <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/QfIOCyXBttY"
            title="YouTube Short"
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>
    </>
  );
}

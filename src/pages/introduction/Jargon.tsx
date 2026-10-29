import Callout from "../../components/Callout";

export default function Jargon() {
  return (
    <>
      <h1>Jargon & some boring stuff</h1>

      <p>Was thinking about writing about parser stage for quite some time, but some
      jargon is important before we move to that, we will of course be led by love,
      talk about "Statements" of intent and "Expressions" of feelings, there is also
      this thing called "ExpressionStatement" which is quite fun, but also nature, trees,
      grammar, how do we represent the code and <strong>wars</strong> among other boring 
      stuff.</p>

      <Callout type="tip">
        <p><strong>They leave me no choice in this wars</strong></p>

        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/3vI_7os2V_o?start=78&end=95"
            title="They leave me no choice in this wars"
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

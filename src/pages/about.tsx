import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { graphql, Link } from "gatsby"

import { Seo } from "../components"

const Container = styled.article`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-m) var(--space-m);
  display: grid;
  row-gap: var(--space-m);
  font-size: var(--font-m);
  background: var(--background-color);
`

const Title = styled.h1`
  font-size: var(--font-xxl);
`

const ImageOfMe = styled(Image)`
  border-radius: var(--border-radius);
`

const SubTitle = styled.h1`
  font-size: var(--font-l);
  line-height: 3.2rem;
`

const Paragraph = styled.p`
  font-size: var(--font-m);
  line-height: 3.4rem;
  word-break: break-word;
`

export default function AboutPage({ data }) {
  return (
    <Container>
      <Seo title="About" />

      <Title>About</Title>

      <ImageOfMe fluid={data.file.childImageSharp.fluid} />

      <SubTitle>
        Zac, currently headquartered at the University of Bristol
      </SubTitle>

      <Paragraph>
      You were on your way home when you died.
      </Paragraph>
      <Paragraph>
      It was a car accident. Nothing particularly remarkable, but fatal nonetheless. You left behind a wife and two children. It was a painless death. The EMTs tried their best to save you, but to no avail. Your body was so utterly shattered you were better off, trust me.
      </Paragraph>
      <Paragraph>
      And that’s when you met me.
      </Paragraph>
      <Paragraph>
      “What… what happened?” You asked. “Where am I?”
      </Paragraph>
      <Paragraph>
      “You died,” I said, matter-of-factly. No point in mincing words.
      </Paragraph>
      <Paragraph>
      “There was a… a truck and it was skidding…”
      </Paragraph>
      <Paragraph>
      “Yup,” I said.
      </Paragraph>
      <Paragraph>
      “I… I died?”
      </Paragraph>
      <Paragraph>
      “Yup. But don’t feel bad about it. Everyone dies,” I said.
      </Paragraph>
      <Paragraph>
      You looked around. There was nothingness. Just you and me. “What is this place?” You asked. “Is this the afterlife?”
      </Paragraph>
      <Paragraph>
      “More or less,” I said.
      </Paragraph>
      <Paragraph>
      “Are you god?” You asked.
      </Paragraph>
      <Paragraph>
      “Yup,” I replied. “I’m God.”
      </Paragraph>
      <Paragraph>
      “My kids… my wife,” you said.
      </Paragraph>
      <Paragraph>
      “What about them?”
      </Paragraph>
      <Paragraph>
      “Will they be all right?”
      </Paragraph>
      <Paragraph>
      “That’s what I like to see,” I said. “You just died and your main concern is for your family. That’s good stuff right there.”
      </Paragraph>
      <Paragraph>
      You looked at me with fascination. To you, I didn’t look like God. I just looked like some man. Or possibly a woman. Some vague authority figure, maybe. More of a grammar school teacher than the almighty.
      </Paragraph>
      <Paragraph>
      “Don’t worry,” I said. “They’ll be fine. Your kids will remember you as perfect in every way. They didn’t have time to grow contempt for you. Your wife will cry on the outside, but will be secretly relieved. To be fair, your marriage was falling apart. If it’s any consolation, she’ll feel very guilty for feeling relieved.”
      </Paragraph>
      <Paragraph>
      “Oh,” you said. “So what happens now? Do I go to heaven or hell or something?”
      </Paragraph>
      <Paragraph>
      “Neither,” I said. “You’ll be reincarnated.”
      </Paragraph>
      <Paragraph>
      “Ah,” you said. “So the Hindus were right,”
      </Paragraph>
      <Paragraph>
      “All religions are right in their own way,” I said. “Walk with me.”
      </Paragraph>
      <Paragraph>
      You followed along as we strode through the void. “Where are we going?”
      </Paragraph>
      <Paragraph>
      “Nowhere in particular,” I said. “It’s just nice to walk while we talk.”
      </Paragraph>
      <Paragraph>
      “So what’s the point, then?” You asked. “When I get reborn, I’ll just be a blank slate, right? A baby. So all my experiences and everything I did in this life won’t matter.”
      </Paragraph>
      <Paragraph>
      “Not so!” I said. “You have within you all the knowledge and experiences of all your past lives. You just don’t remember them right now.”
      </Paragraph>
      <Paragraph>
      I stopped walking and took you by the shoulders. “Your soul is more magnificent, beautiful, and gigantic than you can possibly imagine. A human mind can only contain a tiny fraction of what you are. It’s like sticking your finger in a glass of water to see if it’s hot or cold. You put a tiny part of yourself into the vessel, and when you bring it back out, you’ve gained all the experiences it had.
      </Paragraph>
      <Paragraph>
      “You’ve been in a human for the last 48 years, so you haven’t stretched out yet and felt the rest of your immense consciousness. If we hung out here for long enough, you’d start remembering everything. But there’s no point to doing that between each life.”
      </Paragraph>
      <Paragraph>
      “How many times have I been reincarnated, then?”
      </Paragraph>
      <Paragraph>
      “Oh lots. Lots and lots. An in to lots of different lives.” I said. “This time around, you’ll be a Chinese peasant girl in 540 AD.”
      </Paragraph>
      <Paragraph>
      “Wait, what?” You stammered. “You’re sending me back in time?”
      </Paragraph>
      <Paragraph>
      “Well, I guess technically. Time, as you know it, only exists in your universe. Things are different where I come from.”
      </Paragraph>
      <Paragraph>
      “Where you come from?” You said.
      </Paragraph>
      <Paragraph>
      “Oh sure,” I explained “I come from somewhere. Somewhere else. And there are others like me. I know you’ll want to know what it’s like there, but honestly you wouldn’t understand.”
      </Paragraph>
      <Paragraph>
      “Oh,” you said, a little let down. “But wait. If I get reincarnated to other places in time, I could have interacted with myself at some point.”
      </Paragraph>
      <Paragraph>
      “Sure. Happens all the time. And with both lives only aware of their own lifespan you don’t even know it’s happening.”
      </Paragraph>
      <Paragraph>
      “So what’s the point of it all?”
      </Paragraph>
      <Paragraph>
      “Seriously?” I asked. “Seriously? You’re asking me for the meaning of life? Isn’t that a little stereotypical?”
      </Paragraph>
      <Paragraph>
      “Well it’s a reasonable question,” you persisted.
      </Paragraph>
      <Paragraph>
      I looked you in the eye. “The meaning of life, the reason I made this whole universe, is for you to mature.”
      </Paragraph>
      <Paragraph>
      “You mean mankind? You want us to mature?”
      </Paragraph>
      <Paragraph>
      “No, just you. I made this whole universe for you. With each new life you grow and mature and become a larger and greater intellect.”
      </Paragraph>
      <Paragraph>
      “Just me? What about everyone else?”
      </Paragraph>
      <Paragraph>
      “There is no one else,” I said. “In this universe, there’s just you and me.”
      </Paragraph>
      <Paragraph>
      You stared blankly at me. “But all the people on earth…”
      </Paragraph>
      <Paragraph>
      “All you. Different incarnations of you.”
      </Paragraph>
      <Paragraph>
      “Wait. I’m everyone!?”
      </Paragraph>
      <Paragraph>
      “Now you’re getting it,” I said, with a congratulatory slap on the back.
      </Paragraph>
      <Paragraph>
      “I’m every human being who ever lived?”
      </Paragraph>
      <Paragraph>
      “Or who will ever live, yes.”
      </Paragraph>
      <Paragraph>
      “I’m Abraham Lincoln?”
      </Paragraph>
      <Paragraph>
      “And you’re John Wilkes Booth, too,” I added.
      </Paragraph>
      <Paragraph>
      “I’m Hitler?” You said, appalled.
      </Paragraph>
      <Paragraph>
      “And you’re the millions he killed.”
      </Paragraph>
      <Paragraph>
      “I’m Jesus?”
      </Paragraph>
      <Paragraph>
      “And you’re everyone who followed him.”
      </Paragraph>
      <Paragraph>
      You fell silent.
      </Paragraph>
      <Paragraph>
      “Every time you victimized someone,” I said, “you were victimizing yourself. Every act of kindness you’ve done, you’ve done to yourself. Every happy and sad moment ever experienced by any human was, or will be, experienced by you.”
      </Paragraph>
      <Paragraph>
      You thought for a long time.
      </Paragraph>
      <Paragraph>
      “Why?” You asked me. “Why do all this?”
      </Paragraph>
      <Paragraph>
      “Because someday, you will become like me. Because that’s what you are. You’re one of my kind. You’re my child.”
      </Paragraph>
      <Paragraph>
      “Whoa,” you said, incredulous. “You mean I’m a god?”
      </Paragraph>
      <Paragraph>
      “No. Not yet. You’re a fetus. You’re still growing. Once you’ve lived every human life throughout all time, you will have grown enough to be born.”
      </Paragraph>
      <Paragraph>
      “So the whole universe,” you said, “it’s just…”
      </Paragraph>
      <Paragraph>
      “An egg.” I answered. “Now it’s time for you to move on to your next life.”
      </Paragraph>
      <Paragraph>
      And I sent you on your way.
      </Paragraph>
    </Container>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "general/about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

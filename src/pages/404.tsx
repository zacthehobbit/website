import React from "react"
import { styled } from "linaria/react"
import { Link } from "gatsby"

import { Seo } from "../components"

const Container = styled.article`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: var(--space-s);
  padding: var(--space-m);
`

const Title = styled.h1`
  font-size: var(--font-xxl);
`

const Paragraph = styled.p`
  font-size: var(--font-m);
  line-height: 3.2rem;
`

const HomeLink = styled((props) => <Link {...props} />)`
  padding: var(--space-s);
  padding-top: calc(var(--font-padding) + var(--space-s));
  border-radius: 40px;
  background: var(--primary-color);
  color: var(--default-text-color);
  font-size: var(--font-s);
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: var(--background-color);
  }
`

export default function NotFoundPage() {
  return (
    <Container>
      <Seo title="404" />
      <Title>Lost in Space</Title>
      <Paragraph>
      All that is gold does not glitter,
      </Paragraph>
      <Paragraph>
      Not all those who wander are lost;
      </Paragraph>
      <Paragraph>
      The old that is strong does not wither,
      </Paragraph>
      <Paragraph>
      Deep roots are not reached by the frost.
      </Paragraph>
      <HomeLink to="/" data-clickable="default">
        Go Home
      </HomeLink>
    </Container>
  )
}

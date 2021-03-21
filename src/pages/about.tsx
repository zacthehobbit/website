import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { graphql, Link } from "gatsby"

import { Seo } from "../components"

const Container = styled.article`
  width: 100%;
  max-width: 60ch;
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
        Zach is a hobbit.
      </SubTitle>

      <Paragraph>
        He lives in a hobbit hole.
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

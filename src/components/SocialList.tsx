import React from "react"
import { styled } from "linaria/react"

import { ReactComponent as TwitterIcon } from "../images/icons/twitter.svg"
import { ReactComponent as GitHubIcon } from "../images/icons/github.svg"
import { ReactComponent as LinkedInIcon } from "../images/icons/linkedin.svg"

const Container = styled.div`
  grid-area: social;
  display: grid;
  justify-self: start;
  justify-items: start;
  align-items: start;
  grid-auto-flow: column;
  gap: var(--space-xs);
  transform: translateX(calc(-1 * var(--space-xs)));

  @media (min-width: 600px) {
    gap: var(--space-s);
  }
`

const Social = styled.a`
  padding: var(--space-xs);
  border-radius: 50%;
  display: inline-flex;
  color: rgb(232, 230, 227);
  svg {
    width: 3.2rem;
    height: 3.2rem;
    fill: currentColor;

    @media (min-width: 600px) {
      width: 4rem;
      height: 4rem;
    }
  }
`

const socials = [
  {
    name: "Twitter",
    link: "https://twitter.com/zacthehobbit",
    renderIcon: () => <TwitterIcon />
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zacthehobbit",
    renderIcon: () => <LinkedInIcon />
  },
  {
    name: "GitHub",
    link: "https://github.com/zacthehobbit",
    renderIcon: () => <GitHubIcon />
  }
]

export default function SocialList() {
  return (
    <Container>
      {socials.map((social) => (
        <Social
          href={social.link}
          target="_blank"
          rel="noopener"
          aria-label={social.name}
          data-clickable="default"
        >
          {social.renderIcon()}
        </Social>
      ))}
    </Container>
  )
}

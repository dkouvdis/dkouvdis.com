import React from 'react'

import Grid from './Grid'

import links from '../data/links'

const Contact = () => (
  <Grid title="Contact">
    <nav className="flex flex-col sm:flex-row items-start">
      {links.map((link, index) => (
        <a
          className="mr-4"
          role="link"
          id={link.label}
          target="_blank"
          rel="noreferrer"
          key={index}
          href={link.link}
        >
          <span className="inline-block border-b border-blue-400 text-base sm:px-1 mb-1 sm:mb-0">
            {link.label}
          </span>
        </a>
      ))}
    </nav>
  </Grid>
)

export default Contact

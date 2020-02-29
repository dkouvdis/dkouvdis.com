import React, { Fragment } from 'react'

import Grid from './Grid'

import careers from './career'

const Career = ({ career }) => (
  <li className="mt-6">
    <div className="pl-4">
      {career.company ? (
        <p className="text-2xl pb-2 leading-none">{career.company}</p>
      ) : null}

      {career?.date ? (
        <Fragment>
          <p className="text-sm mb-1">
            <img
              className="w-5 h-5 mr-1 inline-block"
              src="/icons/calendar.svg"
              alt="location"
            />
            {career.date[0]}
            {career?.date[1] ? ` - ${career?.date[1]}` : null}
          </p>
        </Fragment>
      ) : null}

      {career.location ? (
        <p className="text-sm mb-1">
          <img
            className="w-5 h-5 mr-1 inline-block"
            src="/icons/location.svg"
            alt="location"
          />
          {career.location}
        </p>
      ) : null}
    </div>

    {career.outsourced ? (
      <ul className="timeline--child ml-4">
        {career.outsourced.map((c, i) => (
          <Career career={c} key={i} />
        ))}
      </ul>
    ) : null}
  </li>
)

const Timeline = () => (
  <Grid title="Experiences">
    <p className="text-xs">
      Below is a summarised version of my work experience. For more detail,
      check my{' '}
      <button
        onClick={() => {
          const el = document.querySelector('#CV')
          el.focus()
          el.classList.add('outline')

          setTimeout(() => {
            el.classList.remove('outline')
          }, 1200)
        }}
        className="border-b border-blue-400"
      >
        CV
      </button>
      .
    </p>

    <ul className="timeline">
      {careers.map((career, index) => (
        <Career key={index} career={career} />
      ))}
    </ul>
  </Grid>
)

export default Timeline

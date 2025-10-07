import React from 'react'
import { FeatureRepetitionExample, HeadlessUIBlockExample } from './code-examples'

const Introduction = () => {
  return (
    <main id='introduction' className='text-slate-200 pt-6'>
      <article className='flex flex-col gap-y-8'>

        <section>
          <h1 className='text-3xl font-bold'>Introduction</h1>
          <p className='text-slate-300 mt-2'>React One Table is a wrapper around Tanstack Table, to make working with it more opiniated and straightforward.</p>
        </section>

        <section>
          <h1 className='text-3xl font-bold'>What it does ?</h1>
          <p className='text-slate-300 mt-2'>It tries to abstract repetitive code and logic, which is needed to write using Tanstack table.</p>
        </section>

        <section>
          <h2 className='text-xl font-bold'>Headless UI Limitations</h2>
          <p className='text-slate-300 my-2'>As Tanstack table is a headless UI Library, React One Table provides abstracted UI to some extent, to try and overcome the limitations of headless UI by providing a ready made table component in which content is already mapped to JSX, which can accept custom components for creating markup, along with customizable props.</p>
          <HeadlessUIBlockExample />
        </section>

        <section>
          <h2 className='text-xl font-bold'>Feature Repetition</h2>
          <p className='text-slate-300 my-2'>Tanstack table requires that if features like sorting, pagination, etc need to be used through external APIs, external states be provided. React One Table abstracts those external state requirements into clean custom hooks, and provides easy to understand mutator functions that are needed in real world scenarios to alter the state, along with the actual state to be readily passed into the Table component.</p>
          <FeatureRepetitionExample />
        </section>

      </article>
    </main>
  )
}

export default Introduction
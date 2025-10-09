import React from 'react'
import { UseReactTableExample } from './code-examples'

const PreRequisiteTanstackTable = () => {
  return (
    <main id='prerequisite-tanstack-table'>
      <article className='flex flex-col gap-y-8 pb-20'>

        <section id='tanstack-dependancy'>
          <h2 className='text-xl font-bold mb-1'>Tanstack Dependancy</h2>
          <div className='text-slate-300'>
            React One Table is highly dependant and inspired by Tanstack Table. Infact, most of the code you will write to create your tables will belong to Tanstack itself. Below are some core concepts to help you understand the basics of Tanstack table, but it is highly recommended to try it out yourself through the official Tanstack docs before coming to this library, to understand better, the ups and downs of Tanstack, and what this library hopes to achieve.
          </div>
        </section>

        <section id='prerequisite-no-babysit-warning' className='border-l-2 border-slate-300 pl-2'>
          <h4 className='text-md font-bold text-slate-300'>
            Note that this section will not go in depth of Tanstack table, only cover the basic concepts through theory.
          </h4>
        </section>

        <section id='tanstack-dependancy'>
          <h2 className='text-xl font-bold mb-1'>Installation</h2>
          <div className='text-slate-300'>
            The latest version of Tanstack table will be automatically installed, when you install React One Table. You can easily import stuff provided from Tanstack table after this {"library's"} installation.
          </div>
        </section>

        <h1 className='text-2xl font-bold'>Core Concepts</h1>

        <section>
          <h2 className='text-xl font-bold'>Table instance & <pre className='inline'><code>useReactTable</code></pre></h2>
          <div className='text-slate-300 my-2'>
            The very core part of Tanstack table is this hook, which returns the table instance. Whatever gymnastics is possible in Tanstack table, is possible through this instance.
          </div>
          <UseReactTableExample />
          <p className='text-slate-300 mt-3 mb-3'>Some key properties and methods you will frequently use with this instance are:</p>
          <ul className='list-disc pl-5 text-slate-300 flex flex-col gap-y-1'>
            <li>
              <pre className='inline mr-2'><code>getHeaderGroups(), getRowModel():</code></pre>Used to get headers and rows to map on, and create the JSX.
            </li>
            <li>
              <pre className='inline mr-2'><code>getState():</code></pre>Used to access the internal states of the table like sorting, pagination, resizing, and many more. Only useful if you are using these features client side. In case if depend on your external server to provide paginated and/or sorted data, it is beter to control these states externally through your own states. Thankfully react-one-table takes care of this for you :)
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold'><pre className='inline'><code>useReactTable</code></pre> Options</h2>
          <p className='text-slate-300 mt-3 mb-3'>Below are some frequently used options with this hook:</p>
          <ul className='list-disc pl-5 text-slate-300 flex flex-col gap-y-1'>
            <li>
              <pre className='inline mr-2'><code>initialState: </code></pre>When using some functionality like sorting, pagination, etc., you can pass the initial states to the table, so that tanstack initializes the table with those states.
            </li>
            <li>
              <pre className='inline mr-2'><code>state: </code></pre>When using some functionalities with external apis, and you have external states to control the table state, you pass in those states in this object against the functionality key like sorting, pagination, etc.
            </li>
            <li>
              <pre className='inline mr-2'><code>onStateChange:</code></pre>Used to react to state changes of the table, whether states passed are external, or no states are being passed and tanstack is managing them internally.
            </li>
            <li>
              <pre className='inline mr-2'><code>enable_feature:</code></pre>Example: enableSorting, enablePagination, etc.. Used to control whether tanstack will alter the states or not. If these are set to true and you try to use tanstack methods to, for eg, sort, the states will not change.
            </li>
            <li>
              <pre className='inline mr-2'><code>manual_feature:</code></pre>Example: manualSorting, manualPagination, etc.. When these are set to true, tanstack assumes that the data provided is already of the desired shape (sorted, paginated), and does not run its internal functions to mutate it. You will use it when you are using these functionalies through server side.
            </li>
            <li>
              <pre className='inline mr-2'><code>on_feature_Change:</code></pre>Eg: onSortingChange, onColumnPinningChange. Similar to onStateChange, but it will only trigger on state change of a particular functionality. In most cases you will use these options instead of onStateChange, because these are more narrower and easy to write.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-bold'><pre className='inline'><code>ColumnDef</code></pre> type</h2>
          <p className='text-slate-300'>This topic is covered in the next section.</p>
        </section>

      </article>
    </main>
  )
}

export default PreRequisiteTanstackTable
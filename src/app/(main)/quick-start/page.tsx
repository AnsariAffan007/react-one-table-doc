import { CodeBlock } from '@/components/code-example'
import React from 'react'

const QuickStart = () => {
  return (
    <main id='quick-start'>
      <article className='flex flex-col gap-y-8 pb-20'>

        <section id='installation'>
          <h1 className='text-2xl font-bold mb-2'>Installation</h1>
          <CodeBlock lang='cmd'>
            {`
            npm install react-one-table
            `.trim()}
          </CodeBlock>
          <p className='text-slate-300 mt-2'>
            This will install the one and only core package, along with the <pre className='inline mx-2'><code>@tanstack/react-table</code></pre> package. Both libraries are pretty lightweight, since they both promote the headless concept, with react-one-table providing very minimal UI abstraction.
          </p>
        </section>

        <section id='type-safety-jargon'>
          <h1 className='text-2xl font-bold mb-2'>Type-Safety</h1>
          <p className='text-slate-300 mt-2'>
            React One Table and Tanstack Table both are very typesafe libraries, and they have gone as far ahead as they could with with it. So it is highly encouraged that React One Table is used with typescript, though it can be written without typescript as well.
          </p>
        </section>

        <section id='define-data-object'>
          <h1 className='text-2xl font-bold'>Define the Data Object</h1>
          <p className='text-slate-300 my-2'>
            If you have typescript in your project, defining the base data object is the firstmost important thing to do, because not only is it required to pass it 2 times to React One Table, but it may also prove useful for other tasks like data fetching, forms, mutations, etc...
          </p>
          <CodeBlock lang='typescript'>
            {`type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  phone: number;
  status: "ACTIVE" | "INACTIVE";
  address: {
    city: string;
    country: string;
  }
}`.trim()
            }
          </CodeBlock>
          <p className='text-slate-300 mt-2'>
            Tanstack table supports nested objects as well using the `.` notation. {`We'll`} see more about this later.
          </p>
        </section>

        <section id='define-data-array'>
          <h1 className='text-2xl font-bold mb-2'>Define your Data Array</h1>
          <p className='text-slate-300 mt-2'>
            The data state should be of a stable reference. Ways of doing this is through a state variable, the useMemo hook, or defining the array itself outside of your component. React One Table uses the <pre className='mx-2 inline'><code>useReactTable</code></pre> hook internally to map out the data to jsx, and if it recieves a data array which is of unstable reference, it might go into an infinite re-render loop, so this part is important.
          </p>
        </section>

        <section id='define-columns'>
          <h1 className='text-2xl font-bold mb-2'>Defining Columns</h1>
          <p className='text-slate-300 mt-2'>
            Now {`we'll`} define the columns for our table. Defining columns is the same as Tanstack. This library does not provide any wrapper around that concept. Columns should be of the type <pre className='mx-2 inline'><code>{`ColumnDef<TData, TValue>[]`}</code></pre>, and this is exported from the Tanstack library itself. The stable reference point applies to the column array as well.
          </p>
        </section>

        <section id='using-create-column-helper'>
          <h1 className='text-xl font-bold mb-2'>Create Column Helper</h1>
          <p className='text-slate-300 mt-2'>
            You can use the <pre className='mx-2 inline'><code>{`createColumnHelper<TData>()`}</code></pre> function exported from Tanstack, to create columns in a more typesafe and readable way. It provides a better DX than just typing in raw objects in the array.
          </p>
        </section>

        <section>
          <h1 className="text-2xl font-bold">Calling the Table</h1>
          <p className="text-slate-300 my-2">
            Once the data and columns objects are set, only thing remaining is to call the Table component.
          </p>
          <CodeBlock lang='tsx'>
            {`
            import Table from 'react-one-table';
/---/
<Table
  columns={columns}
  data={rows}
/>
`
              .trim()
            }
          </CodeBlock>
          <p className='text-slate-300 mt-2'>
            This will render out a basic table with the specified columns and data provided.
          </p>

        </section>

        <section id='do-u-even-know-what-tanstack-is' className='border-l-2 border-slate-300 pl-2'>
          <h4 className='text-md font-bold text-slate-300'>
            Note that if you are not familiar with tanstack table, be sure to checkout the pre-requisites, to get to know the minimal Tanstack table knowledge required, to use this library.
          </h4>
        </section>

      </article>
    </main>
  )
}

export default QuickStart
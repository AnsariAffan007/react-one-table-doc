import React from 'react'
import { ColumnDefCreateColHelperDefn, ColumnDefDefinitions, ColumnDefDirectObjectDefinition } from './code-examples'

const ColumnDefType = () => {
  return (
    <main id='pre-requisite-columndef-type'>
      <article className='flex flex-col gap-y-8 pb-20'>

        <section>
          <h1 className='text-2xl font-bold'>Core</h1>
          <div className="text-slate-300 my-2">The columns array that is passed to useReactTable should be of the type of <pre className='inline mx-2'><code>{`ColumnDef<TData, TValue>[].`}</code></pre>This type is exported from the tanstack table library. This columns array should be of a stable reference, as specified in the quick start section. If not, tanstack may go in an infinite re-render loop. Ways to do this is by either defining it in a state variable, using the useMemo hook, or defining it outside of the react component altogether.</div>
          <ColumnDefDefinitions />
          <p className="text-slate-300 mt-8 mb-2">ColumnDef is just an object, and our columns is an array of those objects. Technically, none of the keys inside the object of ColumnDef are mandatory to provide. If you just provide an empty object, a column will be created in your JSX. But the most frequently used keys would be the accessorKey, header, and cell keys.</p>
          <ul className='list-disc pl-5 text-slate-300 flex flex-col gap-y-1'>
            <li>
              <pre className='inline mr-2'><code>accessorKey:</code></pre>This key is usually the key of your data type. Tanstack picks the corresponding value of this key from your data and renders it inside the table. If you have an email key in your data objects, you could put email in accessorKey and emails would appear in the table, as simple as that. This property supports nested keys as well, so if you have a nested object, say address, in your data object, you can do something like {"'address.city'"} to render the city strings.
            </li>
            <li>
              <pre className='inline mr-2'><code>header:</code></pre>Used to render the header of the table. This property accepts a normal string, as well as a method that returns some JSX, or a react component too. It passed in many things inside this callback pattern like the column, header, and the full table instance as well.
            </li>
            <li>
              <pre className='inline mr-2'><code>cell:</code></pre>Used to render the actual cells of the table. This too accepts either a string, a function that returns JSX, or a react component. And it too passes in many things inside the callbacks such as the cell object, column, the table instance, and many more.
            </li>
          </ul>
        </section>

        <section>
          <h1 className='text-2xl font-bold'>How to create ?</h1>
          <p className="text-slate-300 my-2">Since columns is just an array of objects, one obvious way is to type the objects and its keys directly.</p>
          <ColumnDefDirectObjectDefinition />
        </section>

        <section>
          <h2 className='text-xl font-bold'><pre><code>createColumnHelper</code></pre></h2>
          <p className="text-slate-300 my-2">Tanstack provides an inbuilt way to create columns, in a very DX friendly manner, with more type-safety. This method is often preferred, compared to writing plain objects.</p>
          <ColumnDefCreateColHelperDefn />
          <p className="text-slate-300 mt-8 mb-2">Using the columnHelper instance introduces 3 different ways of creating columns, of which, below are the 2 most frequently used ones:</p>
          <ul className='list-disc pl-5 text-slate-300 flex flex-col gap-y-1'>
            <li>
              <pre className='inline mr-2'><code>accessor:</code></pre>When the column is pretty straightforward, and your data object contains a primitive data type to be displayed as it is, inside the cells.
            </li>
            <li>
              <pre className='inline mr-2'><code>display:</code></pre>When you want to display something that is not readily available inside your data object, for example, a full name, a status chip, etc.
            </li>
          </ul>
        </section>

      </article>
    </main>
  )
}

export default ColumnDefType
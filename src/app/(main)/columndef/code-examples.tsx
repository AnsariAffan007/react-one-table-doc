import { CodeBlock } from "@/components/code-block";

export const ColumnDefDefinitions = () => (
  <CodeBlock lang="tsx">
    {
      `
const [columns] = useState<ColumnDef<TData, TValue>[]>([])
// OR
const columns = useMemo<ColumnDef<TData, TValue>[]>(() => [], [])
// OR
const columns: ColumnDef<TData, TValue>[] = [] // Defined outside of the react component
    `
        .trim()
    }
  </CodeBlock>
)

export const ColumnDefDirectObjectDefinition = () => (
  <CodeBlock lang="tsx">
    {`
const columns = useMemo<ColumnDef<TData, TValue>[]>(() => [
  {
    header: "Full Name",
    cell: ({ row: { original } }) => original.firstName + " " + original.lastName
  },
  {
    header: "Email",
    accessorKey: "email"
  }
], [])
    `.trim()
    }
  </CodeBlock>
)

export const ColumnDefCreateColHelperDefn = () => (
  <CodeBlock lang="tsx">
    {`
const columnHelper = createColumnHelper<TData>()

const columns = useMemo(() => [
  columnHelper.display({
    header: "Full Name",
    cell: ({ row: { original } }) => original.firstName + " " + original.lastName
  }),
  columnHelper.accessor("email", {
    header: "Email"
  }),
], [columnHelper])
`.trim()
    }
  </CodeBlock>
)
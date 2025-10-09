import { CodeBlock } from "@/components/code-block";


export const UseReactTableExample = () => (
  <CodeBlock lang="tsx">
    {
      `
    const table = useReactTable({ data, columns })
    `
        .trim()
    }
  </CodeBlock>
) 
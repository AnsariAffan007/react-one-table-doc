import { CodeBlock } from "@/components/code-block";

export const Installation = () => (
  <CodeBlock lang="cmd">
    {`
    npm install react-one-table
    `.trim()}
  </CodeBlock>
)

export const DataObject = () => (
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
)

export const TableCall = () => (
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
)
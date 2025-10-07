import { CodeBlock } from "@/components/code-example"

export const HeadlessUIBlockExample = () => (
  <CodeBlock lang="tsx">
    {`<Table
  components={{
    Table: MuiTable,
  }}
  componentProps={{
    table: {
      id: "user-listing-table"
    },
    tableBodyCell: ({ header }) => ({
      className: styles["table-head-row"]
    })
  }}
/>`.trim()}
  </CodeBlock>
)

export const FeatureRepetitionExample = () => (
  <CodeBlock lang="tsx">
    {`const UserListingComponent = () => {
  const { columnPins, pinColumn, unPinColumn } = useColumnPin()
  // Use "pinColumn" and "unPinColumn" where you need it, and they will alter the "columnPins" state for you
  return (
    <Table
      columnPinning={{
        state: columnPins
      }}
    />
  )
}`.trim()}
  </CodeBlock>
)
"use client"

import ShikiHighlighter from "react-shiki"

export const HeadlessUIBlockExample = () => (
  <ShikiHighlighter language="tsx" theme="dark-plus">
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
  </ShikiHighlighter>
)

export const FeatureRepetitionExample = () => (
  <ShikiHighlighter language="tsx" theme="dark-plus">
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
  </ShikiHighlighter>
)
export default function ScopeTable({ headers, rows, caption }) {
  return <div className="overflow-x-auto my-8">
    <table className="w-full min-w-[580px] text-left border border-outline-variant font-body-main">
      <caption className="text-left text-sm text-on-surface-variant pb-4">{caption}</caption>
      <thead className="bg-surface-container-low"><tr>{headers.map(h => <th key={h} scope="col" className="p-4 border-b border-outline-variant">{h}</th>)}</tr></thead>
      <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th key={j} scope="row" className="p-4 border-b border-outline-variant">{cell}</th> : <td key={j} className="p-4 border-b border-outline-variant text-on-surface-variant">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

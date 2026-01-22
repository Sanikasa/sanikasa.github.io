import { motion } from "framer-motion";
import { useState } from "react";
import type { TableRow } from "./ProjectData";

interface DynamicTableProps {
  headers: string[];
  rows: TableRow[];
  title: string;
}

export const DynamicTable = ({ headers, rows, title }: DynamicTableProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = Object.values(a)[headers.indexOf(sortColumn)];
    const bVal = Object.values(b)[headers.indexOf(sortColumn)];
    
    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
    }
    return sortDirection === "asc" 
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl overflow-hidden"
    >
      <div className="p-6 border-b border-border">
        <h4 className="font-display text-lg font-semibold">{title}</h4>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              {headers.map((header, index) => (
                <th
                  key={header}
                  onClick={() => handleSort(header)}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  <div className="flex items-center gap-1">
                    {header}
                    {sortColumn === header && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-accent"
                      >
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </motion.span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIndex * 0.05 }}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`border-b border-border transition-colors ${
                  hoveredRow === rowIndex ? "bg-accent/5" : ""
                }`}
              >
                {Object.values(row).map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-4 text-sm ${
                      cellIndex === 0 ? "font-medium" : "text-muted-foreground"
                    }`}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: rowIndex * 0.05 + cellIndex * 0.02 }}
                    >
                      {typeof cell === "number" 
                        ? cell.toLocaleString() 
                        : cell}
                    </motion.span>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

import { FileSpreadsheet, FileText } from "lucide-react";

/**
 * UipathProofStrip — two panels showing what the workbook actually
 * looks like after a run: the Alert Sheet tab (breach rows) and the
 * audit log CSV excerpt. Same data the replay above already
 * generated, but shown in the exact shape the ops team would open in
 * Excel or a text editor.
 */

type Alert = {
  time: string;
  supplier: string;
  partNo: string;
  last: string;
  scraped: string;
  delta: string;
  reason: string;
};

const ALERTS: Alert[] = [
  { time: "09:01:18", supplier: "B&H Photo Video", partNo: "PXW-A400", last: "$399.00", scraped: "$549.99", delta: "+37.84%", reason: "Price ↑ breach" },
  { time: "09:01:18", supplier: "Canada Computers", partNo: "MBASU00694", last: "$180.00", scraped: "$249.99", delta: "+38.88%", reason: "Price ↑ breach" },
  { time: "09:01:18", supplier: "Insight", partNo: "PA503X", last: "$450.00", scraped: "$538.49", delta: "+19.66%", reason: "Price ↑ breach" },
  { time: "09:01:18", supplier: "Micro Card", partNo: "1071710726", last: "$600.00", scraped: "$688.70", delta: "+14.78%", reason: "Price ↑ breach + Stock: OOS" },
  { time: "09:01:18", supplier: "Micro Center", partNo: "M2SSD-1TB", last: "$1200.00", scraped: "$999.99", delta: "−16.67%", reason: "Price ↓ breach" },
  { time: "09:01:18", supplier: "Adorama", partNo: "SONY-A7R5", last: "$2500.00", scraped: "$2909.00", delta: "+16.36%", reason: "Price ↑ breach" },
];

const AUDIT_LINES = [
  "run_id,supplier,part_no,last_known,scraped,delta_pct,stock,status",
  "R-2027-07-17-01,Adorama,SONY-A7R5,2500.00,2909.00,+16.36,In Stock,ALERT",
  "R-2027-07-17-01,B&H Photo Video,PXW-A400,399.00,549.99,+37.84,In Stock,ALERT",
  "R-2027-07-17-01,Micro Center,M2SSD-1TB,1200.00,999.99,-16.67,In Stock,ALERT",
  "R-2027-07-17-01,Insight,PA503X,450.00,538.49,+19.66,In Stock,ALERT",
  "R-2027-07-17-01,Micro Card,1071710726,600.00,688.70,+14.78,Out of Stock,ALERT",
  "R-2027-07-17-01,Tomauri,300250,120.00,114.99,-4.18,In Stock,OK",
  "R-2027-07-17-01,Canada Computers,MBASU00694,180.00,249.99,+38.88,In Stock,ALERT",
];

export function UipathProofStrip() {
  return (
    <div className="up-proof">
      {/* Alert sheet mini-preview */}
      <div className="up-panel up-proof-panel">
        <div className="up-panel-bar">
          <span className="up-panel-title">
            <FileSpreadsheet size={13} aria-hidden /> alerts.xlsx · Alert Sheet
          </span>
          <span className="up-panel-count">{ALERTS.length} rows</span>
        </div>
        <div className="up-tblwrap">
          <table className="up-tbl up-proof-tbl">
            <thead>
              <tr>
                <th>Time</th>
                <th>Supplier</th>
                <th className="num">Last</th>
                <th className="num">Scraped</th>
                <th className="num">Δ%</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {ALERTS.map((a, i) => (
                <tr key={i} className="on">
                  <td className="num">{a.time}</td>
                  <th scope="row">{a.supplier}</th>
                  <td className="num">{a.last}</td>
                  <td className="num">{a.scraped}</td>
                  <td className={`num ${a.delta.startsWith("+") ? "up" : "dn"}`}>{a.delta}</td>
                  <td>{a.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit log CSV excerpt */}
      <div className="up-panel up-proof-panel">
        <div className="up-panel-bar">
          <span className="up-panel-title">
            <FileText size={13} aria-hidden /> audit_log.csv · Run R-2027-07-17-01
          </span>
          <span className="up-panel-count">{AUDIT_LINES.length - 1} rows</span>
        </div>
        <pre className="up-proof-csv">
          {AUDIT_LINES.map((line, i) => (
            <div className={`up-proof-csv-line${i === 0 ? " head" : ""}`} key={i}>
              <span className="up-proof-csv-n">{i === 0 ? " " : String(i).padStart(2, "0")}</span>
              <span>{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

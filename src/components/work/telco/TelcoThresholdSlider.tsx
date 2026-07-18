"use client";

import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Anchor is the real 0.50 run against churn.db (2026-07-15):
// TP=218, FP=96, FN=155, TN=940 on the 1,409-row held-out test.
const P_CHURN = 373;
const N_STAY = 1036;
const REAL_TP = 218;
const REAL_FP = 96;
const REAL_FN = 155;
const REAL_TN = 940;

function computeAt(t: number) {
  let tp: number;
  let fp: number;
  if (t <= 0.5) {
    const w = (0.5 - t) / 0.5;
    tp = REAL_TP + w * REAL_FN;
    fp = REAL_FP + w * REAL_TN;
  } else {
    const w = (1 - t) / 0.5;
    tp = REAL_TP * w;
    fp = REAL_FP * w;
  }
  const TP = Math.round(tp);
  const FP = Math.round(fp);
  const FN = P_CHURN - TP;
  const TN = N_STAY - FP;
  const flagged = TP + FP;
  const precision = flagged > 0 ? TP / flagged : 0;
  const recall = TP / P_CHURN;
  const f1 =
    precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
  return { TP, FP, FN, TN, flagged, precision, recall, f1 };
}

export function TelcoThresholdSlider() {
  const [t, setT] = useState(0.5);
  const m = useMemo(() => computeAt(t), [t]);
  const pct = Math.round(t * 100);

  return (
    <div className="tm-thresh">
      <div className="tm-thresh-head">
        <b>Decision threshold · drag to trade precision against recall</b>
        <span className="tm-thresh-val">score ≥ {t.toFixed(2)}</span>
      </div>

      <div className="cs-slider">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={t}
          onChange={(e) => setT(Number(e.target.value))}
          aria-label="Decision threshold"
          style={{ ["--pct" as string]: `${pct}%` } as React.CSSProperties}
        />
        <div className="cs-slider-head">
          <span>Aggressive · 0.10</span>
          <span>Real run · 0.50</span>
          <span>Cautious · 0.90</span>
        </div>
      </div>

      <div className="tm-metrics" style={{ marginTop: 20 }}>
        <div className="tm-metric">
          <div className="tm-metric-v">{Math.round(m.precision * 100)}%</div>
          <div className="tm-metric-l">Precision on churn</div>
        </div>
        <div className="tm-metric">
          <div className="tm-metric-v">{Math.round(m.recall * 100)}%</div>
          <div className="tm-metric-l">Recall on churn</div>
        </div>
        <div className="tm-metric">
          <div className="tm-metric-v">{m.f1.toFixed(2)}</div>
          <div className="tm-metric-l">F1 (churn)</div>
        </div>
        <div className="tm-metric">
          <div className="tm-metric-v">{m.flagged}</div>
          <div className="tm-metric-l">Customers flagged</div>
        </div>
      </div>

      <Eyebrow style={{ margin: "24px 0 10px" }}>
        Confusion matrix · threshold {t.toFixed(2)} · {m.flagged} flagged
      </Eyebrow>
      <div className="tm-cm">
        <div className="tm-cm-corner" />
        <div className="tm-cm-h">Pred. stay</div>
        <div className="tm-cm-h">Pred. churn</div>
        <div className="tm-cm-rh">Actual stay</div>
        <div className="tm-cm-cell tn">
          <div className="tm-cm-v">{m.TN}</div>
          <div className="tm-cm-k">true negative</div>
        </div>
        <div className="tm-cm-cell fp">
          <div className="tm-cm-v">{m.FP}</div>
          <div className="tm-cm-k">false alarm</div>
        </div>
        <div className="tm-cm-rh">Actual churn</div>
        <div className="tm-cm-cell fn">
          <div className="tm-cm-v">{m.FN}</div>
          <div className="tm-cm-k">missed churner</div>
        </div>
        <div className="tm-cm-cell tp">
          <div className="tm-cm-v">{m.TP}</div>
          <div className="tm-cm-k">true positive</div>
        </div>
      </div>

      <p className="pj-caption" style={{ marginTop: 12 }}>
        The 0.50 counts (TP 218 · FP 96 · FN 155 · TN 940) are the real held-out
        run. Other threshold counts interpolate linearly between the real anchor
        and the endpoints (flag none · flag everyone), so they show the shape of
        the trade-off, not the exact counts a re-scored run would give.
      </p>
    </div>
  );
}

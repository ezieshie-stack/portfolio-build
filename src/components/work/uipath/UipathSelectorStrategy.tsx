import { AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";

/**
 * UipathSelectorStrategy — two panels showing how the bot survives
 * a supplier changing its page markup. The primary path is a
 * per-site XPath / CSS selector; the fallback path is the add-to-cart
 * availability heuristic that fires when the primary selector misses.
 */
export function UipathSelectorStrategy() {
  return (
    <div className="up-selectors">
      <div className="up-selectors-card">
        <div className="up-selectors-head">
          <span className="up-selectors-lbl">
            <CheckCircle2 size={12} aria-hidden /> Primary
          </span>
          <h3>Site-specific selector</h3>
        </div>
        <p>
          Each supplier row in the workbook carries the exact selector for its
          price element. UiPath uses it directly; if it matches, the bot
          reads the price and moves on.
        </p>
        <pre className="up-selectors-code">
{`Selector := "css=div.product-price > span.price"
Price     := ExtractPrice(Selector)      // "$538.49"
Clean     := ToDecimal(Price)            // 538.49`}
        </pre>
        <div className="up-selectors-foot">
          <ShieldCheck size={13} aria-hidden />
          <span>Fast, exact, per-supplier — the common path.</span>
        </div>
      </div>

      <div className="up-selectors-card up-selectors-card-fb">
        <div className="up-selectors-head">
          <span className="up-selectors-lbl warn">
            <AlertTriangle size={12} aria-hidden /> Fallback
          </span>
          <h3>Add-to-cart availability heuristic</h3>
        </div>
        <p>
          When the primary selector misses (site redesign, promo overlay, A/B
          test), the bot clicks <em>Add to cart</em>. A visible cart dialog
          means the item is in stock and the confirmation shows the current
          price — the same signal a shopper would read.
        </p>
        <pre className="up-selectors-code">
{`If SelectorMissing:
    ClickAddToCart(Supplier)
    If CartDialog.Visible:
        Price := ExtractFromDialog()
        Availability := "In Stock"
    Else:
        Availability := "Out of Stock"`}
        </pre>
        <div className="up-selectors-foot">
          <ShieldCheck size={13} aria-hidden />
          <span>Robust to page redesigns — the resilience path.</span>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import "../landing/landing.css";
import "../oakvale/deck.css";
import "./pitch.css";
import { DeckView } from "../oakvale/deck-view";
import { ScaleToFit } from "./scale-to-fit";
import { SLIDES } from "./slides";

export const metadata: Metadata = {
  title: "Vellar — the payment layer for AI agents",
  description:
    "Vellar verifies and settles x402 payments on Stellar, lists every paid endpoint in a searchable Bazaar, and gives agents a budget instead of your keys. Open source, non-custodial, fees sponsored.",
};

export default function PitchDeckPage() {
  return (
    <div className="pitch-stage">
      <ScaleToFit>
        <DeckView slides={SLIDES} downloadLabel="Download PDF" />
      </ScaleToFit>
    </div>
  );
}

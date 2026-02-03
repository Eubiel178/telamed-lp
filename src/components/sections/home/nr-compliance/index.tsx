import { InfoBox } from "./info-box";
import { OfferBox } from "./offer-box";

import * as S from "./styles";

export function NrCompliance() {
  return (
    <S.NrCompliance>
      <div className="container">
        <InfoBox />
        <OfferBox />
      </div>
    </S.NrCompliance>
  );
}

import { InfoBox } from "./info-box";
import { MultiStepForm } from "./multi-step-form";

import * as S from "./styles";

export function NrCompliance() {
  return (
    <S.NrCompliance>
      <div className="container">
        <MultiStepForm />
        <InfoBox />
        {/* <OfferBox /> */}
      </div>
    </S.NrCompliance>
  );
}

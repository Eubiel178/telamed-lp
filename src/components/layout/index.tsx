import { Footer } from "./footer";
import * as S from "./styles";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Layout>
      <main>{children}</main>

      <Footer />
    </S.Layout>
  );
}

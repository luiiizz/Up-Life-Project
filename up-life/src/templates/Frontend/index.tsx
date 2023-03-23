import * as S from './styles';
import Header from '../../organisms/Header';
import SaibaMais from '../../organisms/SaibaMais';

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({children}:FrontendProps) => {
    return <S.Container>
        <main>{children}</main>
    </S.Container>;
}

export default Frontend;
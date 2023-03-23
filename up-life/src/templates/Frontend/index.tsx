import * as S from './styles';

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({children}:FrontendProps) => {
    return <S.Container>
        <main>{children}</main>
    </S.Container>;
}

export default Frontend;
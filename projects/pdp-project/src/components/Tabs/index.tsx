// types
import { TabsProps } from './types';

// styled
import * as S from './styled';

export const Tabs = ({ tabs, currentTab, onChange }: TabsProps) => {

    return (
        <S.TabsWrapper>
            {tabs.map((tab) => {
                const isActive = currentTab === tab.id;

                return (
                    <S.TabButton
                        isActive={isActive}
                        onClick={() => onChange(tab.id)}
                        key={tab.id}
                    >
                        <p>{text}</p>
                    </S.TabButton>
                );
            })}
        </S.TabsWrapper>
    );
};

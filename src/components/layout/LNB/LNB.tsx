import styles from './LNB.module.scss';
import React, { useState } from 'react';
import LogoImage from '../../common/img/logo_fff.png';
import Arrowicon from '../../common/img/arrow.png'
//메뉴 데이터 (나중엔 외부 파일이나 API로부터)
const menuData = [
    {
        id: 'account',
        name: '계정관리',
        children: [{ name: '메인관리자' }, { name: '부관리자' }],
    },
    {
        id: 'main',
        name: '메인관리',
        children: [{ name: '팝업관리' }, { name: '메인배너관리' }],
    },
    {
        id: 'menu',
        name: '메뉴관리',
        children: [{name : '메뉴관리'}],
    },
    {
        id: 'company',
        name: '회사관리',
        children: [{name : '공지사항'},{name : '입찰정보'},{name : '광고홍보·브랜드(CI)'},{name : '이벤트'},{name : '채용관리'},{name : '영업점관리'},{name : 'ESG경영'},{name : 'Q&A관리'}],
    },
    {
        id: 'consumer',
        name: '금융소비자',
        children: [{name : '금융소비자권익보호현장'},{name : '금융소비자보호체계'},{name : '금융소비자보호규정'},{name : '금융소비자공시'},{name : '금융정보사이트'},{name : '개인정보보호정책'},{name : '채권추시업무안내'},{name : '금융소비자권리안내'},{name : '적합성·적정성'}]
    },
    {
        id: 'datacenter',
        name: '자료실',
        children: [{name : '자료실'}]
    },
    {
        id: 'product',
        name: '상품관리',
        children: [{name : '대출상품관리'},{name : '예·적금상품관리'}]
    },
    {
        id: 'disclosure',
        name: '공시',
        children: [{name : '경영공시'}]
    },
    {
        id: 'charge',
        name: '수수료',
        children: [{name : '수수료'}]
    },
];

const LNB = () => {
  //현재 활성화/열린 메뉴의 id를 저장할 state
    const [activeMenu, setActiveMenu] = useState<string | null>('none');

    const handleMenuClick = (menuId: string) => {
        //이미 열려있는 메뉴를 다시 클릭하면 닫고, 아니면 새로 연다.
        setActiveMenu(prev => (prev === menuId ? null : menuId));
    };

    return (
        <aside className={styles.lnb}>
        <h1 className={styles.logo}>
            <a href="#"><img src={LogoImage} alt="로고" /></a>
        </h1>
        <ul className={styles.menuList}>
            {menuData.map(menu => {
            const isActive = activeMenu === menu.id;
            return (
                <li key={menu.id} className={isActive ? styles.active : ''}>
                {/* 1-depth 메뉴 버튼 */}
                <div className={styles.menuButton} onClick={() => handleMenuClick(menu.id)}>
                    <p>{menu.name}</p>
                    {menu.children && menu.children.length > 0 && (
                        <span className={styles.arrowIcon}>
                            <img src={Arrowicon} alt="메뉴 펼치기" />
                        </span>
                    )}
                </div>

                {/* 2-depth 서브메뉴 */}
                <div className={styles.subMenu}>
                    {menu.children?.map(child => (
                    <a key={child.name} href="#">{child.name}</a>
                    ))}
                </div>
                </li>
            );
            })}
        </ul>
        </aside>
    );
};

export default LNB;
import React from 'react'; /* 나중에 props 가져올 수도 있으니까 일단 냅두기 */
import btnStyles from '../components/common/Button/Button.module.scss';
import Input from '../components/common/Input/Input';
import Checkbox from '../components/common/Checkbox/Checkbox';
import Textarea from '../components/common/Textarea/Textarea';
function MainPage() { /* 테스트용 페이지 */
    return (
        <>
            <div style={{ padding: '30px' }}>
                <h1>버튼 테스트 페이지</h1>
                <hr style={{ margin: '20px 0' }} />

                <h3>큰 사이즈 버튼</h3>
                <div style={{ marginBottom: '20px' }}>
                    <button className={`${btnStyles.base} ${btnStyles.large_first}`}>저장</button>
                    <button className={`${btnStyles.base} ${btnStyles.large_second}`}style={{ marginLeft: '10px' }}>목록</button>
                    <button className={`${btnStyles.base} ${btnStyles.large_third}`}style={{ marginLeft: '10px' }}>삭제</button>
                </div>

                <h3>작은 사이즈 버튼</h3>
                <div>
                    <button className={`${btnStyles.base} ${btnStyles.small_first}`}>검색</button>
                    <button className={`${btnStyles.base} ${btnStyles.small_first}`}style={{ marginLeft: '10px' }}>삭제</button>
                </div>
            </div>

            <div style={{ padding: '40px', maxWidth: '600px', margin: '40px auto' }}>
                <h1>폼 요소 예제</h1>
                
                <form style={{ marginTop: '30px' }}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="user-id">ID</label>
                        <div className="form-input-wrapper">
                        <Input type="text" id="user-id"/>
                        </div>
                    </div>

                    {/* password */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="user-password">비밀번호</label>
                        <div className="form-input-wrapper">
                        <Input type="password" id="user-password" placeholder="비밀번호를 입력하세요" />
                        </div>
                    </div>

                    {/* search */}
                    <div className="form-group">
                        <label className="form-label">통합 검색</label>
                        <div className="form-input-wrapper">
                        <Input type="search" />
                        </div>
                    </div>

                    {/* textarea */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="user-bio">자기소개</label>
                        <Textarea id="user-bio" placeholder="자신을 소개해주세요." />
                    </div>
                    
                    {/* checkbox */}
                    <div className="form-group">
                        <Checkbox label=" 개인정보 수집에 동의합니다."/>
                        <Checkbox label=" 마케팅 정보 수신에 동의합니다. (선택)" />
                    </div>
                    
                    {/* number */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="product-quantity">수량</label>
                        <Input type="number" id="product-quantity" placeholder="0" />
                    </div>
                    {/* date */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="event-date">이벤트 날짜</label>
                        <Input type="date" id="event-date" />
                    </div>
                    {/* 여기에 다른 폼 컴포넌트들도 추가 예쩡*/}
                    
                </form>
            </div>
        </>
        
    );
}

export default MainPage;

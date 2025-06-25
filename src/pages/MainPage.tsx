import React from 'react'; /* 나중에 props 가져올 수도 있으니까 일단 냅두기 */
import Button from '../components/common/Button/Button'
import Input from '../components/common/Input/Input';
import Checkbox from '../components/common/Checkbox/Checkbox';
import Textarea from '../components/common/Textarea/Textarea';
import Radio from '../components/common/Radio/Radio';
import FileUploader from '../components/common/FileUploader/FileUploader';
import SearchInput from '../components/common/Searchinput/Searchinput';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import TableHeader from '../components/common/Table/TableHeader';
import TableDataItem from '../components/common/Table/TableDataItem';
import { userList, userListColumns } from '../components/common/Table/TableData';
function MainPage() { /* 테스트용 페이지 */
    return (
        <>
            <h3>부관리자 등록</h3>
            <Table>
                <tbody>
                <TableRow label="ID">
                    <Input type="text" />
                </TableRow>
                <TableRow label="비밀번호">
                    <Input type='password' />
                </TableRow>
                <TableRow label="상태">
                    <Input type='text' />
                </TableRow>
                <TableRow label="기간">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Input type="date" />
                        <span>~</span>
                        <Input type="date" />
                    </div>
                </TableRow>
                </tbody>
            </Table>

            <h3 style={{ marginTop: '40px' }}>사용자 목록</h3>
            <Table>
                <TableHeader columns={userListColumns} />
                <tbody>
                    {userList.map((user) => (
                        <TableDataItem key={user.no} item={user} />
                    ))}
                </tbody>
            </Table>

            <div style={{ padding: '30px' }}>
                <h1>버튼 테스트 페이지</h1>
                <hr style={{ margin: '20px 0' }} />

                <h3>큰 사이즈 버튼</h3>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <Button variant="primary" size="large">저장</Button>
                    <Button variant="secondary" size="large">목록</Button>
                    <Button variant="neutral" size="large">삭제</Button>
                </div>

                <h3>작은 사이즈 버튼</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button variant="primary" size="small">검색</Button>
                    <Button variant="primary" size="small">삭제</Button>
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

                    {/* 테이블 내 검색 */}
                    <div className="form-group">
                        <label className="form-label">검색</label>
                        <div className="form-input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Input type="text" placeholder="검색어를 입력하세요." />
                        <Button variant="primary" size="small">
                            검색
                        </Button>
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

                    {/* radio*/}
                    <div className="form-group">
                        <label className="form-label">사용자 유형</label>
                        <div className="form-input-wrapper" style={{ display: 'flex', gap: '20px' }}>
                            <Radio name="user-type" label="일반 사용자" defaultChecked /> {/* defaultchecked로 기본 선택 해둠 */}
                            <Radio name="user-type" label="관리자" />
                            <Radio name="user-type" label="게스트" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">파일</label>
                        <div className="form-input-wrapper">
                            <FileUploader />
                        </div>
                    </div>

                    {/* 통합검색(dt에 있는거) */}
                    <div className="form-group">
                        <label className="form-label">통합 검색</label>
                        <div className="form-input-wrapper">
                            <SearchInput placeholder="검색어를 입력하세요." />
                        </div>
                    </div>
                </form>
            </div>
        </>
        
    );
}

export default MainPage;

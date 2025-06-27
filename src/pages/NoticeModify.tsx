import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import Textarea from '../components/common/Textarea/Textarea'; 
import FileUploader from '../components/common/FileUploader/FileUploader';

const NoticeModify = () => {
    const authorName = "홍길동";
    const today = new Date().toISOString().split('T')[0];
    const FileName = [
        { id: 1, name: '보이스피싱_사기예방_안내문.hwp' },
        { id: 2, name: '개인정보_처리방침_2024.pdf' },
        { id: 3, name: '상품_가입_신청서_양식.docx' },
    ];

    return (
        <div>
            <h2 className="page-main-title">계정관리</h2>
            
            <div className="content-panel">
                <PageTitle title="게시판 등록" />
                
                <Table>
                    <tbody>
                        <TableRow label="수정자">
                            <p>{authorName}</p>
                        </TableRow>

                        <TableRow label="수정일">
                            <p>{today}</p> {/* 게시판 데이터를 받아와야 하는데 일단 아까 NoticeWrite에서 사용한 today 사용 */}
                        </TableRow>

                        <TableRow label="제목 *">
                            <Input type="text"  width="33%" />
                        </TableRow>

                        <TableRow label="게시일 *">
                            <Input type="date" width="180px" />
                        </TableRow>

                        <TableRow label="기준일 *">
                            <Input type="date" width="180px" />
                        </TableRow>

                        <TableRow label="내용 *">
                            <Textarea/>
                        </TableRow>

                        <TableRow label="적용이미지 *">
                            <p>img 노출</p>
                        </TableRow>

                        <TableRow label="적용이미지파일 *">
                            <p>이미지파일명.jpg --파일명 클릭시 이미지파일 다운로드</p>  {/* 적용이미지, 적용이미지파일은 일단 파일업로더가 작동이 안되서 구현이 안됨.. 추후 수정*/}
                        </TableRow> 

                        <TableRow label="이미지파일">
                            <FileUploader />
                        </TableRow>

                        <TableRow label="이미지 alt값">
                            <Input type="text" placeholder="신속한 처리, 친절한 안내, 등을 맹세" />
                        </TableRow>

                        <TableRow label="첨부파일명">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                {FileName.map(file => (
                                    <div key={file.id} style={{ display: 'flex', alignItems: 'center', gap:'10px' }}>
                                        <span>{file.name}</span>
                                        <Button variant="primary" size="small">삭제</Button>
                                    </div>
                                ))}
                                
                            </div>
                        </TableRow>

                        <TableRow label="첨부파일">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <FileUploader />
                                <FileUploader />
                                <FileUploader />
                            </div>
                        </TableRow>
                    </tbody>
                </Table>
            </div>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px'}}>
                <Button variant="primary" size="large">저장</Button>
                <Button variant="secondary" size="large">목록</Button>
                <Button variant="neutral" size="large">삭제</Button>
            </div>
        </div>
    );
};

export default NoticeModify;
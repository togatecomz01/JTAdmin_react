import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import Textarea from '../components/common/Textarea/Textarea'; 
import FileUploader from '../components/common/FileUploader/FileUploader';

const NoticeWrite = () => {
    const authorName = "홍길동";//로그인 데이터가 없어서 일단 변수처리만
    const today = new Date().toISOString().split('T')[0];//날짜

    return (
        <div>
            <h2 className="page-main-title">계정관리</h2>
            
            <div className="content-panel">
                <PageTitle title="게시판 등록" />
                
                <Table>
                    <tbody>
                        <TableRow label="작성자">
                            <p>{authorName}</p>
                        </TableRow>

                        <TableRow label="작성일">
                            <p>{today}</p>
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

                        <TableRow label="이미지파일">
                            <FileUploader />
                        </TableRow>

                        <TableRow label="이미지 alt값">
                            <Input type="text" placeholder="신속한 처리, 친절한 안내, 등을 맹세" />
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
                <Button variant="neutral" size="large">취소</Button>
            </div>
        </div>
    );
};

export default NoticeWrite;
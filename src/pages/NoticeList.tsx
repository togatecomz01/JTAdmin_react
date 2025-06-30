// 1. 필요한 모든 UI 부품 및 데이터를 import 합니다.
import PageTitle from '../components/common/PageTitle/PageTitle';
import SearchInput from '../components/common/Searchinput/Searchinput';
import Table from '../components/common/Table/Table';
import TableHeader from '../components/common/Table/TableHeader';
import TableDataItem from '../components/common/Table/TableDataItem';
import Button from '../components/common/Button/Button';
import Pagination from '../components/common/Pagination/Pagination';
import { NoticeList, NoticeListColumns } from '../components/common/Table/TableData';
import type { BoardPost } from '../components/common/Table/TableData';
import { useNavigate } from 'react-router-dom';

const AccountMainPage = () => {
    const navigate = useNavigate();
    
    const handleModifyClick = () => {
        navigate('/account/board/modify');
    }
    const handleWriteClick = () => {
        navigate('/account/board/write');
    }

    return (
        <div>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <PageTitle title="게시판">
                    <div style={{ width: '300px' }}>
                        <SearchInput placeholder="검색" />
                    </div>
                </PageTitle>
                <Table>
                <TableHeader columns={NoticeListColumns} />
                    <tbody>
                        {NoticeList.map((post: BoardPost) => (
                        <TableDataItem key={post.no}> {/* 생각해보니 이렇게 만든 이유가 tablerow는 tr안에 th,td 같이 있고 라벨이랑 구분이 되있어서 tableheader쓰면 이렇게 해야할 수 밖에 없음 (테이블을 어떻게 수정할지 고려해봐야할듯) */}
                            <td>{post.title}</td>
                            <td>{post.postDate}</td>
                            <td>{post.baseDate}</td>
                            <td>{post.author}</td>
                            <td>{post.createdDate}</td>
                            <td>{post.modifier}</td>
                            <td>{post.modifiedDate}</td>
                        </TableDataItem>
                        ))}
                    </tbody>
                </Table>
                <Pagination/>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap:'20px'}}>
                <Button variant="primary" size="large" onClick={handleWriteClick}>등록</Button>
                <Button variant="secondary" size="large" onClick={handleModifyClick}>수정</Button>
            </div>
        </div>
    );
};

export default AccountMainPage;
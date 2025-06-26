// 1. 필요한 모든 UI 부품 및 데이터를 import 합니다.
import PageTitle from '../components/common/PageTitle/PageTitle';
import SearchInput from '../components/common/Searchinput/Searchinput';
import Table from '../components/common/Table/Table';
import TableHeader from '../components/common/Table/TableHeader';
import TableDataItem from '../components/common/Table/TableDataItem';
import Button from '../components/common/Button/Button';
import Pagination from '../components/common/Pagination/Pagination';
import { NoticeList, NoticeListColumns } from '../components/common/Table/TableData';
import type { BoardPost } from '../components/common/Table/TableData'; // BoardPost 타입을 import

const AccountMainPage = () => {
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
                        {/* 4. 데이터를 map으로 순회하며, TableDataItem 안에 td들을 직접 렌더링 */}
                        {NoticeList.map((post: BoardPost) => (
                        <TableDataItem key={post.no}>
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
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <Button variant="primary" size="large">등록</Button>
            </div>
        </div>
    );
};

export default AccountMainPage;
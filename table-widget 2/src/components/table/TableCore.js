import { useEffect, useState } from "react";
import DraggableList from "react-draggable-list";
import ColConfig from "../colConfig/ColumnConfig";
import  {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  // TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  Pagination,
  // TableToolbarMenu,
  // TableSelectAll,
  // TableSelectRow,
  // TableBatchActions,
  // TableBatchAction,
  // TableExpandHeader,
  // TableExpandRow,
  // TableExpandedRow,
  // Button,

  OverflowMenu,
  OverflowMenuItem
} from "carbon-components-react";
// import { TrashCan, Save, Download } from '@carbon/icons-react';
import './TableCore.scss'
function TableCore(props) {

  const [rows, setRows] = useState(props.rowData);
  const [headers, setHeaders] = useState(props.headerData);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handlePageClick = (e) => {
    setPage(e.page);
    setPageSize(e.pageSize);
  }

  useEffect(() => {
    console.log('core')
    // console.log(props.rowData);
    // console.log(headerData)
    setHeaders(headers);
  },[rows, headers])

  //{"key": "status","header": "Status","sortState": "NONE"}
  const headerClick = (key) => {
    const index = headers.findIndex(obj => obj.key === key);
    if(headers[index].sortState === 'NONE'){
      headers[index].sortState = 'ASC';
    } else if(headers[index].sortState === 'ASC'){
      headers[index].sortState = 'DESC';
    } else {
      headers[index].sortState = 'NONE';
    }

    if(headers[index].sortState === 'NONE'){
      setRows(props.rowDataDefault);
      return;
    }

    const tempRowData = JSON.parse(JSON.stringify(props.rowData));
    tempRowData.sort((a,b) => {
      const itemA = a[key];
      const itemB = b[key];
      if(headers[index].sortState === 'ASC'){
        if(typeof itemA === "number" && typeof itemB === "number"){
          return itemA-itemB;
        } 
        else{
          return (itemA.localeCompare(itemB, undefined, {numeric: true}));
        }
      }
      if(headers[index].sortState === 'DESC'){
        if(typeof itemA === "number" && typeof itemB === "number"){
          return itemB-itemA;
        }
        else{
          return (itemB.localeCompare(itemA, undefined, {numeric: true}));
        }
      }
      return 0;
    });
    setRows(tempRowData);
  }

  const pagination_props = () => ({
    disabled: ('Disable page inputs (disabled)', false),
    page:('The current page (page)', 1),
    totalItems: ('Total number of items (totalItems)', props.rowData.length),
    pagesUnknown: ('Total number of items unknown (pagesUnknown)', false),
    pageInputDisabled: (
      'Disable page input (pageInputDisabled)',
      undefined
    ),
    pageSizeInputDisabled: (
      'Disable page size input (pageSizeInputDisabled)',
      undefined
    ),
    backwardText: (
      'The description for the backward icon (backwardText)',
      'Previous page'
    ),
    forwardText: (
      'The description for the forward icon (forwardText)',
      'Next page'
    ),
    pageSize: ('Number of items per page (pageSize)',pageSize),
    pageSizes: ('Choices of `pageSize` (pageSizes)', [5, 10, 20, 30, 40, 50]),
    itemsPerPageText: (
      'Label for `pageSizes` select UI (itemsPerPageText)',
      'Items per page:'
    ),
    onChange: handlePageClick ,
  });

  // const removeColumn = () => {
  //   const key = 'location';
  //   const temp_headers = JSON.parse(JSON.stringify(headers));
  //   const index = temp_headers.findIndex(obj => obj.key === key);
  //   if(index !== -1){
  //     temp_headers.splice(index,1);
  //   }
  //   setHeaders(temp_headers);
  // }
  // const addColumn = () => {
  //   const obj = {
  //     key: String,
  //     header: String,
  //     sortState: String
  //   }
  //   const key = 'location';

  // }

  return (<>
    {/* deafult table with searching, sorting and pagination */}
    <DataTable rows={rows} headers={headers} isSortable sortRow={() => {}}>
    {({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getTableProps,
      onInputChange,
    }) => (
      <TableContainer title="DataTable" description="With filtering">
        <TableToolbar>
          <TableToolbarContent>
              <ColConfig header={headers}></ColConfig>
              <TableToolbarSearch onChange={onInputChange}/>
          </TableToolbarContent>
        </TableToolbar>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader key={header.key} {...getHeaderProps({ header })} onClick={() => headerClick(header.key)}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice((page-1)*pageSize, page*pageSize).map((row) => (
              <TableRow key={row.id} {...getRowProps({ row })}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value} </TableCell>
                  
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
    </DataTable>
    <Pagination {...pagination_props()} {...{size: 'md',}} />
    {/* <div style={{paddingTop: '30px'}}>
      <button onClick={removeColumn}>remove column</button>
      <button onClick={addColumn}>add column</button>
    </div> */}
  </>);
      
}
// [{key:'',header:'', sortState:''}, prev_index, new_index]
export default TableCore;
import React from "react";
import TableCore from "../table/TableCore";
import {AssetDashboardData} from "../../mocks/assestDashboardTable"

// The available columns in Assets Dashboard table
const AssetDashboardCols = [
    {
        key: 'providerAssetId',
        header: 'Asset ID',
        sortState: 'NONE'
    },
    {
        key: 'providerName',
        header: 'Provider',
        sortState: 'NONE'
    },
    {
        key: 'assetAccountName',
        header: 'Asset Account Name',
        sortState: 'NONE'
    },
    {
        key: 'location',
        header: 'Location',
        sortState: 'NONE'
    },
    {
        key: 'assetStartDate',
        header: 'Provision Date',
        sortState: 'NONE'
    },
    {
        key: 'assetSource',
        header: 'Asset Source',
        sortState: 'NONE'
    },
    {
        key: 'assetType',
        header: 'Asset Type',
        sortState: 'NONE'
    },
    {
        key: 'assetName',
        header: 'Asset Name',
        sortState: 'NONE'
    },
    {
        key: 'operationalState',
        header: 'Asset Status',
        sortState: 'NONE'
    },
    {
        key: 'utilizationScore',
        header: 'Utilization',
        sortState: 'NONE'
    },
    {
        key: 'ccCustomerTotalCost',
        header: 'Customer Total Cost',
        sortState: 'NONE'
    },
    {
        key: 'allTags',
        header: 'Tags',
        sortState: 'NONE'
    }
]

// const TableWrapper = () => {
export default class TableWrapper extends React.Component{

    rowData = [];
    // const [rowData, setRowData] = useState([]);

    constructor() {
        super();
        this.updateRowData();
    }
    updateRowData() {
        const tableData = [];
        let index = 0;
        AssetDashboardData.forEach(data => {
            index = index+1
            let temp = {};
            AssetDashboardCols.forEach(col => {
                if(col.key === 'allTags' && data[col.key]){
                    let str = '';
                    data[col.key].forEach((value, index) => {
                      str += `${Object.keys(value)}:${Object.values(value)}`;
                      if (index < data.length - 1) {
                        str += ',';
                      }
                    });
                    temp[col.key] = str;
                }
                else {
                    if(data[col.key]){
                        temp[col.key] = data[col.key];
                    }
                    else {
                        temp[col.key] = ( col.key === 'allTags' ? '' : 'Not Available');
                    }
                }
            })
            temp['id'] = index.toString();
            tableData.push(temp);
        });
        this.rowData = [...tableData];
    }

    // useEffect(() => {
    //     updateRowData();
    //     console.log('wrapper')
    // },[])

    render(){
    return (
        <TableCore headerData={AssetDashboardCols} rowData={this.rowData} rowDataDefault={this.rowData}></TableCore>
    )}
}

// export default TableWrapper;
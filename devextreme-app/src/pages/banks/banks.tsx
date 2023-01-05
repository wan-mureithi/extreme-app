import { DataGrid } from 'devextreme-react';
import { Paging, Pager, FilterRow, Column } from 'devextreme-react/data-grid';
import React from 'react'
import { useGetBanksQuery } from '../../api/api.slice'

//const banksCols = () => []

function Bank() {
    const {data} = useGetBanksQuery();
  return (
    <React.Fragment>
        <h2 className='content-block'>Banks</h2>
        
        <DataGrid
        className={'dx-card wide-card'}
        dataSource={data?.results}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}/>
         <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />

        { data?.results.map((bank,index)=> (
         <Column
         key={index}
          dataField={bank.name}
          width={190}
          caption={bank.name}
          hidingPriority={8}
        />
            ) )
        }

    </React.Fragment>
  )
}

export default Bank
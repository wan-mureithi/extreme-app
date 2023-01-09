import { DataGrid } from 'devextreme-react';
import { Paging, Pager, FilterRow, Column } from 'devextreme-react/data-grid';
import React from 'react'
import { useGetBanksQuery } from '../../api/api.slice'

//const banksCols = () => []

function Bank() {
    const {data} = useGetBanksQuery();
    const truest = true
  return (
    <React.Fragment>
        <h2 className={`content-block ${truest ? 'show' : 'hide' }`}>Banks</h2>
        
        <DataGrid style={{margin:'10px 20px'}}
        className={'dx-card wide-card'}
        dataSource={data?.results}
        showBorders={false}
        columnAutoWidth={true}
        columnHidingEnabled={true}>
         <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />
    
        {/* { data?.results.map((bank,index)=> (
         <Column
         key={index}
          dataField={bank.name}
          width={190}
          caption={bank.name}
          hidingPriority={8}
        />
            ) )
        } */}
          </DataGrid>

    </React.Fragment>
  )
}

export default Bank
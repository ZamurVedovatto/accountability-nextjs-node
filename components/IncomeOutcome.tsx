import React, { useState, useEffect, useRef } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { BalanceService } from './BalanceService'

export default function IncomeOutcome() {
  const [balanceData, setBalanceData] = useState([])
  const balanceService = new BalanceService()
  const [loading, setLoading] = useState(true)
  const dt = useRef(null)

  useEffect(() => {
    setLoading(true)
    balanceService.getAll().then((data) => setBalanceData(data))
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const balanceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.balance)
  }

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const testingBodyTemplate = (rowData) => {
    return rowData.testing
  }

  console.log(balanceData)

  return (
    <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
      <DataTable
        ref={dt}
        value={balanceData}
        responsiveLayout="scroll"
        size="small"
        dataKey="id"
        reorderableColumns
        loading={loading}
        lazy
      >
        <Column
          field="name"
          header="Name"
          sortable
          style={{ minWidth: '10rem' }}
          frozen
        ></Column>
        <Column
          field="balance"
          header="Balance"
          body={balanceBodyTemplate}
          sortable
          style={{ minWidth: '6rem' }}
        ></Column>
        <Column
          field="testing"
          header="testing"
          body={testingBodyTemplate}
          sortable
          className="text-red-300"
          style={{ minWidth: '6rem' }}
          bodyStyle={{ backgroundColor: 'yellow' }}
          showApplyButton
        ></Column>
      </DataTable>
    </div>
  )
}

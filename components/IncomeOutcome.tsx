import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { BalanceService } from './BalanceService'

export default function IncomeOutcome() {
  const [balanceData, setBalanceData] = useState([])
  const balanceService = new BalanceService()

  useEffect(() => {
    balanceService.getAll().then((data) => setBalanceData(data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // const formatCurrency = (value) => {
  //   return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  // }

  console.log(balanceData)

  return (
    <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
      <DataTable value={balanceData} responsiveLayout="scroll" size="small">
        <Column field="name" header="Name"></Column>
        <Column field="balance" header="Balance"></Column>
      </DataTable>
    </div>
  )
}

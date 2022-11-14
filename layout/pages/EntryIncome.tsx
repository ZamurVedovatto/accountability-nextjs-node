import React, { useState, useEffect, useRef } from 'react'
import { classNames } from 'primereact/utils'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { getAllIncome, getAllOutcome } from './EntryService'
import { Toast } from 'primereact/toast'
import { InputTextarea } from 'primereact/inputtextarea'
import { RadioButton } from 'primereact/radiobutton'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Panel } from 'primereact/panel'
import { Image } from 'primereact/image'
import Table from 'react-bootstrap/Table'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { Calendar } from 'primereact/calendar'

import DialogEntry from './../../utils/DialogEntry'
import DialogEntries from './../../utils/DialogEntries'
import DialogAdd from './../../utils/DialogAdd'

import PieChartDemo from './../../components/PieChart'

import { formatCurrency } from './../../utils/format_currency_br'

import styled from 'styled-components'

const EntryIncomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 2rem 120px;
  overflow-y: auto;
`

export default function EntryIncome({ smallSize = false }) {
  let emptyProduct = {
    id: null,
    name: '',
    value: 0,
    recurrent: true,
    recurrentMode: 'monthly',
    recurrentEnd: 'never',
    updatedAt: '21/11/2022',
  }
  const [entries, setEntries] = useState(null)
  const [entryBalance, setEntryBalance] = useState(0)
  const [selectedMonth, setSelectedMonth] = useState(new Date())
  const [loading, setLoading] = useState(true)
  const [showHeader, setShowHeader] = useState(true)

  const toast = useRef(null)
  const dt = useRef(null)

  const [productDialog, setProductDialog] = useState(false)
  const [deleteEntryDialog, setDeleteEntryDialog] = useState(false)
  const [product, setProduct] = useState(emptyProduct)
  const [submitted, setSubmitted] = useState(false)
  const [globalFilter, setGlobalFilter] = useState(null)

  useEffect(() => {
    setShowHeader(!smallSize)
  }, [smallSize])

  useEffect(() => {
    setLoading(true)
    getAllIncome().then((data) => setEntries(data))
    setLoading(false)
  }, [])

  useEffect(() => {
    console.log(entries)
    const sum = entries ? entries.reduce((acc, o) => acc + o.value, 0) : 0
    setEntryBalance(sum)
  }, [entries])

  const openNew = () => {
    setProduct(emptyProduct)
    setSubmitted(false)
    setProductDialog(true)
  }

  const hideDialog = () => {
    setSubmitted(false)
    setProductDialog(false)
  }

  const hideDeleteEntryDialog = () => {
    setDeleteEntryDialog(false)
  }

  const saveProduct = () => {
    setSubmitted(true)

    if (product.name.trim()) {
      let _products = [...products]
      let _product = { ...product }
      if (product.id) {
        const index = findIndexById(product.id)

        _products[index] = _product
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        })
      } else {
        _product.id = createId()
        _products.push(_product)
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        })
      }

      setProducts(_products)
      setProductDialog(false)
      setProduct(emptyProduct)
    }
  }

  const editProduct = (product) => {
    setProduct({ ...product })
    setProductDialog(true)
  }

  const confirmDeleteProduct = (product) => {
    setProduct(product)
    setDeleteEntryDialog(true)
  }

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id)
    setProducts(_products)
    setDeleteEntryDialog(false)
    setProduct(emptyProduct)
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    })
  }

  const findIndexById = (id) => {
    let index = -1
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i
        break
      }
    }

    return index
  }

  const createId = () => {
    let id = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
  }

  const exportCSV = () => {
    dt.current.exportCSV()
  }

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || ''
    let _product = { ...product }
    _product[`${name}`] = val

    setProduct(_product)
  }

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0
    let _product = { ...product }
    _product[`${name}`] = val

    setProduct(_product)
  }

  const onToggleTableHeader = () => {
    setShowHeader(!showHeader)
  }

  const valueBodyTemplate = (rowData) => {
    return formatCurrency(rowData.value)
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    )
  }

  const headerComp = (
    <div className="flex flex-column md:flex-row md:align-items-center justify-content-between">
      <span className="p-input-icon-left w-full md:w-auto">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="w-full lg:w-auto"
        />
      </span>
      <div className="mt-3 md:mt-0 flex justify-content-end">
        <Button
          icon="pi pi-plus"
          className="mr-2 p-button-rounded"
          onClick={openNew}
          tooltip="New"
          tooltipOptions={{ position: 'bottom' }}
        />
        <Button
          icon="pi pi-upload"
          className="p-button-help p-button-rounded"
          onClick={exportCSV}
          tooltip="Export"
          tooltipOptions={{ position: 'bottom' }}
        />
      </div>
    </div>
  )

  return (
    <EntryIncomeWrapper>
      <Toast ref={toast} />

      <Panel
        toggleable
        collapsed={false}
        header="May 2002 - Accounts"
        className="my-4 row"
      >
        {/* TODOZ improve recurrent */}
        <div className="w-100 field col-12 d-flex justify-content-end align-items-baseline">
          <label htmlFor="monthpicker" className="me-2">
            Month Picker
          </label>
          <Calendar
            id="monthpicker"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.value)}
            view="month"
            dateFormat="mm/yy"
          />
        </div>

        <DataTable
          ref={dt}
          value={entries}
          responsiveLayout="scroll"
          size="small"
          dataKey="id"
          globalFilter={globalFilter}
          header={showHeader ? headerComp : null}
          loading={loading}
          lazy
          stateKey="table-bank-main-session"
        >
          <Column
            field="name"
            header="Name"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="value"
            header="Value"
            body={valueBodyTemplate}
            sortable
            style={{ minWidth: '6rem' }}
          ></Column>
        </DataTable>

        <Card className="d-flex justify-content-end">
          <span className="mr-1">May 2002 - Income Balance: </span>
          <span className="fw-bold">{formatCurrency(entryBalance)}</span>
        </Card>
      </Panel>

      <DialogAdd
        productDialog={productDialog}
        hideDialog={hideDialog}
        saveProduct={saveProduct}
        onInputChange={onInputChange}
        onInputNumberChange={onInputNumberChange}
        submitted={submitted}
        product={product}
      />

      <DialogEntry
        deleteEntryDialog={deleteEntryDialog}
        hideDeleteEntryDialog={hideDeleteEntryDialog}
        deleteProduct={deleteProduct}
        product={product}
      />
    </EntryIncomeWrapper>
  )
}

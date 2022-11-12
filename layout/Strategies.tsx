import React, { useState, useEffect, useRef } from 'react'
import { classNames } from 'primereact/utils'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { getAll as getAllStrategies } from './StrategiesService'
import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea'
import { RadioButton } from 'primereact/radiobutton'
import { InputNumber } from 'primereact/inputnumber'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'

import styled from 'styled-components'

const StrategiesWrapper = styled.div`
  font-size: 0.75rem;
`

export default function Strategies({ smallSize }) {
  let emptyProduct = {
    id: null,
    name: '',
    priority: 0,
  }

  const [products, setProducts] = useState(null)
  const [productDialog, setProductDialog] = useState(false)
  const [deleteProductDialog, setDeleteProductDialog] = useState(false)
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false)
  const [product, setProduct] = useState(emptyProduct)
  const [selectedProducts, setSelectedProducts] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [globalFilter, setGlobalFilter] = useState(null)
  const [showHeader, setShowHeader] = useState(true)
  const [loading, setLoading] = useState(true)
  const toast = useRef(null)
  const dt = useRef(null)

  useEffect(() => {
    setShowHeader(!smallSize)
  }, [smallSize])

  useEffect(() => {
    setLoading(true)
    getAllStrategies().then((data) => setProducts(data))
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const openNew = () => {
    setProduct(emptyProduct)
    setSubmitted(false)
    setProductDialog(true)
  }

  const hideDialog = () => {
    setSubmitted(false)
    setProductDialog(false)
  }

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false)
  }

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false)
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
    setDeleteProductDialog(true)
  }

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id)
    setProducts(_products)
    setDeleteProductDialog(false)
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

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true)
  }

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val))
    setProducts(_products)
    setDeleteProductsDialog(false)
    setSelectedProducts(null)
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Products Deleted',
      life: 3000,
    })
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

  const priorityBodyTemplate = (rowData) => {
    return formatCurrency(rowData.priority)
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
          icon="pi pi-trash"
          className="p-button-danger mr-2 p-button-rounded"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
          tooltip="Delete"
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
  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  )

  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </React.Fragment>
  )

  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  )

  return (
    <StrategiesWrapper>
      <div className="datatable-crud-demo surface-card p-4 border-round shadow-2">
        <Toast ref={toast} />
        <DataTable
          ref={dt}
          value={products}
          responsiveLayout="scroll"
          size="small"
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          globalFilter={globalFilter}
          header={showHeader ? headerComp : null}
          loading={loading}
          lazy
          stateKey="table-bank-main-session"
        >
          {!smallSize ? (
            <Column
              selectionMode="multiple"
              headerStyle={{ width: '3rem' }}
              exportable={false}
            ></Column>
          ) : null}

          <Column
            field="name"
            header="Name"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="priority"
            header="Priority"
            body={priorityBodyTemplate}
            sortable
            style={{ minWidth: '6rem' }}
          ></Column>
          {!smallSize ? (
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: '6rem' }}
            ></Column>
          ) : null}
        </DataTable>

        <Dialog
          visible={productDialog}
          breakpoints={{ '960px': '75vw', '640px': '100vw' }}
          style={{ width: '40vw' }}
          header="Product Details"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={product.name}
              onChange={(e) => onInputChange(e, 'name')}
              required
              autoFocus
              className={classNames({
                'p-invalid': submitted && !product.name,
              })}
            />
            {submitted && !product.name && (
              <small className="p-error">Name is required.</small>
            )}
          </div>
          <div className="formgrid grid">
            <div className="field col">
              <label htmlFor="priority">Priority</label>
              <InputNumber
                id="priority"
                value={product.priority}
                onValueChange={(e) => onInputNumberChange(e, 'priority')}
                mode="currency"
                currency="USD"
                locale="en-US"
              />
            </div>
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: '450px' }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="flex align-items-center justify-content-center">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: '2rem' }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.name}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: '450px' }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="flex align-items-center justify-content-center">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: '2rem' }}
            />
            {product && (
              <span>
                Are you sure you want to delete the selected products?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </StrategiesWrapper>
  )
}

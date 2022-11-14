import React from 'react'

import { Dialog } from 'primereact/dialog'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'

const DialogAdd = ({
  productDialog,
  hideDialog,
  saveProduct,
  onInputChange,
  onInputNumberChange,
  submitted,
  product,
}) => {
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

  return (
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
          value={product?.name}
          onChange={(e) => onInputChange(e, 'name')}
          required
          autoFocus
          className={classNames({ 'p-invalid': submitted && !product?.name })}
        />
        {submitted && !product?.name && (
          <small className="p-error">Name is required.</small>
        )}
      </div>
      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="value">Value</label>
          <InputNumber
            id="value"
            value={product?.value}
            onValueChange={(e) => onInputNumberChange(e, 'value')}
            mode="currency"
            currency="USD"
            locale="en-US"
          />
        </div>
      </div>
    </Dialog>
  )
}

export default DialogAdd

import React from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

const DialogEntries = ({
  deleteProductsDialog,
  hideDeleteProductsDialog,
  deleteSelectedProducts,
  product,
}) => {
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
          <span>Are you sure you want to delete the selected products?</span>
        )}
      </div>
    </Dialog>
  )
}

export default DialogEntries

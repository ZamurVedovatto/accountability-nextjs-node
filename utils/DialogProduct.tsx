import React from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

const DialogProduct = ({
  deleteProductDialog,
  hideDeleteProductDialog,
  deleteProduct,
  product,
}) => {
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

  return (
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
  )
}

export default DialogProduct

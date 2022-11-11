import React, { useState, useEffect } from 'react'

import { data as dataFake } from './fake-inventory-data'

function BankMain() {
  const [data, setData] = useState([])

  console.log(data)

  // GET request function to your Mock API
  const fetchData = () => {
    setData(dataFake)
    // fetch(`${INVENTORY_API_URL}`)
    //     .then(res => res.json())
    //     .then(json => setData(json));
  }

  // Calling the function on component mount
  useEffect(() => {
    fetchData()
  }, [])

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  })

  const [unitPrice, setUnitPrice] = useState(null)

  /**
   *
   * @param id - The id of the product
   * @param currentUnitPrice - The current unit price of the product
   */
  const onEdit = ({ id, currentUnitPrice }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    })
    setUnitPrice(currentUnitPrice)
  }

  /**
   *
   * @param id
   * @param newUnitPrice
   */
  const updateInventory = ({ id, newUnitPrice }) => {
    fetch(`${INVENTORY_API_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        unit_price: newUnitPrice,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // reset inEditMode and unit price state values
        onCancel()

        // fetch the updated data
        fetchInventory()
      })
  }

  /**
   *
   * @param id -The id of the product
   * @param newUnitPrice - The new unit price of the product
   */
  const onSave = ({ id, newUnitPrice }) => {
    updateInventory({ id, newUnitPrice })
  }

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    })
    // reset the unit price state value
    setUnitPrice(null)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Unit Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.product_name}</td>
              <td>{item.product_category}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <input
                    value={unitPrice}
                    onChange={(event) => setUnitPrice(event.target.value)}
                  />
                ) : (
                  item.unit_price
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <>
                    <button
                      className={'btn-success'}
                      onClick={() =>
                        onSave({ id: item.id, newUnitPrice: unitPrice })
                      }
                    >
                      Save
                    </button>

                    <button
                      className={'btn-secondary'}
                      style={{ marginLeft: 8 }}
                      onClick={() => onCancel()}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className={'btn-primary'}
                    onClick={() =>
                      onEdit({ id: item.id, currentUnitPrice: item.unit_price })
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BankMain

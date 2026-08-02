function Select({ arr, name, selectId }) {
  return (
    <>
      <select key={selectId} name={name} id={selectId}>
        {arr ? arr.map((item: any) => <option key={item.key} value={item.id}>{item.city}</option>) : 'error'}
      </select>
    </>
  )
}

export default Select
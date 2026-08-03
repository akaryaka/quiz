const selectStyles = 'bg-[#faf0cd] p-3 rounded-[5px]'

function Select({ arr, name, selectId }) {
  return (
    <>
      <select className={selectStyles} key={selectId} name={name} id={selectId}>
        {arr 
          ? arr.map((item: any) => <option key={item.key} value={item.id}>{item.city}</option>) 
          : 'error'}
      </select>
    </>
  )
}

export default Select
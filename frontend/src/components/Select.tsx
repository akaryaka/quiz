const selectStyles = 'bg-[#faf0cd] p-3 rounded-[5px]'

type Props = {
  arr: string[];
  name: any;
  selectId: any;
}

function Select({ arr, name, selectId }: Props) {
  const rmFigure: any = arr.slice(1, arr.length-1);
  const strToArr = rmFigure.split(',');
  console.log(strToArr);
  
  return (
    <>
      <select className={selectStyles} key={selectId} name={name} id={selectId}>
        {strToArr
          ? strToArr.map((item: any, key: any) => <option key={key} value={key}>{item}</option>)
          : 'error'}
      </select>
    </>
  )
}

export default Select
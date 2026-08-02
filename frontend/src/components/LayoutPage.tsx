type PageProps = {
  id?: number;
  title: string;
  text: string;
  content: any;
}

function LayoutPage({title, text, content}: PageProps) {
  return(
    <>
      <div className="title text-center mb-[15px] text-[25px] font-bold uppercase">{title}</div>
      <div className="text text-center mb-[20px]">{text}</div>
      {content ? <div>{content}</div> : ''}
    </>
  )
}

export default LayoutPage
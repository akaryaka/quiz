type PageProps = {
  id?: number;
  title: string;
  text: string;
  content: any;
}

function LayoutPage({title, text, content}: PageProps) {
  return(
    <>
      <div className="title text-center mb-[10px]">{title}</div>
      <div className="text text-center">{text}</div>
      {content ? <div>{content}</div> : ''}
    </>
  )
}

export default LayoutPage
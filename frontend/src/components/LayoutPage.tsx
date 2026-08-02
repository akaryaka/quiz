type PageProps = {
  id?: number;
  title: string;
  text: string;
  content: any;
}

const titleStyles = 'title text-center mb-[15px] text-[25px] font-bold uppercase';
const textStyles = 'text text-center mb-[20px]';

function LayoutPage({title, text, content}: PageProps) {
  return(
    <>
      <div className={titleStyles}>{title}</div>
      <div className={textStyles}>{text}</div>
      {content ? <div>{content}</div> : ''}
    </>
  )
}

export default LayoutPage
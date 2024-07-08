import empty from "@/assets/Inbox_empty.svg"

export interface IEmptyProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
}

const Empty = (props:IEmptyProps) => {
  return (
    <img {...props}  src={empty} width={150} loading="lazy" />
  );
};

export {Empty};
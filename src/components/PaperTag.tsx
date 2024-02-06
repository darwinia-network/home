interface Props {
  text: string;
}

export default function PaperTag({ text }: Props) {
  return (
    <div className="h-[1.5rem] px-[0.625rem] flex items-center rounded-[3.125rem] border border-app-gray">
      <span className="text-tag text-app-black/70">{text}</span>
    </div>
  );
}

type Props = {
  title: string;
  selected: string;
  colors: string[];
  onChange: (c: string) => void;
};

export default function OptionGroup({
  title,
  selected,
  colors,
  onChange,
}: Props) {
  return (
    <div>
      <h2 className="uppercase text-lg mb-2">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`h-10 w-10 rounded-full border-2 ${
              selected === c ? "border-white" : "border-transparent"
            }`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}

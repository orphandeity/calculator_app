import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "clsx";

interface ThemeSelectionProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function ThemeSelection({
  theme,
  setTheme,
}: ThemeSelectionProps) {
  return (
    <RadioGroup.Root
      aria-label="theme selection"
      value={theme}
      onValueChange={(value) => setTheme(value)}
      className={clsx(
        "flex items-end gap-4 text-xs font-bold tracking-[1px]",
        theme == "theme-1" ? "text-skin-inverted" : "text-skin-base"
      )}
    >
      <span className="pb-1">THEME</span>
      <div className="space-y-1">
        <div className="flex justify-around">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="flex gap-2 rounded-full bg-base-keys p-[5px]">
          <Item value="theme-1" />
          <Item value="theme-2" />
          <Item value="theme-3" />
        </div>
      </div>
    </RadioGroup.Root>
  );
}

const Item = ({ value }: { value: string }) => {
  return (
    <RadioGroup.Item value={value} id={value} className="h-4 w-4">
      <RadioGroup.Indicator className="h-4 w-4 rounded-full bg-keys-destruct-base shadow-sm transition-colors" />
    </RadioGroup.Item>
  );
};

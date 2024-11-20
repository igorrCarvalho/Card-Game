import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover"
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/Command"
import { Button } from "../ui/Button"
import classNames from "classnames"
import { dataType } from "../../pages/home/components/cardPreview"

type DropdownComponentType = {
  options: Array<{ value: string; label: string; }>;
  defaultText?: string;
  value: string;
  setValue: any;
  name: string;
}

export default function DropdownComponent({ options, defaultText, value, setValue, name }: DropdownComponentType) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : defaultText ? defaultText :"Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className="cursor-pointer"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    if (currentValue === value) {
                        setValue((obj) => ({...obj, [name]: ""}));
                        setOpen(false);
                        return;
                    }
                    setValue((obj) => ({ ...obj, [name]: currentValue }));
                    return setOpen(false);
                  }}
                >
                  <Check
                    className={classNames(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

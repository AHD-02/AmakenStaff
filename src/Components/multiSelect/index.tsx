import { useMemo } from "react";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { DropDownItem } from "components/dropDownProps";
import AutocompleteProps, { SelectItem } from "types/autocompleteType";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

const MultiSelect = ({
  options,
  placeholder,
  onChange,
  value,
  isLoading,
  label,
  required,
  error,
  limitTags,
  isRenderTagsHidden,
}: AutocompleteProps) => {
  const selectedValues = useMemo(() => {
    return options?.filter((option: DropDownItem) => {
      if (value && value?.length > 0) {
        return value?.some((val: number | string | undefined) =>
          val ? val === option?.value : false
        );
      }
      return false;
    });
  }, [value, options]);

  const handleChange = (value: SelectItem[]) => {
    const newValues: Array<string | number | undefined> = value?.map(
      (val) => val?.value
    );
    onChange(newValues);
  };

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      {Boolean(label) && (
        <Typography>
          {label &&
            `${
              label.toString().charAt(0).toUpperCase() +
              label.toString().slice(1)
            }${required ? "*" : ""}`}
        </Typography>
      )}

      <Autocomplete
        multiple
        value={selectedValues}
        onChange={(_, val) => handleChange(val)}
        id="checkboxes-tags-demo"
        options={options ?? []}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label ?? ""}
        limitTags={limitTags}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.label && option.label}
          </li>
        )}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            {...(selectedValues?.length == 0
              ? {
                  placeholder:
                    placeholder &&
                    `${
                      placeholder?.charAt(0).toUpperCase() +
                      placeholder?.slice(1).toLowerCase()
                    }`,
                }
              : {})}
          />
        )}
        {...(isRenderTagsHidden ? { renderTags: () => null } : {})}
        sx={{
          "& .MuiInputBase-root": { borderRadius: "10px", padding: "2px" },
        }}
        loading={isLoading}
      />
      {error && <Typography color="error">{`${error} *`}</Typography>}
    </FormControl>
  );
};

export default MultiSelect;

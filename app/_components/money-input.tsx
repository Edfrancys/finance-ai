import { Input, InputProps } from "@/app/_components/ui/input";
import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

// eslint-disable-next-line react/display-name
export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    );
  },
);

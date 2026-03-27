import React, { memo } from "react";
import { Input } from "@/components/ui/input";
import { useFormContext, Controller } from "react-hook-form";

const TextField = ({ name, label, className = "", ...inputProps }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium">{label}</label>
                    <Input {...field} {...inputProps} className={className} />
                    {fieldState.error && (
                        <span className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                        </span>
                    )}
                </div>
            )}
        />
    );
};

export default memo(TextField);
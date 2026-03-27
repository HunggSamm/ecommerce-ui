import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { increment, decrement, incrementByAmount } from "@/stores/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <h1 className="text-2xl font-bold">Count: {count}</h1>
            <div className="flex space-x-2">
                <Button
                    variant="default"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => dispatch(increment())}
                >
                    +
                </Button>
                <Button
                    variant="default"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </Button>
                <Button
                    variant="default"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    +5
                </Button>
            </div>
        </div>
    );
};

export default Counter;
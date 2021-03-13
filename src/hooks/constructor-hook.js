import { useRef } from "react"

export const useConstructor = (constructor = () => { }) => {
    const isConstructorCalled = useRef(false);
    if (isConstructorCalled.current) return;
    constructor();
    isConstructorCalled.current = true;
}
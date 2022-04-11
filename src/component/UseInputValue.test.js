import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { UseInputValue } from "./UseInputValue";

describe("when rendered", () => {
  it("returns current initial value, inner text", () => {
    const { result } = renderHook(() => UseInputValue("Test String"));
    expect(result.current.value).toEqual("Test String");
  });
});

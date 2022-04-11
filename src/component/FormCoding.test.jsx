import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NameForm from "./FormCoding";

describe("NameForm", () => {
  test("renders NameForm component", () => {
    render(<NameForm />);
    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
  });
  test("input text form", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Awan Pijar" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "awanpijar@gmail.com" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), {
      target: { value: "Bisa pergi umroh" },
    });
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue();
    expect(screen.getByLabelText(/Email/)).toHaveValue();
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)
    ).toHaveValue();
  });
  test("Error Handling", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Awan Pijar 1234" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "awanpijar@gmail.com#@2" },
    });
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue();
    expect(screen.getByLabelText(/Email/)).toHaveValue();
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });
  test("Reset Button", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Awan Pijar" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "awanpijar@gmail.com" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), {
      target: { value: "Bisa pergi umroh" },
    });
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue();
    expect(screen.getByLabelText(/Email/)).toHaveValue();
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)
    ).toHaveValue();
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)
    ).toHaveValue("");
  });
});

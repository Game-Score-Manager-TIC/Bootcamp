"use client"
import FormComponent from "lab3/components/shared/Form/page";
import NavbarComponent from "lab3/components/shared/navbar/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavbarComponent />
      <FormComponent />
    </div>
  );
}

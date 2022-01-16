import { FormEvent } from "react";

export function CarForm() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const form = new FormData(event.target as any);
    const formData = Object.fromEntries(form.entries());

    const result = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.json());

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" type="text" placeholder="Make" />
      <br />

      <input name="model" type="text" placeholder="Model" />
      <br />

      <input name="image" type="text" placeholder="Image" />
      <br />

      <textarea name="description" placeholder="Description" />
      <br />

      <button type="submit">Create</button>
    </form>
  );
}

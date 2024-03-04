import React from "react";
import { ChangeEvent, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ToDo() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function handleValue(event: ChangeEvent<HTMLInputElement>): void {
    setNewItem(event.target.value);
  }

  function handleSubmit(): void {
    if (newItem !== "") setItems((items) => [...items, newItem]);
    setNewItem("");
  }

  function itemUp(index: number): void {
    if (index > 0) {
      const updatedItems = [...items];
      [updatedItems[index], updatedItems[index - 1]] = [
        updatedItems[index - 1],
        updatedItems[index],
      ];
      setItems(updatedItems);
    }
  }

  function itemDown(index: number): void {
    if (index < items.length - 1) {
      const updatedItems = [...items];
      [updatedItems[index], updatedItems[index + 1]] = [
        updatedItems[index + 1],
        updatedItems[index],
      ];
      setItems(updatedItems);
    }
  }

  function itemDelete(index: number): void {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <>
      <Header title="to-do" bgColor="bg-gray" />

      <main className="container mx-auto py-16 px-8 my-44 grid grid-cols-4 gap-3">
        {/* Item Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col items-center justify-center gap-4 bg-midnight py-8 h-96 rounded-l-3xl rounded-r-lg width-full"
        >
          <label className="text-light text-3xl" htmlFor="todoInput">
            enter to-do:
          </label>
          <input
            className="block text-light bg-black outline-none focus:outline-violet-light py-1 px-2"
            id="todoInput"
            value={newItem}
            onChange={handleValue}
            placeholder="Enter a new item..."
          />
        </form>

        {/* Items List */}
        <div className="bg-black flex flex-col rounded-r-3xl rounded-l-lg px-16 col-span-3">
          <ol className="text-light list-decimal py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {items.map((item, index) => {
              return (
                <React.Fragment key={-1986}>
                  <li key={item} className="px-2 text-xl">
                    {item}
                    <button
                      className="text-2xl pl-4 pr-1"
                      onClick={() => itemUp(index)}
                    >
                      ⬆️
                    </button>
                    <button
                      className="text-2xl"
                      onClick={() => itemDown(index)}
                    >
                      ⬇️
                    </button>
                    <button
                      className="text-2xl px-1 text-rose"
                      onClick={() => itemDelete(index)}
                    >
                      ❎
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </div>
      </main>

      <Footer />
    </>
  );
}

import React from "react";
import { ChangeEvent, useState } from "react";
import Header from "../components/Header";

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
    const updatedItems = items.filter((e, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <>
      <Header title="To-Do" />

      <main className="h-[90vh]">
        {/* Item Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col items-center justify-center gap-2 bg-blue py-8"
        >
          <label className="text-light text-3xl" htmlFor="todoInput">
            Enter to-do here:
          </label>
          <input
            className="block"
            id="todoInput"
            value={newItem}
            onChange={handleValue}
            placeholder="Enter a new item..."
          />
          <button
            className="text-light text-3xl bg-rose px-4 py-2 rounded-xl"
            onClick={handleSubmit}
          >
            ENTER
          </button>
        </form>

        {/* Items List */}
        <div className="bg-turqoise flex flex-col items-center min-h-fit ">
          <ol className="text-light list-decimal py-4">
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
                      X
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </div>
      </main>

      <footer>
        <p className="text-light text-center">&copy; Alex Young Practice</p>
      </footer>
    </>
  );
}

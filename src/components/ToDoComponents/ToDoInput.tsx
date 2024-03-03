// import { ChangeEvent, useState } from "react";

// export default function ToDoInput() {
//   const [newItem, setNewItem] = useState("");
//   const [items, setItems] = useState<string[]>([]);

//   function handleValue(event: ChangeEvent<HTMLInputElement>): void {
//     setNewItem(event.target.value);
//   }

//   function handleSubmit(): void {
//     if (newItem !== "") setItems((items) => [...items, newItem]);
//     setNewItem("");
//   }

//   return (
//     <>
//       <label className="text-light text-3xl" htmlFor="todoInput">
//         Enter to-do here:
//       </label>
//       <input
//         className="block"
//         id="todoInput"
//         value={newItem}
//         onChange={handleValue}
//       ></input>
//       <button
//         className="text-light text-3xl bg-rose px-4 py-2 rounded-xl"
//         onClick={handleSubmit}
//       >
//         ENTER
//       </button>
//     </>
//   );
// }

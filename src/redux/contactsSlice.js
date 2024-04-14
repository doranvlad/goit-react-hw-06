import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {},
  selectors: {
    selectContacts: (state) => state.items,
  },
  reducers: {
    addContact: {
      prepare: (newContact) => {
        return {
          payload: {
            id: nanoid(),
            name: newContact.name,
            number: newContact.phone,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;

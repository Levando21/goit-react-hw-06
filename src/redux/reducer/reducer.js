/** @format */

import { ADD_CONTACT, DELETE_CONTACT } from "../contactsSlice/contactsSlice";
import { SET_FILTER } from "../filtersSlice/filtersSlice";

const initialState = {
	contacts: {
		items: [
			{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
			{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
			{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
			{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
		],
	},
	filters: {
		name: "",
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: {
					...state.contacts,
					items: [...state.contacts.items, action.payload],
				},
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: {
					...state.contacts,
					items: state.contacts.items.filter(
						(contact) => contact.id !== action.payload
					),
				},
			};
		case SET_FILTER:
			const filteredContacts = state.contacts.items.filter(
				(contact) =>
					contact.name.toLowerCase().includes(action.payload.toLowerCase()) ||
					contact.number.toLowerCase().includes(action.payload.toLowerCase())
			);
			const filterName =
				filteredContacts.length > 0 ? filteredContacts[0].name : "";
			return {
				...state,
				filters: {
					...state.filters,
					name: filterName,
				},
			};
		default:
			return state;
	}
};

export default reducer;

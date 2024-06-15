/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useId } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import {
	addContact,
	deleteContact,
} from "../src/redux/contactsSlice/contactsSlice";
import { setFilter } from "../src/redux/filtersSlice/filtersSlice";
import "./App.css";

function App() {
	const contacts = useSelector((state) => state.contacts.items);
	const filter = useSelector((state) => state.filters.name);
	const dispatch = useDispatch();
	const newId = useId();

	const handleDelete = (id) => {
		dispatch(deleteContact(id));
	};

	const handleSubmit = (values, { resetForm }) => {
		dispatch(
			addContact({
				id: newId + "-" + Date.now(),
				name: values.name,
				number: values.number,
			})
		);
		resetForm();
	};

	const handleChange = (evt) => {
		dispatch(setFilter(evt.target.value));
	};

	const searchContact = (query) => {
		return contacts.filter(
			(contact) =>
				contact.name.toLowerCase().includes(query.toLowerCase()) ||
				contact.number.toLowerCase().includes(query.toLowerCase())
		);
	};

	const filteredContacts = searchContact(filter);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm
				id={newId}
				handleSubmit={handleSubmit}
			/>
			<SearchBox onChange={handleChange} />
			<ContactList
				contacts={filteredContacts}
				onDelete={handleDelete}
			/>
		</>
	);
}

export default App;
